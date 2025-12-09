import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Edit3, Trophy, Flame, Calendar, Clock, Dumbbell, Target, TrendingUp, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "MARCUS STEEL",
    email: "marcus.steel@email.com",
    memberSince: "January 2024",
    plan: "ELITE WARRIOR",
    phone: "+1 (555) 123-4567",
    goal: "Build Muscle Mass",
  });

  const stats = [
    { icon: Flame, label: "Workouts This Month", value: "24", trend: "+12%" },
    { icon: Trophy, label: "Personal Records", value: "8", trend: "+3" },
    { icon: Clock, label: "Total Hours", value: "156", trend: "+18h" },
    { icon: Calendar, label: "Streak Days", value: "32", trend: "Best!" },
  ];

  const achievements = [
    { icon: "🏆", title: "Fitness Champion", description: "Completed 100 workouts", unlocked: true },
    { icon: "💪", title: "Strength Master", description: "Hit 10 PRs in deadlift", unlocked: true },
    { icon: "🔥", title: "Unstoppable", description: "30-day workout streak", unlocked: true },
    { icon: "⚡", title: "Speed Demon", description: "Complete HIIT in under 20min", unlocked: false },
    { icon: "🎯", title: "Goal Crusher", description: "Achieve monthly goal", unlocked: false },
    { icon: "👑", title: "Legend", description: "1 year membership", unlocked: false },
  ];

  const upcomingSessions = [
    { day: "MON", date: "12", title: "Push Day", time: "6:00 AM", trainer: "Mike" },
    { day: "WED", date: "14", title: "Pull Day", time: "6:00 AM", trainer: "Mike" },
    { day: "FRI", date: "16", title: "Leg Day", time: "7:00 AM", trainer: "Sarah" },
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your changes have been saved successfully.",
    });
  };

  return (
    <div className="relative min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      
      <main className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Back Link */}
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

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Profile Card */}
            <ScrollReveal className="lg:col-span-1">
              <motion.div 
                className="bg-card p-5 sm:p-6 md:p-8 border-2 border-muted relative overflow-hidden"
                whileHover={{ borderColor: "hsl(var(--primary))" }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl" />
                
                <div className="relative">
                  {/* Avatar */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 group">
                    <div className="w-full h-full bg-secondary flex items-center justify-center text-3xl sm:text-4xl md:text-5xl font-bebas text-primary border-4 border-primary">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <motion.button 
                      className="absolute inset-0 bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.05 }}
                      data-cursor
                    >
                      <Camera className="text-primary w-6 h-6 sm:w-8 sm:h-8" />
                    </motion.button>
                  </div>

                  {/* Name & Plan */}
                  <h1 className="text-2xl sm:text-2xl md:text-3xl font-bebas text-foreground text-center">
                    {profile.name}
                  </h1>
                  <div className="flex justify-center mt-2">
                    <span className="px-3 sm:px-4 py-0.5 sm:py-1 bg-primary text-primary-foreground font-oswald text-xs sm:text-sm tracking-wider">
                      {profile.plan}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-center mt-3 sm:mt-4 font-oswald text-sm sm:text-base">
                    Member since {profile.memberSince}
                  </p>

                  {/* Edit Button */}
                  <motion.button
                    onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                    className="w-full mt-4 sm:mt-6 px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-foreground text-foreground font-bebas text-base sm:text-lg tracking-wider hover:bg-foreground hover:text-background transition-all duration-200 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-cursor
                  >
                    <Edit3 size={16} className="sm:w-[18px] sm:h-[18px]" />
                    {isEditing ? "SAVE CHANGES" : "EDIT PROFILE"}
                  </motion.button>

                  {/* Profile Details */}
                  <div className="mt-8 space-y-4">
                    <div>
                      <label className="text-muted-foreground font-oswald text-sm">Email</label>
                      {isEditing ? (
                        <input 
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile({...profile, email: e.target.value})}
                          className="w-full mt-1 px-4 py-2 bg-secondary border border-muted text-foreground font-oswald focus:border-primary focus:outline-none transition-colors"
                        />
                      ) : (
                        <p className="text-foreground font-oswald">{profile.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-muted-foreground font-oswald text-sm">Phone</label>
                      {isEditing ? (
                        <input 
                          type="tel"
                          value={profile.phone}
                          onChange={(e) => setProfile({...profile, phone: e.target.value})}
                          className="w-full mt-1 px-4 py-2 bg-secondary border border-muted text-foreground font-oswald focus:border-primary focus:outline-none transition-colors"
                        />
                      ) : (
                        <p className="text-foreground font-oswald">{profile.phone}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-muted-foreground font-oswald text-sm">Fitness Goal</label>
                      {isEditing ? (
                        <select 
                          value={profile.goal}
                          onChange={(e) => setProfile({...profile, goal: e.target.value})}
                          className="w-full mt-1 px-4 py-2 bg-secondary border border-muted text-foreground font-oswald focus:border-primary focus:outline-none transition-colors"
                        >
                          <option>Build Muscle Mass</option>
                          <option>Lose Weight</option>
                          <option>Increase Strength</option>
                          <option>Improve Endurance</option>
                          <option>General Fitness</option>
                        </select>
                      ) : (
                        <p className="text-foreground font-oswald flex items-center gap-2">
                          <Target size={16} className="text-primary" />
                          {profile.goal}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Stats & Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Stats Grid */}
              <ScrollReveal delay={0.1}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="bg-card p-4 sm:p-5 md:p-6 border-2 border-muted hover:border-primary transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      data-cursor
                    >
                      <stat.icon className="text-primary mb-2 sm:mb-3 w-6 h-6 sm:w-7 sm:h-7" />
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bebas text-foreground">{stat.value}</p>
                      <p className="text-muted-foreground font-oswald text-xs sm:text-sm">{stat.label}</p>
                      <div className="flex items-center gap-1 mt-1 sm:mt-2 text-primary">
                        <TrendingUp className="w-3 h-3 sm:w-[14px] sm:h-[14px]" />
                        <span className="font-oswald text-xs sm:text-sm">{stat.trend}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Upcoming Sessions */}
              <ScrollReveal delay={0.2}>
                <div className="bg-card p-5 sm:p-6 md:p-8 border-2 border-muted">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl font-bebas text-foreground flex items-center gap-2">
                      <Calendar className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="hidden sm:inline">UPCOMING SESSIONS</span>
                      <span className="sm:hidden">SESSIONS</span>
                    </h2>
                    <motion.button 
                      className="text-primary font-oswald text-xs sm:text-sm hover:underline"
                      data-cursor
                    >
                      View All
                    </motion.button>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                    {upcomingSessions.map((session, index) => (
                      <motion.div
                        key={index}
                        className="bg-secondary p-4 border border-muted hover:border-primary transition-colors"
                        whileHover={{ x: 5 }}
                        data-cursor
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-center">
                            <p className="text-primary font-oswald text-sm">{session.day}</p>
                            <p className="text-3xl font-bebas text-foreground">{session.date}</p>
                          </div>
                          <div>
                            <p className="font-bebas text-xl text-foreground">{session.title}</p>
                            <p className="text-muted-foreground font-oswald text-sm">{session.time}</p>
                            <p className="text-primary font-oswald text-sm">with {session.trainer}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Achievements */}
              <ScrollReveal delay={0.3}>
                <div className="bg-card p-5 sm:p-6 md:p-8 border-2 border-muted">
                  <h2 className="text-xl sm:text-2xl font-bebas text-foreground flex items-center gap-2 mb-4 sm:mb-6">
                    <Trophy className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                    ACHIEVEMENTS
                  </h2>
                  
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className={`p-4 border-2 transition-all ${
                          achievement.unlocked 
                            ? "border-primary bg-primary/5" 
                            : "border-muted opacity-50 grayscale"
                        }`}
                        whileHover={achievement.unlocked ? { scale: 1.02 } : {}}
                        data-cursor
                      >
                        <div className="text-4xl mb-2">{achievement.icon}</div>
                        <p className="font-bebas text-lg text-foreground">{achievement.title}</p>
                        <p className="text-muted-foreground font-oswald text-sm">{achievement.description}</p>
                        {achievement.unlocked && (
                          <span className="inline-block mt-2 px-2 py-0.5 bg-primary text-primary-foreground font-oswald text-xs">
                            UNLOCKED
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Quick Actions */}
              <ScrollReveal delay={0.4}>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <motion.button
                    className="p-4 sm:p-5 md:p-6 bg-primary text-primary-foreground font-bebas text-lg sm:text-xl tracking-wider brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 flex items-center justify-center gap-2 sm:gap-3"
                    whileHover={{ scale: 1.02 }}
                    data-cursor
                    data-cursor-text="GO"
                  >
                    <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="hidden sm:inline">START WORKOUT</span>
                    <span className="sm:hidden">WORKOUT</span>
                  </motion.button>
                  <motion.button
                    className="p-4 sm:p-5 md:p-6 border-2 border-foreground text-foreground font-bebas text-lg sm:text-xl tracking-wider hover:bg-foreground hover:text-background transition-all duration-200 flex items-center justify-center gap-2 sm:gap-3"
                    whileHover={{ scale: 1.02 }}
                    data-cursor
                    data-cursor-text="BOOK"
                  >
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="hidden sm:inline">BOOK A SESSION</span>
                    <span className="sm:hidden">BOOK</span>
                  </motion.button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;