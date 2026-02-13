"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { NavBar } from "@/components/ui/tubelight-navbar";
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
  Home,
  Coffee,
  Store,
  Info,
  Mail,
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
  const nt = useTranslations("Common.nav");
  const locale = useLocale();

  const mainProduct = products[0];
  if (!mainProduct) return null;

  const navItems = [
    { name: nt("home"), url: "#", icon: Home },
    { name: nt("ourCoffee"), url: "#products", icon: Coffee },
    { name: nt("wholesale"), url: "#products", icon: Store },
    { name: nt("about"), url: "#about", icon: Info },
    { name: nt("contact"), url: "#contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-amber-200 pb-24 md:pb-0">
      <NavBar items={navItems} />

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

      {/* Products & Wholesale Section */}
      <section
        id="products"
        className="relative overflow-hidden bg-gradient-to-br from-amber-950 via-stone-900 to-stone-950 py-24 text-white"
      >
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 -mt-32 -ml-32 h-96 w-96 rounded-full bg-amber-800/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 -mb-32 -mr-32 h-96 w-96 rounded-full bg-amber-700/10 blur-3xl" />

        <div className="relative z-10 container mx-auto px-4">
          <AnimatedContainer className="mb-6 text-center">
            <h2 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">
              {wt("title")}
            </h2>
          </AnimatedContainer>

          <AnimatedContainer delay={0.1} className="mb-16 text-center">
            <p className="mx-auto max-w-3xl text-lg font-medium text-amber-100">
              {wt("perfectFor")}
            </p>
          </AnimatedContainer>

          {/* Feature Cards Section */}
          {/* <AnimatedContainer delay={0.2} className="mb-16">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <FeatureCard
                  feature={{
                    icon: CheckCircle2,
                    title: wt("whyResellers.consistent"),
                    description: "",
                  }}
                  className="rounded-2xl border border-amber-700/30 bg-gradient-to-br from-amber-900/30 to-stone-900/30 backdrop-blur-sm hover:border-amber-600/50 transition-colors h-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <FeatureCard
                  feature={{
                    icon: TrendingUp,
                    title: wt("whyResellers.stable"),
                    description: "",
                  }}
                  className="rounded-2xl border border-amber-700/30 bg-gradient-to-br from-amber-900/30 to-stone-900/30 backdrop-blur-sm hover:border-amber-600/50 transition-colors h-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <FeatureCard
                  feature={{
                    icon: Tag,
                    title: wt("whyResellers.price"),
                    description: "",
                  }}
                  className="rounded-2xl border border-amber-700/30 bg-gradient-to-br from-amber-900/30 to-stone-900/30 backdrop-blur-sm hover:border-amber-600/50 transition-colors h-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <FeatureCard
                  feature={{
                    icon: Palette,
                    title: wt("whyResellers.privateLabel"),
                    description: "",
                  }}
                  className="rounded-2xl border border-amber-700/30 bg-gradient-to-br from-amber-900/30 to-stone-900/30 backdrop-blur-sm hover:border-amber-600/50 transition-colors h-full"
                />
              </motion.div>
            </div>
          </AnimatedContainer> */}

          {/* Wholesale Q&A Section */}
          <AnimatedContainer delay={0.3} className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-black text-amber-400 mb-2">
                {wt("whyResellers.title")}
              </h3>
              <p className="text-amber-100/80 text-sm">
                Common questions from resellers and cafe owners
              </p>
            </div>
            <FaqAccordion
              data={[
                {
                  id: 1,
                  question: wt("faqs.moq.q"),
                  answer: wt("faqs.moq.a"),
                  icon: "📦",
                  iconPosition: "left",
                },
                {
                  id: 2,
                  question: wt("faqs.profit.q"),
                  answer: wt("faqs.profit.a"),
                  icon: "💰",
                  iconPosition: "left",
                },
                {
                  id: 3,
                  question: wt("faqs.consistency.q"),
                  answer: wt("faqs.consistency.a"),
                  icon: "✅",
                  iconPosition: "left",
                },
                {
                  id: 4,
                  question: wt("faqs.supply.q"),
                  answer: wt("faqs.supply.a"),
                  icon: "🚚",
                  iconPosition: "left",
                },
                {
                  id: 5,
                  question: wt("faqs.packaging.q"),
                  answer: wt("faqs.packaging.a"),
                  icon: "📋",
                  iconPosition: "left",
                },
                {
                  id: 6,
                  question: wt("faqs.payment.q"),
                  answer: wt("faqs.payment.a"),
                  icon: "💳",
                  iconPosition: "left",
                },
              ]}
              className="w-full bg-stone-900/50 rounded-2xl p-6"
              questionClassName="bg-amber-900/50 text-amber-50"
              answerClassName="bg-amber-900/20 text-amber-50 border border-amber-700/30"
            />
          </AnimatedContainer>

          {/* CTA */}
          <AnimatedContainer delay={0.4} className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-block rounded-3xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 px-10 py-6 text-center shadow-2xl shadow-amber-900/40 border border-amber-400/30"
            >
              <p className="text-white font-bold text-lg">
                Ready to start? Order your sample now via LINE
              </p>
              <p className="text-amber-100 text-sm mt-2">
                jane4079 • 089-8556550 • K. เจน
              </p>
            </motion.div>
          </AnimatedContainer>
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
