import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import avatar from "./assets/avatar.png";

export default function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const [emailText, setEmailText] = useState("");
  const [prediction, setPrediction] = useState("...");

  // Simple in-browser spam detection
  const predictEmail = () => {
    const spamWords = ["free", "win", "prize", "buy now", "click"];
    const isSpam = spamWords.some((word) =>
      emailText.toLowerCase().includes(word)
    );
    setPrediction(isSpam ? "Spam 🚫" : "Not Spam ✅");
  };

  const skills = [
    { name: "Python", level: 90 },
    { name: "Java", level: 75 },
    { name: "Scheme", level: 65 },
    { name: "HTML / CSS / JavaScript", level: 85 },
    { name: "Machine Learning", level: 80 },
    { name: "Graph Algorithms", level: 78 },
    { name: "MySQL / SQLite", level: 75 },
    { name: "Git & GitHub", level: 88 },
  ];

  const projects = [
    {
      title: "Healthcare Cybersecurity Attack Model",
      description:
        "Designed attack graphs analysing vulnerabilities in smart healthcare devices and proposed defence strategies.",
      tech: "Python • Network Security",
      github: "#",
      live: null,
    },
    {
      title: "Spam Detection ML",
      description:
        "Built ML models for spam detection with feature engineering and evaluation metrics.",
      tech: "Python • Scikit-Learn",
      github: "#",
      live: null,
    },
    {
      title: "Full Stack Web App",
      description:
        "Responsive web app with authentication and database integration.",
      tech: "React • Node • MongoDB",
      github: "#",
      live: "#",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0f172a] text-white overflow-x-hidden">

      {/* 🌌 Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 40 },
            color: { value: "#c084fc" },
            opacity: { value: 0.3 },
            size: { value: 3 },
            move: { enable: true, speed: 0.6 },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-2 px-6">
        <p className="text-purple-300 text-3xl mb-4 cursive-font tracking-wide">
          <Typewriter
            words={["Hi !! 👋", "Welcome to my portfolio ✨"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 blur-xl opacity-70 animate-pulse"></div>
          <img
            src={avatar}
            alt="Ashmi Avatar"
            className="relative w-44 h-44 rounded-full object-cover border-4 border-purple-400 shadow-2xl"
          />
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-extrabold">Ashmi</h1>
        <p className="text-purple-300 mt-4 text-lg">
          Computer Science Student • AI Enthusiast • Full Stack Developer
        </p>

        <div className="flex gap-6 mt-6 text-2xl text-white/70">
          <a href="https://github.com/Ashmmitha" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-purple-400 hover:scale-125 transition duration-300 cursor-pointer" />
          </a>
          <a href="https://linkedin.com/in/ashmitha-aloshious-937688332" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-purple-400 hover:scale-125 transition duration-300 cursor-pointer" />
          </a>
        </div>
      </section>

      {/* RELEVANT MODULES */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-purple-300 mb-8 text-center">
          Relevant Modules
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Data Structures & Algorithms",
            "Artificial Intelligence",
            "Machine Learning",
            "Natural Computing",
            "Information Security",
            "Full-Stack Web Development",
            "Software Engineering",
          ].map((module, i) => (
            <div key={i} className="bg-white/10 p-5 rounded-xl border border-white/20">
              {module}
            </div>
          ))}
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-purple-300 mb-10 text-center">
          Technical Skills
        </h2>
        <div className="space-y-6">
          {skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-purple-300 mb-10 text-center">
          Selected Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-white/70 text-sm mb-4">{p.description}</p>
              <p className="text-xs text-purple-400 uppercase mb-4">{p.tech}</p>
              <div className="flex gap-4 text-sm">
                <a href={p.github} target="_blank" rel="noreferrer">
                  <FaGithub /> Code
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE SPAM DETECTION DEMO */}
      <section className="max-w-3xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-purple-300 mb-6 text-center">
          Try it Yourself
        </h2>
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg glow-animated">
          <h3 className="font-bold text-xl mb-4">Spam Detection Demo</h3>
          <input
            type="text"
            placeholder="Type an email..."
            className="p-2 rounded w-full mb-4 text-gray-900"
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
          />
          <button
            onClick={predictEmail}
            className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded text-white"
          >
            Predict
          </button>
          <p className="mt-2 text-white/70">Prediction: {prediction}</p>
        </div>
      </section>

      {/* RESUME & CERTIFICATES */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="/MY CV.pdf"
            download
            className="flex items-center gap-3 bg-purple-500 hover:bg-purple-600 transition px-6 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-purple-400/80 glow"
          >
            <FaExternalLinkAlt /> Download Resume
          </a>
          <a
            href="/Certificate.pdf"
            download
            className="flex items-center gap-1 bg-pink-500 hover:bg-pink-600 transition px-6 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-pink-400/80 glow"
          >
            <FaExternalLinkAlt /> Download Certificate
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-3xl mx-auto px-6 py-5">
        <div className="bg-black/60 p-8 rounded-2xl font-mono text-green-400 shadow-xl">
          <p>&gt; Let's build something together.</p>
          <p>&gt; contact: ashmithaalsohias@gmail.com</p>
          <p>&gt; status: Available for opportunities</p>
        </div>
      </section>
    </div>
  );
}