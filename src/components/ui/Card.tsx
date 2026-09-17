import Link from "next/link";
import { CamfexImage, type CamfexImageProps } from "@/components/ui/Image";

export interface CardProps {
  title: string;
  description: string;
  image: CamfexImageProps;
  href?: string;
  className?: string;
}

/**
 * Edge-to-edge, image-led show/feature card — build plan §6.1, revised
 * against direct comparison with the Ancora reference: the photo fills
 * the card, title and description sit on a bottom scrim over the image
 * rather than in a separate text block, and the image scales up
 * slightly on hover. CamfexImage's own aspectRatio prop sizes the whole
 * card — no separate aspect box needed here.
 */
export function Card({
  title,
  description,
  image,
  href,
  className = "",
}: CardProps) {
  const content = (
    <div className="relative overflow-hidden">
      <CamfexImage {...image} zoomOnHover />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/25 to-transparent"
      />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold text-off-white">
          {title}
        </h3>
        <p className="mt-1.5 font-body text-sm text-off-white/85">
          {description}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta ${className}`}
        aria-label={`${title} — read more`}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={`group ${className}`}>{content}</div>
  );
}
