"use client";

import { useState } from "react";
import translations from "@/data/translations.json"
import Header from "@/components/Header";
import HomeSection from "@/components/sections/Home";
import AboutSection from "@/components/sections/About";
import PortfolioSection from "@/components/sections/Portfolio";
import BlogsSection from "@/components/sections/Blogs";
import ContactSection from "@/components/sections/Contact";
// Importe as outras seções conforme for criando

export default function Page() {
  // Centralizamos o estado aqui (Lifting State Up)
const [activeSection, setActiveSection] = useState("home");
const [lang, setLang] = useState("en"); // Começando em inglês por padrão

const t = lang === "en" ? translations.en : translations.pt;

return (
    <main>
    {/* Passando userState e a função para o Header */}
    <Header 
        activeSection={activeSection} 
        changeSection={setActiveSection} 
        currentLang={lang}
        toggleLang={() => setLang(lang === "en" ? "pt" : "en")}
    />

    {/* Renderizando as seções com base na seção ativa */}
    {activeSection === "home" && <HomeSection isActive={true} t={t.home} />}
    {activeSection === "about" && <AboutSection isActive={true} />}
    {activeSection === "portfolio" && <PortfolioSection isActive={true} />}
    {activeSection === "blogs" && <BlogsSection isActive={true} />}
    {activeSection === "contact" && <ContactSection isActive={true} t={t.contact} />}
    </main>
        );
}
