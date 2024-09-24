"use client";

import { AboutMeSection } from "@/components/about-me-section";
import { ExperienceSection } from "@/components/experience-section";
import { Hero } from "@/components/hero";
import { TechnologySection } from "@/components/technology-section";
import { Github, Linkedin, MenuIcon, Mail, Phone, Copy } from "lucide-react";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import { useState } from "react";
import { MobileMenu } from "@/components/mobile-menu";
import ScrollToTopButton from "@/components/floating-button";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <GeistProvider>
      <CssBaseline />
      <div>
        <ScrollToTopButton />
        <div className=" bg-white h-16 flex flex-row items-center justify-between p-4 md:max-w-[1280px] md:w-full md:mx-auto">
          <span className="text-3xl">{"<MC/>"}</span>
          <MobileMenu />
        </div>
        <Hero />
        <AboutMeSection />
        <TechnologySection />
        <ExperienceSection />
        <div className="flex flex-col gap-6 px-4 py-16">
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <span className="bg-gray-200 border-none rounded-xl px-5 py-1">
              Entre em contato se quiser
            </span>
            <p className="text-center">
              O que vem a seguir? Sinta-se à vontade para entrar em contato
              comigo se estiver procurando um desenvolvedor, tiver alguma dúvida
              ou simplesmente quiser se conectar.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row gap-4 md:text-4xl items-center">
              <Mail />
              <span className="flex-1">marlon.29@outlook.com</span>
              <Copy />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span>You may also find me on these platforms!</span>
            <div className="flex flex-row gap-3">
              <a href="/">
                <Github />
              </a>
              <a href="/">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </GeistProvider>
  );
}
