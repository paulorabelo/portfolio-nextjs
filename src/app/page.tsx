"use client";

import { useState } from "react";
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

return (
    <main>
    {/* Passando userState e a função para o Header
    */}
    <Header 
        activeSection={activeSection} 
        changeSection={setActiveSection} 
    />

    {/* Renderizando as seções com base na seção ativa */}
    {activeSection === "home" && <HomeSection isActive={true} />}
    {activeSection === "about" && <AboutSection isActive={true} />}
    {activeSection === "portfolio" && <PortfolioSection isActive={true} />}
    {activeSection === "blogs" && <BlogsSection isActive={true} />}
    {activeSection === "contact" && <ContactSection isActive={true} />}
    </main>
        );
}
