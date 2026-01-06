"use client"; // Para interatividade no cliente

import { useState } from "react";

export default function Header() {

    const [activeSection, setActiveSection] = useState("home");

    return (
        <>
            <header className="controls">
                {/* Botões de navegação - controls */}
                {/* Botão Home */}
                <div 
                className={`control ${activeSection === "home" ? "active-btn" : ""}`} data-id="home" title="Home" onClick={() => setActiveSection("home")}>
                    <i className="fas fa-home"></i>
                </div>
                {/* Botão About */}
                <div 
                className={`control ${activeSection === "about" ? "active-btn" : ""}`} data-id="about" title="About" onClick={() => setActiveSection("about")}>
                    <i className="fas fa-user"></i>
                </div>
                {/* Botão Portfolio */}
                <div 
                className={`control ${activeSection === "portfolio" ? "active-btn" : ""}`} data-id="portfolio" title="Portfolio" onClick={() => setActiveSection("portfolio")}>
                    <i className="fas fa-briefcase"></i>
                </div>
                {/* Botão Blogs */}
                <div 
                className={`control ${activeSection === "blogs" ? "active-btn" : ""}`} data-id="blogs" title="Blogs" onClick={() => setActiveSection("blogs")}>
                    <i className="far fa-newspaper"></i>
                </div>
                {/* Botão Contact */}
                <div 
                className={`control ${activeSection === "contact" ? "active-btn" : ""}`} data-id="contact" title="Contact" onClick={() => setActiveSection("contact")}>
                    <i className="fas fa-envelope-open"></i>
                </div>
            </header>
            {/* ... outros botões ... */}
            <div className="toggles">
                <div className="toggle theme-btn" title="Change Theme" id="themeButton">
                    <i className="fas fa-adjust"></i>
                </div>
                <div className="toggle toggle-btn toggle-btn" id="toggleButton" title="Change Language">
                    <i className="fa-solid fa-earth-americas"></i>
                </div>
            </div>
        </>
    );
}
