"use client"; // Para interatividade no cliente

// Definindo lifting state up para gerenciar a seção ativa
interface HeaderProps {
    activeSection: string;
    changeSection: (section: string) => void;
}

export default function Header({ activeSection, changeSection }: HeaderProps) {

    return (
        <>
            <header className="controls">
                {/* Botões de navegação - controls */}
                {/* Botão Home */}
                <div 
                className={`control ${activeSection === "home" ? "active-btn" : ""}`} data-id="home" title="Home" onClick={() => changeSection("home")}>
                    <i className="fas fa-home"></i>
                </div>
                {/* Botão About */}
                <div 
                className={`control ${activeSection === "about" ? "active-btn" : ""}`} data-id="about" title="About" onClick={() => changeSection("about")}>
                    <i className="fas fa-user"></i>
                </div>
                {/* Botão Portfolio */}
                <div 
                className={`control ${activeSection === "portfolio" ? "active-btn" : ""}`} data-id="portfolio" title="Portfolio" onClick={() => changeSection("portfolio")}>
                    <i className="fas fa-briefcase"></i>
                </div>
                {/* Botão Blogs */}
                <div 
                className={`control ${activeSection === "blogs" ? "active-btn" : ""}`} data-id="blogs" title="Blogs" onClick={() => changeSection("blogs")}>
                    <i className="far fa-newspaper"></i>
                </div>
                {/* Botão Contact */}
                <div 
                className={`control ${activeSection === "contact" ? "active-btn" : ""}`} data-id="contact" title="Contact" onClick={() => changeSection("contact")}>
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
