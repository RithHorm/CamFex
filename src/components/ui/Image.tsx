import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { ImageSquare } from "@phosphor-icons/react/dist/ssr";

type AspectRatio = "16/9" | "4/3" | "3/4" | "1/1" | "3/2";

interface BaseProps {
  /** Reserves layout space up front so no image ever causes shift. */
  aspectRatio: AspectRatio;
  className?: string;
  /** Scales the image up slightly when an ancestor with `group` is hovered — e.g. inside Card. */
  zoomOnHover?: boolean;
}

interface RealPhoto
  extends BaseProps,
    Omit<NextImageProps, "alt" | "fill" | "placeholder"> {
  alt: string;
  pending?: false;
}

interface PendingPhoto extends BaseProps {
  /** No commissioned photography exists yet — this panel stands in for it. */
  pending: true;
  /** Describes the eventual photograph, read to screen reader users. */
  alt: string;
}

export type CamfexImageProps = RealPhoto | PendingPhoto;

const zoomClass =
  "transition-transform duration-300 ease-out group-hover:scale-[1.04]";

/**
 * The one place any photograph enters the site.
 *
 * Reversal of the build plan §9.2 decision: photography renders in full,
 * true colour — no duotone/grayscale grading. Colour reads as commercial
 * and current for a food export platform; the warm sepia treatment this
 * component used to apply read as aged and drained exactly the images
 * (fresh produce especially) that need to look appetizing.
 *
 * What's left is a light, uniform exposure/contrast correction only —
 * no hue shift, no desaturation — so photos from mismatched sources
 * still read as one system while staying true colour. Once real
 * commissioned photography (one shoot, one photographer, consistent
 * lighting) replaces today's stand-in images, even this correction
 * likely stops earning its keep — worth revisiting at that point rather
 * than assumed necessary forever.
 *
 * With `pending` (no photo at all yet for that slot), renders a graded
 * placeholder panel instead of stock or invented photography, per the
 * forbidden list (build plan §11). That panel is a "no photo yet" UI
 * state, not photo grading, so it's unaffected by the change above.
 */
export function CamfexImage(props: CamfexImageProps) {
  const { aspectRatio, className = "", alt, zoomOnHover = false } = props;

  if (props.pending) {
    return (
      <div
        className={`relative overflow-hidden bg-ink ${className}`}
        style={{ aspectRatio }}
      >
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-gradient-to-br from-ink via-ink to-terracotta/30 ${zoomOnHover ? zoomClass : ""}`}
        />
        {/* Corner-anchored, not centered — a centered mark collides with
            overlaid text in full-bleed uses (hero, card scrims). */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-4 sm:right-5 sm:top-5"
        >
          <ImageSquare size={24} weight="thin" className="text-off-white/35" />
        </div>
        <span className="sr-only">Photography pending: {alt}</span>
      </div>
    );
  }

  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    pending: _pending,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    zoomOnHover: _zoom,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    aspectRatio: _aspectRatio,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    className: _className,
    ...imageProps
  } = props;

  return (
    <div
      className={`relative overflow-hidden bg-ink ${className}`}
      style={{ aspectRatio }}
    >
      <NextImage
        {...imageProps}
        alt={alt}
        fill
        sizes={imageProps.sizes ?? "100vw"}
        className={`object-cover contrast-[1.04] brightness-[1.02] ${zoomOnHover ? zoomClass : ""}`}
      />
    </div>
  );
}
