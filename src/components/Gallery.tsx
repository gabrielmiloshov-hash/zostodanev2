import { useState } from "react";

import gNadvor1 from "@/assets/galerija-nadvor-1.png";
import gNadvor2 from "@/assets/galerija-nadvor-2.webp";
import gNadvor3 from "@/assets/galerija-nadvor-3.webp";
import gVnatre1 from "@/assets/galerija-vnatre-1.webp";
import gVnatre2 from "@/assets/galerija-vnatre-2.webp";
import gVnatre3 from "@/assets/galerija-vnatre-3.webp";
import gSvetlina1 from "@/assets/galerija-svetlina-1.jpg";
import gSvetlina2 from "@/assets/galerija-svetlina-2.jpg";
import gKomoraNova from "@/assets/galerija-komora-nova.png";
import gKomora2 from "@/assets/galerija-komora-2.webp";
import gKomora3 from "@/assets/galerija-komora-3.webp";
import gKomora4 from "@/assets/galerija-komora-4.webp";

const groups = [
  {
    label: "Надворешност",
    caption: "Центарот „Зошто да не?“ од надворешна страна.",
    items: [
      { src: gNadvor1, alt: "Надворешност на центарот, поглед од десната страна" },
      { src: gNadvor2, alt: "Надворешност на центарот, поглед од левата страна" },
      { src: gNadvor3, alt: "Предна страна на центарот со влезот" },
    ],
  },
  {
    label: "Внатрешност",
    caption: "Просторот за биофотомодулација, со панелата.",
    items: [
      { src: gVnatre1, alt: "Внатрешност на центарот со панелата за биофотомодулација" },
      { src: gVnatre2, alt: "Внатрешност на центарот, поглед кон панелата" },
      { src: gVnatre3, alt: "Внатрешност на центарот со фотелата и панелата" },
    ],
  },
  {
    label: "За време на биофотомодулација",
    caption: "Панелата во дејство, со црвена и блиска инфрацрвена светлина.",
    items: [
      { src: gSvetlina1, alt: "Панелата за биофотомодулација во дејство со црвена светлина" },
      { src: gSvetlina2, alt: "Просторот осветлен со црвена светлина за време на терапија" },
    ],
  },
  {
    label: "Хипербарична комора",
    caption: "Комората во која се изведува HBOT.",
    items: [
      { src: gKomoraNova, alt: "Хипербарична комора за HBOT терапија" },
      { src: gKomora2, alt: "Хипербаричната комора со концентратори за кислород во просторијата" },
      { src: gKomora3, alt: "Отворена врата на хипербаричната комора со фотелата внатре" },
      { src: gKomora4, alt: "Поглед кон внатрешноста на хипербаричната комора" },
    ],
  },
];

export function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

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
                    onClick={() => setSelected(item.src)}
                    className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition-all hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
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
          aria-label="Преглед на фотографија"
        >
          <img
            src={selected}
            alt="Преглед на фотографија од галеријата"
            className="max-h-full max-w-full rounded-2xl object-contain"
          />
        </div>
      )}
    </section>
  );
}
