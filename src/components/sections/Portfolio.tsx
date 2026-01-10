interface PortfolioSectionProps {
    isActive: boolean;
}

export default function PortfolioSection({isActive}: PortfolioSectionProps) {   
    return (
        <section className={`container portfolio ${isActive ? "active" : ""}`} id="portfolio">
            {/* portfolio vai aqui */}
            <div className="main-title">
                <div className="us-en">
                    <h2>My
                        <span>Portfolio</span>
                        <span className="bg-text">My Work</span>
                    </h2>
                </div>
                <div className="pt-br">
                    <h2>Meu
                        <span>Portfolio</span>
                        <span className="bg-text">My Work</span>
                    </h2>
                </div>
            </div>
            <div className="us-en">
                <p className="port-text">
                    Here are some of the work I did in the most diverse technologies.
                </p>
            </div>
            <div className="pt-br">
                <p className="port-text">
                    Aqui estão alguns dos trabalhos que fiz nas mais diversas tecnologias.
                </p>
            </div>
            <div className="portfolios">
                <div className="portfolio-item port-item-01">
                    <div className="image">
                        <img src="./img/imageboot-3.webp" alt=""/>
                    </div>
                    <div className="hover-items">
                        <h3>JS Calculator</h3>
                        <div className="icons">
                            <a href="https://github.com/paulorabelo/js-simple-calculator" className="icon" target="_blank">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://paulorabelo.github.io/js-simple-calculator/" className="icon" target="_blank">
                                <i className="fa-solid fa-desktop"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item port-item-02">
                    <div className="image">
                        <img src="./img/myPortfolioSite.webp" alt=""/>
                    </div>
                    <div className="hover-items">
                        <h3>Personal Web Site</h3>
                        <div className="icons">
                            <a href="#" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fa-solid fa-desktop"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item port-item-03">
                    <div className="image">
                        <img src="./img/etanolOuGasolina.webp" alt=""/>
                    </div>
                    <div className="hover-items">
                        <h3>Android App</h3>
                        <div className="icons">
                            <a href="https://github.com/paulorabelo/alcohol-gasoline" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://play.google.com/store/apps" className="icon">
                                <i className="fa-brands fa-android"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item port-item-04">
                    <div className="image">
                        <img src="./img/newMRGsite.webp" alt=""/>
                    </div>
                    <div className="hover-items">
                        <h3>Professional Web Site</h3>
                        <div className="icons">
                            <a href="#" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.mrgsoft.com.br/" className="icon">
                                <i className="fa-solid fa-desktop"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </section>
    );
}