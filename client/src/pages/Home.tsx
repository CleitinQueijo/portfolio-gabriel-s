import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Mail, ExternalLink, Code2, Briefcase, BookOpen, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [formMessage, setFormMessage] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      setFormStatus("error");
      setFormMessage("Por favor, preencha todos os campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormStatus("error");
      setFormMessage("Por favor, insira um email válido.");
      return;
    }

    setFormStatus("success");
    setFormMessage("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    (e.target as HTMLFormElement).reset();

    setTimeout(() => {
      setFormStatus("idle");
      setFormMessage("");
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center font-bold text-background">G</div>
            <span className="font-bold text-lg">Gabriel S</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#home" className="hover:text-accent transition">Home</a>
            <a href="#about" className="hover:text-accent transition">Sobre</a>
            <a href="#projects" className="hover:text-accent transition">Projetos</a>
            <a href="#contact" className="hover:text-accent transition">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center fade-in">
            <div className="text-accent font-semibold mb-4 tracking-widest uppercase text-sm">Bem-vindo ao meu portfólio</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Gabriel S
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-6">Desenvolvedor Web Jr</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Sou desenvolvedor web formado em Informática pelo SENAI, com conhecimentos em HTML, CSS, MySQL e JavaScript. Meu principal foco é o CSS, criando interfaces modernas, responsivas e bem organizadas.
              
              Busco desenvolver projetos com código limpo, boa usabilidade e um design que ofereça uma experiência agradável ao usuário.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button className="bg-accent hover:bg-accent/90 text-background">
                Ver Projetos
              </Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                Entrar em Contato
              </Button>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl mb-2">💻</div>
                <div className="text-2xl font-bold text-accent">4</div>
                <div className="text-sm text-muted-foreground">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎓</div>
                <div className="text-2xl font-bold text-accent">SENAI</div>
                <div className="text-sm text-muted-foreground">Técnico</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-2xl font-bold text-accent">Web</div>
                <div className="text-sm text-muted-foreground">Developer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meus Projetos</h2>
            <p className="text-muted-foreground">Trabalhos realizados em grupo ao longo do curso</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <Card className="bg-card border-border hover:border-accent transition p-0 flex flex-col overflow-hidden">
              <img src="/manus-storage/rushy_ee9e9574.png" alt="RUSHY" className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">RUSHY - Sistema de Gerenciamento Logístico</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                Projeto de conclusão de curso (TCC). Sistema completo de gerenciamento de estoque, clientes e relatórios com autenticação.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TypeScript", "Tailwind", "Node.js", "MySQL"].map((tech) => (
                  <span key={tech} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a href="https://rushy.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 text-sm font-semibold flex items-center gap-2">
                Ver Projeto <ExternalLink size={16} />
              </a>
              </div>
            </Card>

            {/* Project 2 */}
            <Card className="bg-card border-border hover:border-accent transition p-0 flex flex-col overflow-hidden">
              <img src="/manus-storage/path-of-pages_1d958094.png" alt="Path of Pages" className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">Path of Pages</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                Jogo interativo de parkour com coleta de livros. 10 fases desafiadoras com mecânicas envolventes.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML5", "CSS3", "JavaScript", "Canvas"].map((tech) => (
                  <span key={tech} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a href="https://rodriguessoaresarthurmiguel-lgtm.github.io/Path_of-Pages/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 text-sm font-semibold flex items-center gap-2">
                Jogar Agora <ExternalLink size={16} />
              </a>
              </div>
            </Card>

            {/* Project 3 */}
            <Card className="bg-card border-border hover:border-accent transition p-0 flex flex-col overflow-hidden">
              <img src="/manus-storage/tetrix_0af7f1b4.png" alt="Tetrix" className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">Tetrix - Jogo dos Blocos</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                Implementação clássica do Tetris com mecânicas originais, pontuação e níveis progressivos.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML5", "CSS3", "JavaScript"].map((tech) => (
                  <span key={tech} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a href="https://cleitinqueijo.github.io/Tetrix/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 text-sm font-semibold flex items-center gap-2">
                Jogar Agora <ExternalLink size={16} />
              </a>
              </div>
            </Card>

            {/* Project 4 */}
            <Card className="bg-card border-border hover:border-accent transition p-6 flex flex-col">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-2">Sistema Sabores</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                Sistema de gerenciamento em desenvolvimento. Projeto destinado a otimizar processos operacionais com interface moderna.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Em Desenvolvimento", "React", "Node.js"].map((tech) => (
                  <span key={tech} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <span className="text-accent text-sm font-semibold">Mais informações em breve</span>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Sobre Mim</h2>
            <p className="text-muted-foreground">Conheça minha trajetória</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Sou desenvolvedor web com formação técnica em Informática pelo SENAI. Tenho conhecimentos em HTML, CSS, MySQL e JavaScript, com maior destaque para o CSS, área em que mais desenvolvi minhas habilidades na criação de interfaces responsivas, organizadas e com um bom acabamento visual.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Durante minha formação e nos projetos desenvolvidos, adquiri experiência na construção de páginas web, aplicando boas práticas de desenvolvimento e buscando manter o código limpo e bem estruturado. Procuro criar projetos que sejam funcionais, fáceis de navegar e que atendam às necessidades de cada proposta, sempre buscando evoluir meus conhecimentos e aperfeiçoar minhas habilidades como desenvolvedor.
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-card border border-border rounded">
                  <strong className="text-accent">Frontend</strong>
                  <p className="text-sm text-muted-foreground mt-1">HTML5, CSS3 e JavaScript</p>
                </div>
                <div className="p-4 bg-card border border-border rounded">
                  <strong className="text-accent">Backend</strong>
                  <p className="text-sm text-muted-foreground mt-1">MySQL e APIs</p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-6 items-center justify-center">
              <div className="w-full h-40 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-3">🚀</div>
                  <p className="text-sm text-muted-foreground font-medium">Sempre em busca de inovação</p>
                </div>
              </div>
              <div className="w-full h-40 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-3">💡</div>
                  <p className="text-sm text-muted-foreground font-medium">Qualidade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-muted-foreground">Vamos conversar sobre seu próximo projeto</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded flex items-center justify-center flex-shrink-0">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <a href="mailto:gabrieldossantospereira56@gmail.com" className="text-accent hover:text-accent/80 text-sm">
                    gabrieldossantospereira56@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded flex items-center justify-center flex-shrink-0">
                  <Github className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">GitHub</h4>
                  <a href="https://github.com/CleitinQueijo" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 text-sm">
                    github.com/CleitinQueijo
                  </a>
                </div>
              </div>

            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              {formStatus !== "idle" && (
                <div className={`p-3 rounded text-sm ${formStatus === "success" ? "bg-accent/20 text-accent border border-accent" : "bg-red-500/20 text-red-400 border border-red-500"}`}>
                  {formMessage}
                </div>
              )}
              <input
                type="text"
                name="name"
                placeholder="Seu nome"
                className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-accent"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="seu.email@exemplo.com"
                className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-accent"
                required
              />
              <textarea
                name="message"
                placeholder="Conte-me sobre seu projeto..."
                rows={4}
                className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-accent resize-none"
                required
              />
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-background">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Sobre</h4>
              <p className="text-sm text-muted-foreground">Desenvolvedor web formado em Técnico em Informática para a internet</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-muted-foreground hover:text-accent transition">Home</a></li>
                <li><a href="#about" className="text-muted-foreground hover:text-accent transition">Sobre</a></li>
                <li><a href="#projects" className="text-muted-foreground hover:text-accent transition">Projetos</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-accent transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="https://github.com/CleitinQueijo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition">
                  <Github size={20} />
                </a>
                <a href="mailto:gabrieldossantospereira56@gmail.com" className="text-muted-foreground hover:text-accent transition">
                  <Mail size={20} />
                </a>

              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Gabriel S. Todos os direitos reservados.</p>
            <p></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
