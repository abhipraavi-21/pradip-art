import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  compact?: boolean;
  iconClassName?: string;
};

const brandLogoSrc = `${import.meta.env.BASE_URL}pradip-logo-o1-clean.png`;

const BrandLogo = ({
  className,
  compact = false,
  iconClassName,
}: BrandLogoProps) => (
  <Link
    to="/"
    aria-label="Pradip Arts home"
    className={cn("inline-flex items-center", className)}
  >
    <img
      src={brandLogoSrc}
      alt="Pradip Arts Vision logo"
      className={cn(
        "w-auto shrink-0 object-contain drop-shadow-[0_10px_22px_rgba(0,0,0,0.28)]",
        compact ? "h-10 md:h-11" : "h-20 md:h-24",
        iconClassName,
      )}
      loading="eager"
    />
  </Link>
);

export default BrandLogo;
