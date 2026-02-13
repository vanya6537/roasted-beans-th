"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import { HeroSection } from "@/components/ui/hero-section-2";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { FaqAccordion } from "@/components/ui/faq-chat-accordion";
import { products } from "@/data/products";
import {
  CheckCircle2,
  TrendingUp,
  Tag,
  Palette,
  Sparkles,
  MessageCircle,
  Clock,
  Truck,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

type AnimatedContainerProps = {
  delay?: number;
  className?: React.ComponentProps<typeof motion.div>["className"];
  children: React.ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return children;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const t = useTranslations("HomePage");
  const pt = useTranslations("Product");
  const ct = useTranslations("Contact");
  const wt = useTranslations("Wholesale");
  const ft = useTranslations("FAQ");
  const locale = useLocale();

  const mainProduct = products[0];
  if (!mainProduct) return null;

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-amber-200">
      <Navbar />

      {/* Hero Section - Integrated Component */}
      <HeroSection
        logo={{
          text: mainProduct.brandName,
          alt: "Ruem Yen Coffee",
        }}
        slogan={t("slogan")}
        title={t("title")}
        subtitle={t("description")}
        callToAction={{
          text: t("cta.roast"),
          href: "#products",
        }}
        backgroundImage="/product-coffee.png"
        contactInfo={{
          phone: ct("phone"),
          address: ct("address"),
        }}
      />


      {/* Why Us Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-3xl font-bold text-amber-900 md:text-4xl">
            {t("why.title")}
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            <div className="rounded-2xl border border-stone-100 bg-stone-50 p-8 shadow-sm">
              <div className="mb-4 text-4xl text-amber-600">🌄</div>
              <h3 className="mb-4 text-xl font-bold">
                {t("why.altitude.title")}
              </h3>
              <p className="leading-relaxed text-stone-600">
                {t("why.altitude.description")}
              </p>
            </div>
            <div className="rounded-2xl border border-stone-100 bg-stone-50 p-8 shadow-sm">
              <div className="mb-4 text-4xl text-amber-600">🔥</div>
              <h3 className="mb-4 text-xl font-bold">
                {t("why.freshness.title")}
              </h3>
              <p className="leading-relaxed text-stone-600">
                {t("why.freshness.description")}
              </p>
            </div>
            <div className="rounded-2xl border border-stone-100 bg-stone-50 p-8 shadow-sm">
              <div className="mb-4 text-4xl text-amber-600">💰</div>
              <h3 className="mb-4 text-xl font-bold">
                {t("why.direct.title")}
              </h3>
              <p className="leading-relaxed text-stone-600">
                {t("why.direct.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="products" className="bg-stone-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="text-center md:w-1/2">
              {/* Product Coffee Bag Image */}
              <div className="relative">
                <img 
                  src="/product-coffee.png" 
                  alt={mainProduct.name}
                  className="mx-auto max-w-sm rounded-xl shadow-lg"
                />
              </div>
              <p className="mt-4 text-sm text-stone-400 italic">
                {locale === "th" 
                  ? "ถุงวาล์ว คอฟฟี่เชียงใหม่ประเภท Grade A" 
                  : "Premium Thai Arabica Coffee Valve Bag"}
              </p>
            </div>
            <div className="md:w-1/2">
              <span className="text-sm font-bold tracking-widest text-amber-700 uppercase">
                {locale === "th" ? mainProduct.variety : mainProduct.variety}
              </span>
              <h2 className="mt-2 mb-6 text-3xl font-bold text-stone-900 md:text-5xl">
                {locale === "th"
                  ? "กาแฟคั่ว – ไทยอาราบิก้า เกรด A"
                  : mainProduct.name}
              </h2>

              <p className="mb-8 leading-relaxed text-stone-600">
                {locale === "th"
                  ? mainProduct.description.th
                  : mainProduct.description.en}
              </p>

              <ul className="mb-8 grid grid-cols-2 gap-4">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-amber-600" />
                  <span className="text-xs font-medium tracking-wide text-stone-700 uppercase">
                    {pt("process")}: {mainProduct.process}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-amber-600" />
                  <span className="text-xs font-medium tracking-wide text-stone-700 uppercase">
                    {pt("altitude")}: {mainProduct.origin.altitudeMeters.min}-
                    {mainProduct.origin.altitudeMeters.max}m
                  </span>
                </li>
              </ul>

              <div className="mb-8 rounded-xl border border-amber-100 bg-amber-50 p-4">
                <p className="mb-1 font-bold text-amber-900">
                  {pt("tasteNotes")}
                </p>
                <p className="text-amber-800 italic">
                  {mainProduct.tasteNotes.join(" • ")}
                </p>
              </div>

              <div className="mb-8 rounded-2xl border border-stone-200 bg-white p-6 font-sans shadow-sm">
                <h4 className="mb-4 font-bold text-stone-800">
                  {pt("roastLevels.title")}
                </h4>
                <div className="space-y-3">
                  {mainProduct.roastLevelsAvailable.map((level) => (
                    <p
                      key={level}
                      className="flex items-center justify-between border-t border-stone-50 pt-2 text-stone-700 first:border-0 first:pt-0"
                    >
                      <span>{pt(`roastLevels.${level}`)}</span>
                      <span
                        className={`h-6 w-6 rounded-full shadow-inner ${
                          level === "light"
                            ? "bg-amber-300"
                            : level === "medium"
                              ? "bg-amber-600"
                              : "bg-amber-900"
                        }`}
                      />
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {mainProduct.packagingOptions.map((opt) => (
                  <div key={opt.sku} className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold tracking-tighter text-amber-900">
                      {opt.priceTHB}฿
                    </span>
                    <span className="font-medium text-stone-500">
                      /{" "}
                      {opt.sizeGrams >= 1000
                        ? `${opt.sizeGrams / 1000}kg`
                        : `${opt.sizeGrams}g`}
                    </span>
                    {opt.shippingIncluded && (
                      <span className="ml-2 rounded-full border border-green-200 bg-green-100 px-2 py-0.5 text-[10px] font-black tracking-tighter text-green-700 uppercase">
                        FREE SHIPPING
                      </span>
                    )}
                    {opt.targetMarket === "wholesale" && (
                      <span className="ml-2 rounded-full border border-amber-200 bg-amber-100 px-2 py-0.5 text-[10px] font-black tracking-tighter text-amber-700 uppercase">
                        WHOLESALE PRICE
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <Link
                href="https://line.me/ti/p/~jane4079"
                target="_blank"
                className="mt-10 inline-block w-full rounded-2xl bg-green-600 px-10 py-5 text-center text-xl font-black text-white shadow-lg shadow-green-900/10 transition-all hover:scale-[1.02] hover:bg-green-500 active:scale-95"
              >
                Order via LINE (jane4079)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Section */}
      <section
        id="wholesale"
        className="relative overflow-hidden bg-stone-900 py-24 text-white"
      >
        <div className="absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full bg-amber-800/10 blur-3xl" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-black tracking-tight md:text-5xl">
            {wt("title")}
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg font-medium text-stone-400">
            {wt("perfectFor")}
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center justify-center rounded-2xl border border-stone-800 bg-stone-800/20 p-8 text-center backdrop-blur-sm">
              <h4 className="text-xl font-bold">
                {wt("whyResellers.consistent")}
              </h4>
            </div>
            <div className="flex items-center justify-center rounded-2xl border border-stone-800 bg-stone-800/20 p-8 text-center backdrop-blur-sm">
              <h4 className="text-xl font-bold">{wt("whyResellers.stable")}</h4>
            </div>
            <div className="flex items-center justify-center rounded-2xl border border-stone-800 bg-stone-800/20 p-8 text-center backdrop-blur-sm">
              <h4 className="text-xl font-bold">{wt("whyResellers.price")}</h4>
            </div>
            <div className="flex items-center justify-center rounded-2xl border border-stone-800 bg-stone-800/20 p-8 text-center backdrop-blur-sm">
              <h4 className="text-xl font-bold">
                {wt("whyResellers.privateLabel")}
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-amber-800/50 border-stone-800 bg-amber-900/40 p-8 text-center sm:col-span-2 lg:col-span-2">
              <h3 className="mb-2 text-2xl font-black text-amber-200">
                {wt("whyResellers.sample")}
              </h3>
              <p className="text-amber-100/70 italic">
                “Try 500g first before ordering bulk.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="bg-white py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-10 text-3xl font-black tracking-tight text-amber-900 md:text-5xl">
            From Chiang Mai Highlands to Your Cup
          </h2>
          <div className="prose prose-stone lg:prose-xl max-w-none text-stone-600">
            <p className="mb-8 leading-relaxed">
              We source Thai Arabica grown at high altitude in Sankamphaeng,
              Chiang Mai. Our mission is simple: Make high-quality Thai coffee
              accessible — without luxury pricing.
            </p>
            <div className="my-12 grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl bg-stone-50 p-6">
                <h4 className="mb-4 font-black tracking-tighter text-amber-900 uppercase">
                  Quality First
                </h4>
                <ul className="space-y-3 font-medium">
                  <li className="flex gap-2">✔ Defect-screened</li>
                  <li className="flex gap-2">✔ Small batch roasting</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-stone-50 p-6">
                <h4 className="mb-4 font-black tracking-tighter text-amber-900 uppercase">
                  Direct & Honest
                </h4>
                <ul className="space-y-3 font-medium">
                  <li className="flex gap-2">✔ Direct to consumer</li>
                  <li className="flex gap-2">✔ Real origins</li>
                </ul>
              </div>
            </div>
            <blockquote className="my-20 text-center text-2xl font-black tracking-tighter text-stone-300 uppercase">
              No fake branding. No imported blends. <br /> Just{" "}
              <span className="text-amber-600">real Thai Arabica</span>.
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-stone-100 py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <AnimatedContainer className="mb-12 text-center">
            <h2 className="text-3xl font-black tracking-tight text-stone-900 md:text-4xl">
              {ft("title")}
            </h2>
          </AnimatedContainer>
          <AnimatedContainer delay={0.2}>
            <FaqAccordion
              data={[
                {
                  id: 1,
                  question: ft("freshness.q"),
                  answer: ft("freshness.a"),
                  icon: "💧",
                  iconPosition: "left",
                },
                {
                  id: 2,
                  question: ft("storage.q"),
                  answer: ft("storage.a"),
                  icon: "📦",
                  iconPosition: "left",
                },
                {
                  id: 3,
                  question: ft("grind.q"),
                  answer: ft("grind.a"),
                  icon: "⚙️",
                  iconPosition: "left",
                },
                {
                  id: 4,
                  question: ft("shipping.q"),
                  answer: ft("shipping.a"),
                  icon: "🚚",
                  iconPosition: "left",
                },
              ]}
              className="w-full"
              answerClassName="bg-amber-50 text-stone-700 border border-amber-100"
            />
          </AnimatedContainer>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer
        id="contact"
        className="border-t border-stone-200 bg-gradient-to-b from-stone-50 to-stone-100 py-24"
      >
        <div className="container mx-auto px-4">
          <AnimatedContainer className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black tracking-tight text-stone-900 md:text-5xl">
              {locale === "th" ? "ติดต่อเราได้" : "Get in Touch"}
            </h2>
            <p className="mb-6 text-lg font-bold text-amber-700">
              {ct("brand")}
            </p>
            <p className="mx-auto max-w-2xl text-stone-600 italic">
              {ct("tagline")}
            </p>
          </AnimatedContainer>

          <AnimatedContainer
            delay={0.2}
            className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2"
          >
            <div className="rounded-3xl border border-stone-200 bg-white p-10 shadow-lg">
              <h3 className="mb-6 text-2xl font-black text-amber-900">
                {locale === "th" ? "ข้อมูลติดต่อ" : "Contact Information"}
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-bold text-stone-900">{ct("phone")}</p>
                    <p className="text-sm text-stone-500">
                      {locale === "th" ? "K. เจนกำลังรอ" : "K. Jen is waiting"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="font-bold text-stone-900">{ct("line")}</p>
                    <p className="text-sm text-stone-500">
                      {locale === "th" ? "เร็วที่สุด" : "Fastest response"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-bold text-stone-900">{ct("gmail")}</p>
                    <p className="text-sm text-stone-500">
                      {locale === "th" ? "24 ชั่วโมง" : "24/7 support"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-bold text-stone-900">{ct("address")}</p>
                    <p className="text-sm text-stone-500">
                      {locale === "th" ? "บ้านเราในเชียงใหม่" : "Our home in Chiang Mai"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-amber-400 bg-amber-50 p-10 text-center">
              <div className="mb-4 text-5xl">☕</div>
              <h3 className="mb-3 text-2xl font-black text-amber-900">
                {locale === "th" ? "ารสcoffee ดีที่สุด" : "Best Coffee Awaits"}
              </h3>
              <p className="mb-8 text-stone-600">
                {locale === "th"
                  ? "เชิญเรียนเยี่ยมและสั่งซื้อผ่าน LINE ได้เลย"
                  : "Order now via LINE and get free consultation"}
              </p>
              <Link
                href="https://line.me/ti/p/~jane4079"
                target="_blank"
                className="inline-block rounded-2xl bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-lg font-black text-white shadow-lg shadow-green-600/30 transition-all hover:scale-105 hover:shadow-lg active:scale-95"
              >
                {locale === "th" ? "เพิ่มเป็นเพื่อน" : "Add Friend on LINE"}
              </Link>
            </div>
          </AnimatedContainer>

          <AnimatedContainer
            delay={0.4}
            className="mt-20 border-t border-stone-200 pt-12 text-center"
          >
            <p className="mb-4 text-sm text-stone-500">
              {locale === "th"
                ? "ร่มเย็น คอฟฟี่ - กาแฟไทยคุณภาพจากหัวใจ"
                : "Roasted Beans - Premium Thai Coffee with Heart"}
            </p>
            <p className="text-xs font-bold tracking-widest text-stone-300 uppercase">
              © {new Date().getFullYear()} Roasted Beans TH.
            </p>
          </AnimatedContainer>
        </div>
      </footer>
    </div>
  );
}
