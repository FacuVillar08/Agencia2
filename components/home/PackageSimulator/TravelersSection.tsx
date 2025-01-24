"use client";

import { Users } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TravelersSectionProps {
  travelers: { adults: string; children: string };
  onTravelersChange: (field: 'adults' | 'children', value: string) => void;
}

const adultsOptions = Array.from({ length: 6 }, (_, i) => i + 1);
const childrenOptions = Array.from({ length: 5 }, (_, i) => i);

export function TravelersSection({ travelers, onTravelersChange }: TravelersSectionProps) {
  return (
    <div className="bg-muted/50 p-4 rounded-lg">
      <h3 className="font-medium mb-4 flex items-center gap-2">
        <Users className="h-4 w-4" />
        Viajeros
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select
          value={travelers.adults}
          onValueChange={(value) => onTravelersChange('adults', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Adultos" />
          </SelectTrigger>
          <SelectContent>
            {adultsOptions.map(num => (
              <SelectItem key={num} value={num.toString()}>{num} Adultos</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={travelers.children}
          onValueChange={(value) => onTravelersChange('children', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Niños" />
          </SelectTrigger>
          <SelectContent>
            {childrenOptions.map(num => (
              <SelectItem key={num} value={num.toString()}>{num} Niños</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}