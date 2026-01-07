"use client";

import { useState } from "react";
import HomeSection from "@/components/sections/Home";
import AboutSection from "@/components/sections/About";
// Importe as outras seções conforme for criando

export default function Page() {
  // Centralizamos o estado aqui (Lifting State Up)
  const [activeSection, setActiveSection] = useState("home");

  return (
    <main>
      {/* O Header precisa receber a função para mudar o estado. 
         Ajustaremos o Header no próximo passo para receber isso via Props.
      */}

      {activeSection === "home" && <HomeSection />}
      {activeSection === "about" && <AboutSection />}
    </main>
  );
}
