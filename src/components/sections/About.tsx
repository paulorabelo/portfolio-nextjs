
interface AboutProps {
    isActive: boolean;
}

export default function AboutSection({ isActive }: AboutProps) {
return (
    <section className={`container about ${isActive ? "active" : ""}`} id="about">
        {/* about vai aqui */}
        <div className="main-title">
                <div className="us-en">
                    <h2>About
                        <span>me</span>
                        <span className="bg-text">my stats</span>
                    </h2>
                </div>
                <div className="pt-br">
                    <h2>Sobre
                        <span>mim</span>
                        <span className="bg-text">alguns dados</span>
                    </h2>
                </div>
        </div>
            <div className="about-container">
                <div className="left-about">
                    <div className="us-en">
                        <h4>Information About me</h4>
                        <p>
                            <b>Professional with over 20 years of experience in IT</b>, with a proven track record of
                            leading <b>modernization and digitalization</b> processes in companies. My career path led
                            me to specialize in <b>systems development, with a focus on Java,</b> to create robust and
                            scalable solutions. I&apos;m currently enhancing my skills in <b>software architecture and
                                design</b> through my degree in <b><a
                                    href="https://univesp.br/cursos/engenharia-de-computacao" target="_blank"
                                    rel="noopener noreferrer">Computer Engineering at UNIVESP</a></b>. I&apos;m looking for
                            challenges that allow me to apply my technical expertise and strategic vision to drive
                            innovation and growth.
                        </p>
                        <div className="btn-con">
                            <a href="https://github.com/paulorabelo" target="_blank" className="main-btn">
                                <span className="btn-text">GitHub Profile</span>
                                <span className="btn-icon">
                                    <i className="fab fa-github"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="pt-br">
                        <h4>Um pouco sobre mim</h4>
                        <p>
                            <b>Profissional com mais de 20 anos de experiência em TI</b>, com um histórico comprovado em
                            liderar processos de <b>modernização e digitalização</b> em empresas. Minha trajetória me
                            levou a me especializar em <b>desenvolvimento de sistemas, com foco em Java</b>, para criar
                            soluções robustas e escaláveis. Atualmente, estou aprimorando minhas habilidades em
                            <b>arquitetura e design de software</b> por meio da graduação em <b><a
                                    href="https://univesp.br/cursos/engenharia-de-computacao" target="_blank"
                                    rel="noopener noreferrer">Engenharia de Computação pela UNIVESP</a></b>. Busco
                            desafios que me permitam aplicar minha experiência técnica e visão estratégica para
                            impulsionar a inovação e o crescimento.
                        </p>
                        <div className="btn-con">
                            <a href="https://github.com/paulorabelo" target="_blank" className="main-btn">
                                <span className="btn-text">
                                    Perfil GitHub
                                </span>
                                <span className="btn-icon">
                                <i className="fab fa-github"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="right-about">
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">10+</p>
                            <p className="small-text">Projects <br /> Completed</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">3+</p>
                            <p className="small-text">Years of <br /> experience</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">0+</p>
                            <p className="small-text">Happy <br /> Clients</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">0+</p>
                            <p className="small-text">Customer <br /> reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-stats">
                <div className="us-en">
                    <h4 className="stat-title">My Skills</h4>
                    <div className="progress-bars">
                        <p>Carregando estatísticas do GitHub...</p>
                    </div>
                    <h4 className="stat-title">My Timeline</h4>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="tl-icon">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </div>
                            <p className="tl-duration">2025 - present</p>
                            <h5>Computer Engineering<span> - <a href="https://univesp.br/cursos/engenharia-de-computacao" target="_blank"rel="noopener noreferrer">UNIVESP</a></span></h5>
                            <p>
                                <b>Computer Systems and Architecture:</b> understanding how software interacts with
                                hardware, essential for roles in system architecture and performance optimization. <br/>
                                <b>Data Structures and Algorithms:</b> core skills for any developer to solve complex
                                problems efficiently and effectively.<br/>
                                <b>Engineering Skills:</b> Software Engineering, Innovation Management and Artificial
                                Intelligence for a modern engineering mindset that goes beyond just programming.
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="tl-icon">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </div>
                            <p className="tl-duration">2022 - 2023</p>
                            <h5>Graduate Certificate in Java Technology<span> - <a href="https://www.anhanguera.com/"
                                        target="_blank" rel="noopener noreferrer">Anhanguera</a></span></h5>
                            <p>
                                <b>Java Development:</b> Proficiency in the Java platform with emphasis on Java EE,
                                APIs, Web Services, and Android mobile development. Essential for building modern,
                                scalable, and integrated applications.
                                <br/>
                                <b>DevOps:</b> Expertise in Continuous Delivery and Deployment (DevOps), with a full
                                understanding of the software development lifecycle. Signals fluency in modern practices
                                of integration, automation, and cross-team collaboration.
                                <br/>
                                <b>Design Patterns:</b> Knowledge of design patterns and configuration management,
                                acquired through postgraduate studies. Demonstrates the ability to write structured,
                                reusable, and scalable code.
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="tl-icon">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </div>
                            <p className="tl-duration">2019 - 2022</p>
                            <h5>Degree in Computer Systems and Software Engineering<span> - <a
                                        href="https://www.anhanguera.com/" target="_blank"
                                        rel="noopener noreferrer">Anhanguera</a></span></h5>
                            <p>
                                <b>Systems Analysis and Design:</b> Training in systems analysis and design, including
                                object-oriented analysis. Demonstrates the ability to plan, structure, and understand
                                system architecture beyond just coding.
                                <br/>
                                <b>Databases:</b> Expertise in database modeling and management, with strong skills in
                                SQL and query optimization. Reflects a solid foundation in data handling and
                                organization.
                                <br/>
                                <b>Information Security:</b>Focused on protecting data and systems, this discipline
                                highlights a strong awareness of digital security — an increasingly vital skill in
                                today’s tech landscape.
                                <br/>
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="pt-br">
                    <h4 className="stat-title">Minhas habilidades</h4>

                    <div className="progress-bars">
                        <p>Carregando estatísticas do GitHub...</p>
                    </div>

                    <h4 className="stat-title">Timeline</h4>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="tl-icon">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </div>
                            <p className="tl-duration">2025 - present</p>
                            <h5>Engenharia de Computação<span> - <a
                                        href="https://univesp.br/cursos/engenharia-de-computacao" target="_blank"
                                        rel="noopener noreferrer">UNIVESP</a></span></h5>
                            <p>
                                <b>Arquitetura e Sistemas de Computação:</b> Compreensão de como o software interage com o hardware, essencial para funções em arquitetura de sistemas e otimização de performance. <br/>
                                <b>Estruturas de Dados e Algoritmos:</b> Competências fundamentais para resolver problemas complexos de forma eficiente e eficaz.<br/>
                                <b>Habilidades de Engenharia:</b> Engenharia de Software, Gestão da Inovação e IA, promovendo uma mentalidade de engenharia moderna que vai além da programação.
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="tl-icon">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </div>
                            <p className="tl-duration">2022 - 2023</p>
                            <h5>Especialização em Tecnologia Java<span> - <a href="https://www.anhanguera.com/"
                                        target="_blank" rel="noopener noreferrer">Anhanguera</a></span></h5>
                            <p>
                                <b>Desenvolvimento Java:</b> Proficiência na plataforma Java com ênfase em Java EE, APIs, Web Services e desenvolvimento móvel Android. Foco em aplicações escaláveis e integradas.
                                <br/>
                                <b>DevOps:</b> Especialização em Entrega e Implantação Contínua (CI/CD) e ciclo de vida de software. Demonstra fluência em práticas de automação e colaboração entre equipes.
                                <br/>
                                <b>Design Patterns:</b> Domínio de padrões de projeto e gestão de configuração, garantindo a criação de código estruturado, reutilizável e escalável.
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="tl-icon">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </div>
                            <p className="tl-duration">2019 - 2022</p>
                            <h5>Graduação em Análise e Desenvolvimento de Sistemas<span> - <a
                                        href="https://www.anhanguera.com/" target="_blank"
                                        rel="noopener noreferrer">Anhanguera</a></span></h5>
                            <p>
                                <b>Análise e Projeto de Sistemas:</b> Formação sólida em análise orientada a objetos, com foco no planejamento e estruturação da arquitetura de sistemas.
                                <br/>
                                <b>Bancos de Dados:</b> Especialização em modelagem e gerenciamento de dados, com domínio em SQL e otimização de consultas.
                                <br/>
                                <b>Segurança da Informação:</b>Focada na proteção de dados e ativos digitais, destacando uma consciência crítica sobre segurança — essencial no cenário tecnológico atual.
                                <br/>
                            </p>
                        </div>
                    </div>



                </div>
            </div>
    </section>
    );
}