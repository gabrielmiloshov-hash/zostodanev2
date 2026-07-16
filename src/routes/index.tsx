import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Facebook,
  Instagram,
  Leaf,
  Wind,
  Sun,
  CalendarCheck,
  MessageCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import heroImg from "@/assets/hero-custom.jpg";
import mhbotImg from "@/assets/mhbot-nasa.jpg";
import redlightImg from "@/assets/redlight-custom.jpg";
import leavesBg from "@/assets/leaves-bg.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
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
          <a href="#uslugi" className="transition-colors hover:text-foreground">Услуги</a>
          <a href="#kako" className="transition-colors hover:text-foreground">Како функционира</a>
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
            Природно закрепнување
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Зошто да не?
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Рехабилитационен центар посветен на природно закрепнување преку
            хипербарична кислородна терапија (mHBOT) и биофотомодуларна терапија
            со црвена светлина.
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
              href="#uslugi"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Нашите услуги
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-mint/30 blur-2xl" aria-hidden />
          <img
            src={heroImg}
            alt="Внатрешноста на рехабилитационниот центар Зошто да не"
            width={1600}
            height={1200}
            className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="za-nas" className="border-t border-border/50 bg-cream/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.2fr]">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-primary">За нас</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Природно, нежно, ефикасно.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            „Зошто да не?“ е центар кој верува дека телото има извонредна
            способност за самоисцелување — потребна му е само вистинската
            поддршка. Нашата филозофија е фокусирана на неинвазивни методи кои
            го активираат природниот процес на закрепнување.
          </p>
          <p>
            Со комбинација на хипербарична кислородна терапија и биофотомодуларна
            терапија со црвена светлина, овозможуваме поддршка за спортисти,
            лица во рехабилитација и сите кои сакаат подобра енергија, кожа и
            благосостојба — без агресивни постапки.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { k: "100%", v: "Неинвазивно" },
              { k: "2", v: "Терапии" },
              { k: "12ч", v: "Работно време" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border/60 bg-background p-4">
                <div className="font-display text-2xl text-primary">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="uslugi" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Услуги</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Две терапии. Една цел — вашето закрепнување.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <ServiceCard
            img={mhbotImg}
            icon={<Wind className="h-5 w-5" />}
            tag="mHBOT"
            title="Хипербарична кислородна терапија"
            desc="Дишење на кислород под благо зголемен притисок што ја подобрува оксигенацијата на ткивата и го забрзува природното закрепнување."
            bullets={[
              "Побрзо закрепнување по повреди и напор",
              "Зголемена оксигенација на клетките",
              "Поддршка при воспалителни состојби",
              "Повеќе енергија и подобар сон",
            ]}
          />
          <ServiceCard
            img={redlightImg}
            icon={<Sun className="h-5 w-5" />}
            tag="Red Light"
            title="Биофотомодуларна терапија"
            desc="Терапија со црвена и блиско-инфрацрвена светлина што ги стимулира митохондриите и природното обновување на клетките."
            bullets={[
              "Закрепнување и обнова на клетките",
              "Намалување на воспаление и болка",
              "Поздрава, поеластична кожа",
              "Подобрување на циркулација",
            ]}
            accent
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  img,
  icon,
  tag,
  title,
  desc,
  bullets,
  accent,
}: {
  img: string;
  icon: React.ReactNode;
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  accent?: boolean;
}) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition-all hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={img}
          alt={title}
          width={1200}
          height={900}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium ${
            accent ? "bg-cream text-teal-deep" : "bg-primary text-primary-foreground"
          }`}
        >
          {tag}
        </span>
      </div>
      <div className="p-7">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-mint/40 text-teal-deep">
            {icon}
          </div>
          <h3 className="font-display text-2xl leading-tight">{title}</h3>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        <ul className="mt-5 space-y-2 text-sm">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
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
      title: "Консултација",
      desc: "Кратка средба каде разговараме за вашите потреби и целите на терапијата.",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Терапија",
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
              Рехабилитационен центар за природно закрепнување.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Навигација</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#za-nas" className="hover:text-primary">За нас</a></li>
              <li><a href="#uslugi" className="hover:text-primary">Услуги</a></li>
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
