import { Card } from "@/components/ui/Card";
import { shows } from "@/lib/shows-data";

/**
 * The six-shows Card grid — reused verbatim on Home, /shows and
 * /the-show (content spec §4.2's "Section — The structure": "CARDS —
 * Six show cards, as home page Section 3"). Extracted here once it hit
 * a third use, rather than copy-pasted again.
 */
export function SixShowsGrid() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {shows.map((show) => (
        <Card
          key={show.slug}
          title={show.title}
          description={show.standfirst}
          href={`/shows/${show.slug}`}
          image={
            show.imageSrc
              ? { src: show.imageSrc, alt: show.imageAlt, aspectRatio: "4/3" }
              : { pending: true, alt: show.imageAlt, aspectRatio: "4/3" }
          }
        />
      ))}
    </div>
  );
}
