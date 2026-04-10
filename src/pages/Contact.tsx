import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBanner from "@/components/PageBanner";
import contactBanner from "@/assets/banners/contact-banner.jpg";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: Mail, label: "Email", value: "info@pradiparts.com", href: "mailto:info@pradiparts.com" },
  { icon: MapPin, label: "Address", value: "123 Industrial Area, Andheri East, Mumbai 400069, India" },
  { icon: Clock, label: "Hours", value: "Mon - Sat: 9:00 AM - 7:00 PM" },
];

const serviceOptions = [
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

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Contact Us"
          subtitle="Get in touch for a free consultation and quote. We'd love to hear from you."
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
          bgImage={contactBanner}
        />

        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-extrabold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                      <Input
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Phone *</label>
                      <Input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                    <Input
                      required
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Service Required</label>
                    <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                    <Textarea
                      required
                      placeholder="Tell us about your project..."
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="gradient-orange text-accent-foreground font-semibold text-lg px-8 hover:opacity-90 transition-opacity"
                  >
                    {loading ? "Sending..." : "Send Message"} <Send className="ml-2" size={18} />
                  </Button>
                </form>
              </div>

              {/* Contact Info Sidebar */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-extrabold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-6 mb-8">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg gradient-navy flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{label}</p>
                        {href ? (
                          <a href={href} className="text-muted-foreground text-sm hover:text-accent transition-colors">{value}</a>
                        ) : (
                          <p className="text-muted-foreground text-sm">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">Quick Response via WhatsApp</h3>
                  <p className="text-muted-foreground text-sm mb-4">Get instant replies during business hours.</p>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-500 text-primary-foreground hover:bg-green-600 font-semibold">
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map */}
        <section className="h-96">
          <iframe
            title="Pradip Arts Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0!2d72.86!3d19.11!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzM2LjAiTiA3MsKwNTEnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Contact;
