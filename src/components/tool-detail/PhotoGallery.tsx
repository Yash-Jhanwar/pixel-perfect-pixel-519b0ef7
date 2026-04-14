import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhotoGalleryProps {
  images: string[];
  title: string;
}

const PhotoGallery = ({ images, title }: PhotoGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((i) => (i + 1) % images.length);
  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="space-y-3">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted group">
        <img
          src={images[activeIndex]}
          alt={`${title} - photo ${activeIndex + 1}`}
          className="w-full h-full object-cover"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    i === activeIndex ? "bg-background w-5" : "bg-background/50"
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "w-20 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all",
                i === activeIndex ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
              )}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
