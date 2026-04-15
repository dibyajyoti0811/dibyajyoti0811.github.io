import { motion } from 'motion/react';
import { Mail, FileText, BookOpen, ExternalLink } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfbf9] text-zinc-700 font-sans selection:bg-[#d4c5b0] selection:text-zinc-900">
      {/* Navigation Bar */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#fcfbf9]/80 border-b border-zinc-200/80">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-serif text-zinc-900 text-xl font-medium tracking-tight hover:text-[#5A5A40] transition-colors">
            DS.
          </a>
          <div className="flex items-center gap-6 text-sm font-mono text-zinc-500">
            <a href="#about" className="hover:text-[#5A5A40] transition-colors">About</a>
            <a href="#research" className="hover:text-[#5A5A40] transition-colors">Research</a>
            <a href="#publications" className="hover:text-[#5A5A40] transition-colors">Publications</a>
          </div>
        </div>
      </nav>

      {/* Background atmospheric glow - removed for clean academic look */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 md:py-32 space-y-32">
        
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8 md:gap-12 justify-between"
        >
          <div className="space-y-8 flex-1 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-serif text-zinc-900 tracking-tight">
                Dibyajyoti Sahu
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 font-light max-w-xl leading-relaxed mx-auto md:mx-0">
                Ph.D. Candidate in <span className="text-zinc-800 font-medium">Theoretical Condensed Matter Physics</span> at IISER Bhopal.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <a href="mailto:dibyajyoti20@iiserb.ac.in" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300 hover:border-[#5A5A40] hover:bg-[#5A5A40]/5 transition-all duration-300 text-sm font-medium text-zinc-700">
                <Mail className="w-4 h-4" />
                Email Me
              </a>
              <a href="https://scholar.google.com/citations?user=PQMwxM4AAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300 hover:border-zinc-400 hover:bg-zinc-100 transition-all duration-300 text-sm font-medium text-zinc-700">
                <BookOpen className="w-4 h-4" />
                Google Scholar
              </a>
              <a href="https://dibyajyoti0811.github.io/Dibyajyoti_resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300 hover:border-zinc-400 hover:bg-zinc-100 transition-all duration-300 text-sm font-medium text-zinc-700">
                <FileText className="w-4 h-4" />
                Curriculum Vitae
              </a>
            </div>
          </div>

          <div className="shrink-0">
            <img 
              src="https://dibyajyoti0811.github.io/profile.jpg" 
              alt="Dibyajyoti Sahu" 
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-sm border border-zinc-200"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          id="about"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-xs font-mono tracking-widest text-[#5A5A40] uppercase">01. About Me</h2>
            <div className="h-px bg-zinc-200 flex-1" />
          </div>
          <p className="text-zinc-700 leading-relaxed text-lg font-light">
            I am a Ph.D. candidate in theoretical condensed matter physics at IISER Bhopal. My research focuses on nonequilibrium quantum dynamics, transport, and noise effects in quantum systems, with particular emphasis on topological superconductivity, Majorana bound states, and open quantum systems.
          </p>
        </motion.section>

        {/* Research Interests */}
        <motion.section 
          id="research"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-xs font-mono tracking-widest text-[#5A5A40] uppercase">02. Research Interests</h2>
            <div className="h-px bg-zinc-200 flex-1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Topological superconductivity and Majorana physics",
              "Nonequilibrium quantum dynamics and transport",
              "Noise and decoherence in quantum systems",
              "Optimal control in quantum many-body systems",
              "Non-Hermitian and open quantum systems"
            ].map((interest, i) => (
              <div key={i} className="p-5 rounded-2xl border border-zinc-200 bg-white hover:shadow-sm hover:border-zinc-300 transition-all duration-300">
                <p className="text-sm text-zinc-600 font-light leading-relaxed">{interest}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Detailed Research */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-xs font-mono tracking-widest text-[#5A5A40] uppercase">03. Research</h2>
            <div className="h-px bg-zinc-200 flex-1" />
          </div>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-zinc-900">Overview</h3>
              <p className="text-zinc-700 font-light leading-relaxed">
                My research lies in theoretical quantum condensed matter physics, focusing on nonequilibrium dynamics, transport, and noise effects in quantum systems. I work on both topological platforms and lattice models, combining analytical and numerical approaches to study realistic quantum systems under finite-time driving, disorder, and environmental coupling.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif text-zinc-900">Majorana Bound States and Topological Superconductivity</h3>
              <p className="text-zinc-700 font-light leading-relaxed">
                A central part of my research focuses on Majorana bound states in engineered topological superconductors. I study transport signatures, distinguishing genuine topological zero modes from trivial Andreev bound states, and analyze how noise and finite-time driving affect their manipulation.
                I have investigated transport of Majorana modes in driven systems, including piano-key architectures, and studied how noise influences braiding fidelity and gate operations. These results provide insight into realistic constraints for topological quantum computation.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif text-zinc-900">Nonequilibrium Transport and Correlation Dynamics</h3>
              <p className="text-zinc-700 font-light leading-relaxed">
                I study transport and correlation spreading in strongly correlated and quasi-periodic lattice systems. My work has identified:
              </p>
              <ul className="list-disc list-inside text-zinc-700 font-light space-y-2 ml-2">
                <li>Superdiffusive transport near criticality</li>
                <li>Domain-wall dynamics in metallic regimes</li>
                <li>Subdiffusive behavior in open systems</li>
              </ul>
              <p className="text-zinc-700 font-light leading-relaxed">
                These results highlight how boundary conditions, disorder, and environmental coupling affect quantum transport far from equilibrium.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif text-zinc-900">Optimal Control and Noise-Resilient Quantum Dynamics</h3>
              <p className="text-zinc-700 font-light leading-relaxed">
                Another direction of my research focuses on optimized finite-time driving in quantum systems. Using models such as the transverse-field Ising model, I develop protocols that suppress excitations while remaining robust to noise.
                This work clarifies trade-offs between speed, control complexity, and noise-induced errors, and provides a framework for designing efficient quantum control strategies.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif text-zinc-900">Non-Hermitian and Open Quantum Systems</h3>
              <p className="text-zinc-700 font-light leading-relaxed">
                Currently, I am investigating non-Hermitian lattice models with asymmetric hopping and complex potentials. These systems exhibit:
              </p>
              <ul className="list-disc list-inside text-zinc-700 font-light space-y-2 ml-2">
                <li>Localization–delocalization transitions</li>
                <li>Mobility edges</li>
                <li>Non-Hermitian skin effect</li>
              </ul>
              <p className="text-zinc-700 font-light leading-relaxed">
                My focus is on understanding how dissipation and environmental coupling modify transport and dynamical properties in open quantum systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-zinc-900">Methods and Tools</h3>
                <ul className="list-disc list-inside text-zinc-700 font-light space-y-2 ml-2">
                  <li>Exact diagonalization</li>
                  <li>Time-dependent simulations</li>
                  <li>Non-equilibrium Green’s function (NEGF) methods</li>
                  <li>Numerical simulations (Python, MATLAB)</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-zinc-900">Future Directions</h3>
                <p className="text-zinc-700 font-light leading-relaxed">
                  My future work aims to extend these studies toward interacting quantum systems, exploring how noise, dissipation, and control strategies influence complex many-body dynamics while maintaining close connection with experimentally relevant observables.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Publications */}
        <motion.section 
          id="publications"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-xs font-mono tracking-widest text-[#5A5A40] uppercase">04. Publications</h2>
            <div className="h-px bg-zinc-200 flex-1" />
          </div>
          
          <div className="space-y-6">
            {[
              {
                title: "Transport of Majorana bound states in the presence of telegraph noise",
                authors: "Dibyajyoti Sahu, Suhas Gangadharaiah",
                journal: "Physical Review B",
                year: "2025",
                link: "https://doi.org/10.1103/lr2b-nmrk"
              },
              {
                title: "Suppressing excitations using quantum-Brachistochrone and nearest-neighbour interactions",
                authors: "S. J. S. Sandeep, Dibyajyoti Sahu, Suhas Gangadharaiah",
                journal: "arXiv",
                year: "2025",
                link: null
              },
              {
                title: "Transport phenomena and correlation dynamics of a one-dimensional effective Hamiltonian equivalent to the hexagonal Harper model",
                authors: "Santanu Dhara, Dibyajyoti Sahu, Manvendra Singh, Suhas Gangadharaiah",
                journal: "Physical Review B",
                year: "2024",
                link: "https://doi.org/10.1103/PhysRevB.109.134204"
              },
              {
                title: "Effect of topological length on bound state signatures in a topological nanowire",
                authors: "Dibyajyoti Sahu, Vipin Khade, Suhas Gangadharaiah",
                journal: "Physical Review B",
                year: "2023",
                link: "https://doi.org/10.1103/PhysRevB.108.205426"
              }
            ].map((pub, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:shadow-md hover:border-zinc-300 transition-all duration-300">
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-zinc-900 group-hover:text-[#5A5A40] transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-zinc-600 font-light text-sm">
                    {pub.authors}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                    <span className="px-2 py-1 rounded-md bg-zinc-100 text-zinc-600">{pub.journal}</span>
                    <span className="text-zinc-400">{pub.year}</span>
                    {pub.link && (
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[#5A5A40] hover:text-zinc-900 transition-colors ml-auto"
                      >
                        DOI <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="pt-4">
            <a 
              href="https://scholar.google.com/citations?user=PQMwxM4AAAAJ&hl=en" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#5A5A40] hover:text-zinc-900 transition-colors"
            >
              View full list on Google Scholar <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono text-zinc-500"
        >
          <p>© {new Date().getFullYear()} Dibyajyoti Sahu.</p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a href="mailto:dibyajyoti0811@gmail.com" className="hover:text-[#5A5A40] transition-colors">dibyajyoti0811@gmail.com</a>
            <a href="mailto:dibyajyoti20@iiserb.ac.in" className="hover:text-[#5A5A40] transition-colors">dibyajyoti20@iiserb.ac.in</a>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
