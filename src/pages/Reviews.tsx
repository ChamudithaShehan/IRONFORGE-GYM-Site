import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Filter, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  review: string;
  plan: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Marcus Steel",
    rating: 5,
    date: "2 weeks ago",
    review: "Fitness Cube has completely transformed my fitness journey. The trainers are world-class, the equipment is top-notch, and the community is incredibly supportive. Best investment I've made!",
    plan: "ELITE",
    verified: true,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 5,
    date: "1 month ago",
    review: "The 24/7 access is a game-changer for my schedule. The facilities are always clean, and the staff is friendly and professional. Highly recommend!",
    plan: "WARRIOR",
    verified: true,
  },
  {
    id: 3,
    name: "David Chen",
    rating: 5,
    date: "3 weeks ago",
    review: "I've been to many gyms, but Fitness Cube stands out. The personal training sessions have helped me break through plateaus I've been stuck on for months.",
    plan: "ELITE",
    verified: true,
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    rating: 4,
    date: "1 week ago",
    review: "Great gym with excellent facilities. The group classes are intense and motivating. Only wish there were more evening class options.",
    plan: "WARRIOR",
    verified: true,
  },
  {
    id: 5,
    name: "James Wilson",
    rating: 5,
    date: "2 months ago",
    review: "The recovery zone is amazing! Sauna and cold plunge after a tough workout is exactly what I needed. This place has everything.",
    plan: "ELITE",
    verified: true,
  },
  {
    id: 6,
    name: "Lisa Thompson",
    rating: 5,
    date: "3 weeks ago",
    review: "As a beginner, I was nervous about joining a gym. The staff made me feel welcome and the starter plan is perfect for getting into fitness.",
    plan: "STARTER",
    verified: true,
  },
  {
    id: 7,
    name: "Michael Brown",
    rating: 4,
    date: "1 month ago",
    review: "Solid gym with good equipment variety. The nutrition coaching has been helpful. Would love to see more parking spaces during peak hours.",
    plan: "WARRIOR",
    verified: true,
  },
  {
    id: 8,
    name: "Amanda Lee",
    rating: 5,
    date: "2 weeks ago",
    review: "Best gym in the city! The trainers really know their stuff and push you to be your best. I've seen incredible results in just 3 months.",
    plan: "ELITE",
    verified: true,
  },
];

const Reviews = () => {
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    review: "",
  });

  const filteredReviews = filterRating
    ? reviews.filter((review) => review.rating === filterRating)
    : reviews;

  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  const ratingCounts = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter((r) => r.rating === rating).length,
    percentage: (reviews.filter((r) => r.rating === rating).length / reviews.length) * 100,
  }));

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your review! It will be reviewed before being published.");
    setNewReview({ name: "", rating: 5, review: "" });
    setShowForm(false);
  };

  const StarRating = ({ rating, size = "w-4 h-4" }: { rating: number; size?: string }) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} ${star <= rating ? "fill-primary text-primary" : "text-muted-foreground"
              }`}
          />
        ))}
      </div>
    );
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
                Member Reviews
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bebas text-foreground mb-4 sm:mb-6">
                WHAT OUR <span className="text-primary glitch">WARRIORS</span> SAY
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-oswald max-w-2xl mx-auto px-4 sm:px-0">
                Real stories from real members who have transformed their lives at Fitness Cube
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-10">
            {/* Sidebar - Stats and Filters */}
            <ScrollReveal delay={0.2} className="lg:col-span-1">
              <div className="bg-card border-2 border-border p-6 sm:p-8 mb-6 sm:mb-8 lg:mb-0">
                {/* Average Rating */}
                <div className="text-center mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-border">
                  <div className="text-5xl sm:text-6xl font-bebas text-foreground mb-2">
                    {averageRating.toFixed(1)}
                  </div>
                  <StarRating rating={Math.round(averageRating)} size="w-5 h-5 sm:w-6 sm:h-6" />
                  <p className="text-muted-foreground font-oswald text-xs sm:text-sm mt-2">
                    Based on {reviews.length} reviews
                  </p>
                </div>

                {/* Rating Breakdown */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="font-bebas text-lg sm:text-xl text-foreground mb-4 flex items-center gap-2">
                    <Filter size={18} />
                    Filter by Rating
                  </h3>
                  <div className="space-y-3">
                    {ratingCounts.map(({ rating, count, percentage }) => (
                      <button
                        key={rating}
                        onClick={() => setFilterRating(filterRating === rating ? null : rating)}
                        className={`w-full flex items-center justify-between p-2 transition-colors ${filterRating === rating
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-secondary"
                          }`}
                        data-cursor
                      >
                        <div className="flex items-center gap-2">
                          <StarRating rating={rating} size="w-3 h-3" />
                          <span className="font-oswald text-xs sm:text-sm">{rating}</span>
                        </div>
                        <span className="font-oswald text-xs sm:text-sm">{count}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Write Review Button */}
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="w-full py-3 sm:py-4 bg-primary text-primary-foreground font-bebas text-base sm:text-lg tracking-wider brutal-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 flex items-center justify-center gap-2"
                  data-cursor
                >
                  <MessageSquare size={18} />
                  {showForm ? "CANCEL" : "WRITE REVIEW"}
                </button>
              </div>
            </ScrollReveal>

            {/* Reviews Grid */}
            <div className="lg:col-span-3">
              {/* Review Form */}
              {showForm && (
                <ScrollReveal>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card border-2 border-border p-6 sm:p-8 mb-6 sm:mb-8"
                  >
                    <h3 className="font-bebas text-2xl sm:text-3xl text-foreground mb-4 sm:mb-6">
                      SHARE YOUR EXPERIENCE
                    </h3>
                    <form onSubmit={handleSubmitReview} className="space-y-4 sm:space-y-6">
                      <div>
                        <label className="block font-oswald text-sm sm:text-base text-foreground mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={newReview.name}
                          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                          className="w-full px-4 py-3 bg-background border-2 border-border text-foreground font-oswald focus:outline-none focus:border-primary"
                          required
                        />
                      </div>
                      <div>
                        <label className="block font-oswald text-sm sm:text-base text-foreground mb-2">
                          Rating
                        </label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((rating) => (
                            <button
                              key={rating}
                              type="button"
                              onClick={() => setNewReview({ ...newReview, rating })}
                              className="focus:outline-none"
                            >
                              <Star
                                className={`w-6 h-6 sm:w-8 sm:h-8 ${rating <= newReview.rating
                                    ? "fill-primary text-primary"
                                    : "text-muted-foreground"
                                  } transition-colors`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block font-oswald text-sm sm:text-base text-foreground mb-2">
                          Your Review
                        </label>
                        <textarea
                          value={newReview.review}
                          onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                          rows={5}
                          className="w-full px-4 py-3 bg-background border-2 border-border text-foreground font-oswald focus:outline-none focus:border-primary resize-none"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-bebas text-base sm:text-lg tracking-wider brutal-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
                        data-cursor
                      >
                        SUBMIT REVIEW
                      </button>
                    </form>
                  </motion.div>
                </ScrollReveal>
              )}

              {/* Reviews List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {filteredReviews.map((review, index) => (
                  <ScrollReveal key={review.id} delay={index * 0.1}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-card border-2 border-border p-5 sm:p-6 md:p-8 h-full hover:border-primary transition-colors duration-300"
                      data-cursor
                    >
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1 sm:mb-2">
                            <h4 className="font-bebas text-lg sm:text-xl text-foreground">
                              {review.name}
                            </h4>
                            {review.verified && (
                              <span className="text-xs font-oswald text-primary bg-primary/10 px-2 py-0.5">
                                VERIFIED
                              </span>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm font-oswald text-muted-foreground">
                            {review.plan} Member • {review.date}
                          </p>
                        </div>
                      </div>
                      <div className="mb-3 sm:mb-4">
                        <StarRating rating={review.rating} size="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <p className="text-xs sm:text-sm md:text-base font-oswald text-muted-foreground leading-relaxed">
                        {review.review}
                      </p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reviews;

