import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Brooklyn, NY",
    text: "Saved $300 by renting a pressure washer instead of buying one. My neighbor was super friendly and even showed me how to use it!",
    rating: 5,
  },
  {
    name: "James T.",
    location: "Austin, TX",
    text: "I list my tools when I'm not using them and make an extra $200/month. It's the easiest side income I've ever had.",
    rating: 5,
  },
  {
    name: "Maria L.",
    location: "Portland, OR",
    text: "The verification system gave me peace of mind. Everything was seamless — from booking to pickup to return. Highly recommend!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">Community</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Loved by neighbors everywhere
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
