import { MapPin, Star, Shield, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OwnerInfoProps {
  owner: {
    name: string;
    avatar: string;
    location: string;
    rating: number;
    totalRentals: number;
    responseTime: string;
    memberSince: string;
    verified: boolean;
  };
}

const OwnerInfo = ({ owner }: OwnerInfoProps) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="flex items-start gap-4 mb-5">
        <div className="relative">
          <div className="w-14 h-14 rounded-full bg-muted overflow-hidden">
            <img src={owner.avatar} alt={owner.name} className="w-full h-full object-cover" />
          </div>
          {owner.verified && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
              <Shield className="w-3 h-3 text-primary-foreground" />
            </div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">{owner.name}</h3>
          <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
              {owner.rating}
            </span>
            <span>·</span>
            <span>{owner.totalRentals} rentals</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-5 text-sm">
        <div>
          <p className="text-muted-foreground text-xs">Location</p>
          <p className="text-foreground flex items-center gap-1 mt-0.5">
            <MapPin className="w-3.5 h-3.5" />
            {owner.location}
          </p>
        </div>
        <div>
          <p className="text-muted-foreground text-xs">Response time</p>
          <p className="text-foreground mt-0.5">{owner.responseTime}</p>
        </div>
        <div>
          <p className="text-muted-foreground text-xs">Member since</p>
          <p className="text-foreground mt-0.5">{owner.memberSince}</p>
        </div>
        <div>
          <p className="text-muted-foreground text-xs">Verified</p>
          <p className="text-primary font-medium mt-0.5">{owner.verified ? "ID Verified ✓" : "Pending"}</p>
        </div>
      </div>

      <Button variant="outline" className="w-full gap-2">
        <MessageSquare className="w-4 h-4" />
        Message {owner.name.split(" ")[0]}
      </Button>
    </div>
  );
};

export default OwnerInfo;
