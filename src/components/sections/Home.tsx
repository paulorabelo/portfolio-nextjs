export default function HomeSection() {
return (
    <section className="container header" id="home">
      {/* home vai aqui */}
    <div className="header-content">
            <div className="left-header">
                <div className="h-shape"></div>
                <div className="image">
                    <img src="img/paulo-2024.webp" alt=""/>
                </div>
            </div>
            <div className="right-header">
                <div className="us-en">
                    <h1 className="name">
                        Hi, I&apos;m <span>Paulo Rabelo.</span>
                        <div className="wrapper">
                            <div className="static-txt">A</div>
                            <ul className="dynamic-txts">
                                <li><span>Web</span></li>
                                <li><span>Mobile</span></li>
                                <li><span>Java</span></li>
                            </ul>
                            <div className="static-txt">Developer</div>
                        </div>
                    </h1>
                    <p>
                        I&apos;m a Java developer working on web or mobile apps.
                    </p>
                    <div className="btn-con">
                        <a href="https://github.com/paulorabelo" target="_blank" className="main-btn">
                            <span className="btn-text">GitHub Profile</span>
                            <span className="btn-icon"><i className="fab fa-github"></i></span>
                        </a>
                    </div>
                </div>
                <div className="pt-br">
                    <h1 className="name">
                        Olá, sou <span>Paulo Rabelo.</span>
                        <div className="wrapper">
                            <div className="static-txt">Desenvolvedor</div>
                            <ul className="dynamic-txts">
                                <li><span>Web</span></li>
                                <li><span>Mobile</span></li>
                                <li><span>Java</span></li>
                            </ul>
                            <div className="static-txt"></div>
                        </div>
                    </h1>
                    <p>
                        Sou um desenvolvedor Java para aplicações web ou mobile.
                    </p>
                    <div className="btn-con">
                        <a href="https://github.com/paulorabelo" target="_blank" className="main-btn">
                            <span className="btn-text">Perfil GitHub</span>
                            <span className="btn-icon"><i className="fab fa-github"></i></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}