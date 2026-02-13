"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: string;
  iconPosition?: "left" | "right";
}

interface FaqAccordionProps {
  data: FAQItem[];
  className?: string;
  timestamp?: string;
  questionClassName?: string;
  answerClassName?: string;
}

export function FaqAccordion({
  data,
  className,
  timestamp,
  questionClassName,
  answerClassName,
}: FaqAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  return (
    <div className={cn("p-4", className)}>
      {timestamp && (
        <div className="mb-4 text-sm text-stone-500">{timestamp}</div>
      )}

      <Accordion.Root
        type="single"
        collapsible
        value={openItem ?? ""}
        onValueChange={(value) => setOpenItem(value)}
      >
        {data.map((item) => (
          <Accordion.Item
            value={item.id.toString()}
            key={item.id}
            className="mb-3"
          >
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-start gap-x-3">
                <div
                  className={cn(
                    "relative flex items-center space-x-3 rounded-xl p-3 transition-colors w-full",
                    openItem === item.id.toString()
                      ? "bg-amber-100 text-amber-900"
                      : "bg-stone-100 hover:bg-amber-50",
                    questionClassName
                  )}
                >
                  {item.icon && (
                    <span
                      className={cn(
                        "absolute bottom-6 text-lg",
                        item.iconPosition === "right" ? "right-3" : "left-3"
                      )}
                      style={{
                        transform:
                          item.iconPosition === "right"
                            ? "rotate(7deg)"
                            : "rotate(-4deg)",
                      }}
                    >
                      {item.icon}
                    </span>
                  )}
                  <span className="font-medium text-stone-900">
                    {item.question}
                  </span>
                </div>

                <span
                  className={cn(
                    "text-stone-400 flex-shrink-0",
                    openItem === item.id.toString() && "text-amber-600"
                  )}
                >
                  {openItem === item.id.toString() ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content asChild forceMount>
              <motion.div
                initial="collapsed"
                animate={
                  openItem === item.id.toString() ? "open" : "collapsed"
                }
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="ml-10 mt-2 md:ml-16">
                  <div
                    className={cn(
                      "relative rounded-2xl bg-amber-50 px-4 py-3 text-stone-700 border border-amber-100",
                      answerClassName
                    )}
                  >
                    {item.answer}
                  </div>
                </div>
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
