import { Printer, Signpost, PaintBucket, Megaphone, Layers, Lightbulb, Cpu, Cog, LucideIcon } from "lucide-react";
import printing1 from "@/assets/portfolio/printing-1.jpg";
import signage1 from "@/assets/portfolio/signage-1.jpg";
import signage2 from "@/assets/portfolio/signage-2.jpg";
import branding1 from "@/assets/portfolio/branding-1.jpg";
import alcoCompositPanal from "@/assets/portfolio/alco-composit-panal-whatsapp-cropped.jpeg";
import vinylPrinting from "@/assets/portfolio/vinyl-printing.jpg";
import cncCutting from "@/assets/portfolio/cnc-cutting.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import teamImg from "@/assets/team.jpg";

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  image: string;
  cardImagePosition?: string;
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
    slug: "vinyl-printing",
    icon: Printer,
    image: vinylPrinting,
    title: "Vinyl Printing",
    shortDesc: "High-quality vinyl prints for branding, ads, and displays",
    fullDesc: "Our vinyl printing service delivers sharp, durable visuals for indoor and outdoor use. We use premium vinyl media and high-resolution printers to produce long-lasting prints suitable for branding, promotional campaigns, and storefront applications.",
    subServices: ["Self-Adhesive Vinyl", "One-Way Vision Vinyl", "Reflective Vinyl", "Transparent Vinyl Prints", "Frosted Vinyl", "Lamination & Installation"],
    process: [
      { step: "Artwork Check", desc: "We review your design files for resolution, bleed, and color accuracy." },
      { step: "Material Selection", desc: "Selecting the right vinyl type based on surface, durability, and usage." },
      { step: "Precision Printing", desc: "High-resolution eco-solvent/UV printing for rich color and sharp details." },
      { step: "Finishing & Fitment", desc: "Trimming, lamination, and professional installation support when required." },
    ],
  },
  {
    slug: "cnc-cutting",
    icon: Cog,
    image: cncCutting,
    title: "CNC Cutting",
    shortDesc: "Precision CNC cutting for acrylic, wood, metal, and composite sheets",
    fullDesc: "Our CNC cutting service delivers high-precision component and sheet cutting for signage, fabrication, and custom production needs. With computer-controlled machining and experienced operators, we ensure clean edges, repeatable accuracy, and fast turnaround for both prototypes and bulk jobs.",
    subServices: ["CNC Router Cutting", "Acrylic & ACP Cutting", "Metal Sheet Profile Cutting", "Custom Shape Cutting", "Prototype Development", "Batch Production"],
    process: [
      { step: "File & Requirement Review", desc: "We check drawing format, dimensions, tolerances, and material specifications." },
      { step: "Toolpath Planning", desc: "Selecting tooling, feed rates, and cutting path for accuracy and efficiency." },
      { step: "CNC Machining", desc: "Automated precision cutting with calibrated machines and real-time supervision." },
      { step: "Finishing & Dispatch", desc: "Edge cleanup, quality checks, and safe packing for delivery or installation." },
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
    slug: "alco-composit-panal",
    icon: Cpu,
    image: alcoCompositPanal,
    cardImagePosition: "center top",
    title: "Alco composit panal",
    shortDesc: "ACP cladding and panel solutions for stylish, durable interior and exterior finishes",
    fullDesc: "We provide Alco composit panal solutions for storefronts, building facades, office exteriors, and interior feature surfaces. Our team handles panel selection, precision cutting, framing, and clean installation to deliver a modern finish that is lightweight, weather-resistant, and built to last.",
    subServices: ["ACP Sheet Cladding", "Exterior Facade Panels", "Shop Front ACP Work", "Sign Board Back Panels", "Interior Wall Cladding", "Panel Fabrication & Installation"],
    process: [
      { step: "Site Measurement", desc: "We inspect the location, take dimensions, and understand the finish and structural requirements." },
      { step: "Design & Material Selection", desc: "Choosing ACP colors, thickness, framing method, and layout based on your space and branding." },
      { step: "Cutting & Fabrication", desc: "Panels are accurately cut, grooved, and prepared for neat bends, joints, and edge finishes." },
      { step: "Installation & Finishing", desc: "Our team installs the panels securely with a clean finish, proper alignment, and final quality checks." },
    ],
  },
];
