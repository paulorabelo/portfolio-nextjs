interface BlogsSectionProps {
    isActive: boolean;
}

export default function BlogsSection({ isActive }: BlogsSectionProps) {
    return(
        <section className={"container blogs" + (isActive ? " active" : "")} id="blogs">
            {/* blogs vai aqui */}
            <div className="blogs-content">
                <div className="main-title">
                    <div className="us-en">
                        <h2>My
                            <span>Blogs</span>
                            <span className="bg-text">My Blogs</span>
                        </h2>
                    </div>
                    <div className="pt-br">
                        <h2>Meus
                            <span>Blogs</span>
                            <span className="bg-text">Meus Blogs</span>
                        </h2>
                    </div>
                </div>
                <div className="blogs">
                    <div className="blog gcp-skills-26-01-06">
                        <img src="img/blog_gcp_skills_600x600.webp"
                            alt="Getting Started with Google Cloud: From Infrastructure to Cloud Engineering"/>
                        <div className="blog-text">
                            <div className="us-en">
                                <h4>
                                    <a href="https://blog.paulorabelo.dev.br/getting-started-with-google-cloud" target="_blank">
                                        Getting Started with Google Cloud: From Infrastructure to Cloud Engineering
                                    </a>
                                </h4>
                                <p>
                                    In today’s tech landscape, being &quot;in the cloud&quot; is no longer a competitive edge—it is a survival requirement. Google Cloud Platform (GCP) stands out not just as a resource provider, but as the backbone of global innovation. But how do you start without getting lost in complexity—or costs? This article explores infrastructure fundamentals and the strategic path to becoming...
                                </p>
                            </div>
                            <div className="pt-br">
                                <h4>
                                    <a href="https://blog.paulorabelo.dev.br/primeiros-passos-no-google-cloud" target="_blank">
                                        Primeiros Passos no Google Cloud: Da Infraestrutura à Engenharia de Nuvem
                                    </a>
                                </h4>
                                <p>
                                    No cenário tecnológico atual, &quot;estar na nuvem&quot; deixou de ser um diferencial competitivo para se tornar um requisito de sobrevivência. O Google Cloud Platform (GCP) destaca-se não apenas como um fornecedor de recursos, mas como a espinha dorsal de inovações globais. Mas como começar sem se perder na complexidade — ou nos custos? Neste artigo, exploramos os fundamentos da infraestrutura e o caminho para se tornar...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="blog w2-own-server-06">
                        <img src="img/blog_own-srv_p6_600x600.webp"
                            alt="Hello World on WhatsApp: The final result of our $40/mo savings"/>
                        <div className="blog-text">
                            <div className="us-en">
                                <h4>
                                    <a href="https://blog.paulorabelo.dev.br/hello-world-on-whatsapp" target="_blank">
                                        &quot;Hello World&quot; on WhatsApp: The final result of our $40/mo savings
                                    </a>
                                </h4>
                                <p>
                                    It&apos;s been 3 weeks of configuration. We went through SSH keys, Linux commands, memory
                                    Swap, Cloudflare Tunnels, and Docker files. All to arrive at this moment: seeing the
                                    message pop up on the phone. Today, I wrap up this series by showing how...
                                </p>
                            </div>
                            <div className="pt-br">
                                <h4>
                                    <a href="https://blog.paulorabelo.dev.br/ola-mundo-no-whatsapp" target="_blank">
                                        &quot;Olá Mundo&quot; no WhatsApp: O resultado final da nossa economia de R$ 200/mês
                                    </a>
                                </h4>
                                <p>
                                    Foram 3 semanas de configuração. Passamos por chaves SSH, comandos Linux, Swap de
                                    memória, Túneis Cloudflare e arquivos Docker. Tudo para chegar neste momento: ver a
                                    mensagem chegar no celular. Hoje, encerro essa série mostrando como...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="blog w2-own-server-05">
                        <img src="img/blog_own-srv_p5_600x600.webp"
                            alt="The Big Combo: Launching n8n, WhatsApp, and Databases with a Single Command"/>
                        <div className="blog-text">
                            <div className="us-en">
                                <h4>
                                    <a href="https://blog.paulorabelo.dev.br/the-big-combo" target="_blank">
                                        The Big Combo: Launching n8n, WhatsApp, and Databases with a Single Command
                                    </a>
                                </h4>
                                <p>
                                    We&apos;ve reached the moment of truth. We have an Oracle server (free), Swap memory (to
                                    prevent crashing), and a secure Tunnel. Now, let&apos;s install the software that will
                                    actually work...
                                </p>
                            </div>
                            <div className="pt-br">
                                <h4>
                                    <a href="https://blog.paulorabelo.dev.br/o-grande-combo" target="_blank">
                                        O Grande Combo: Subindo n8n, WhatsApp e Banco de Dados com um único comando
                                    </a>
                                </h4>
                                <p>
                                    Chegamos ao momento da verdade. Temos um servidor Oracle (gratuito), temos memória
                                    Swap (para não travar) e temos um Túnel seguro. Agora, vamos instalar os softwares
                                    que vão realmente trabalhar para nós...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="blog ch40">
                        <img src="img/port7.webp" alt="Career change at 40? Blog post image"/>
                        <div className="blog-text">
                            <div className="us-en">
                                <h4>
                                    <a href="https://blog.paulorabelo.dev.br/career-change-at-40-how-to-become-a-software-developer"
                                        target="_blank">Career change at 40?</a>
                                </h4>
                                <p>
                                    Have you ever thought about changing careers at the age of 40? Perhaps you&apos;re
                                    dissatisfied with your current job, or maybe you want to learn a new skill and take
                                    on
                                    new challenges. Whatever the reason...
                                </p>
                            </div>
                            <div className="pt-br">
                                <h4>
                                    <a href="https://blog.paulorabelo.dev.br/mudanca-de-carreira-aos-40-como-se-tornar-um-desenvolvedor-de-software"
                                        target="_blank">Mudança de carreira aos 40?</a>
                                </h4>
                                <p>
                                    Você já pensou em mudar de carreira aos 40 anos? Talvez você esteja insatisfeito com
                                    o seu trabalho atual, ou talvez você queira aprender uma nova habilidade e enfrentar
                                    novos desafios. Seja qual for o motivo...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="blog gpu-pasth">
                        <img src="img/dev_virt_mint_win_passthrough_02.webp"
                            alt="Maximizing Your Hardware with GPU Passthrough"/>
                        <div className="blog-text">
                            <div className="us-en">
                                <h4>
                                    <a href="https://blog.paulorabelo.dev.br/maximizing-your-hardware-with-gpu-passthrough"
                                        target="_blank">
                                        Maximizing Your Hardware with GPU Passthrough
                                    </a>
                                </h4>
                                <p>
                                    If you’ve ever wondered if there’s a way to get the most out of your hardware
                                    without having to constantly reboot your system, the answer is yes! The technique is
                                    called GPU Passthrough and it allows a virtual machine (VM) to access the GPU
                                    directly...
                                </p>
                            </div>
                            <div className="pt-br">
                                <h4>
                                    <a href="https://blog.paulorabelo.dev.br/aproveitando-ao-maximo-seu-hardware-com-gpu-passthrough"
                                        target="_blank">
                                        Aproveitando ao Máximo Seu Hardware com GPU Passthrough
                                    </a>
                                </h4>
                                <p>
                                    Se você já se perguntou se há uma maneira de aproveitar ao máximo seu hardware sem
                                    ter que reiniciar constantemente seu sistema, a resposta é sim! A técnica é chamada
                                    de GPU Passthrough e permite que uma máquina virtual (VM) acesse a GPU
                                    diretamente...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="blog terminal-ai">
                        <img src="img/terminal-ai-blog.webp"
                            alt="The Terminal Has a Brain: Supercharging my Linux Workflow with Python and the Google Gemini API"/>
                        <div className="blog-text">
                            <div className="us-en">
                                <h4>
                                    <a href="https://blog.paulorabelo.dev.br/the-terminal-has-a-brain-supercharging-my-linux-workflow-with-python-and-the-google-gemini-api"
                                        target="_blank">
                                        The Terminal Has a Brain: Supercharging my Linux Workflow with Python and the
                                        Google Gemini API
                                    </a>
                                </h4>
                                <p>
                                    Every engineering student or developer knows the feeling: the Linux terminal is
                                    incredibly powerful, but sometimes unforgiving. A wrong flag, a syntax error, or a
                                    massive, cryptic log file can cost precious minutes lost in Google searches...
                                </p>
                            </div>
                            <div className="pt-br">
                                <h4>
                                    <a href="https://blog.paulorabelo.dev.br/o-terminal-ganhou-cerebro-como-turbinei-meu-linux-com-python-e-a-api-do-gemini"
                                        target="_blank">
                                        O Terminal Ganhou Cérebro: Como turbinei meu Linux com Python e a API do Gemini
                                    </a>
                                </h4>
                                <p>
                                    Todo estudante de engenharia ou desenvolvedor sabe: o terminal Linux é poderoso, mas
                                    às vezes pode ser implacável. Uma flag errada, um erro de sintaxe ou um log gigante
                                    podem nos fazer perder minutos preciosos no Google...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="blog davinci-resolve">
                        <img src="img/davinci-script_600x600.webp"
                            alt="DaVinci Resolve on Linux: Solving the Codec Nightmare (With a little help from AI and Diolinux)"/>
                        <div className="blog-text">
                            <div className="us-en">
                                <h4>
                                    <a href="https://blog.paulorabelo.dev.br/davinci-resolve-on-linux-solving-the-codec-nightmare-with-a-little-help-from-ai-and-diolinux"
                                        target="_blank">
                                        DaVinci Resolve on Linux: Solving the Codec Nightmare (With a little help from
                                        AI and Diolinux)
                                    </a>
                                </h4>
                                <p>
                                    If you use Linux for video editing, you&apos;ve likely hit the &quot;elephant in the room&quot;:
                                    the free version of the amazing DaVinci Resolve doesn&apos;t natively support the most
                                    common codecs coming out of our phones and cameras (like H.264/H.265 and AAC audio).
                                    The result? Black screens or &quot;Media Offline&quot;...
                                </p>
                            </div>
                            <div className="pt-br">
                                <h4>
                                    <a href="https://blog.paulorabelo.dev.br/davinci-resolve-no-linux-resolvendo-o-pesadelo-dos-codecs-com-uma-ajudinha-da-ia-e-do-diolinux"
                                        target="_blank">
                                        DaVinci Resolve no Linux: Resolvendo o Pesadelo dos Codecs (Com uma ajudinha da
                                        IA e do Diolinux)
                                    </a>
                                </h4>
                                <p>
                                    Se você usa Linux e tenta editar vídeos, provavelmente já esbarrou no &quot;elefante na
                                    sala&quot;: a versão gratuita do incrível DaVinci Resolve não suporta nativamente os
                                    codecs mais comuns que saem dos nossos celulares e câmeras (como H.264/H.265 e áudio
                                    AAC). O resultado? Tela preta ou &quot;Mídia Offline&quot;...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="blog w1-own-server-01">
                        <img src="img/blog_own-srv_600x600.webp"
                            alt="From Zero to Own Server: How I saved $40/mo building my infrastructure on Oracle Cloud"/>
                        <div className="blog-text">
                            <div className="us-en">
                                <h4>
                                    <a href="https://blog.paulorabelo.dev.br/from-zero-to-own-server" target="_blank">
                                        From Zero to Own Server: How I saved $40/mo building my infrastructure on Oracle
                                        Cloud
                                    </a>
                                </h4>
                                <p>
                                    Working with professional automation tools (n8n, Typebot, WhatsApp APIs) requires
                                    infrastructure that most shared hosting plans simply cannot deliver. Anyone who has
                                    tried running n8n on a standard &quot;cPanel&quot; knows the struggle: slowness, constant
                                    crashes, and memory limits. The obvious solution...
                                </p>
                            </div>
                            <div className="pt-br">
                                <h4>
                                    <a href="https://blog.paulorabelo.dev.br/do-zero-ao-servidor-proprio"
                                        target="_blank">
                                        Do Zero ao Servidor Próprio: Como economizei R$ 200/mês criando minha
                                        infraestrutura na Oracle Cloud
                                    </a>
                                </h4>
                                <p>
                                    Trabalhar com automações profissionais (n8n, Typebot, APIs de WhatsApp) exige uma
                                    infraestrutura que a maioria das hospedagens compartilhadas simplesmente não
                                    consegue oferecer. Quem já tentou rodar um n8n num &quot;cPanel&quot; da vida sabe o que estou
                                    falando: lentidão, quedas constantes e limitações de memória.

                                    A solução óbvia...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="blog w1-own-server-02">
                        <img src="img/own-srv-post-02_600x600.webp"
                            alt="The Server Saga: Creating the Oracle Instance and Conquering the SSH Nightmare"/>
                        <div className="blog-text">
                            <div className="us-en">
                                <h4>
                                    <a href="https://blog.paulorabelo.dev.br/the-server-saga-part-ii" target="_blank">
                                        The Server Saga: Creating the Oracle Instance and Conquering the SSH Nightmare
                                    </a>
                                </h4>
                                <p>
                                    In the last article, I shared why I decided to ditch shared hosting and build my own
                                    server on Oracle Cloud (Free Tier). Today, we get practical: how to create the
                                    machine and, most importantly, how to get inside without losing your sanity.It
                                    sounds simple...
                                </p>
                            </div>
                            <div className="pt-br">
                                <h4>
                                    <a href="https://blog.paulorabelo.dev.br/a-saga-do-servidor-parte-ii"
                                        target="_blank">
                                        A Saga do Servidor: Criando a Instância Oracle e vencendo o Pesadelo do SSH
                                    </a>
                                </h4>
                                <p>
                                    No último artigo, contei por que decidi abandonar a hospedagem compartilhada e
                                    montar um servidor próprio na Oracle Cloud (Free Tier). Hoje, vamos para a prática:
                                    como criar a máquina e, o mais importante, como entrar nela sem perder a sanidade.
                                    Parece simples...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="blog w2-own-server-03">
                        <img src="img/blog_own-srv_p3_600x600.webp"
                            alt="The Server Engine: Installing Docker and Turbocharging Memory with Swap"/>
                        <div className="blog-text">
                            <div className="us-en">
                                <h4>
                                    <a href="https://blog.paulorabelo.dev.br/the-server-engine" target="_blank">
                                        The Server Engine: Installing Docker and Turbocharging Memory with Swap
                                    </a>
                                </h4>
                                <p>
                                    If you followed our saga last week, you already have an Oracle Cloud instance
                                    created and SSH access working. But for now, it&apos;s just an empty box. Today, we are
                                    going to install the heart of our infrastructure: Docker. And we have an extra
                                    challenge...
                                </p>
                            </div>
                            <div className="pt-br">
                                <h4>
                                    <a href="https://blog.paulorabelo.dev.br/o-motor-do-servidor" target="_blank">
                                        O Motor do Servidor: Instalando Docker e Turbinando a Memória com Swap
                                    </a>
                                </h4>
                                <p>
                                    Se você acompanhou a nossa saga na semana passada, já tem uma instância Oracle Cloud
                                    criada e acesso SSH funcionando. Mas, por enquanto, ela é apenas uma caixa vazia.
                                    Hoje, vamos instalar o coração da nossa infraestrutura: o Docker. E temos um desafio
                                    extra...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="blog w2-own-server-04">
                        <img src="img/blog_own-srv_p4_600x600.webp"
                            alt="Goodbye Open Ports: Maximum Security and HTTPS with Cloudflare Tunnel"/>
                        <div className="blog-text">
                            <div className="us-en">
                                <h4>
                                    <a href="https://blog.paulorabelo.dev.br/goodbye-open-ports" target="_blank">
                                        Goodbye Open Ports: Maximum Security and HTTPS with Cloudflare Tunnel
                                    </a>
                                </h4>
                                <p>
                                    In the old days, to put a server on the internet, you needed to: Open firewall ports
                                    (80, 443, 8080). Configure router forwarding (NAT). Expose your server&apos;s real IP to
                                    the world. Suffer configuring SSL certificates (that green padlock) that expired
                                    every 3 months. Forget that. There is a much better, safer, and free way...
                                </p>
                            </div>
                            <div className="pt-br">
                                <h4>
                                    <a href="https://blog.paulorabelo.dev.br/adeus-portas-abertas" target="_blank">
                                        Adeus Portas Abertas: Segurança Máxima e HTTPS com Cloudflare Tunnel
                                    </a>
                                </h4>
                                <p>
                                    Antigamente, para colocar um servidor na internet, você precisava: Abrir portas no
                                    firewall (80, 443, 8080). Configurar redirecionamento no roteador (NAT). Expor o IP
                                    real do seu servidor para o mundo. Sofrer configurando certificados SSL (aquele
                                    cadeado verde) que expiravam a cada 3 meses. Esqueça isso. Existe um jeito muito
                                    melhor, mais seguro e gratuito...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}