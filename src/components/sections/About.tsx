import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Home,
  MapPin,
  Calendar,
  Shield,
  Coffee,
  Wifi,
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Home,
      title: 'Authentic Local Living',
      description:
        'We provide genuine neighborhood experiences in carefully selected properties that feel like home, not hotel rooms.',
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description:
        'Direct booking means clear pricing, honest communication, and personal accountability for every guest experience.',
    },
    {
      icon: Heart,
      title: 'Guest-Centered Service',
      description:
        "Your comfort is our priority. We're available 24/7 and know each property intimately to ensure perfect stays.",
    },
    {
      icon: MapPin,
      title: 'Prime Locations',
      description:
        'Every apartment is strategically located to give you the best access to local attractions, dining, and transportation.',
    },
  ];

  const stats = [
    { value: '2018', label: 'Hosting Since', icon: Award },
    { value: '6', label: 'Premium Properties', icon: Home },
    { value: '4.9', label: 'Average Rating', icon: Star },
    { value: '500+', label: 'Happy Guests', icon: Users },
  ];

  const team = [
    {
      name: 'Maria Santos',
      role: 'Founder & Host',
      image: 'MS',
      bio: 'Local hospitality expert with 8+ years managing vacation rentals and creating memorable guest experiences.',
    },
    {
      name: 'James Mitchell',
      role: 'Property Manager',
      image: 'JM',
      bio: 'Ensures every apartment meets our high standards for cleanliness, maintenance, and guest comfort.',
    },
    {
      name: 'Sofia Chen',
      role: 'Guest Relations',
      image: 'SC',
      bio: 'Your go-to contact for bookings, local recommendations, and ensuring your stay exceeds expectations.',
    },
    {
      name: 'Carlos Rivera',
      role: 'Maintenance Lead',
      image: 'CR',
      bio: 'Keeps all properties in perfect condition with quick response times and attention to detail.',
    },
  ];

  const amenities = [
    { icon: Wifi, label: 'High-Speed WiFi' },
    { icon: Coffee, label: 'Fully Equipped Kitchen' },
    { icon: Calendar, label: 'Flexible Check-in' },
    { icon: Shield, label: 'Professional Cleaning' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Local Stays Rentals
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Your Home Away From Home
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              In the Heart of the City
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a family-owned business offering six carefully curated apartments for travelers
            who want authentic local experiences with the comfort and convenience of home.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Started in 2018 when we transformed our first downtown apartment into a welcoming
                space for travelers seeking more than just a place to sleep.
              </p>
              <p>
                After countless positive experiences and guest relationships, we expanded to six
                unique properties across the city's best neighborhoods, each personally designed and
                maintained to our exacting standards.
              </p>
              <p>
                Today, we're proud to offer direct bookings that save you money while providing the
                personal touch and local expertise that only dedicated hosts can deliver.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mb-6">
              {amenities.map((amenity, index) => {
                const Icon = amenity.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm bg-muted/50 px-3 py-2 rounded-full"
                  >
                    <Icon className="size-4 text-primary" />
                    <span>{amenity.label}</span>
                  </div>
                );
              })}
            </div>
            <Button className="group">
              View All Properties
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every guest deserves a perfect stay, and we make that our personal mission."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Maria Santos, Founder</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose Local Stays</h3>
            <p className="text-muted-foreground">
              The principles that make us different from big booking platforms and chain hotels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Your Hosts</h3>
            <p className="text-muted-foreground">
              The dedicated team ensuring your stay is comfortable, memorable, and hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Contact Our Team
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Guest Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Staying with Local Stays was like having friends in the city. The apartment was
                spotless, perfectly located, and Maria's local recommendations made our trip
                unforgettable."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  RK
                </div>
                <div className="text-left">
                  <div className="font-semibold">Rachel Kim</div>
                  <div className="text-sm text-muted-foreground">
                    Business Traveler from Seattle
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
