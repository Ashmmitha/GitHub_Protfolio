import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import avatar from "./assets/avatar.png";

export default function App() {
  const [genreInput, setGenreInput] = useState("");
  const [recommendation, setRecommendation] = useState([]);

  const movies = {
    action: [
      { title: "Mad Max: Fury Road", year: 2015, poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg" },
      { title: "John Wick", year: 2014, poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg" },
      { title: "Gladiator", year: 2000, poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg" },
      { title: "The Dark Knight", year: 2008, poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" }
    ],
    comedy: [
      { title: "Superbad", year: 2007, poster: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg" },
      { title: "The Hangover", year: 2009, poster: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg" },
      { title: "Anchorman", year: 2004, poster: "https://image.tmdb.org/t/p/w500/AyXExKqHhKM2xGn7c6A2hUQv8E9.jpg" }
    ],
    horror: [
      { title: "The Conjuring", year: 2013, poster: "https://image.tmdb.org/t/p/w500/l5qZbDObubXU5SEhNqV5TeHcnQ5.jpg" },
      { title: "Get Out", year: 2017, poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
      { title: "A Quiet Place", year: 2018, poster: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg" }
    ],
    drama: [
      { title: "The Godfather", year: 1972, poster: "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg" },
      { title: "Parasite", year: 2019, poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
      { title: "The Shawshank Redemption", year: 1994, poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg" }
    ],
    romance: [
      { title: "The Notebook", year: 2004, poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg" },
      { title: "La La Land", year: 2016, poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg" },
      { title: "Titanic", year: 1997, poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" }
    ],
    scifi: [
      { title: "Interstellar", year: 2014, poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" },
      { title: "The Matrix", year: 1999, poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
      { title: "Arrival", year: 2016, poster: "https://image.tmdb.org/t/p/w500/tFMo3UJ4B4qIuOts3SSQx7fTj2c.jpg" }
    ],
    anime: [
      { title: "Spirited Away", year: 2001, poster: "https://image.tmdb.org/t/p/w500/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg" },
      { title: "Your Name", year: 2016, poster: "https://image.tmdb.org/t/p/w500/xq1Ugd62d23K2knRUx6xxuALTZB.jpg" },
      { title: "Akira", year: 1988, poster: "https://image.tmdb.org/t/p/w500/4cbP3kJ4xvx3iQZtfhkh2Y1ZpD.jpg" }
    ]
  };

  const predictRecommendation = () => {
    const key = genreInput.toLowerCase().replace(/\s/g, "");
    if (!movies[key]) {
      setRecommendation([
        { title: "Genre not recognized. Try: action, comedy, horror, drama, romance, scifi, anime.", year: "", poster: "https://via.placeholder.com/400x300?text=No+Movies" }
      ]);
      return;
    }
    const top3 = [...movies[key]].sort(() => 0.5 - Math.random()).slice(0, 3);
    setRecommendation(top3);
  };

  const skills = {
    "Programming Languages": ["Python", "Java", "JavaScript", "R"],
    "Web Development": ["React", "HTML", "CSS"],
    "Data & AI": ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch"],
    "Core Computer Science": ["Algorithms", "Data Structures", "Data Analysis"]
  };

  const projects = [
    {
      icon: "🎬",
      title: "CineBloom – Movie Discovery App",
      description: "Responsive movie discovery app with interactive genre selection and top picks recommendations.",
      tech: "React • JavaScript • HTML • CSS • Framer Motion",
      outcome: "Built a top-3 movie recommender in JS, deployed full-stack, and received 90% positive user feedback.",
      live: "https://ashmmitha.github.io/CineBloom/",
      github: "https://github.com/Ashmmitha/CineBloom"
    },
    {
      icon: "🐜",
      title: "Swarm Intelligence Pathfinding",
      description: "Implemented ACO and PSO to solve graph routing problems.",
      tech: "Python • Optimization Algorithms",
      outcome: "Compared convergence speed and path cost vs Dijkstra, reduced average path cost by 18%."
    },
    {
      icon: "📚",
      title: "StarReader – UX Prototype",
      description: "Gamified reading app for children to improve vocabulary with interactive rewards.",
      tech: "Axure RP • UX Design",
      outcome: "Applied HCI principles such as feedback, visibility, and consistency."
    },
    {
      icon: "📊",
      title: "Statistical Data Analysis with R",
      description: "Analysed datasets with R to compute descriptive stats, generate plots, and visualize grouped data.",
      tech: "R • ggplot2 • Data Analysis",
      outcome: "Explored statistical distributions and data visualization techniques using facet plots."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b0e1a] text-gray-100">

      {/* HERO */}
      <section className="flex flex-col items-center text-center py-20 px-6">
        <p className="text-3xl font-semibold mb-4">
          <Typewriter words={["Computer Science Student exploring AI, Data & Algorithms"]} loop={0} cursor />
        </p>
        <p className="text-gray-400 max-w-xl mb-6">
          Built a top-3 movie recommender in JS and implemented ACO/PSO experiments to optimize routing paths.
          Passionate about AI, data analysis, and building interactive web applications.
        </p>
        <motion.img
          src={avatar}
          alt="profile"
          className="w-40 h-40 rounded-full border-2 border-gray-400 mb-6"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
        <div className="flex gap-8 text-gray-400">
          <div><span className="text-white font-bold">AI</span><p>Algorithms</p></div>
          <div><span className="text-white font-bold">UX</span><p>Design</p></div>
          <div><span className="text-white font-bold">Data</span><p>Analysis</p></div>
        </div>
        <div className="flex gap-4 mt-4 flex-wrap justify-center">
          <a href="https://github.com/Ashmmitha" target="_blank" rel="noopener noreferrer" className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition">View My GitHub</a>
          <a href="MY CV.pdf" download className="bg-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-500 transition">Download CV</a>
            <a href="https://www.linkedin.com/in/ashmitha-aloshious-937688332/" target="_blank" rel="noopener noreferrer" className="bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center gap-2">
    <FaLinkedin /> LinkedIn
  </a>

          <a href="Certificate.pdf" download className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-500 transition">Download Certificate</a>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-gray-900/40 p-6 rounded-xl border border-gray-700 hover:border-cyan-400 transition">
              <h3 className="text-xl font-bold mb-2">{p.icon} {p.title}</h3>
              <p className="text-gray-300 text-sm mb-2">{p.description}</p>
              <p className="text-cyan-400 text-xs mb-2">{p.tech}</p>
              <p className="text-gray-300 mb-3">{p.outcome}</p>
              <div className="flex gap-4 text-sm flex-wrap">
                {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Live Demo</a>}
                {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline">GitHub</a>}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Technical Skills</h2>
        <div className="text-center text-gray-300 space-y-4">
          {Object.entries(skills).map(([category, list]) => (
            <p key={category}><span className="text-white font-semibold">{category}:</span> {list.join(" • ")}</p>
          ))}
        </div>
      </section>

      {/* MOVIE DEMO */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-4 text-center">Movie Recommendation Demo 🍿</h2>
        <p className="text-gray-400 text-sm mb-6 text-center">Type a genre to get 3 curated suggestions with posters.</p>
        <div className="flex flex-col items-center gap-4 mb-6">
          <input type="text" placeholder="Enter genre..." className="p-2 rounded w-64 text-gray-900" value={genreInput} onChange={(e) => setGenreInput(e.target.value)} />
          <button onClick={predictRecommendation} className="px-4 py-2 bg-cyan-600 rounded hover:bg-cyan-500 transition">Recommend</button>
        </div>
        {recommendation.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recommendation.map((movie, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/40 rounded-lg overflow-hidden border border-gray-700"
              >
                <img src={movie.poster} alt={movie.title} className="w-full h-72 object-cover" />
                <div className="p-2 text-center">
                  <h3 className="text-white font-semibold">{movie.title}</h3>
                  <p className="text-gray-400 text-sm">{movie.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* CONTACT */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-gray-900/40 p-8 rounded-2xl shadow-md text-center border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Let’s Collaborate!</h2>
          <p className="text-gray-300">Reach me at <a href="mailto:ashmithaaloshious@gmail.com" className="text-cyan-400 hover:underline">ashmithaaloshious@gmail.com</a></p>
          <p className="text-gray-400 mt-2">Open to opportunities, internships, and learning projects.</p>
        </div>
      </section>
    </div>
  );
}