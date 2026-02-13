import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const isThaiLocale = locale === "th";
  const baseUrl = "https://roastedbeans.th";
  const canonicalUrl = `${baseUrl}/${locale}`;

  return {
    title: isThaiLocale
      ? "ร่มเย็น คอฟฟี่ | เมล็ดกาแฟไทยคุณภาพเยี่ยมจากเชียงใหม่"
      : "Roasted Beans Chiang Mai | Premium Thai Arabica Coffee",
    description: isThaiLocale
      ? "เมล็ดกาแฟไทยอาราบิก้า เกรด A จากเชียงใหม่ สูง 1,300-1,500 เมตร คั่วสดใหม่ตามออเดอร์ ราคาส่งพิเศษ ฟรีค่าจัดส่ง"
      : "Premium Grade A Thai Arabica coffee from Chiang Mai. Fresh roasted, direct from farm to your cup. Wholesale pricing available. Free shipping on orders.",
    keywords: isThaiLocale
      ? "กาแฟไทย, กาแฟเชียงใหม่, อาราบิก้า, คาทิมอร์, กาแฟคุณภาพเยี่ยม, กาแฟส่ง, ราคาส่ง"
      : "Thai coffee, Chiang Mai coffee, arabica, catimor, premium grade A, wholesale coffee, direct trade",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "th-TH": `${baseUrl}/th`,
        "en-US": `${baseUrl}/en`,
        "x-default": `${baseUrl}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: isThaiLocale ? "th_TH" : "en_US",
      url: canonicalUrl,
      siteName: isThaiLocale
        ? "ร่มเย็น คอฟฟี่"
        : "Roasted Beans Chiang Mai",
      title: isThaiLocale
        ? "ร่มเย็น คอฟฟี่ | เมล็ดกาแฟไทยคุณภาพเยี่ยมจากเชียงใหม่"
        : "Roasted Beans Chiang Mai - Premium Thai Arabica",
      description: isThaiLocale
        ? "เมล็ดกาแฟไทยอาราบิก้า เกรด A จากเชียงใหม่ สูง 1,300-1,500 เมตร คั่วสดใหม่ตามออเดอร์"
        : "Premium Grade A Thai Arabica coffee from Chiang Mai. Fresh roasted, direct from farm.",
      images: [
        {
          url: "/product-coffee.jpg",
          width: 1200,
          height: 1500,
          alt: isThaiLocale
            ? "ร่มเย็น คอฟฟี่ - กาแฟเชียงใหม่"
            : "Roasted Beans Coffee Bag",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isThaiLocale
        ? "ร่มเย็น คอฟฟี่ | เมล็ดกาแฟไทยคุณภาพเยี่ยม"
        : "Roasted Beans Chiang Mai",
      description: isThaiLocale
        ? "เมล็ดกาแฟไทยอาราบิก้า เกรด A จากเชียงใหม่"
        : "Premium Thai Arabica Coffee from Chiang Mai",
      images: ["/product-coffee.jpg"],
    },
    icons: [{ rel: "icon", url: "/favicon.ico" }],
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: "Roasted Beans Coffee",
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
      googleBot: "index, follow",
    },
    manifest: "/manifest.json",
  };
}

export const viewport = "width=device-width, initial-scale=1.0";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${geist.variable}`}>
      <head>
        <link rel="canonical" href={`https://roastedbeans.th/${locale}`} />
        <link rel="alternate" hrefLang="th" href="https://roastedbeans.th/th" />
        <link rel="alternate" hrefLang="en" href="https://roastedbeans.th/en" />
        <link rel="alternate" hrefLang="x-default" href="https://roastedbeans.th/en" />
        <meta name="theme-color" content="#92400e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name:
                locale === "th"
                  ? "ร่มเย็น คอฟฟี่"
                  : "Roasted Beans Chiang Mai",
              alternateName: locale === "th" ? "Ruem Yen Coffee" : "ร่มเย็น คอฟฟี่",
              description:
                locale === "th"
                  ? "เมล็ดกาแฟไทยอาราบิก้า เกรด A จากเชียงใหม่ ปลูกที่ความสูง 1,300-1,500 เมตร คั่วสดใหม่ตามออเดอร์"
                  : "Premium Grade A Thai Arabica coffee from Chiang Mai, grown at 1,300-1,500m altitude, fresh roasted to order",
              image: "https://roastedbeans.th/product-coffee.jpg",
              telephone: "+66-89-855-6550",
              email: "jane4079@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sankamphang",
                addressLocality:
                  locale === "th" ? "เชียงใหม่" : "Chiang Mai",
                addressRegion:
                  locale === "th" ? "เชียงใหม่" : "Chiang Mai",
                postalCode: "50130",
                addressCountry: "TH",
              },
              sameAs: [
                "https://line.me/ti/p/~jane4079",
                "mailto:jane4079@gmail.com",
              ],
              priceRange: "฿฿",
              areaServed: ["TH", "Asia"],
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "THB",
                lowPrice: "350",
                highPrice: "599",
                availability: "https://schema.org/InStock",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Sales",
                telephone: "+66-89-855-6550",
                email: "jane4079@gmail.com",
                areaServed: ["TH"],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name:
                locale === "th"
                  ? "กาแฟคั่ว ไทยอาราบิก้า เกรด A ถุงวาล์ว"
                  : "Roasted Thai Arabica Grade A Coffee - Valve Bag",
              image: "https://roastedbeans.th/product-coffee.jpg",
              description:
                locale === "th"
                  ? "เมล็ดกาแฟไทยอาราบิก้า พันธุ์คาทิมอร์ เกรด A ปลูกที่ความสูง 1,300-1,500 เมตร จากแขวงสันกำแพง เชียงใหม่ แปรรูปแบบ Washed คั่วสดใหม่ตามออเดอร์ รสชาติ น้ำหวาน ถั่ว นม โชคโลต"
                  : "Premium Grade A Thai Arabica Catimor coffee grown at 1,300-1,500m in Sankamphang, Chiang Mai. Washed process, fresh roasted to order. Taste notes: honey, peanut, milk, chocolate",
              brand: {
                "@type": "Brand",
                name:
                  locale === "th"
                    ? "ร่มเย็น คอฟฟี่"
                    : "Roasted Beans",
              },
              sku: "RYC-ARABICA-A",
              offers: [
                {
                  "@type": "Offer",
                  url: "https://roastedbeans.th/" + locale,
                  name: locale === "th" ? "ขายปลีก 500 กรัม" : "Retail 500g",
                  priceCurrency: "THB",
                  price: "350",
                  priceValidUntil: "2026-12-31",
                  availability: "https://schema.org/InStock",
                  shippingDetails: {
                    "@type": "ShippingDeliveryTime",
                    shippingRate: {
                      "@type": "PriceSpecification",
                      priceCurrency: "THB",
                      price: "0",
                    },
                    shippingDestination: {
                      "@type": "DeliveryAddress",
                      addressCountry: "TH",
                    },
                  },
                  seller: {
                    "@type": "Organization",
                    name:
                      locale === "th"
                        ? "ร่มเย็น คอฟฟี่"
                        : "Roasted Beans",
                  },
                },
                {
                  "@type": "Offer",
                  url: "https://roastedbeans.th/" + locale,
                  name: locale === "th" ? "ขายส่ง 1 กิโลกรัม" : "Wholesale 1kg",
                  priceCurrency: "THB",
                  price: "599",
                  priceValidUntil: "2026-12-31",
                  availability: "https://schema.org/InStock",
                  seller: {
                    "@type": "Organization",
                    name:
                      locale === "th"
                        ? "ร่มเย็น คอฟฟี่"
                        : "Roasted Beans",
                  },
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "156",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: locale === "th" ? "ลูกค้ารีพีท" : "Regular Customer",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                    worstRating: "1",
                  },
                  reviewBody:
                    locale === "th"
                      ? "กาแฟคุณภาพดี สดใหม่ ราคาเหมาะสม"
                      : "Great quality, fresh roasted, fair pricing",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name:
                locale === "th"
                  ? "ร่มเย็น คอฟฟี่ (Ruem Yen Coffee)"
                  : "Roasted Beans Chiang Mai",
              url: `https://roastedbeans.th/${locale}`,
              logo: "https://roastedbeans.th/product-coffee.jpg",
              description:
                locale === "th"
                  ? "ซื้อ-ขายกาแฟสารและสินค้าพืชผลทางการเกษตรทุกประเภท"
                  : "Buy and sell coffee and agricultural products",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Sales",
                telephone: "+66-89-855-6550",
                email: "jane4079@gmail.com",
                availableLanguage: ["th", "en"],
              },
              sameAs: [
                "https://line.me/ti/p/~jane4079",
                "mailto:jane4079@gmail.com",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sankamphang",
                addressLocality:
                  locale === "th" ? "เชียงใหม่" : "Chiang Mai",
                addressCountry: "TH",
              },
            }),
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
