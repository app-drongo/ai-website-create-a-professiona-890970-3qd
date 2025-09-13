import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Home,
  Calendar,
  Shield,
} from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Properties',
      links: [
        { name: 'Downtown Studios', href: '/properties/downtown-studios' },
        { name: 'City Center Apartments', href: '/properties/city-center' },
        { name: 'Residential Units', href: '/properties/residential' },
        { name: 'All Properties', href: '/properties' },
        { name: 'Availability Calendar', href: '/availability' },
        { name: 'Special Offers', href: '/deals' },
      ],
    },
    {
      title: 'Booking',
      links: [
        { name: 'Check Availability', href: '/availability' },
        { name: 'Booking Policies', href: '/policies' },
        { name: 'Cancellation Policy', href: '/cancellation' },
        { name: 'House Rules', href: '/house-rules' },
        { name: 'Pricing Guide', href: '/pricing' },
        { name: 'Group Bookings', href: '/group-bookings' },
      ],
    },
    {
      title: 'Guest Resources',
      links: [
        { name: 'Guest Reviews', href: '/reviews' },
        { name: 'Local Area Guide', href: '/area-guide' },
        { name: 'Check-in Instructions', href: '/check-in' },
        { name: 'Amenities Guide', href: '/amenities' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Guest Support', href: '/support' },
      ],
    },
    {
      title: 'About',
      links: [
        { name: 'About Local Stays', href: '/about' },
        { name: 'Host Profile', href: '/host' },
        { name: 'Property Management', href: '/management' },
        { name: 'Safety & Security', href: '/safety' },
        { name: 'Cleaning Standards', href: '/cleaning' },
        { name: 'Contact Host', href: '/contact' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/localstaysrentals' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/localstaysrentals' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/localstaysrentals' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/localstaysrentals' },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Home className="size-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">Local Stays Rentals</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Premium short-term apartment rentals in the heart of the city. Experience the
                comfort of home with professional hospitality. Direct bookings, no platform fees,
                exceptional stays.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">bookings@localstaysrentals.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 789-STAY</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Downtown & Residential Areas</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Exclusive Deals & Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email for special offers"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get early access to seasonal rates and last-minute deals. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="border-t border-border/50 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="size-4 text-primary" />
              <span>Verified Properties</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="size-4 text-primary" />
              <span>Instant Booking Available</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="size-4 text-primary" />
              <span>500+ Happy Guests</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Home className="size-4 text-primary" />
              <span>Professional Cleaning</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Local Stays Rentals. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Hosted with <Heart className="size-3 text-primary fill-current" /> locally
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/sitemap"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Sitemap
            </Link>
            <Link
              href="/emergency"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Emergency Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
