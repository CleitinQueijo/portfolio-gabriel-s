import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Mail, ExternalLink, Code2, Briefcase, BookOpen, MessageSquare, Laptop, GraduationCap, Zap } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center font-bold text-background text-xl shadow-[0_0_15px_rgba(0,245,155,0.3)]">G</div>
            <span className="font-bold text-xl tracking-tight">Gabriel S</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-8 text-sm font-medium"
          >
            {["home", "about", "projects", "contact"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-accent transition-colors capitalize relative group"
              >
                {item === "about" ? "Sobre" : item === "projects" ? "Projetos" : item === "contact" ? "Contato" : item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </button>
            ))}
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="text-accent font-bold mb-6 tracking-[0.2em] uppercase text-xs">
              Bem-vindo ao meu portfólio
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
              Gabriel S
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-2xl md:text-4xl font-light text-muted-foreground mb-8">
              Desenvolvedor <span className="text-foreground font-semibold">Web Jr</span>
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Formado em Informática pelo <span className="text-accent font-medium">SENAI</span>. Especialista em transformar ideias em interfaces modernas e responsivas através de um CSS limpo e organizado.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex gap-4 justify-center flex-wrap">
              <Button 
                onClick={() => scrollToSection("projects")}
                className="bg-accent hover:bg-accent/90 text-background font-bold px-8 h-12 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,245,155,0.2)]"
              >
                Ver Projetos
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection("contact")}
                className="border-accent/30 text-accent hover:bg-accent/10 font-bold px-8 h-12 rounded-full transition-transform hover:scale-105 active:scale-95"
              >
                Entrar em Contato
              </Button>
            </motion.div>

            {/* Highlights */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-3 gap-8 mt-24 max-w-3xl mx-auto"
            >
              {[
                { icon: <Laptop className="w-6 h-6" />, val: "4", label: "Projetos" },
                { icon: <GraduationCap className="w-6 h-6" />, val: "SENAI", label: "Técnico" },
                { icon: <Zap className="w-6 h-6" />, val: "Web", label: "Developer" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="mb-4 p-3 bg-accent/5 rounded-2xl text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-black tracking-tight">{stat.val}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-[#050505]">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Meus Projetos</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground text-lg">Trabalhos realizados com foco em usabilidade e performance</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "RUSHY - Logística",
                desc: "Sistema completo de gerenciamento de estoque e relatórios. TCC desenvolvido com foco em automação empresarial.",
                tech: ["React", "TypeScript", "Node.js", "MySQL"],
                link: "https://rushy.vercel.app/",
                img: "/manus-storage/rushy_ee9e9574.png"
              },
              {
                title: "Path of Pages",
                desc: "Jogo interativo de parkour desenvolvido com Canvas API. 10 níveis de pura diversão e desafio técnico.",
                tech: ["HTML5", "JavaScript", "Canvas", "CSS3"],
                link: "https://rodriguessoaresarthurmiguel-lgtm.github.io/Path_of-Pages/",
                img: "/manus-storage/path-of-pages_1d958094.png"
              },
              {
                title: "Tetrix",
                desc: "O clássico Tetris recriado com mecânicas fluidas e sistema de pontuação progressiva.",
                tech: ["HTML5", "CSS3", "JavaScript"],
                link: "https://cleitinqueijo.github.io/Tetrix/",
                img: "/manus-storage/tetrix_0af7f1b4.png"
              },
              {
                title: "Sistema Sabores",
                desc: "Plataforma de gestão gastronômica em desenvolvimento, focada em otimização de pedidos e estoque.",
                tech: ["React", "Tailwind", "Firebase"],
                link: "#",
                img: "/manus-storage/tetrix_0af7f1b4.png", // Placeholder
                dev: true
              }
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-card/30 border-border/50 hover:border-accent/50 transition-all duration-500 p-0 overflow-hidden group h-full flex flex-col">
                  <div className="relative overflow-hidden h-60">
                    <img 
                      src={p.img} 
                      alt={p.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{p.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {p.tech.map((t) => (
                        <span key={t} className="text-[10px] font-bold uppercase tracking-wider bg-accent/5 text-accent border border-accent/10 px-3 py-1 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                    {p.dev ? (
                      <span className="text-muted-foreground text-xs font-bold italic">Em desenvolvimento...</span>
                    ) : (
                      <a 
                        href={p.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all"
                      >
                        Acessar Projeto <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Sobre Mim</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Minha jornada no desenvolvimento começou no <span className="text-foreground font-bold">SENAI</span>, onde descobri minha paixão por criar interfaces que não apenas funcionam, mas encantam.
              </p>
              <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
                Acredito que o design é a alma de qualquer software. Por isso, dedico grande parte do meu tempo aperfeiçoando minhas habilidades em <span className="text-accent font-bold">CSS</span> e arquitetura de componentes, sempre buscando o equilíbrio entre estética e performance.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-card/50 border border-border/50 rounded-2xl hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                    <Code2 size={20} />
                  </div>
                  <h4 className="font-bold mb-1">Frontend</h4>
                  <p className="text-xs text-muted-foreground">React, TS, Tailwind</p>
                </div>
                <div className="p-6 bg-card/50 border border-border/50 rounded-2xl hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                    <Briefcase size={20} />
                  </div>
                  <h4 className="font-bold mb-1">Backend</h4>
                  <p className="text-xs text-muted-foreground">Node.js, MySQL</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-accent/5 rounded-[40px] border border-accent/10 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-center relative z-10">
                  <div className="text-8xl mb-4 animate-bounce">🚀</div>
                  <div className="text-xl font-black tracking-tight text-accent">Focado em Evolução</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-[#050505]">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Vamos Conversar?</h2>
            <p className="text-muted-foreground text-lg">Estou aberto a novas oportunidades e colaborações</p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div className="p-8 bg-card/30 border border-border/50 rounded-3xl space-y-8">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Email</div>
                    <a href="mailto:gabrieldossantospereira56@gmail.com" className="font-bold hover:text-accent transition-colors break-all text-sm">
                      gabrieldossantospereira56@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all">
                    <Github size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">GitHub</div>
                    <a href="https://github.com/CleitinQueijo" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-accent transition-colors">
                      github.com/CleitinQueijo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                {formStatus !== "idle" && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className={`p-4 rounded-2xl text-sm font-bold ${formStatus === "success" ? "bg-accent/10 text-accent border border-accent/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}
                  >
                    {formMessage}
                  </motion.div>
                )}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="name"
                    placeholder="Seu Nome"
                    className="w-full bg-card/50 border border-border/50 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Seu Email"
                    className="w-full bg-card/50 border border-border/50 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Sua Mensagem"
                  rows={5}
                  className="w-full bg-card/50 border border-border/50 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                />
                <Button 
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-background font-black h-14 rounded-2xl transition-all hover:shadow-[0_0_30px_rgba(0,245,155,0.2)]"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/30 text-center">
        <div className="container mx-auto px-6">
          <p className="text-muted-foreground text-sm font-medium">
            © {new Date().getFullYear()} <span className="text-foreground">Gabriel S</span>. Feito com paixão e código.
          </p>
        </div>
      </footer>
    </div>
  );
}
