export type RoastLevel = "light" | "medium" | "dark";
export type PackagingColor = "black" | "silver" | "white";
export type GrindOption =
  | "whole_bean"
  | "espresso"
  | "drip"
  | "mokapot"
  | "french_press";

export interface PackagingOption {
  sku: string;
  sizeGrams: number;
  priceTHB: number;
  shippingIncluded: boolean;
  vatIncluded: boolean;
  targetMarket: "retail" | "wholesale";
}

export interface CoffeeProduct {
  id: string;
  name: string;
  brandName: string;
  category: string;
  origin: {
    country: string;
    province: string;
    district: string;
    altitudeMeters: {
      min: number;
      max: number;
    };
  };
  variety: string;
  grade: string;
  process: string;
  cuppingProfile: {
    acidity: "low" | "medium" | "bright";
    body: "medium" | "medium_full" | "full";
    sweetness: "medium" | "high";
    bitterness: "low" | "medium";
  };
  tasteNotes: string[];
  roastLevelsAvailable: RoastLevel[];
  grindOptionsLikelyAvailable: GrindOption[];
  packagingColorsAvailable: PackagingColor[];
  roastDateExample: string;
  packagingOptions: PackagingOption[];
  description: {
    en: string;
    th: string;
  };
  positioning: string;
}

export const products: CoffeeProduct[] = [
  {
    id: "thai-arabica-grade-a-catimor-1300m",
    name: "Roasted Coffee Arabica Thai Grade A ถุงวาล์ว",
    brandName: "ร่มเย็น คอฟฟี่ (Ruem Yen Coffee)",
    category: "roasted_coffee",
    origin: {
      country: "Thailand",
      province: "Chiang Mai",
      district: "Sankamphaeng",
      altitudeMeters: {
        min: 1300,
        max: 1500,
      },
    },
    variety: "Arabica Catimor",
    grade: "Grade A",
    process: "Washed",
    cuppingProfile: {
      acidity: "medium",
      body: "medium_full",
      sweetness: "medium",
      bitterness: "low",
    },
    tasteNotes: ["honey", "peanut", "milk", "chocolate"],
    roastLevelsAvailable: ["light", "medium", "dark"],
    grindOptionsLikelyAvailable: [
      "whole_bean",
      "espresso",
      "drip",
      "mokapot",
      "french_press",
    ],
    packagingColorsAvailable: ["black", "silver", "white"],
    roastDateExample: "2026-01-31",
    packagingOptions: [
      {
        sku: "RYC-500G-RETAIL",
        sizeGrams: 500,
        priceTHB: 350,
        shippingIncluded: true,
        vatIncluded: true,
        targetMarket: "retail",
      },
      {
        sku: "RYC-1KG-WHOLESALE",
        sizeGrams: 1000,
        priceTHB: 599,
        shippingIncluded: false,
        vatIncluded: false,
        targetMarket: "wholesale",
      },
    ],
    description: {
      en: "High-altitude Thai Arabica grown at 1,300–1,500 meters in Sankamphaeng, Chiang Mai. This Grade A Catimor is processed using the washed method for a clean and balanced cup. Expect smooth honey sweetness, nutty peanut undertones, creamy milk body, and a chocolate finish. Available in light, medium, and dark roast levels to suit espresso, drip, or traditional brewing styles. Roasted in small batches with roast date clearly labeled for freshness.",
      th: "เมล็ดกาแฟไทยอาราบิก้าคุณภาพเยี่ยม ปลูกบนที่สูง 1,300–1,500 เมตร ในอำเภอสันกำแพง จังหวัดเชียงใหม่ อาราบิก้า คาทิมอร์ เกรด A นี้ผ่านกระบวนการแปรรูปแบบ Washed เพื่อให้ได้รสชาติที่สะอาดและสมดุล ให้รสหวานโทนน้ำผึ้ง ความหอมมันของถั่วลิสง บอดี้แบบนม และตบท้ายด้วยช็อกโกแลต มีให้เลือกทั้งระดับคั่วอ่อน คั่วกลาง และคั่วเข้ม เพื่อให้เหมาะกับการชงแบบเอสเพรสโซ่ ดริป หรือแบบอื่นๆ คั่วสดใหม่ในปริมาณน้อยเพื่อให้ได้คุณภาพดีที่สุด พร้อมระบุวันที่คั่วบนบรรจุภัณฑ์",
    },
    positioning:
      "Affordable premium Thai single-origin coffee positioned for home brewers, small cafes, and resellers seeking consistent quality with strong margin potential.",
  },
];
