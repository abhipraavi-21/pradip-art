import { Cog, Layers, Lightbulb, Printer, Signpost, type LucideIcon } from "lucide-react";
import vinylPrinting from "@/assets/portfolio/vinyl-printing.jpg";
import cncCutting from "@/assets/portfolio/cnc-cutting.jpg";

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
    slug: "acp-paneling-sign-board",
    icon: Layers,
    image: "/portfolio/gallery/03-divte-patil-raygad-board.jpg",
    cardImagePosition: "center center",
    title: "ACP Paneling (Sign Board)",
    shortDesc: "ACP paneling for premium sign boards, facades, and shopfront branding",
    fullDesc:
      "Our ACP paneling service gives sign boards and storefront facades a clean, modern finish. We handle measurement, panel selection, cutting, framing, and installation to create durable branding surfaces that look polished and hold up well outdoors.",
    subServices: [
      "ACP Sign Board Paneling",
      "Shopfront ACP Cladding",
      "Facade Panel Installation",
      "Letter Base Paneling",
      "Custom Color & Finish Options",
      "Fabrication & On-Site Fitting",
    ],
    process: [
      { step: "Site Visit", desc: "We inspect the location, take measurements, and understand the branding requirement." },
      { step: "Design Planning", desc: "Panel layout, finish, framing, and sign positioning are planned for a clean final look." },
      { step: "Fabrication", desc: "ACP sheets are cut, grooved, and prepared accurately for neat bends and joins." },
      { step: "Installation", desc: "The panels are mounted securely and finished with proper alignment and detailing." },
    ],
  },
  {
    slug: "led-sign-board",
    icon: Lightbulb,
    image: "/portfolio/gallery/08-turf-garden-led-sign.jpg",
    cardImagePosition: "center center",
    title: "LED Sign Board",
    shortDesc: "Bright illuminated sign boards for day-and-night business visibility",
    fullDesc:
      "We design and fabricate LED sign boards that make your business stand out around the clock. From shop signs to illuminated brand displays, we use quality LED modules, acrylic, and metal fabrication to deliver attractive signage with dependable brightness and finish.",
    subServices: [
      "LED Letter Sign Boards",
      "Backlit Shop Boards",
      "Neon Flex Style Signs",
      "Edge-Lit Acrylic Boards",
      "Outdoor LED Branding",
      "Installation & Maintenance Support",
    ],
    process: [
      { step: "Requirement Discussion", desc: "We understand the board size, lighting style, brand colors, and installation location." },
      { step: "Design & Wiring Plan", desc: "We prepare the visual layout along with electrical and structural planning." },
      { step: "Fabrication", desc: "Letters, panels, and lighting components are manufactured and assembled with care." },
      { step: "Testing & Installation", desc: "Every sign is tested for brightness and then installed safely on site." },
    ],
  },
  {
    slug: "cnc-cutting-work",
    icon: Cog,
    image: cncCutting,
    title: "CNC Cutting Work",
    shortDesc: "Precision CNC cutting for ACP, acrylic, wood, and custom sign components",
    fullDesc:
      "Our CNC cutting work supports sign making, fabrication, and custom production with sharp accuracy and repeatable results. We cut ACP, acrylic, MDF, and other sheet materials into exact shapes for letters, panels, patterns, and branded components.",
    subServices: [
      "ACP Sheet Cutting",
      "Acrylic Shape Cutting",
      "CNC Router Jobs",
      "Letter & Logo Cutting",
      "Prototype & Custom Pieces",
      "Batch Production Work",
    ],
    process: [
      { step: "File Review", desc: "We check artwork, dimensions, and material details before production starts." },
      { step: "Machine Setup", desc: "Toolpaths, cutting tools, and feed settings are configured for the selected material." },
      { step: "Precision Cutting", desc: "The CNC machine executes accurate cuts with close supervision for clean output." },
      { step: "Finishing", desc: "Edges are cleaned, parts are checked, and the job is packed for delivery or installation." },
    ],
  },
  {
    slug: "vinyl-printing",
    icon: Printer,
    image: vinylPrinting,
    title: "Vinyl Printing",
    shortDesc: "Durable vinyl prints for branding, glass graphics, and promotional displays",
    fullDesc:
      "We provide high-quality vinyl printing for indoor and outdoor branding needs. From storefront graphics to promotional displays, our prints deliver sharp color, strong adhesion, and a professional finish suitable for long-term visual communication.",
    subServices: [
      "Self-Adhesive Vinyl Prints",
      "One-Way Vision Vinyl",
      "Glass & Window Graphics",
      "Frosted & Transparent Vinyl",
      "Lamination Finishing",
      "Application Support",
    ],
    process: [
      { step: "Artwork Check", desc: "We review your design files for size, resolution, and print readiness." },
      { step: "Material Selection", desc: "The right vinyl type is chosen based on the surface, durability, and usage." },
      { step: "Printing", desc: "We print with rich color and clean detail for consistent brand presentation." },
      { step: "Finishing & Fitment", desc: "The print is trimmed, laminated if needed, and prepared for smooth installation." },
    ],
  },
  {
    slug: "acrylic-name-plate",
    icon: Signpost,
    image: "/portfolio/gallery/01-deshmukh-psi-nameplate.jpg",
    cardImagePosition: "center center",
    title: "Acrylic Name Plate",
    shortDesc: "Custom acrylic name plates for homes, offices, clinics, and cabins",
    fullDesc:
      "Our acrylic name plates combine elegant materials with precise lettering for a premium look. We create custom plates for residences, offices, cabins, doctors, and commercial spaces using layered acrylic, vinyl, metal finishes, and raised letters as needed.",
    subServices: [
      "Home Name Plates",
      "Office & Cabin Plates",
      "Doctor & Clinic Name Boards",
      "Layered Acrylic Lettering",
      "Custom Shapes & Sizes",
      "Wall Mounting Accessories",
    ],
    process: [
      { step: "Design Selection", desc: "We finalize the plate size, layout, font, colors, and material style with you." },
      { step: "Material Preparation", desc: "Acrylic sheets and lettering materials are selected and prepared for production." },
      { step: "Cutting & Branding", desc: "The plate and letters are cut precisely and assembled for a neat premium finish." },
      { step: "Final Assembly", desc: "Mounting hardware is added and the completed name plate is checked before delivery." },
    ],
  },
];

export const serviceTitles = servicesData.map((service) => service.title);
export const serviceSelectOptions = [...serviceTitles, "Other"];
