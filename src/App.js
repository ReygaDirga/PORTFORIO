import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Menu,
  X,
} from "lucide-react";
import { 
  SiFigma,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiPostman,
  SiGit,
  SiMysql,
  SiLaravel,
  SiHtml5,
  SiCss3,
  SiPhp
} from "react-icons/si";
import ProjectCard from "./components/ProjectCard";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  const skills = [
  { name: "Figma", icon: SiFigma },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "React", icon: SiReact },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Postman", icon: SiPostman },
  { name: "Git", icon: SiGit },
  { name: "MySQL", icon: SiMysql },
  { name: "Laravel", icon: SiLaravel },
  { name: "PHP", icon: SiPhp },
];


  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="flex justify-between items-center px-6 md:px-10 py-5 max-w-7xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-white">
            PORTFORIO
          </div>
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-emerald-500 transition"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0f0f0f] border-b border-white/5 overflow-hidden"
            >
              <div className="flex flex-col gap-4 p-6 text-center text-sm font-bold uppercase tracking-widest text-slate-400">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="py-2 hover:text-emerald-500 transition"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <section
        id="home"
        className="max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-20 md:py-40 flex flex-col-reverse md:flex-row items-center justify-between gap-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <p className="text-emerald-500 font-bold tracking-widest uppercase text-sm mb-3">
            Hello, People!
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            I Am <span className="text-emerald-500">Rio Dwi Oktavianto</span>
          </h1>
          <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
            Frontend Web Developer | SQL-Driven.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <a
              href="https://wa.me/6281219883509"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm transition-all shadow-lg shadow-emerald-500/20"
            >
              Let's Talk
            </a>
            <div className="flex gap-5 text-slate-400">
              <a
                href="https://www.linkedin.com/in/rio-dwi-oktavianto-b398471b8/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  size={20}
                  className="hover:text-white cursor-pointer transition"
                />
              </a>
              <a
                href="https://github.com/ReygaDirga"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github
                size={20}
                className="hover:text-white cursor-pointer transition"
                />
              </a>
              <a
                href="https://www.instagram.com/oktariviann_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                size={20}
                className="hover:text-white cursor-pointer transition"
                />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="w-64 h-64 md:w-96 md:h-96 bg-emerald-500 rounded-full absolute -bottom-4 -right-4 z-0 opacity-10 blur-3xl"></div>
          <div className="relative z-10 border-[12px] border-[#1e293b] rounded-full overflow-hidden w-64 h-64 md:w-[400px] md:h-[400px] shadow-2xl outline outline-2 outline-emerald-500/50">
            <img
              src="profil.jpeg"
              alt="Profile"
              className="w-full h-full object-cover bg-slate-800"
            />
          </div>
        </motion.div>
      </section>
      <section
        id="about"
        className="bg-[#111111] py-24 border-y border-white/5"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-xs font-black text-emerald-500 uppercase tracking-[0.4em] mb-6">
            About Me
          </h2>
          <p className="text-2xl md:text-4xl font-light text-white leading-tight italic mb-8">
            "Design is not just how it looks, but how it works."
          </p>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            I am a frontend web developer based in Indonesia, with a strong focus on building clean, responsive, and data-driven web applications.
          </p>
        </div>
      </section>
      <section id="skills" className="py-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xs font-black text-emerald-500 uppercase tracking-[0.4em] mb-3">
              Capabilities
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              My Expertises
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.05 }}
              className="bg-[#161b22] p-8 rounded-3xl flex flex-col items-center justify-center
                        border border-white/5 hover:border-emerald-500/50 transition-all group"
            >
              <Icon
                size={32}
                className="text-slate-500 group-hover:text-emerald-500 mb-4 transition"
              />
              <span className="text-xs font-black text-slate-400 group-hover:text-white uppercase tracking-widest text-center">
                {name}
              </span>
            </motion.div>
          ))}
        </div>

      </section>
      <section id="projects" className="py-24 bg-[#0a0a0a] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-xs font-black text-emerald-500 uppercase tracking-[0.4em] mb-3">
              Portfolio
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              Latest Work
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
              <ProjectCard
                title="Palorant"
                desc="Palorant, A fun mini project inspired by Valorant’s official website."
                tech={["HTML", "CSS", "JavaScript"]}
                image="palorant.jpg"
                url="https://reygadirga.github.io/Palorant/"
              />

              <ProjectCard
                title="Lumo Game"
                desc="Lumo-Game is an interactive web game."
                tech={["HTML", "CSS", "JavaScript"]}
                image="Lumo.png"
                url="https://lumo-game.vercel.app/"
              />

              <ProjectCard
                title="Librora"
                desc="Library Management System built with Laravel 12 and Laragon."
                tech={["PHP", "Blade", "CSS", "JavaScript"]}
                image="library.jpeg"
                url="https://github.com/ReygaDirga/Library"
              />

              <ProjectCard
                title="Motorcycle Borrowing Form"
                desc="This website is the result of developing a Motorcycle Borrowing Form App"
                tech={["React JS", "Tailwind CSS"]}
                image="A21MUTH.png"
                url="https://www.pinjammotor.site/"
              />

              <ProjectCard
                title="Film Fusion"
                desc="Film Fusion is a React JS web app for exploring movies."
                tech={["React JS"]}
                image="film.png"
                url="https://filsion.vercel.app/"
              />

              <ProjectCard
                title="Premo"
                desc="Premo is a group AI-powered web app for car price prediction using XGBoost."
                tech={["Python", "XGBoost"]}
                image="mobil.jpg"
                url="https://github.com/ReygaDirga/Premo"
              />

              <ProjectCard
                title="ZAPP"
                desc="ZAPP is a group project to analyze and provide insights into household electricity usage."
                tech={["Dart"]}
                image="ZAPP.png"
                url="https://github.com/ReygaDirga/zapp-app"
              />
          </div>
        </div>
      </section>

      <footer className="bg-black text-center py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold">
            Ready to start?
          </h2>
          <div className="h-px w-20 bg-emerald-500/40 mx-auto" />
          <a
            href="mailto:dwioktaviantor@gmail.com"
            className="group inline-flex items-center gap-3 text-emerald-400 text-2xl md:text-3xl font-semibold
                      hover:text-emerald-300 transition"
          >
            dwioktaviantor@gmail.com
            <span className="group-hover:translate-x-1 transition">→</span>
          </a>
          <p className="text-xs tracking-[0.35em] text-gray-500 pt-10">
            © 2026 RIO DWI OKTAVIANTO • JAKARTA, ID
          </p>
        </div>
      </footer>

    </div>
  );
}
