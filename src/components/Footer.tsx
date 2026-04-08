import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="gradient-navy text-primary-foreground">
    <div className="container-wide section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-extrabold mb-4">
            <span className="text-accent">Pradip</span> Arts
          </h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Premium printing, signage & branding solutions for modern businesses. Transforming ideas into powerful visual experiences since 2014.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {["Home", "Services", "Portfolio", "About", "Contact"].map((l) => (
              <li key={l}>
                <Link to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="hover:text-accent transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {["Large Format Printing", "Signage", "Wall Graphics", "LED Sign Boards", "Event Branding"].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
              <span>123 Industrial Area, Mumbai, India</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-accent shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-accent shrink-0" />
              <span>info@pradiparts.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
        Copyrights 2026 all rights reserved by Pradip art designed by{" "}
        <a
          href="https://webakoof.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          webakoof
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
