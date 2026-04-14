import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

const ratingBreakdown = [
  { stars: 5, pct: 78 },
  { stars: 4, pct: 15 },
  { stars: 3, pct: 5 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 1 },
];

const ReviewsSection = ({ reviews, averageRating, totalReviews }: ReviewsSectionProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <Star className="w-5 h-5 fill-secondary text-secondary" />
        {averageRating} · {totalReviews} review{totalReviews !== 1 ? "s" : ""}
      </h2>

      {/* Rating breakdown */}
      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-2 mb-8">
        {ratingBreakdown.map((r) => (
          <div key={r.stars} className="flex items-center gap-3 text-sm">
            <span className="w-8 text-muted-foreground text-right">{r.stars}★</span>
            <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-secondary transition-all"
                style={{ width: `${r.pct}%` }}
              />
            </div>
            <span className="w-10 text-muted-foreground text-right text-xs">{r.pct}%</span>
          </div>
        ))}
      </div>

      {/* Review cards */}
      <div className="grid sm:grid-cols-2 gap-6">
        {reviews.map((review, i) => (
          <motion.div
            key={review.id}
            className="space-y-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-muted overflow-hidden">
                <img src={review.avatar} alt={review.author} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{review.author}</p>
                <p className="text-xs text-muted-foreground">{review.date}</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              {Array.from({ length: review.rating }).map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
