import { useState } from "react";
import { format, addDays, differenceInDays } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { DateRange } from "react-day-picker";

interface BookingCardProps {
  pricePerDay: number;
  toolTitle: string;
}

const BookingCard = ({ pricePerDay, toolTitle }: BookingCardProps) => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: addDays(new Date(), 1),
    to: addDays(new Date(), 3),
  });

  const days = dateRange?.from && dateRange?.to
    ? differenceInDays(dateRange.to, dateRange.from) + 1
    : 0;
  const subtotal = days * pricePerDay;
  const serviceFee = Math.round(subtotal * 0.12);
  const protection = 5;
  const total = subtotal + serviceFee + protection;

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm sticky top-24">
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-3xl font-bold text-foreground">${pricePerDay}</span>
        <span className="text-muted-foreground text-sm">/ day</span>
      </div>

      <div className="border border-border rounded-xl overflow-hidden mb-4">
        <Popover>
          <PopoverTrigger asChild>
            <button className="w-full p-3 text-left hover:bg-muted/50 transition-colors">
              <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">Rental Period</p>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                {dateRange?.from ? (
                  dateRange.to ? (
                    <span>{format(dateRange.from, "MMM d")} — {format(dateRange.to, "MMM d, yyyy")}</span>
                  ) : (
                    <span>{format(dateRange.from, "MMM d, yyyy")}</span>
                  )
                ) : (
                  <span className="text-muted-foreground">Select dates</span>
                )}
              </div>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
              numberOfMonths={1}
              disabled={(date) => date < new Date()}
              initialFocus
              className={cn("p-3 pointer-events-auto")}
            />
          </PopoverContent>
        </Popover>
      </div>

      <Button className="w-full h-12 text-base font-semibold mb-4" disabled={days === 0}>
        {days > 0 ? "Request to Book" : "Select Dates"}
      </Button>

      {days > 0 && (
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">${pricePerDay} × {days} day{days > 1 ? "s" : ""}</span>
            <span className="text-foreground">${subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Service fee</span>
            <span className="text-foreground">${serviceFee}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Damage protection</span>
            <span className="text-foreground">${protection}</span>
          </div>
          <hr className="border-border" />
          <div className="flex justify-between font-semibold text-foreground">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      )}

      <p className="text-xs text-muted-foreground text-center mt-4">
        You won't be charged yet
      </p>
    </div>
  );
};

export default BookingCard;
