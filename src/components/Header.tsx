import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

const quoteServiceOptions = [
  "Large Format Printing",
  "Signage",
  "Wall Graphics",
  "Branding Solutions",
  "Flex Printing",
  "Vinyl Printing",
  "CNC Cutting",
  "LED Sign Boards",
  "Alco composit panal",
  "Other",
];

const emptyQuoteForm = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [quoteForm, setQuoteForm] = useState(emptyQuoteForm);
  const { toast } = useToast();

  const handleQuoteSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Quote request sent",
        description: "Thanks! Our team will contact you shortly.",
      });
      setQuoteForm(emptyQuoteForm);
      setSubmitting(false);
      setQuoteOpen(false);
    }, 900);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 gradient-navy backdrop-blur-sm">
        <div className="container-wide flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
          <BrandLogo compact className="shrink-0" />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Button
              onClick={() => setQuoteOpen(true)}
              className="gradient-orange text-accent-foreground font-semibold px-6 hover:opacity-90 transition-opacity"
            >
              Get a Quote
            </Button>
          </nav>

          {/* Mobile toggle */}
          <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="md:hidden gradient-navy border-t border-primary-foreground/10 px-4 pb-6">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block py-3 text-primary-foreground/80 hover:text-accent transition-colors font-medium"
              >
                {l.label}
              </Link>
            ))}
            <Button
              onClick={() => {
                setOpen(false);
                setQuoteOpen(true);
              }}
              className="w-full mt-4 gradient-orange text-accent-foreground font-semibold"
            >
              Get a Quote
            </Button>
          </nav>
        )}
      </header>

      <Dialog open={quoteOpen} onOpenChange={setQuoteOpen}>
        <DialogContent className="sm:max-w-[620px]">
          <DialogHeader>
            <DialogTitle>Get a Quote</DialogTitle>
            <DialogDescription>
              Share your requirement and we will send you a tailored quote.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleQuoteSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Full Name *</label>
                <Input
                  required
                  value={quoteForm.name}
                  placeholder="Your name"
                  onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Phone *</label>
                <Input
                  required
                  type="tel"
                  value={quoteForm.phone}
                  placeholder="+91 98765 43210"
                  onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">Email *</label>
              <Input
                required
                type="email"
                value={quoteForm.email}
                placeholder="you@company.com"
                onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">Service</label>
              <Select value={quoteForm.service} onValueChange={(value) => setQuoteForm({ ...quoteForm, service: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {quoteServiceOptions.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">Project Details *</label>
              <Textarea
                required
                rows={4}
                value={quoteForm.message}
                placeholder="Tell us what you need, quantity, and timeline..."
                onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
              />
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="w-full gradient-orange text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              {submitting ? "Submitting..." : "Submit Quote Request"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
