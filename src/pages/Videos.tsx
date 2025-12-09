import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Play, ExternalLink, Loader2, X } from "lucide-react";
import { Link } from "react-router-dom";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

// YouTube API Configuration
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || "YOUR_YOUTUBE_API_KEY";
const YOUTUBE_CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || "YOUR_CHANNEL_ID";

interface YouTubeVideo {
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
    publishedAt: string;
    channelTitle: string;
    resourceId: {
      videoId: string;
    };
  };
}

interface YouTubeResponse {
  items: YouTubeVideo[];
}

const fetchYouTubeVideos = async (): Promise<YouTubeVideo[]> => {
  // First, get the uploads playlist ID from the channel
  const channelResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
  );

  if (!channelResponse.ok) {
    throw new Error("Failed to fetch channel information");
  }

  const channelData = await channelResponse.json();
  const uploadsPlaylistId = channelData.items[0]?.contentDetails?.relatedPlaylists?.uploads;

  if (!uploadsPlaylistId) {
    throw new Error("Could not find uploads playlist");
  }

  // Then fetch videos from the uploads playlist
  const videosResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=10&key=${YOUTUBE_API_KEY}`
  );

  if (!videosResponse.ok) {
    throw new Error("Failed to fetch videos");
  }

  const videosData: { items: YouTubeVideo[] } = await videosResponse.json();
  return videosData.items;
};

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);

  const { data: videos, isLoading, error } = useQuery({
    queryKey: ["youtube-videos"],
    queryFn: fetchYouTubeVideos,
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="relative min-h-screen bg-background">
      <CustomCursor />
      <Navbar />

      <main className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <ScrollReveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 sm:mb-8"
              data-cursor
            >
              <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
              <span className="font-oswald text-sm sm:text-base">Back to Home</span>
            </Link>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 border border-primary text-primary font-oswald text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6">
                Our Content
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bebas text-foreground">
                THE <span className="text-primary glitch">VIDEOS</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-oswald max-w-2xl mx-auto mt-4 sm:mt-6 px-4 sm:px-0">
                Watch our latest training videos, workout tutorials, and fitness tips
                from Fitness Cube.
              </p>
            </div>
          </ScrollReveal>

          {/* Loading State */}
          {isLoading && (
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                <p className="text-muted-foreground font-oswald">Loading videos...</p>
              </div>
            </ScrollReveal>
          )}

          {/* Error State */}
          {error && (
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center py-20">
                <p className="text-destructive font-oswald text-lg mb-4">
                  Failed to load videos
                </p>
                <p className="text-muted-foreground font-oswald text-sm text-center max-w-md">
                  {error instanceof Error ? error.message : "An unknown error occurred"}
                </p>
                <p className="text-muted-foreground font-oswald text-xs mt-4 text-center max-w-md">
                  Please check your YouTube API key and channel ID in the environment variables.
                </p>
              </div>
            </ScrollReveal>
          )}

          {/* Videos Grid */}
          {videos && videos.length > 0 && (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
              layout
            >
              <AnimatePresence mode="popLayout">
                {videos.map((video, index) => (
                  <motion.div
                    key={video.snippet.resourceId.videoId}
                    layoutId={`video-${video.snippet.resourceId.videoId}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.05 }}
                    className="relative aspect-video overflow-hidden group cursor-pointer"
                    onClick={() => setSelectedVideo(video)}
                    data-cursor
                    data-cursor-text="PLAY"
                  >
                    <img
                      src={video.snippet.thumbnails.high.url}
                      alt={video.snippet.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/90 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play size={32} className="sm:w-10 sm:h-10 text-primary-foreground ml-1" fill="currentColor" />
                      </motion.div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-primary font-oswald text-xs tracking-wider uppercase">
                        {formatDate(video.snippet.publishedAt)}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bebas text-foreground mt-1 line-clamp-2">
                        {video.snippet.title}
                      </h3>
                    </div>
                    <motion.div
                      className="absolute inset-0 border-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* No Videos State */}
          {videos && videos.length === 0 && (
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center py-20">
                <p className="text-muted-foreground font-oswald text-lg">
                  No videos found
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </main>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.button
              className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 text-foreground hover:text-primary transition-colors z-10"
              whileHover={{ scale: 1.1, rotate: 90 }}
              onClick={() => setSelectedVideo(null)}
              data-cursor
            >
              <X size={28} className="sm:w-10 sm:h-10" />
            </motion.button>

            <motion.div
              layoutId={`video-${selectedVideo.snippet.resourceId.videoId}`}
              className="relative max-w-5xl w-full aspect-video mx-4 sm:mx-0"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.snippet.resourceId.videoId}?autoplay=1`}
                title={selectedVideo.snippet.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute -bottom-16 left-0 right-0 p-4 sm:p-6 bg-background">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-foreground mb-2">
                  {selectedVideo.snippet.title}
                </h3>
                <p className="text-sm text-muted-foreground font-oswald mb-4 line-clamp-3">
                  {selectedVideo.snippet.description}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-primary font-oswald text-xs tracking-wider uppercase">
                    {formatDate(selectedVideo.snippet.publishedAt)}
                  </span>
                  <a
                    href={`https://www.youtube.com/watch?v=${selectedVideo.snippet.resourceId.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-oswald text-sm transition-colors"
                    data-cursor
                    data-cursor-text="OPEN"
                  >
                    Watch on YouTube
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Videos;

