import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Shield,
  Clock,
  Users,
  Wifi,
  Car,
  Coffee,
  MapPin,
  CreditCard,
  MessageCircle,
} from 'lucide-react';

export default function Features() {
  const policies = [
    {
      icon: Shield,
      title: 'Flexible Cancellation',
      description:
        'Free cancellation up to 48 hours before check-in. Full refund guaranteed for qualifying cancellations.',
      badge: 'Booking Policy',
    },
    {
      icon: Clock,
      title: 'Check-in & Check-out',
      description:
        'Standard check-in: 3:00 PM - 10:00 PM. Check-out by 11:00 AM. Early/late arrangements available upon request.',
      badge: 'Timing',
    },
    {
      icon: Users,
      title: 'Guest Capacity',
      description:
        'Maximum occupancy strictly enforced for safety and comfort. Additional guests require prior approval and fees.',
      badge: 'Occupancy',
    },
    {
      icon: Wifi,
      title: 'Amenities Included',
      description:
        'High-speed WiFi, fully equipped kitchen, fresh linens, towels, and basic toiletries provided at no extra cost.',
      badge: 'Included',
    },
    {
      icon: Car,
      title: 'Parking & Access',
      description:
        'Dedicated parking spaces available. Keyless entry with unique codes provided 24 hours before arrival.',
      badge: 'Access',
    },
    {
      icon: Coffee,
      title: 'House Rules',
      description:
        'No smoking indoors, no parties or events. Quiet hours 10 PM - 8 AM. Respect neighbors and property.',
      badge: 'Guidelines',
    },
    {
      icon: MapPin,
      title: 'Location Benefits',
      description:
        'Prime locations near public transport, restaurants, and attractions. Walking distance to city center from most properties.',
      badge: 'Location',
    },
    {
      icon: CreditCard,
      title: 'Transparent Pricing',
      description:
        'No hidden fees. Cleaning fee and city tax clearly displayed. Direct booking saves you platform commission fees.',
      badge: 'Pricing',
    },
    {
      icon: MessageCircle,
      title: 'Guest Support',
      description:
        '24/7 emergency contact available. Local host responds within 2 hours during business hours for non-urgent matters.',
      badge: 'Support',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Booking Policies
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Clear Policies for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Worry-Free Stays
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Transparent policies and guidelines designed to ensure comfortable, safe stays for all
            our guests across our vacation rental properties.
          </p>
        </div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {policies.map((policy, index) => {
            const Icon = policy.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {policy.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {policy.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {policy.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Questions about our policies or need clarification?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Book Now
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Contact Host
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
