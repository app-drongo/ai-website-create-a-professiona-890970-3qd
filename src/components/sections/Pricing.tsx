import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Calendar, Users, Wifi, Car, Coffee, Utensils } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Pricing() {
  const apartments = [
    {
      name: 'Downtown Studio',
      description: 'Modern studio in the heart of the city center',
      price: '$89',
      period: '/night',
      badge: 'Most Booked',
      features: [
        '1 guest maximum',
        'City center location',
        'High-speed WiFi',
        'Full kitchenette',
        'Smart TV with streaming',
        '24/7 self check-in',
        'Weekly cleaning included',
      ],
      amenities: [
        { icon: Users, label: '1 guest' },
        { icon: Wifi, label: 'WiFi' },
        { icon: Coffee, label: 'Coffee' },
        { icon: Utensils, label: 'Kitchen' },
      ],
      cta: 'Book Now',
      popular: true,
      cleaningFee: 25,
      minStay: 2,
    },
    {
      name: 'Riverside 1-Bedroom',
      description: 'Spacious apartment with river views and balcony',
      price: '$129',
      period: '/night',
      badge: 'River View',
      features: [
        'Up to 3 guests',
        'Private balcony',
        'River views',
        'Full kitchen',
        'Washer & dryer',
        'Free parking space',
        'Pet-friendly option',
        'Weekly housekeeping',
      ],
      amenities: [
        { icon: Users, label: '3 guests' },
        { icon: Car, label: 'Parking' },
        { icon: Wifi, label: 'WiFi' },
        { icon: Utensils, label: 'Full Kitchen' },
      ],
      cta: 'Check Availability',
      popular: false,
      cleaningFee: 35,
      minStay: 3,
    },
    {
      name: 'Family 2-Bedroom',
      description: 'Perfect for families with separate living areas',
      price: '$179',
      period: '/night',
      badge: 'Family Favorite',
      features: [
        'Up to 5 guests',
        '2 separate bedrooms',
        'Large living room',
        'Full kitchen & dining',
        '2 bathrooms',
        'Free parking for 2 cars',
        'Child-friendly amenities',
        'Bi-weekly housekeeping',
      ],
      amenities: [
        { icon: Users, label: '5 guests' },
        { icon: Car, label: '2 Parking' },
        { icon: Wifi, label: 'WiFi' },
        { icon: Utensils, label: 'Full Kitchen' },
      ],
      cta: 'Reserve Today',
      popular: false,
      cleaningFee: 45,
      minStay: 4,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Calendar className="size-3 mr-1" />
            Available Properties
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your Perfect
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Local Stay
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Direct booking with no platform fees. All apartments are professionally managed, fully
            furnished, and ready for your comfortable stay.
          </p>

          {/* Stay Duration Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Nightly Rate
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Weekly Rate
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 15%
              </Badge>
            </button>
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {apartments.map((apartment, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                apartment.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {apartment.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {apartment.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {apartment.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {apartment.badge && !apartment.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {apartment.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2">{apartment.name}</CardTitle>
                <CardDescription className="text-base mb-6">
                  {apartment.description}
                </CardDescription>

                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold">{apartment.price}</span>
                  <span className="text-muted-foreground mb-1">{apartment.period}</span>
                </div>

                <div className="text-sm text-muted-foreground">
                  + ${apartment.cleaningFee} cleaning fee • {apartment.minStay} night minimum
                </div>

                {/* Quick Amenities */}
                <div className="flex justify-center gap-4 mt-4">
                  {apartment.amenities.map((amenity, amenityIndex) => (
                    <div key={amenityIndex} className="flex flex-col items-center gap-1">
                      <amenity.icon className="size-4 text-primary" />
                      <span className="text-xs text-muted-foreground">{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {apartment.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={cn(
                    'w-full text-base py-6',
                    apartment.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={apartment.popular ? 'default' : 'outline'}
                >
                  {apartment.popular && <Calendar className="size-4 mr-2" />}
                  {apartment.cta}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Instant confirmation • Free cancellation up to 48h
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Need help choosing the right apartment?</h3>
          <p className="text-muted-foreground mb-6">
            Our local team knows each property inside and out. We're here to help you find the
            perfect accommodation for your stay, whether it's business or leisure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              View All 6 Properties
            </Button>
            <Button size="lg">Contact Host Directly</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
