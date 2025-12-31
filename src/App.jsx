import React, { useState, useEffect, } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Menu, X, Trophy, Users, Gamepad2, Coins, Zap, ArrowRight, Check, Pi, Dna, FlaskConical, Download, } from 'lucide-react';

// --- Variables & Constants ---

const TermsUrl = "https://www.freeprivacypolicy.com/live/6fbb5983-935c-493b-80c0-0e863dbccd9a";
const PrivacyUrl = "https://www.freeprivacypolicy.com/live/8dd76e22-df05-4c81-b107-b09657a045ca";

// --- Secondary Functions

function DownloadRulebook() {
  const Url = new URL("https://drive.usercontent.google.com/u/0/uc");
  const a = document.createElement("a");
  Url.searchParams.set('id', '1oTD9fUXDAqXHW3vzamDbnLOUsKY2eOD9')
  a.href = Url;
  a.download = "ClashOfProdigies.pdf";
  a.click(); a.remove();
}

// --- Shared UI ---

const Navbar = ({ onRegisterClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsMobileOpen(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md py-3'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-baseline justify-start cursor-pointer" onClick={() => document.location.replace('/')}>
              <span className="w-fit text-white font-display font-black text-xl tracking-tight">
                Clash of Prodigies&nbsp;
              <span className="uppercase tracking-tight text-tesoro-green text-2xl">3</span>
              </span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-white font-medium text-sm">
          <a href="#about" className="hover:text-tesoro-green transition-colors">
            About
          </a>
          <a href="#how" className="hover:text-tesoro-green transition-colors">
            How it works
          </a>
          <a href="#tracks" className="hover:text-tesoro-green transition-colors">
            Subjects
          </a>
          <a href="#impact" className="hover:text-tesoro-green transition-colors">
            Impact
          </a>
          <button className="bg-tesoro-yellow text-black px-5 py-2 rounded-full font-bold hover:scale-105 transition-transform" onClick={onRegisterClick}>
            Register
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
        className="md:hidden text-white"
        onClick={() => setIsMobileOpen((prev) => !prev)}
        aria-label="Toggle navigation menu">
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
        className="md:hidden absolute top-full inset-x-0 bg-black/95 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col space-y-4 text-white text-sm">
        <a href="#about" className="py-1 hover:text-tesoro-green" onClick={() => setIsMobileOpen(false)}>About</a>
        <a href="#how" className="py-1 hover:text-tesoro-green" onClick={() => setIsMobileOpen(false)}>How it works</a>
        <a href="#tracks" className="py-1 hover:text-tesoro-green" onClick={() => setIsMobileOpen(false)}>Subjects</a>
        <a href="#impact" className="py-1 hover:text-tesoro-green" onClick={() => setIsMobileOpen(false)}>Impact</a>
        <button
        className="mt-2 bg-tesoro-yellow text-black px-5 py-2 rounded-full font-bold"
        onClick={() => {setIsMobileOpen(false); onRegisterClick(true)}}>Register</button>
      </div>
    </motion.div>
  )}
    </nav>
  );
};

const Hexagon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" />
  </svg>
);

// --- Sections ---

const Hero = ({ onRegisterClick, onRuleBookDownload }) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0 opacity-70">
        <img
          src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=2000&q=80"
          alt="Students in a STEM lab"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 flex flex-col lg:flex-row items-end lg:items-center">
        <div className="w-full lg:w-3/5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-tesoro-green mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-tesoro-green" />
            STEM Competition for Ordinary and Advanced Levels
          </motion.p>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-white font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight"
          >
            Turn your classroom brilliance into
            <span className="text-tesoro-yellow"> championship wins.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-base sm:text-lg max-w-xl mt-6"
          >
            Clash of Prodigies brings together top students in Mathematics,
            Physics, Chemistry, and Biology in a fast-paced, game-style
            tournament, but for problem solving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <button onClick={onRegisterClick}
            className="inline-flex items-center justify-center bg-tesoro-green px-6 py-3
            text-black font-semibold gap-2 rounded-full hover:scale-105">
              <Trophy className="w-4 h-4" />
              Register for Season 3
            </button>
            <button onClick={onRuleBookDownload} className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
              <Download className="w-4 h-4" />
              Download rulebook
            </button>
          </motion.div>

          <div className="flex flex-wrap gap-4 mt-8 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-tesoro-green" />
              Open to high school and college students
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-tesoro-green" />
              Team and individual events
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-tesoro-green" />
              Scholarships and tech prizes
            </div>
          </div>
        </div>

        {/* Floating card on the right */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full lg:w-2/5 flex justify-end mt-12 lg:mt-0"
        >
          <div className="bg-white/10 border border-white/15 backdrop-blur-lg rounded-3xl p-6 max-w-xs rotate-3">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-tesoro-green uppercase tracking-[0.2em]">
                Live scoreboard
              </span>
              <Gamepad2 className="w-5 h-5 text-tesoro-yellow" />
            </div>
            <p className="text-sm text-white/80 mb-4">
              Match-style fixtures, bonus rounds, and tiebreaker questions keep
              students engaged from kickoff to finals.
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-white/70">Schools registered</span>
                <span className="font-semibold text-white">48</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">States represented</span>
                <span className="font-semibold text-white">10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Max team size</span>
                <span className="font-semibold text-white">4 students</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ValueProp = () => {
  return (
    <section
      id="about"
      className="bg-tesoro-cream py-20 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-tesoro-black mb-4"
        >
          A STEM tournament that feels like a championship,
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-tesoro-orange to-tesoro-yellow">
            {' '}
            not an exam.
          </span>
        </motion.h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mt-4">
          Clash of Prodigies combines curriculum-aligned questions with
          game-style fixtures, leaderboards, and live commentary. Students get
          all the rigor of Olympiad-level problem solving, wrapped in the energy
          of match day.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3 text-left">
          <ValuePill
            title="Built for everyone"
            body="Simple registration, clear rules, and a schedule that respects the general academic calendars."
          />
          <ValuePill
            title="Fair & inclusive"
            body="Standardized question pools, tiered difficulty, and multiple paths to shine."
          />
          <ValuePill
            title="Future focused"
            body="Helps students build confidence for important exams and careers."
          />
        </div>
      </div>

      {/* Decorative shapes */}
      <Hexagon className="text-tesoro-green/10 w-64 h-64 absolute -top-16 -left-20" />
      <Hexagon className="text-tesoro-purple/10 w-40 h-40 absolute -bottom-10 right-4" />
    </section>
  );
};

const ValuePill = ({ title, body }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
    <h3 className="font-semibold text-tesoro-black mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{body}</p>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      color: 'bg-tesoro-red',
      icon: <Users className="w-10 h-10 text-white" />,
      title: 'Form your team',
      desc: 'Register as teams and individuals in the four STEM subjects.',
    },
    {
      color: 'bg-tesoro-orange',
      icon: <Zap className="w-10 h-10 text-white" />,
      title: 'Compete in Events',
      desc: 'Teams and individuals compete in timed quiz fixtures hosted online',
    },
    {
      color: 'bg-tesoro-green',
      icon: <Coins className="w-10 h-10 text-white" />,
      title: 'Accrue, Build, Connect',
      desc: 'Gain vital points, be involved in the community and connect with others',
    },
    {
      color: 'bg-tesoro-purple',
      icon: <Trophy className="w-10 h-10 text-white" />,
      title: 'Dominate and Win',
      desc: 'Event winners earn scholarships, cash prizes, and bragging rights',
    },
  ];

  return (
    <section id="how" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-tesoro-black mb-3">
              How the competition works
            </h2>
            <p className="text-gray-600 max-w-md text-sm sm:text-base">
              We borrowed the clarity and organisation of soccer competitions and applied it to
              STEM quizzes. Clear stages, visible progress, and plenty of drama.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${step.color} rounded-[2rem] p-7 h-fit hover:scale-[1.02] transition-transform duration-300 shadow-xl`}
            >
              <div className="bg-black/10 w-fit p-4 rounded-full backdrop-blur-sm">
                {step.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/90 text-sm leading-snug">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TracksSection = () => {
  return (
    <section
      id="tracks"
      className="bg-tesoro-black py-24 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Four leagues. Two tournaments.
            <span className="text-tesoro-yellow"> One Competition.</span>
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-md">
            Students compete in Mathematics, Physics, Chemistry, and Biology
            through individual sprints, team relays, and buzzer rounds. Each
            match is scored to feed into its respective league table.
          </p>

          <div className="mt-8 space-y-3 text-xs sm:text-sm text-white/70">
            <FeatureLine label="Question types" value="MCQ, structured, rapid-fire" />
            <FeatureLine label="Difficulty" value="From curriculum-aligned to Olympiad-style" />
            <FeatureLine label="Round length" value="15–30 minutes per fixture" />
          </div>
        </div>

        <div className="space-y-4">
          <SubjectCard
            accent="bg-blue-400"
            icon={<Pi className="text-blue-900" />}
            title="House of Odin - Mathematics"
            subtitle="Algebra, combinatorics, number theory, and word problems that reward creative thinking."
          />
          <SubjectCard
            accent="bg-red-400"
            icon={<Zap className="text-red-900" />}
            title="House of Bamzy - Physics"
            subtitle="Mechanics, waves, electricity, and everyday reasoning about how the world works."
          />
          <SubjectCard
            accent="bg-green-400"
            icon={<Dna className="text-green-900" />}
            title="House of Weber - Biology"
            subtitle="Cells, ecology, human anatomy, and the science of life in all its forms."
          />
          <SubjectCard
            accent="bg-yellow-400"
            icon={<FlaskConical className="text-yellow-900" />}
            title="House of Wonder - Chemistry"
            subtitle="Stoichiometry, reactions, cells, genetics, and real-world applications in health and industry."
          />
        </div>
      </div>

      {/* Background image hint of science lab */}
      <div className="absolute inset-y-0 right-0 w-1/2 opacity-10 pointer-events-none hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1600&q=80"
          alt="Science lab"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

const SubjectCard = ({ accent, icon, title, subtitle }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className={`${accent} rounded-2xl p-5 flex items-start gap-4 shadow-lg`}
  >
    <div className="bg-black/10 p-3 rounded-full">{icon}</div>
    <div>
      <h4 className="font-bold text-base sm:text-lg text-black mb-1">
        {title}
      </h4>
      <p className="text-xs sm:text-sm text-black/80">{subtitle}</p>
    </div>
  </motion.div>
);

const FeatureLine = ({ label, value }) => (
  <div className="flex justify-between gap-4">
    <span className="uppercase tracking-[0.2em] text-[0.6rem] text-white/60">
      {label}
    </span>
    <span className="text-[0.7rem] sm:text-xs text-white">{value}</span>
  </div>
);

const ImpactSection = () => {
  return (
    <section id="impact" className="py-24 bg-tesoro-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-tesoro-red rounded-[2.5rem] overflow-hidden relative min-h-[380px] flex items-center">
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1800&q=80"
            alt="Students collaborating"
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="relative z-10 w-full p-10 sm:p-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white text-center mb-10 drop-shadow">
              Where competition sparks confidence, not anxiety.
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-7 border border-white/25 text-white">
                <h3 className="opacity-80 uppercase tracking-[0.2em] text-xs mb-3">
                  After joining Clash of Prodigies
                </h3>
                <div className="text-4xl sm:text-5xl font-display font-bold mb-1">
                  3x
                </div>
                <div className="text-xs sm:text-sm opacity-80">
                  more likely for students to voluntarily practice past
                  questions and problem sets.
                </div>
              </div>

              <div className="bg-tesoro-green rounded-2xl p-7 text-tesoro-black relative overflow-hidden">
                <h3 className="opacity-80 uppercase tracking-[0.2em] text-xs mb-3 font-bold">
                  Teacher feedback
                </h3>
                <div className="text-4xl sm:text-5xl font-display font-bold mb-1">
                  92%
                </div>
                <div className="text-xs sm:text-sm opacity-80 font-semibold">
                  of teachers report higher student engagement during STEM
                  lessons after the competition.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const NewsLetter = () => {
  const [state, handleSubmit] = useForm("mldqvwgz");
  if (state.succeeded) {
      return <p className="font-semibold mb-3 text-sm">You will now recieve updates!</p>;
  }
  return (
    <form className="flex bg-white/10 rounded-full p-1 w-fit" onSubmit={handleSubmit}>
      <input autoComplete='off' type="email" name="email" placeholder="Enter email address"
        className="bg-transparent flex-1 px-4 text-xs sm:text-sm outline-none text-white placeholder-white/50"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <button type="submit" disabled={state.submitting} className="bg-white text-black w-full h-9 rounded-full flex items-center justify-center hover:bg-tesoro-green transition-colors">
        <ArrowRight width={10} size={16} />
      </button>
    </form>
  );
}

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div>
            <div className="flex items-baseline justify-start mb-4">
              <span className="w-fit text-white font-display font-black text-xl tracking-tight">
                Clash of Prodigies&nbsp;
              <span className="uppercase tracking-tight text-tesoro-green text-2xl">3</span>
              </span>
            </div>
            <p className="text-sm text-white/70 max-w-xs">
              Inspiring the next generation of scientists, engineers, and
              innovators, one match at a time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 w-full md:w-auto">
            <div className="space-y-3 text-sm">
              <a href="#about" className="block hover:text-tesoro-green">About</a>
              <a href="#how" className="block hover:text-tesoro-green">How it works</a>
              <a href="#tracks" className="block hover:text-tesoro-green">Subjects</a>
              <a href="#impact" className="block hover:text-tesoro-green">Impact</a>
            </div>

            <div className="sm:w-64">
              <p className="font-semibold mb-3 text-sm">
                Get updates on registration dates and resources.
              </p>
                <NewsLetter />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Clash of Prodigies. All rights reserved.</p>
          <div className="space-x-4">
            <a href={TermsUrl} className="hover:text-tesoro-green">Terms of Service</a>
            <a href={PrivacyUrl} className="hover:text-tesoro-green">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* Background hexagons + wordmark */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Hexagon className="text-tesoro-green w-80 h-80 absolute -bottom-20 -left-20" />
        <Hexagon className="text-tesoro-purple w-56 h-56 absolute top-12 right-1/3" />
        <Hexagon className="text-tesoro-orange w-40 h-40 absolute bottom-1/3 right-6" />
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none opacity-5">
        <span className="font-display font-black text-[18vw] text-white whitespace-nowrap">
          PRODIGY
        </span>
      </div>
    </footer>
  );
};

// --- Main App ---

function App() {
  const openRegister = () => window.location.replace('https://auth.clashofprodigies.org/register');

  return (
    <div className="font-sans antialiased bg-tesoro-cream selection:bg-tesoro-green selection:text-black">
      <Navbar onRegisterClick={openRegister} />
      <Hero onRegisterClick={openRegister} onRuleBookDownload={() => DownloadRulebook()} />
      <ValueProp />
      <HowItWorks />
      <TracksSection />
      <ImpactSection />
      <Footer />
    </div>
  );
}


export default App;
