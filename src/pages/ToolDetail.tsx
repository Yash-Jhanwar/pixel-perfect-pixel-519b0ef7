import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Star, Tag, Clock, Ruler, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PhotoGallery from "@/components/tool-detail/PhotoGallery";
import BookingCard from "@/components/tool-detail/BookingCard";
import OwnerInfo from "@/components/tool-detail/OwnerInfo";
import ReviewsSection from "@/components/tool-detail/ReviewsSection";

// Mock data
const MOCK_TOOL = {
  id: "1",
  title: "DeWalt 20V MAX Cordless Drill/Driver Kit",
  category: "Power Drills",
  description:
    "Professional-grade cordless drill in excellent condition. Comes with two 20V batteries, charger, carrying case, and a set of drill bits. Perfect for home improvement projects, furniture assembly, or deck building. Recently serviced and in great working order.",
  pricePerDay: 15,
  location: "Park Slope, Brooklyn",
  distance: "0.4 mi",
  rating: 4.9,
  totalReviews: 42,
  condition: "Excellent",
  brand: "DeWalt",
  model: "DCD771C2",
  images: [
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1530124566582-a45a7c7ceffc?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1426927308491-6380b6a9936f?w=800&h=600&fit=crop",
  ],
  features: [
    "Two-speed transmission (0-450 / 0-1,500 RPM)",
    "1/2-inch single-sleeve ratcheting chuck",
    "Compact, lightweight design (3.6 lbs)",
    "Includes 2× 20V lithium-ion batteries",
    "Carrying case & drill bit set included",
  ],
  owner: {
    name: "Alex Rivera",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    location: "Park Slope, Brooklyn",
    rating: 4.9,
    totalRentals: 87,
    responseTime: "< 1 hour",
    memberSince: "Jan 2024",
    verified: true,
  },
  reviews: [
    {
      id: "r1",
      author: "Jessica W.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      date: "March 2026",
      text: "Amazing drill! Alex was super helpful and even gave me tips on the project I was working on. The batteries lasted the entire weekend.",
    },
    {
      id: "r2",
      author: "Marcus T.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      date: "February 2026",
      text: "Perfect condition, easy pickup and drop-off. Saved me from buying a drill I'd only use once. Will definitely rent again.",
    },
    {
      id: "r3",
      author: "Emily S.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      date: "February 2026",
      text: "Quick and easy process. Alex was responsive and flexible with pickup times. Drill worked perfectly for hanging shelves.",
    },
    {
      id: "r4",
      author: "David K.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 4,
      date: "January 2026",
      text: "Great tool, arrived with everything described. Only thing was one battery had less charge than expected, but still got the job done!",
    },
  ],
};

const ToolDetail = () => {
  const { id } = useParams();
  const tool = MOCK_TOOL; // In production, fetch by id

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to search
          </Link>

          <div className="grid lg:grid-cols-[1fr_380px] gap-10">
            {/* Left column */}
            <div className="space-y-10">
              {/* Photo gallery */}
              <PhotoGallery images={tool.images} title={tool.title} />

              {/* Title & meta */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground font-medium text-xs">
                    {tool.category}
                  </Badge>
                  <Badge variant="outline" className="text-xs font-normal">
                    {tool.condition} condition
                  </Badge>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  {tool.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-secondary text-secondary" />
                    <span className="font-medium text-foreground">{tool.rating}</span>
                    <span>({tool.totalReviews} reviews)</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {tool.location} · {tool.distance} away
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">About this tool</h2>
                <p className="text-muted-foreground leading-relaxed">{tool.description}</p>
              </div>

              {/* Specs */}
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-4">Details</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                    <Tag className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Brand</p>
                      <p className="text-sm font-medium text-foreground">{tool.brand}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                    <Ruler className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Model</p>
                      <p className="text-sm font-medium text-foreground">{tool.model}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                    <Clock className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Min rental</p>
                      <p className="text-sm font-medium text-foreground">1 day</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-4">What's included</h2>
                <ul className="space-y-2.5">
                  {tool.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Owner info (mobile) */}
              <div className="lg:hidden">
                <h2 className="text-lg font-semibold text-foreground mb-4">Owned by</h2>
                <OwnerInfo owner={tool.owner} />
              </div>

              {/* Reviews */}
              <ReviewsSection
                reviews={tool.reviews}
                averageRating={tool.rating}
                totalReviews={tool.totalReviews}
              />
            </div>

            {/* Right column (sticky sidebar) */}
            <div className="hidden lg:block space-y-6">
              <BookingCard pricePerDay={tool.pricePerDay} toolTitle={tool.title} />
              <OwnerInfo owner={tool.owner} />
            </div>
          </div>

          {/* Mobile booking bar */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-40">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xl font-bold text-foreground">${tool.pricePerDay}</span>
                <span className="text-muted-foreground text-sm"> / day</span>
              </div>
              <BookingMobileButton />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Simple mobile booking trigger — in production this would open a sheet/modal
const BookingMobileButton = () => (
  <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm">
    Check Availability
  </button>
);

export default ToolDetail;
