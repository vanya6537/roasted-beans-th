"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { HeroSection } from "@/components/ui/hero-section-2";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { FaqAccordion } from "@/components/ui/faq-chat-accordion";
import AnimatedFooter from "@/components/ui/animated-footer";
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
  const at = useTranslations("About");
  const pt = useTranslations("Product");
  const pdt = useTranslations("ProductDisplay");
  const ct = useTranslations("Contact");
  const wt = useTranslations("Wholesale");
  const ft = useTranslations("FAQ");
  const nt = useTranslations("Common.nav");
  const locale = useLocale();

  const mainProduct = products[0];
  if (!mainProduct) return null;

  const navItems = [
    { name: nt("home"), url: "#", icon: Home },
    // { name: nt("ourCoffee"), url: "#products", icon: Coffee },
    { name: nt("wholesale"), url: "#products", icon: Store },
    { name: nt("about"), url: "#about", icon: Info },
    { name: nt("contact"), url: "#contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-amber-200 pb-24 md:pb-0">
      {/* Language Switcher - Top Right (Desktop) */}
      <div className="hidden md:block fixed md:top-6 md:right-6 z-50">
        <LanguageSwitcher variant="compact" />
      </div>
      
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

          {/* Product Options Display */}
          <AnimatedContainer delay={0.15} className="mb-16 mx-auto max-w-4xl">
            <div className="rounded-2xl border border-amber-700/30 bg-gradient-to-br from-amber-900/30 to-stone-900/30 backdrop-blur-sm p-8">
              <h3 className="text-2xl font-black text-amber-300 mb-6 text-center">
                {mainProduct.name}
              </h3>
                <div className="mb-8 flex justify-center">
                  <svg className="absolute -top-[999px] -left-[999px] w-0 h-0">
                    <defs>
                      <clipPath id="clip-rect" clipPathUnits="objectBoundingBox">
                        <path
                          d="M0.5 0L0.550709 0.0460541C0.541963 0.0640581 0.528578 0.0791151 0.513027 0.0917341C0.520456 0.0907291 0.527892 0.0897201 0.535322 0.0887131C0.611493 0.0783851 0.687008 0.0681471 0.74727 0.0620541C0.784018 0.0583381 0.81958 0.0556691 0.848085 0.0560471C0.861663 0.0562271 0.879579 0.0571111 0.897003 0.0610981C0.909779 0.0640211 0.953305 0.0757431 0.966627 0.113912C0.981722 0.157163 0.941632 0.185488 0.934622 0.19038C0.921226 0.199729 0.905329 0.206897 0.892499 0.212115C0.870649 0.221001 0.842659 0.230142 0.811999 0.239254C0.83681 0.236656 0.861008 0.235257 0.882435 0.23621C0.898377 0.236918 0.921559 0.239201 0.943733 0.24826C0.970081 0.259024 0.995291 0.280051 0.999439 0.311122C1.00342 0.340933 0.985349 0.363373 0.972847 0.375304C0.959707 0.387843 0.943414 0.397844 0.928912 0.405582C0.908422 0.416516 0.883341 0.427176 0.856112 0.437447C0.864364 0.436866 0.872329 0.436539 0.879902 0.436521C0.894726 0.436485 0.918867 0.437439 0.942277 0.446087C0.955191 0.450858 0.970509 0.458949 0.982453 0.472319C0.994857 0.486205 0.999891 0.501633 0.999891 0.515923C0.999891 0.545114 0.979611 0.565612 0.967435 0.575746C0.953994 0.586934 0.937862 0.595927 0.923325 0.603007C0.898842 0.614932 0.868113 0.626538 0.834975 0.637664C0.839838 0.637396 0.844565 0.637223 0.849131 0.637157C0.862911 0.636959 0.885294 0.637431 0.907315 0.644301C0.91929 0.648037 0.935423 0.654982 0.948734 0.667909C0.96307 0.681831 0.969583 0.69831 0.969583 0.714241C0.969583 0.756168 0.930027 0.781711 0.913544 0.791403C0.891777 0.804203 0.864569 0.815187 0.838085 0.824629C0.790903 0.84145 0.729751 0.858922 0.669115 0.876246C0.66103 0.878556 0.652955 0.880864 0.644923 0.883166C0.574356 0.903398 0.504814 0.923898 0.447288 0.945539C0.385857 0.968649 0.354123 0.98743 0.343618 0.999097L0.202975 0.923461C0.215492 0.909559 0.231313 0.896865 0.249116 0.885256C0.245423 0.885811 0.241771 0.886347 0.238165 0.886862C0.198801 0.892483 0.158749 0.89657 0.125136 0.895416C0.10872 0.894852 0.0869431 0.892883 0.0658381 0.885656C0.0427861 0.877762 0.014566 0.861068 0.00449603 0.831173C-0.00578897 0.800641 0.00946505 0.775473 0.0227 0.761104C0.035552 0.747151 0.0521941 0.73661 0.0660451 0.729015C0.0763781 0.723348 0.0879781 0.717821 0.10046 0.712441C0.0918191 0.7114 0.0828791 0.709795 0.0740171 0.70737C0.0519021 0.701317 0.021352 0.687312 0.00720103 0.65819C-0.00776397 0.627392 0.00549305 0.600161 0.018904 0.584108C0.03142 0.569125 0.048329 0.557944 0.061925 0.550133C0.0899171 0.534051 0.127869 0.51891 0.167323 0.504992C0.189196 0.497276 0.213195 0.489371 0.238664 0.48135C0.201179 0.486283 0.163943 0.489581 0.131973 0.488597C0.114641 0.488064 0.0935231 0.486164 0.0730311 0.480032C0.0519071 0.47371 0.024429 0.460566 0.00936805 0.434874C-0.00727695 0.406482 0.000740049 0.379077 0.014172 0.360311C0.026036 0.343734 0.043174 0.331657 0.0566 0.32353C0.084167 0.306842 0.121704 0.291789 0.159992 0.278421C0.179936 0.271457 0.2017 0.264408 0.224764 0.257328C0.191619 0.258997 0.158935 0.259269 0.131101 0.256364C0.115367 0.254721 0.0954681 0.251528 0.0765251 0.244134C0.0569951 0.236512 0.030269 0.220901 0.019911 0.192566C0.00630305 0.155339 0.028173 0.125216 0.050968 0.10819C0.070358 0.0937081 0.094464 0.0847721 0.112073 0.0791001C0.142823 0.0691931 0.183388 0.0604071 0.219871 0.0525041C0.226304 0.0511111 0.232611 0.0497451 0.238714 0.0484051C0.283575 0.0385571 0.323527 0.0289901 0.35429 0.0175781L0.5 0Z"
                          fill="black"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  
                  <Image
                  src={"/product-coffee.png"}
                  alt={mainProduct.name}
                  width={670}
                  height={1172}
                  className="w-full max-w-[670px] h-auto max-h-[50vh] md:max-h-[60vh] object-cover transition-transform duration-300 hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 670px"
                  style={{
                    clipPath: 'url(#clip-rect)'
                  }}
                  />
                </div>
                {/* Specs Grid */}
              <div className="grid gap-4 md:grid-cols-2 mb-8">
                <div className="rounded-lg bg-amber-900/40 p-4 border border-amber-700/20">
                  <p className="text-amber-200/70 text-sm font-semibold mb-2">{pdt("labels.origin")}</p>
                  <p className="text-white font-bold">{pdt("origin.country")}</p>
                  <p className="text-amber-100 text-sm">{pdt("origin.detail")}</p>
                  <p className="text-amber-200/60 text-xs mt-1">{mainProduct.origin.altitudeMeters.min}–{mainProduct.origin.altitudeMeters.max}m</p>
                </div>
                <div className="rounded-lg bg-amber-900/40 p-4 border border-amber-700/20">
                  <p className="text-amber-200/70 text-sm font-semibold mb-2">{pdt("labels.variety")}</p>
                  <p className="text-white font-bold">{mainProduct.variety}</p>
                  <p className="text-amber-100 text-sm">{mainProduct.grade} • {mainProduct.process}</p>
                  <p className="text-amber-200/60 text-xs mt-1">{locale === 'th' ? 'วันที่คั่ว: 31/1/2026' : 'Roast Date: 2026-01-31'}</p>
                </div>
              </div>

              {/* Taste Notes */}
              <div className="mb-8">
                <p className="text-amber-200/70 text-sm font-semibold mb-3">{pdt("labels.tasteNotes")}</p>
                <div className="flex flex-wrap gap-2">
                  {mainProduct.tasteNotes.map((note) => (
                    <span key={note} className="inline-block px-4 py-2 rounded-full bg-amber-600/30 border border-amber-500/50 text-amber-100 text-sm font-medium">
                      {pdt(`tasteNotes.${note}`)}
                    </span>
                  ))}
                </div>
              </div>

              {/* Roast Levels */}
              <div className="mb-8">
                <p className="text-amber-200/70 text-sm font-semibold mb-3">{pdt("labels.roastLevels")}</p>
                <div className="flex flex-wrap gap-2">
                  {mainProduct.roastLevelsAvailable.map((level) => (
                    <span key={level} className="inline-block px-4 py-2 rounded-lg bg-amber-900/40 border border-amber-600/30 text-amber-50 text-sm font-medium capitalize">
                      {pdt(`roastNames.${level}`)}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div>
                <p className="text-amber-200/70 text-sm font-semibold mb-3">{pdt("labels.pricing")}</p>
                <div className="grid gap-3 md:grid-cols-2">
                  {mainProduct.packagingOptions.map((option) => (
                    <div key={option.sku} className="rounded-lg bg-amber-900/50 p-4 border border-amber-600/30">
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-white font-bold">{option.sizeGrams}{pdt("size.grams")}</p>
                        <p className="text-amber-300 font-bold text-lg">{option.priceTHB}฿</p>
                      </div>
                      <div className="text-amber-100/70 text-xs space-y-1">
                        <p>{option.shippingIncluded ? '✓ ' + pdt("packaging.freeShipping") : pdt("packaging.shippingTBD")}</p>
                        <p>{option.vatIncluded ? '✓ ' + pdt("packaging.vatIncluded") : pdt("packaging.vatNotIncluded")}</p>
                        <p className="font-semibold text-amber-300 mt-2">{pdt(`size.market.${option.targetMarket}`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
              questionClassName="text-amber-50"
              answerClassName="border-amber-100 bg-amber-50"
            />
          </AnimatedContainer>

          {/* Simple LINE CTA */}
          <AnimatedContainer delay={0.5} className="mt-16 text-center">
            <Link
              href="https://line.me/ti/p/~jane4079"
              target="_blank"
              className="inline-block px-8 py-3 text-lg font-bold text-green-500 border border-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              {locale === 'th' ? 'สั่งซื้อผ่าน LINE' : 'Order via LINE'}
            </Link>
          </AnimatedContainer>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="bg-white py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-10 text-3xl font-black tracking-tight text-amber-900 md:text-5xl">
            {at("title")}
          </h2>
          <div className="prose prose-stone lg:prose-xl max-w-none text-stone-600">
            <p className="mb-8 leading-relaxed">
              {at("description")}
            </p>
            <div className="my-12 grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl bg-stone-50 p-6">
                <h4 className="mb-4 font-black tracking-tighter text-amber-900 uppercase">
                  {at("qualityFirst.title")}
                </h4>
                <ul className="space-y-3 font-medium">
                  <li className="flex gap-2">✔ {at("qualityFirst.items.0")}</li>
                  <li className="flex gap-2">✔ {at("qualityFirst.items.1")}</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-stone-50 p-6">
                <h4 className="mb-4 font-black tracking-tighter text-amber-900 uppercase">
                  {at("directHonest.title")}
                </h4>
                <ul className="space-y-3 font-medium">
                  <li className="flex gap-2">✔ {at("directHonest.items.0")}</li>
                  <li className="flex gap-2">✔ {at("directHonest.items.1")}</li>
                </ul>
              </div>
            </div>
            <blockquote className="my-20 text-center text-2xl font-black tracking-tighter text-stone-300 uppercase">
              {at("blockquote")}
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

      {/* Contact Section */}
      <section
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
                    <Link
                      href="https://line.me/ti/p/~jane4079"
                      target="_blank"
                      className="font-bold text-stone-900 hover:text-green-600 transition-colors underline"
                    >
                      {ct("phone")}
                    </Link>
                    <p className="text-sm text-stone-500">
                      {locale === "th" ? "K. เจนกำลังรอ" : "K. Jen is waiting"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">💬</span>
                  <div>
                    <Link
                      href="https://line.me/ti/p/~jane4079"
                      target="_blank"
                      className="font-bold text-stone-900 hover:text-green-600 transition-colors underline"
                    >
                      {ct("line")}
                    </Link>
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
                className="inline-block px-8 py-3 text-lg font-bold text-green-500 border border-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                {locale === "th" ? "เพิ่มเป็นเพื่อน" : "Add Friend on LINE"}
              </Link>
            </div>
          </AnimatedContainer>

          <AnimatedContainer
            delay={0.4}
            className="mt-20 border-t border-stone-200 pt-12 text-center"
          >
            <div className="mb-6">
              <LanguageSwitcher variant="full" />
            </div>
            <p className="mb-4 text-sm text-stone-500">
              {locale === "th"
                ? "ร่มเย็น คอฟฟี่ - กาแฟไทยคุณภาพจากหัวใจ"
                : "Roasted Beans - Premium Thai Coffee with Heart"}
            </p>
          </AnimatedContainer>
        </div>
      </section>

      {/* Animated Footer with Wave Animation */}
      <AnimatedFooter
        leftLinks={[
          { href: "#products", label: locale === 'th' ? "สินค้า" : "Products" },
          { href: "#about", label: locale === 'th' ? "เกี่ยวกับเรา" : "About" },
        ]}
        rightLinks={[
          { href: "https://line.me/ti/p/~jane4079", label: "LINE" },
          { href: `mailto:${ct("gmail")}`, label: locale === 'th' ? "อีเมล" : "Email" },
          { href: "#contact", label: locale === 'th' ? "ติดต่อ" : "Contact" },
        ]}
        copyrightText={`© ${new Date().getFullYear()} Roasted Beans TH. ${locale === 'th' ? 'กาแฟไทยคุณภาพจากหัวใจ' : 'Premium Thai Coffee with Heart'}`}
        barCount={23}
      />
    </div>
  );
}
