import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Briefcase, FolderKanban, Clock3, BadgeCheck } from "lucide-react";

// Counter component
const Counter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO at TechCorp Inc.",
      quote:
        "Samuel is an exceptional developer who consistently delivers high-quality work. Their ability to tackle complex problems and mentor junior developers made a significant impact on our team.",
      initial: "S",
      color: "from-cyan-400 to-purple-500",
    },
    {
      id: 2,
      name: "Michael Munyendo",
      role: "Product Manager at StartupXYZ",
      quote:
        "Working with Samuel Seneni was a pleasure. They brought innovative solutions to our product and helped us scale our infrastructure to handle millions of users. Highly recommend!",
      initial: "M",
      color: "from-cyan-400 to-purple-500",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Design Lead at Digital Agency Co.",
      quote:
        "Samuel Munialo has a rare combination of technical expertise and great communication skills. They can explain complex concepts clearly and always deliver projects on time.",
      initial: "E",
      color: "from-cyan-400 to-purple-500",
    },
  ];

 const stats = [
  { 
    id: 1, 
    value: 3, 
    suffix: "+", 
    label: "Happy Clients", 
    color: "from-purple-400 to-pink-400",
    icon: <Briefcase size={20} />
  },
  { 
    id: 2, 
    value: 15, 
    suffix: "+", 
    label: "Projects Completed", 
    color: "from-blue-400 to-cyan-400",
    icon: <FolderKanban size={20} />
  },
  { 
    id: 3, 
    value: 2, 
    suffix: "+", 
    label: "Years Experience", 
    color: "from-green-400 to-emerald-400",
    icon: <Clock3 size={20} />
  },
  { 
    id: 4, 
    value: 100, 
    suffix: "%", 
    label: "Client Satisfaction", 
    color: "from-orange-400 to-red-400",
    icon: <BadgeCheck size={20} />
  }
];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 px-6 md:px-10 bg-[#030712] text-white"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-20 left-1/4 w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-5">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
            What People Say
          </h2>

          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Feedback from colleagues and clients I've worked with
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-6 py-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:border-cyan-400/20 transition-all duration-300"
            >
              <div className="text-cyan-400 text-5xl font-bold leading-none mb-5">
                ”
              </div>

              <p className="text-white/80 text-[15px] leading-8 italic min-h-[140px] border-b border-white/8 pb-6">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 pt-5">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white text-sm font-medium shadow-lg`}
                >
                  {testimonial.initial}
                </div>

                <div>
                  <h4 className="text-white text-base font-medium leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-white/50 text-sm leading-tight mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional stats section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div
                className={`text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}
              >
                <Counter end={stat.value} duration={2.2} suffix={stat.suffix} />
              </div>
              <p className="text-white/55 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;