export default function PortfolioSection() {
    return (
        <section className="container portfolio" id="portfolio">
            {/* portfolio vai aqui */}
            <div class="main-title">
                <div class="us-en">
                    <h2>My
                        <span>Portfolio</span>
                        <span class="bg-text">My Work</span>
                    </h2>
                </div>
                <div class="pt-br">
                    <h2>Meu
                        <span>Portfolio</span>
                        <span class="bg-text">My Work</span>
                    </h2>
                </div>
            </div>
            <div class="us-en">
                <p class="port-text">
                    Here are some of the work I did in the most diverse technologies.
                </p>
            </div>
            <div class="pt-br">
                <p class="port-text">
                    Aqui estão alguns dos trabalhos que fiz nas mais diversas tecnologias.
                </p>
            </div>
            <div class="portfolios">
                <div class="portfolio-item port-item-01">
                    <div class="image">
                        <img src="./img/imageboot-3.webp" alt="">
                    </div>
                    <div class="hover-items">
                        <h3>JS Calculator</h3>
                        <div class="icons">
                            <a href="https://github.com/paulorabelo/js-simple-calculator" class="icon" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="https://paulorabelo.github.io/js-simple-calculator/" class="icon" target="_blank">
                                <i class="fa-solid fa-desktop"></i>
                            </a>
                            <!-- <a href="#" class="icon">
                                <i class="fab fa-youtube"></i>
                            </a> -->
                        </div>
                    </div>
                </div>
                <div class="portfolio-item port-item-02">
                    <div class="image">
                        <img src="./img/myPortfolioSite.webp" alt="">
                    </div>
                    <div class="hover-items">
                        <h3>Personal Web Site</h3>
                        <div class="icons">
                            <a href="#" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fa-solid fa-desktop"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item port-item-03">
                    <div class="image">
                        <img src="./img/etanolOuGasolina.webp" alt="">
                    </div>
                    <div class="hover-items">
                        <h3>Android App</h3>
                        <div class="icons">
                            <a href="https://github.com/paulorabelo/alcohol-gasoline" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="https://play.google.com/store/apps" class="icon">
                                <i class="fa-brands fa-android"></i>
                            </a>
                            <!-- <a href="#" class="icon">
                                <i class="fab fa-youtube"></i>
                            </a> -->
                        </div>
                    </div>
                </div>
                <div class="portfolio-item port-item-04">
                    <div class="image">
                        <img src="./img/newMRGsite.webp" alt="">
                    </div>
                    <div class="hover-items">
                        <h3>Professional Web Site</h3>
                        <div class="icons">
                            <!-- <a href="#" class="icon">
                                <i class="fab fa-github"></i>
                            </a> -->
                            <a href="https://www.mrgsoft.com.br/" class="icon">
                                <i class="fa-solid fa-desktop"></i>
                            </a>
                            <!-- <a href="#" class="icon">
                                <i class="fab fa-youtube"></i>
                            </a> -->
                        </div>
                    </div>
                </div>
                
                
            </div>
        </section>
    );
}