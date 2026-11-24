"use client";

import { useState } from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { ProblemsSection } from "@/components/home/ProblemsSection";
import { JourneySection } from "@/components/home/JourneySection";
import { StyleQuizSection } from "@/components/home/StyleQuizSection";
import { PackagesSection } from "@/components/home/PackagesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { MascotGuide, StickyMobileCta } from "@/components/home/MascotGuide";

export function HomePageClient() {
  const [mascotMessage, setMascotMessage] = useState<string | null>(null);

  return (
    <main id="main">
      <HeroSection onRoomChange={(msg) => setMascotMessage(msg)} />
      <TrustBar />
      <ProblemsSection />
      <JourneySection />
      <StyleQuizSection />
      <PackagesSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
      <StickyMobileCta />
      <MascotGuide customMessage={mascotMessage} />
    </main>
  );
}
