import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Facebook,
  Instagram,
  Leaf,
  CalendarCheck,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import heroAsset from "@/assets/hero-custom.png.asset.json";
import leavesBg from "@/assets/leaves-bg.jpg";
import galKomora from "@/assets/galerija-komora.jpg.asset.json";
import galCentar from "@/assets/galerija-centar.jpg.asset.json";
import galCrvena2 from "@/assets/galerija-crvena-2.jpg.asset.json";

const heroImg = heroAsset.url;

import { Gallery } from "@/components/Gallery";
import { normobaricPackages } from "@/lib/treatment-pricing";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    title: "Зошто да не? | Центар за wellness и благосостојба",
    meta: [
      {
        name: "description",
        content:
          "Центарот Зошто да не? нуди HBOT, биофотомодулација и третмани со кислород за одмор, обнова и грижа за себе по достапни цени.",
      },
      {
        property: "og:title",
        content: "Зошто да не? | Центар за wellness и благосостојба",
      },
      {
        property: "og:description",
        content:
          "Центарот Зошто да не? нуди HBOT, биофотомодулација и третмани со кислород за одмор, обнова и грижа за себе по достапни цени.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Therapy />
      <NormobaricTherapy />
      <HowItWorks />
      <Gallery />
      <Contact />
      <Footer />

    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#pocetok" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/15 text-primary">
            <Leaf className="h-4 w-4" />
          </div>
          <span className="font-display text-lg tracking-tight">Зошто да не?</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#za-nas" className="transition-colors hover:text-foreground">За нас</a>
          <a href="#za-terapija" className="transition-colors hover:text-foreground">За третмани</a>
          <a href="#kako" className="transition-colors hover:text-foreground">Како функционира</a>
          <a href="#galerija" className="transition-colors hover:text-foreground">Галерија</a>
          <a href="#kontakt" className="transition-colors hover:text-foreground">Контакт</a>
        </nav>
        <a
          href="#kontakt"
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
        >
          Закажи термин
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const slides = [
    {
      src: heroImg,
      alt: "Надворешност на центарот Зошто да не",
      label: "Надвор од центарот",
    },
    {
      src: galCentar.url,
      alt: "Внатрешност на центарот Зошто да не",
      label: "Внатре во центарот",
    },
  ];

  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  const resetAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 6000);
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const minSwipeDistance = 40;
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) next();
      else prev();
      resetAutoplay();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section id="pocetok" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `url(${leavesBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28 lg:py-32">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full bg-mint/40 px-3 py-1 text-xs font-medium text-teal-deep">
            <Sparkles className="h-3 w-3" />
            Време за себе
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Зошто да не?
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Центар посветен на вашата благосостојба, со хипербарични третмани
            со кислород (HBOT) и биофотомодулација со црвена светлина.
            Мирен простор за одмор, обнова и грижа за себе.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
            >
              Закажи термин
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#za-terapija"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              За третмани
            </a>
          </div>
        </div>
        <div
          className="relative select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-mint/30 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[2rem] bg-muted shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((slide, i) => (
                <div key={slide.label} className="w-full flex-shrink-0">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    width={1600}
                    height={1200}
                    loading={i === 0 ? "eager" : "lazy"}
                    fetchPriority={i === 0 ? "high" : "auto"}
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              {slides[index].label}
            </div>
            <button
              type="button"
              aria-label="Претходна слика"
              onClick={() => {
                prev();
                resetAutoplay();
              }}
              className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-foreground shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Следна слика"
              onClick={() => {
                next();
                resetAutoplay();
              }}
              className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-foreground shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute bottom-4 right-4 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Слика ${i + 1}`}
                  onClick={() => {
                    setIndex(i);
                    resetAutoplay();
                  }}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === index ? "bg-white w-5" : "bg-white/60 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="za-nas" className="border-t border-border/50 bg-cream/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">За нас</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Мисија достапна за секого.
          </h2>
          <div className="mt-8 space-y-6 text-left">
            <div className="rounded-3xl border border-border/60 bg-mint/20 p-8 md:p-10">
              <p className="text-lg leading-relaxed text-foreground">
                Мисијата на нашето здружение е да ги направи современите третмани достапни за сите граѓани. Веруваме дека грижата за себе не треба да биде луксуз. Секој заслужува простор каде може да забави, да одмори и да посвети внимание на својата благосостојба.
              </p>
            </div>
            <div className="rounded-3xl border border-border/60 bg-card p-8 md:p-10">
              <p className="leading-relaxed text-muted-foreground">
                Центарот „Зошто да не?" постои од желба да понудиме пријатно место за одмор и обнова. Со третмани со кислород и светлина, ја надополнуваме вашата секојдневна грижа за себе во мирна и опуштена атмосфера.
              </p>
            </div>
            <div className="rounded-3xl border border-border/60 bg-card p-8 md:p-10">
              <p className="leading-relaxed text-muted-foreground">
                Секој корисник кај нас е пречекан со внимание, трпение и разбирање. Пред секој третман разговараме за вашите потреби, цели и очекувања, заедно да го избереме пристапот што ви одговара. Не брзаме и не оптоваруваме. Создаваме средина во која можете да се опуштите и да си посветите време.
              </p>
            </div>
            <div className="rounded-3xl border border-border/60 bg-card p-8 md:p-10">
              <p className="leading-relaxed text-muted-foreground">
                Нашиот сертифициран тим редовно ги следи насоките за хипербарични третмани со кислород и биофотомодулација. Веруваме дека стручноста има најголема вредност кога е придружена со искрена грижа за човекот. Затоа на секоја посета ѝ пристапуваме со внимание и посветеност.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Therapy() {
  return (
    <section id="za-terapija" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">За третмани</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Комбиниран третман за подобра обнова.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Третманите се спроведуваат комбинирано. HBOT и биофотомодулација се применуваат заедно во рамки на еден третман, во времетраење од 60 до 90 минути, во зависност од вашите потреби. Двата чекора се надополнуваат во една посета посветена на вашата обнова, а третманите ги изведува сертифициран тим.
            </p>
            <p>
              Третманот започнува со биофотомодулација: соодветни панели со црвена и блиска инфрацрвена светлина ја стимулираат кожата и ткивата. Потоа корисникот влегува во хипербарична комора, каде вдишува чист кислород под зголемен, но удобен притисок. На овој начин клетките добиваат повеќе кислород и поттик за подобро искористување на тој кислород.
            </p>
            <p>
              За време на третманот корисниците едноставно одмараат, со внимателна поддршка од нашиот тим.
            </p>
          </div>

        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:shadow-lg">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Старт пакет</div>
            <h3 className="mt-2 font-display text-2xl leading-tight">10 третмани</h3>
            <div className="mt-4">
              <span className="font-display text-4xl text-primary">13.000</span>
              <span className="text-lg text-muted-foreground"> денари</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Идеален за прво запознавање</p>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:shadow-lg">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Месечен пакет</div>
            <h3 className="mt-2 font-display text-2xl leading-tight">20 третмани</h3>
            <div className="mt-4">
              <span className="font-display text-4xl text-primary">18.000</span>
              <span className="text-lg text-muted-foreground"> денари</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">месечно</p>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:shadow-lg">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Пакет</div>
            <h3 className="mt-2 font-display text-2xl leading-tight">40 третмани</h3>
            <div className="mt-4">
              <span className="font-display text-4xl text-primary">580</span>
              <span className="text-lg text-muted-foreground"> денари по третман</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Вкупно 23.200 денари · месечно 11.600 денари</p>
          </div>

        </div>

        <div className="mt-10 max-w-3xl space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>Третманите се изведуваат од понеделник до петок; саботите и неделите корисниците одмораат.</p>
          <p>Плаќањето на третманите се врши однапред, преку уплата на жиро сметка на здружението.</p>
          <p>Единствениот дополнителен трошок е канила или маска за приклучок на кислород, што ја купувате вие. Ако не можете самостојно да набавите соодветна канила или маска, за 270 денари може ние да ви ја обезбедиме.</p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border/60 bg-cream/40 p-8 md:p-10">
            <div className="mb-4 overflow-hidden rounded-2xl border border-border/60">
              <img
                src={galKomora.url}
                alt="Комора за хипербаричен третман со кислород (HBOT)"
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3 w-3" />
              Хипербаричен третман со кислород
            </div>
            <h3 className="font-display text-2xl leading-tight">Што е HBOT?</h3>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                <strong className="text-foreground">HBOT (хипербаричен третман со кислород)</strong> е третман во кој корисникот дише чист кислород во комора со зголемен притисок. Тоа овозможува повеќе кислород да стигне до ткивата, додека вие удобно седите и одморате.
              </p>
              <p>
                Кислородот има важна улога во создавањето енергија и природните процеси на обнова на телото. Во текот на третманот корисникот едноставно седи или лежи и дише нормално. Нашиот тим е тука да се погрижи престојот да биде што попријатен.
              </p>
              <p>
                Нашите корисници го избираат HBOT како дополнителна поддршка за обнова, одмор по физички напор и грижа за себе. Пред првиот третман разговараме за вашите потреби и здравствени ограничувања. Кога е потребно, препорачуваме совет од лекар за да проверите дали третманот е соодветен за вас.
              </p>
              <div className="rounded-2xl bg-mint/20 p-5">
                <h4 className="mb-3 text-sm font-semibold text-foreground">Најчести цели на нашите корисници:</h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Поддршка за обнова
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Одмор по физички напор
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Грижа за општата благосостојба
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Време за себе
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Одмор од секојдневниот замор
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Поддршка на природната рамнотежа
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border/60 bg-mint/20 p-8 md:p-10">
            <div className="mb-4 overflow-hidden rounded-2xl border border-border/60">
              <img
                src={galCrvena2.url}
                alt="Панел за биофотомодулација со црвена светлина"
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3 w-3" />
              Биофотомодулација
            </div>
            <h3 className="font-display text-2xl leading-tight">Што е биофотомодулација?</h3>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                <strong className="text-foreground">Биофотомодулацијата</strong>, позната и како третман со црвена и блиска инфрацрвена светлина, користи одредени бранови должини на светлината за поддршка на природните процеси на создавање енергија во клетките.
              </p>
              <p>
                Светлината ја апсорбираат клетките и може да ги поддржи нивните процеси на обнова. Корисниците го избираат овој третман како дел од грижата за кожата, одморот по физичка активност и секојдневната благосостојба.
              </p>
              <p>
                Во нашиот центар биофотомодулацијата се применува пред влегувањето во HBOT комората. Светлинскиот третман и кислородот се надополнуваат како два последователни чекори во вашата посета за одмор и обнова.
              </p>
              <div className="rounded-2xl bg-cream/60 p-5">
                <h4 className="mb-3 text-sm font-semibold text-foreground">Можни придобивки од третманот</h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Подобрување на циркулацијата
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Поддршка за обнова на кожата
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Чувство на удобност по напор
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Поддршка на создавањето колаген
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Релаксација и подобар сон
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Подобар тонус на лицето
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function NormobaricTherapy() {
  return (
    <section id="normobaricna-terapija" className="border-t border-border/50 bg-cream/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Нормобаричен оксиген третман</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Чист кислород надвор од комора.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">Нормобаричниот оксиген третман</strong> е седење во пријатна, мирна средина додека дишете чист кислород преку назална канила или маска на нормален атмосферски притисок. За разлика од хипербаричниот третман, тука не влегувате во комора и не чувствувате притисок во ушите. Тоа го прави третманот релаксирана опција за одмор и грижа за себе, со претходен разговор за вашите потреби.
            </p>
            <p>
              Во нашиот центар овој третман го комбинираме со биофотомодулација. Во текот на 30 минути чистиот кислород се диши истовремено додека светлинските панели со црвена и блиска инфрацрвена светлина ја стимулираат кожата и ткивата. Комбинацијата е наменета за одмор, поддршка на природната обнова и чувство на свежина.
            </p>
            <p>
              Оваа комбинација е одличен избор за сите кои сакаат природна поддршка за организмот без потреба од влегување во хипербарична комора. Третманите се достапни во пакет од 20 посети, со распоред усогласен со вашите потреби.
            </p>
          </div>
        </div>

        <div className="mt-14 max-w-md">
          {normobaricPackages.map((offer) => (
          <div key={offer.treatments} className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:shadow-lg">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Пакет</div>
            <h3 className="mt-2 font-display text-2xl leading-tight">{offer.treatments} третмани</h3>
            <div className="mt-4">
              <span className="font-display text-4xl text-primary">{offer.priceDenars.toLocaleString("de-DE")}</span>
              <span className="text-lg text-muted-foreground"> денари</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Комбиниран нормобаричен оксиген третман + биофотомодулација</p>
          </div>
          ))}
        </div>


        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-border/60 bg-cream/40 p-8 md:p-10">
            <h3 className="font-display text-2xl leading-tight">Како се одвива третманот?</h3>
            <ol className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">1</span>
                Седнете удобно во нашиот простор за одмор.
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">2</span>
                Поставуваме назална канила или маска за чист кислород.
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">3</span>
                30 минути дишете чист кислород на нормален притисок, додека истовремено работи панелот со црвена и блиска инфрацрвена светлина.
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">4</span>
                Завршувате со краток разговор и совети за дома.
              </li>
            </ol>
          </div>

          <div className="rounded-3xl border border-border/60 bg-mint/20 p-8 md:p-10">
            <h3 className="font-display text-2xl leading-tight">За кого е наменет?</h3>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                Лица со висок стрес и замор
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                Спортисти и рекреативци
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                Лица што сакаат пауза од секојдневието
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                Лица што посветуваат внимание на кожата
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                Лица што се грижат за својата благосостојба
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                Сите кои сакаат природна нега
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


function HowItWorks() {

  const steps = [
    {
      icon: <CalendarCheck className="h-5 w-5" />,
      title: "Закажување",
      desc: "Јавете се или пополнете ја формата. Ќе најдеме термин што ви одговара.",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Разговор",
      desc: "Кратка средба каде разговараме за вашите потреби и целите на третманот.",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Третман",
      desc: "Опуштете се. Ние се грижиме за вас во смирувачка, професионална атмосфера.",
    },
  ];
  return (
    <section id="kako" className="border-t border-border/50 bg-mint/20">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Како функционира</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Три едноставни чекори.
          </h2>
        </div>
        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-3xl border border-border/60 bg-background p-8"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground">
                  {s.icon}
                </div>
                <span className="font-display text-3xl text-primary/30">0{i + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="kontakt" className="border-t border-border/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Контакт</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Тука сме за вас.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Јавете се, пишете ни или пополнете ја формата — ќе ви одговориме
            во најкус можен рок.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            <InfoRow
              icon={<Phone className="h-4 w-4" />}
              label="Телефон"
              value="070 384 493"
              href="tel:+38970384493"
            />
            <InfoRow
              icon={<Phone className="h-4 w-4" />}
              label="Телефон"
              value="075 605 707"
              href="tel:+38975605707"
            />
            <InfoRow
              icon={<Mail className="h-4 w-4" />}
              label="Е-пошта"
              value="zdruzeniezostodane@gmail.com"
              href="mailto:zdruzeniezostodane@gmail.com"
            />
            <InfoRow
              icon={<Clock className="h-4 w-4" />}
              label="Работно време"
              value="Понеделник – Петок, 09:00 – 21:00"
            />
            <InfoRow
              icon={<MapPin className="h-4 w-4" />}
              label="Локација"
              value="Погледни на мапа"
              href="https://maps.app.goo.gl/Tr8NR5EfCqd1ocKs8"
            />
            <div className="flex gap-3 pt-2">
              <SocialIcon
                href="https://www.facebook.com/profile.php?id=61569229972695"
                label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon
                href="https://www.instagram.com/zdruzeniezostodane/"
                label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </SocialIcon>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-border/60">
              <iframe
                title="Локација на мапа"
                src="https://www.google.com/maps?q=Skopje&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[280px] w-full border-0"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm"
          >
            <h3 className="font-display text-2xl">Испратете ни порака</h3>
            <div className="mt-6 space-y-4">
              <Field label="Име" name="name" type="text" required />
              <Field label="Е-пошта" name="email" type="email" required />
              <div>
                <label className="block text-sm font-medium text-foreground">Порака</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
              >
                Испрати порака
                <ArrowRight className="h-4 w-4" />
              </button>
              {sent && (
                <p className="rounded-2xl bg-mint/40 px-4 py-3 text-sm text-teal-deep">
                  Ви благодариме! Ќе ве контактираме наскоро.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-full border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-2xl border border-border/60 bg-background p-4 transition-colors hover:bg-secondary/60">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-mint/40 text-teal-deep">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
    >
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 bg-cream/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/15 text-primary">
                <Leaf className="h-4 w-4" />
              </div>
              <span className="font-display text-lg">Зошто да не?</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Центар за одмор, обнова и грижа за себе.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Навигација</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#za-nas" className="hover:text-primary">За нас</a></li>
              <li><a href="#za-terapija" className="hover:text-primary">За третмани</a></li>
              <li><a href="#kako" className="hover:text-primary">Како функционира</a></li>
              <li><a href="#kontakt" className="hover:text-primary">Контакт</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Работно време</div>
            <p className="mt-3 text-sm text-muted-foreground">
              Понеделник – Петок<br />09:00 – 21:00
            </p>
            <div className="mt-4 flex gap-3">
              <SocialIcon
                href="https://www.facebook.com/profile.php?id=61569229972695"
                label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon
                href="https://www.instagram.com/zdruzeniezostodane/"
                label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </SocialIcon>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Здружение „Зошто да не?“. Сите права задржани.
        </div>
      </div>
    </footer>
  );
}
