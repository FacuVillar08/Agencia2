"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Plane, Hotel, Package, Calendar as CalendarIcon, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { cities } from "@/data/mockData";
import { Loader } from "@/components/ui/loader";

interface SearchSectionProps {
  variant?: "home" | "results";
}

export default function SearchSection({ variant = "home" }: SearchSectionProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("flights");
  const [searchForm, setSearchForm] = useState({
    origin: "",
    destination: "",
    checkIn: undefined as Date | undefined,
    checkOut: undefined as Date | undefined,
    duration: "",
    adults: "2",
    children: "0",
    rooms: "1"
  });

  const handleSearch = async () => {
    setIsLoading(true);
    
    const params = new URLSearchParams();
    if (searchForm.origin) params.append("origin", searchForm.origin);
    if (searchForm.destination) params.append("destination", searchForm.destination);
    if (searchForm.checkIn) params.append("checkIn", format(searchForm.checkIn, "yyyy-MM-dd"));
    if (searchForm.checkOut) params.append("checkOut", format(searchForm.checkOut, "yyyy-MM-dd"));
    if (searchForm.duration) params.append("duration", searchForm.duration);
    if (searchForm.adults) params.append("adults", searchForm.adults);
    if (searchForm.children) params.append("children", searchForm.children);
    if (searchForm.rooms) params.append("rooms", searchForm.rooms);

    await new Promise(resolve => setTimeout(resolve, 1500));

    const path = activeTab === "flights" ? "/flights" :
                activeTab === "hotels" ? "/hotels" : "/packages";
    
    router.push(`${path}?${params.toString()}`);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader type={activeTab as "flights" | "hotels" | "packages"} />}
      <div className={cn(
        "w-full max-w-4xl mx-auto px-4 md:px-6",
        variant === "home" ? "bg-white/95" : "bg-white/90",
        "p-6 rounded-lg shadow-lg backdrop-blur-sm"
      )}>
        <Tabs value={activeTab} className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="flights" className="flex items-center gap-2">
              <Plane className="h-4 w-4" />
              Vuelos
            </TabsTrigger>
            <TabsTrigger value="hotels" className="flex items-center gap-2">
              <Hotel className="h-4 w-4" />
              Hoteles
            </TabsTrigger>
            <TabsTrigger value="packages" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Paquetes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="flights">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Select 
                  value={searchForm.origin}
                  onValueChange={(value) => setSearchForm(prev => ({ ...prev, origin: value }))}
                >
                  <SelectTrigger className="bg-white text-foreground">
                    <SelectValue placeholder="Origen" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select 
                  value={searchForm.destination}
                  onValueChange={(value) => setSearchForm(prev => ({ ...prev, destination: value }))}
                >
                  <SelectTrigger className="bg-white text-foreground">
                    <SelectValue placeholder="Destino" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex gap-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "flex-1 justify-start text-left font-normal",
                          "bg-white text-foreground hover:bg-gray-50",
                          !searchForm.checkIn && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {searchForm.checkIn ? (
                          format(searchForm.checkIn, "PPP", { locale: es })
                        ) : (
                          <span>Fecha</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={searchForm.checkIn}
                        onSelect={(date) => setSearchForm(prev => ({ ...prev, checkIn: date }))}
                        initialFocus
                        locale={es}
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>

                  <Button className="bg-primary" onClick={handleSearch}>
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hotels">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select 
                  value={searchForm.destination}
                  onValueChange={(value) => setSearchForm(prev => ({ ...prev, destination: value }))}
                >
                  <SelectTrigger className="bg-white text-foreground">
                    <SelectValue placeholder="¿A dónde vas?" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          "bg-white text-foreground hover:bg-gray-50",
                          !searchForm.checkIn && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {searchForm.checkIn ? (
                          format(searchForm.checkIn, "PPP", { locale: es })
                        ) : (
                          <span>Check-in</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={searchForm.checkIn}
                        onSelect={(date) => setSearchForm(prev => ({ ...prev, checkIn: date }))}
                        initialFocus
                        locale={es}
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          "bg-white text-foreground hover:bg-gray-50",
                          !searchForm.checkOut && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {searchForm.checkOut ? (
                          format(searchForm.checkOut, "PPP", { locale: es })
                        ) : (
                          <span>Check-out</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={searchForm.checkOut}
                        onSelect={(date) => setSearchForm(prev => ({ ...prev, checkOut: date }))}
                        initialFocus
                        locale={es}
                        disabled={(date) => date < new Date() || (searchForm.checkIn && date <= searchForm.checkIn)}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex-1 justify-start text-left font-normal bg-white"
                    >
                      <Users className="mr-2 h-4 w-4" />
                      {`${searchForm.adults} adultos · ${searchForm.children} niños · ${searchForm.rooms} habitaciones`}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Adultos</span>
                        <Select
                          value={searchForm.adults}
                          onValueChange={(value) => setSearchForm(prev => ({ ...prev, adults: value }))}
                        >
                          <SelectTrigger className="w-24">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1,2,3,4,5,6].map(num => (
                              <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Niños</span>
                        <Select
                          value={searchForm.children}
                          onValueChange={(value) => setSearchForm(prev => ({ ...prev, children: value }))}
                        >
                          <SelectTrigger className="w-24">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[0,1,2,3,4].map(num => (
                              <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Habitaciones</span>
                        <Select
                          value={searchForm.rooms}
                          onValueChange={(value) => setSearchForm(prev => ({ ...prev, rooms: value }))}
                        >
                          <SelectTrigger className="w-24">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1,2,3,4].map(num => (
                              <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                <Button className="bg-primary" onClick={handleSearch}>
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="packages">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Select 
                  value={searchForm.destination}
                  onValueChange={(value) => setSearchForm(prev => ({ ...prev, destination: value }))}
                >
                  <SelectTrigger className="bg-white text-foreground">
                    <SelectValue placeholder="Destino" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        "bg-white text-foreground hover:bg-gray-50",
                        !searchForm.checkIn && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {searchForm.checkIn ? (
                        format(searchForm.checkIn, "PPP", { locale: es })
                      ) : (
                        <span>Fecha de viaje</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={searchForm.checkIn}
                      onSelect={(date) => setSearchForm(prev => ({ ...prev, checkIn: date }))}
                      initialFocus
                      locale={es}
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>

                <Select 
                  value={searchForm.duration}
                  onValueChange={(value) => setSearchForm(prev => ({ ...prev, duration: value }))}
                >
                  <SelectTrigger className="bg-white text-foreground">
                    <SelectValue placeholder="Duración" />
                  </SelectTrigger>
                  <SelectContent>
                    {["3-5 días", "6-8 días", "9-12 días", "13-15 días"].map((duration) => (
                      <SelectItem key={duration} value={duration}>{duration}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex-1 justify-start text-left font-normal bg-white"
                    >
                      <Users className="mr-2 h-4 w-4" />
                      {`${searchForm.adults} adultos · ${searchForm.children} niños`}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Adultos</span>
                        <Select
                          value={searchForm.adults}
                          onValueChange={(value) => setSearchForm(prev => ({ ...prev, adults: value }))}
                        >
                          <SelectTrigger className="w-24">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1,2,3,4,5,6].map(num => (
                              <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Niños</span>
                        <Select
                          value={searchForm.children}
                          onValueChange={(value) => setSearchForm(prev => ({ ...prev, children: value }))}
                        >
                          <SelectTrigger className="w-24">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[0,1,2,3,4].map(num => (
                              <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                <Button className="bg-primary" onClick={handleSearch}>
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}