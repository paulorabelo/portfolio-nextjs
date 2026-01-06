// src/components/Header.tsx
export default function Header() {
    return (
        <>
            <header className="controls">
                {/* Botões de navegação - controls */}
                <div className="control active-btn" data-id="home" title="Home">
                    <i className="fas fa-home"></i>
                </div>
                <div className="control" data-id="about" title="About">
                    <i className="fas fa-user"></i>
                </div>
                <div className="control" data-id="portfolio" title="Portfolio">
                    <i className="fas fa-briefcase"></i>
                </div>
                <div className="control" data-id="blogs" title="Blogs">
                    <i className="far fa-newspaper"></i>
                </div>
                <div className="control" data-id="contact" title="Contact">
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
