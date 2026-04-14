import { Shield, CreditCard, MessageSquare, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: UserCheck,
    title: "Verified Users",
    description: "Every user is ID-verified. We check government IDs and cross-reference profiles for your safety.",
  },
  {
    icon: Shield,
    title: "Damage Protection",
    description: "Every rental includes basic protection. Owners are covered if something goes wrong.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Payments are held in escrow until the rental is complete. No cash exchanges needed.",
  },
  {
    icon: MessageSquare,
    title: "In-App Messaging",
    description: "Communicate directly with renters and owners through our secure messaging system.",
  },
];

const TrustSafety = () => {
  return (
    <section id="trust" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <span className="text-sm font-medium text-secondary uppercase tracking-wider">Built on Trust</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
              Your safety is our priority
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              We've built multiple layers of protection so you can rent and lend
              with confidence. Every transaction is backed by our guarantee.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 via-accent to-secondary/10 flex items-center justify-center">
              <div className="w-3/4 space-y-4">
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20" />
                    <div>
                      <div className="h-3 w-24 bg-foreground/10 rounded" />
                      <div className="h-2 w-16 bg-foreground/5 rounded mt-1.5" />
                    </div>
                    <span className="ml-auto text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">Verified ✓</span>
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(n => (
                      <div key={n} className="w-4 h-4 rounded-sm bg-secondary/80" />
                    ))}
                    <span className="text-xs text-muted-foreground ml-2">5.0 (42 rentals)</span>
                  </div>
                </div>
                <div className="bg-card rounded-2xl p-4 shadow-lg border border-border flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Protected Rental</p>
                    <p className="text-xs text-muted-foreground">$500 damage coverage included</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSafety;
