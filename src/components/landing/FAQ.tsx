import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does pricing work?",
    a: "Tool owners set their own daily rental rates. You'll see the price upfront before booking. A small service fee is added to cover payment processing and protection.",
  },
  {
    q: "What if a tool is damaged during my rental?",
    a: "Every rental includes basic damage protection. If something goes wrong, report it through the app within 24 hours and our team will help resolve it.",
  },
  {
    q: "How do I know the tools are in good condition?",
    a: "Owners provide photos and condition descriptions. Renters also leave reviews after each rental, so you can check a tool's track record before booking.",
  },
  {
    q: "Is my personal information safe?",
    a: "Absolutely. We use bank-level encryption for all data. Your personal details are never shared with other users without your consent.",
  },
  {
    q: "Can I list my own tools for rent?",
    a: "Yes! Sign up, add your tools with photos and descriptions, set your rates, and start earning. It takes less than 5 minutes to list a tool.",
  },
  {
    q: "What areas does RentKart serve?",
    a: "We're currently available in major US metro areas and expanding rapidly. Enter your ZIP code to check availability in your neighborhood.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">Support</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Frequently asked questions
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
