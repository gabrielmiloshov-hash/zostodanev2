import { useEffect, useState } from "react";
import { X } from "lucide-react";

import gNadvor1 from "@/assets/galerija-nadvor-1.png.asset.json";
import gNadvor2 from "@/assets/galerija-nadvor-2.webp.asset.json";
import gNadvor3 from "@/assets/galerija-nadvor-3.webp.asset.json";
import gVnatre1 from "@/assets/galerija-vnatre-1.webp.asset.json";
import gVnatre2 from "@/assets/galerija-vnatre-2.webp.asset.json";
import gVnatre3 from "@/assets/galerija-vnatre-3.webp.asset.json";
import gSvetlina1 from "@/assets/galerija-svetlina-1.jpg.asset.json";
import gSvetlina2 from "@/assets/galerija-svetlina-2.jpg.asset.json";
import gKomoraNova from "@/assets/galerija-komora-nova.png.asset.json";
import gKomora2 from "@/assets/galerija-komora-2.webp.asset.json";
import gKomora3 from "@/assets/galerija-komora-3.webp.asset.json";
import gKomora4 from "@/assets/galerija-komora-4.webp.asset.json";

const groups = [
  {
    label: "Надворешност",
    caption: "Центарот „Зошто да не?“ од надворешна страна.",
    items: [
      { src: gNadvor1.url, alt: "Надворешност на центарот, поглед од десната страна" },
      { src: gNadvor2.url, alt: "Надворешност на центарот, поглед од левата страна" },
      { src: gNadvor3.url, alt: "Предна страна на центарот со влезот" },
    ],
  },
  {
    label: "Внатрешност",
    caption: "Просторот за биофотомодулација, со панелата.",
    items: [
      { src: gVnatre1.url, alt: "Внатрешност на центарот со панелата за биофотомодулација" },
      { src: gVnatre2.url, alt: "Внатрешност на центарот, поглед кон панелата" },
      { src: gVnatre3.url, alt: "Внатрешност на центарот со фотелата и панелата" },
    ],
  },
  {
    label: "За време на биофотомодулација",
    caption: "Панелата во дејство, со црвена и блиска инфрацрвена светлина.",
    items: [
      { src: gSvetlina1.url, alt: "Панелата за биофотомодулација во дејство со црвена светлина" },
      { src: gSvetlina2.url, alt: "Просторот осветлен со црвена светлина за време на третман" },
    ],
  },
  {
    label: "Хипербарична комора",
    caption: "Комората во која се изведува HBOT.",
    items: [
      { src: gKomoraNova.url, alt: "Хипербарична комора за HBOT третман" },
      { src: gKomora2.url, alt: "Хипербаричната комора со концентратори за кислород во просторијата" },
      { src: gKomora3.url, alt: "Отворена врата на хипербаричната комора со фотелата внатре" },
      { src: gKomora4.url, alt: "Поглед кон внатрешноста на хипербаричната комора" },
    ],
  },
];

export function Gallery() {
  const [selected, setSelected] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section id="galerija" className="border-t border-border/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Галерија</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Уште малку од нашиот центар.
          </h2>
        </div>

        <div className="mt-14 space-y-14">
          {groups.map((group) => (
            <div key={group.label}>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-display text-2xl">{group.label}</h3>
                <p className="text-sm text-muted-foreground">{group.caption}</p>
              </div>
              <div
                className={
                  group.items.length === 1
                    ? "mt-5 grid max-w-xl gap-4"
                    : group.items.length === 2
                      ? "mt-5 grid gap-4 md:grid-cols-2"
                      : "mt-5 grid gap-4 md:grid-cols-3"
                }
              >
                {group.items.map((item) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setSelected({ src: item.src, alt: item.alt })}
                    aria-label={`Зголеми: ${item.alt}`}
                    className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition-all hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Преглед на фотографија"
        >
          <button
            type="button"
            aria-label="Затвори"
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-h-full max-w-full rounded-2xl object-contain"
          />
        </div>
      )}
    </section>
  );
}
