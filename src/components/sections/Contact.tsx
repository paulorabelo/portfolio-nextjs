interface ContactSectionProps {
    isActive: boolean;
}

export default function ContactSection({isActive}: ContactSectionProps){
    return (
        <section className={`container contact ${isActive ? "active" : ""}`} id="contact">
            <div className="contact-container">
                <div className="us-en">
                    <div className="main-title">
                        <h2>Contact <span>Me</span><span className="bg-text">Contact</span></h2>
                    </div>
                </div>
                <div className="pt-br">
                    <div className="main-title">
                        <h2>Contate <span>Me</span><span className="bg-text">Contato</span></h2>
                    </div>
                </div>
                <div className="contact-content-con">
                    <div className="left-contact">
                        <div className="us-en">
                            <h4>Contact me here</h4>
                            <p>
                                I currently live in São Paulo (Capital) and to contact me use my social media, cell
                                phone (WhatsApp) and email.
                            </p>
                        </div>
                        <div className="pt-br">
                            <h4>Contate-me aqui</h4>
                            <p>
                                Atualmente moro em São Paulo (Capital) e para entrar em contato comigo utilize minhas
                                redes sociais, celular (WhatsApp) e e-mail.
                            </p>
                        </div>
                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>Location</span>
                                </div>
                                <p>: São Paulo, Brazil</p>
                            </div>
                            
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fa-brands fa-whatsapp"></i>
                                    <span>Mobile Number</span>
                                </div>
                                <p><span>: +55 11-94712-4018</span></p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-globe-africa"></i>
                                    <span>Languages</span>
                                </div>
                                <p><span>: English and Portuguese</span></p>
                            </div>
                        </div>
                        <div className="contact-icons">
                            <div className="contact-icon">
                                <a href="https://www.linkedin.com/in/paulorabelooficial/" target="_blank" rel="noreferrer">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://twitter.com/p_rabelo" target="_blank" rel="noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://github.com/paulorabelo" target="_blank" rel="noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://www.youtube.com/PauloRabelo" target="_blank" rel="noreferrer">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="right-contact">
                        {/* removido o onSubmit por enquanto para não dar erro de função inexistente */}
                        <form id="contact-form" className="new-cont-form">
                            <input type="hidden" name="contact_number" />
                            <div className="input-control i-c-2">
                                <input type="text" required id="name" placeholder="YOUR NAME" />
                                <input type="email" required id="email" placeholder="YOUR EMAIL" />
                            </div>
                            <div className="input-control">
                                <input type="text" required placeholder="ENTER SUBJECT" />
                            </div>
                            <div className="input-control">
                                <textarea id="message" cols={15} rows={8} placeholder="Message Here..."></textarea>
                            </div>
                            <div className="submit-btn">
                                <button type="button" className="main-btn">
                                    <span className="btn-text">Submit</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}