import { Printer, Signpost, PaintBucket, Megaphone, Layers, Lightbulb, PartyPopper, Shirt, Monitor, LucideIcon } from "lucide-react";
import printing1 from "@/assets/portfolio/printing-1.jpg";
import printing2 from "@/assets/portfolio/printing-2.jpg";
import signage1 from "@/assets/portfolio/signage-1.jpg";
import signage2 from "@/assets/portfolio/signage-2.jpg";
import branding1 from "@/assets/portfolio/branding-1.jpg";
import events1 from "@/assets/portfolio/events-1.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import teamImg from "@/assets/team.jpg";
import servicesBanner from "@/assets/services-banner.jpg";

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  image: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  subServices: string[];
  process: { step: string; desc: string }[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "large-format-printing",
    icon: Printer,
    image: printing1,
    title: "Large Format Printing",
    shortDesc: "High-resolution prints for banners, posters & displays",
    fullDesc: "Our large format printing services deliver stunning, high-resolution output for all your visual communication needs. From trade show graphics to retail displays, we use state-of-the-art equipment and premium materials to ensure vibrant colors and sharp details that make your brand stand out.",
    subServices: ["Banner Printing", "Poster Printing", "Canvas Prints", "Backlit Displays", "Vehicle Wraps", "Floor Graphics"],
    process: [
      { step: "Consultation", desc: "We discuss your requirements, dimensions, and placement to recommend the best solution." },
      { step: "Design Review", desc: "Our design team reviews your artwork or creates custom designs to specification." },
      { step: "Printing", desc: "Using high-resolution printers with premium inks for vivid, long-lasting output." },
      { step: "Finishing & Delivery", desc: "Professional finishing, quality inspection, and on-time delivery or installation." },
    ],
  },
  {
    slug: "signage",
    icon: Signpost,
    image: signage1,
    title: "Signage",
    shortDesc: "Indoor & outdoor signage for maximum brand visibility",
    fullDesc: "Professional signage solutions that enhance your brand presence and guide your audience effectively. We design, manufacture, and install signs that are durable, visually striking, and compliant with local regulations. From storefronts to office interiors, our signage solutions create lasting impressions.",
    subServices: ["Channel Letters", "Monument Signs", "Wayfinding Signs", "ADA Compliant Signs", "Pylon Signs", "Directory Signs"],
    process: [
      { step: "Site Survey", desc: "Our team conducts an on-site assessment to understand requirements and local regulations." },
      { step: "Design & Engineering", desc: "Custom design with structural engineering to ensure durability and visual impact." },
      { step: "Fabrication", desc: "Precision manufacturing using premium materials like aluminum, acrylic, and LED modules." },
      { step: "Installation", desc: "Professional installation by certified technicians with full permits and compliance." },
    ],
  },
  {
    slug: "wall-graphics",
    icon: PaintBucket,
    image: branding1,
    title: "Wall Graphics",
    shortDesc: "Transform spaces with stunning wall murals & wraps",
    fullDesc: "Turn blank walls into powerful brand statements with our custom wall graphics. We create immersive environments for offices, retail spaces, restaurants, and public areas using high-quality vinyl, fabric, and specialty materials that deliver stunning visual impact.",
    subServices: ["Wall Murals", "Vinyl Wall Wraps", "Window Graphics", "Frosted Glass Film", "Custom Wallpaper", "3D Wall Lettering"],
    process: [
      { step: "Space Assessment", desc: "We measure and evaluate your wall surfaces, lighting, and ambient conditions." },
      { step: "Creative Design", desc: "Our designers create custom artwork that aligns with your brand and space." },
      { step: "Material Selection", desc: "Choosing the right material — vinyl, fabric, or specialty — for optimal results." },
      { step: "Expert Installation", desc: "Seamless, bubble-free installation by experienced professionals." },
    ],
  },
  {
    slug: "branding-solutions",
    icon: Megaphone,
    image: teamImg,
    title: "Branding Solutions",
    shortDesc: "Complete brand identity from logo to collateral",
    fullDesc: "Comprehensive branding services that establish and elevate your brand identity across all touchpoints. From logo design and brand guidelines to printed collateral and environmental branding, we ensure consistency and impact across every customer interaction.",
    subServices: ["Logo Design", "Brand Guidelines", "Business Cards", "Letterheads", "Packaging Design", "Brand Collateral"],
    process: [
      { step: "Brand Discovery", desc: "Understanding your business, values, target audience, and competitive landscape." },
      { step: "Concept Development", desc: "Creating multiple design concepts with mood boards and style explorations." },
      { step: "Design Refinement", desc: "Iterating on the chosen direction with your feedback for pixel-perfect results." },
      { step: "Brand Rollout", desc: "Delivering complete brand assets with guidelines for consistent application." },
    ],
  },
  {
    slug: "flex-printing",
    icon: Layers,
    image: signage2,
    title: "Flex Printing",
    shortDesc: "Durable flex banners for all weather conditions",
    fullDesc: "High-quality flex printing for outdoor advertising that withstands harsh weather conditions. Our flex banners use UV-resistant inks and tear-proof materials to ensure your message stays vibrant and intact for extended periods.",
    subServices: ["Front-Lit Flex", "Back-Lit Flex", "Star Flex", "Vinyl Flex", "Mesh Banners", "One-Way Vision"],
    process: [
      { step: "Requirement Analysis", desc: "Understanding size, location, and environmental conditions for optimal material selection." },
      { step: "Artwork Preparation", desc: "Preparing high-resolution artwork optimized for flex printing." },
      { step: "High-Speed Printing", desc: "Using industrial solvent/eco-solvent printers for durable, weather-resistant output." },
      { step: "Finishing", desc: "Professional hemming, eyeleting, and reinforcement for secure mounting." },
    ],
  },
  {
    slug: "led-sign-boards",
    icon: Lightbulb,
    image: heroBg,
    title: "LED Sign Boards",
    shortDesc: "Eye-catching illuminated signage solutions",
    fullDesc: "Illuminate your brand with our custom LED sign board solutions. Energy-efficient, long-lasting, and visually striking — our LED signs are perfect for storefronts, malls, hospitals, and corporate spaces. We offer both indoor and outdoor options with customizable colors and effects.",
    subServices: ["LED Channel Letters", "Neon Flex Signs", "LED Display Boards", "Scrolling Message Signs", "Backlit Panels", "Edge-Lit Signs"],
    process: [
      { step: "Design Consultation", desc: "Selecting the right LED type, colors, and effects for your application." },
      { step: "Custom Fabrication", desc: "Precision manufacturing with quality LED modules and power supplies." },
      { step: "Quality Testing", desc: "Rigorous testing for brightness, color accuracy, and electrical safety." },
      { step: "Installation & Support", desc: "Professional installation with wiring, plus ongoing maintenance support." },
    ],
  },
  {
    slug: "event-branding",
    icon: PartyPopper,
    image: events1,
    title: "Event Branding",
    shortDesc: "End-to-end event branding & promotional material",
    fullDesc: "Make your events unforgettable with our comprehensive event branding services. From stage backdrops and booth graphics to promotional materials and directional signage, we handle every visual element to create a cohesive, impactful event experience.",
    subServices: ["Stage Backdrops", "Exhibition Booths", "Roll-Up Banners", "Promotional Flags", "Table Runners", "Badge Printing"],
    process: [
      { step: "Event Brief", desc: "Understanding event theme, venue, timeline, and branding requirements." },
      { step: "Creative Design", desc: "Designing cohesive visual elements that align with your event theme." },
      { step: "Production", desc: "Fast-track printing and fabrication to meet event deadlines." },
      { step: "On-Site Setup", desc: "Professional installation and teardown at the event venue." },
    ],
  },
  {
    slug: "fabric-printing",
    icon: Shirt,
    image: servicesBanner,
    title: "Fabric Printing",
    shortDesc: "Premium fabric prints for exhibitions & retail",
    fullDesc: "Elevate your displays with our premium fabric printing services. Lightweight, wrinkle-resistant, and vibrant — our fabric prints are perfect for trade shows, retail environments, and corporate spaces. We offer dye-sublimation printing on a wide range of fabrics.",
    subServices: ["Tension Fabric Displays", "Fabric Banners", "Tablecloths", "Flag Printing", "Textile Backdrops", "Silicone Edge Graphics"],
    process: [
      { step: "Material Consultation", desc: "Selecting the ideal fabric type for your application and budget." },
      { step: "Color Proofing", desc: "Digital color proofing to ensure accurate brand color reproduction." },
      { step: "Dye-Sublimation", desc: "Using advanced dye-sub technology for permanent, wash-resistant prints." },
      { step: "Finishing", desc: "Professional sewing, hemming, and hardware assembly for display-ready products." },
    ],
  },
  {
    slug: "digital-displays",
    icon: Monitor,
    image: printing2,
    title: "Digital Displays",
    shortDesc: "Modern digital signage & display solutions",
    fullDesc: "Future-proof your communication with dynamic digital display solutions. From interactive kiosks to video walls, we provide complete digital signage systems that engage audiences with dynamic content, real-time updates, and interactive experiences.",
    subServices: ["Video Walls", "Interactive Kiosks", "Digital Menu Boards", "Outdoor LED Screens", "Touchscreen Displays", "Content Management"],
    process: [
      { step: "Needs Assessment", desc: "Evaluating your space, audience, and content requirements for the right solution." },
      { step: "System Design", desc: "Specifying hardware, software, and network infrastructure for optimal performance." },
      { step: "Hardware Setup", desc: "Professional installation with mounting, wiring, and network configuration." },
      { step: "Content & Training", desc: "Setting up content management and training your team on the system." },
    ],
  },
];
