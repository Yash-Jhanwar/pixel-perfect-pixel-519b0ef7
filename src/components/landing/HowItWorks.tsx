import { Search, CalendarCheck, Handshake, Star } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    title: "Find a Tool",
    description: "Search by name, category, or browse what's available in your neighborhood.",
  },
  {
    icon: CalendarCheck,
    title: "Book & Pay",
    description: "Select your dates, pay securely through the platform, and confirm your rental.",
  },
  {
    icon: Handshake,
    title: "Pick Up & Use",
    description: "Meet your neighbor, pick up the tool, and get your project done.",
  },
  {
    icon: Star,
    title: "Return & Review",
    description: "Return the tool on time and leave a review to help the community.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">Simple Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
            How RentKart works
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            From search to return, we make tool rental effortless and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="relative text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-6xl font-bold text-primary/5">
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
