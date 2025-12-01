import React, { useState, useEffect } from 'react';
import { Menu, X, CreditCard, Gamepad2, Coins, Zap, ArrowRight, Check } from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-tesoro-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-white font-display font-bold text-3xl tracking-tighter">
          TESORO<span className="text-xs align-top">®</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-white font-medium text-sm">
          <a href="#" className="hover:text-tesoro-green transition-colors">MERCHANTS</a>
          <a href="#" className="hover:text-tesoro-green transition-colors">GAME STUDIOS</a>
          <a href="#" className="hover:text-tesoro-green transition-colors">GAMERS</a>
          <button className="bg-tesoro-yellow text-tesoro-black px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform">
            JOIN THE WAITLIST
          </button>
        </div>
        
        <button className="md:hidden text-white">
          <Menu />
        </button>
      </div>
    </nav>
  );
};

const Hexagon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" />
  </svg>
);

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-tesoro-black">
      {/* Background Image simulating the video */}
      <div className="absolute inset-0 opacity-60">
        <img 
          src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2000&auto=format&fit=crop" 
          alt="Gamer Girl" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tesoro-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end pb-24">
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white font-display font-extrabold text-[15vw] leading-[0.8] tracking-tighter"
        >
          TESORO<span className="text-4xl align-top">®</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white text-xl md:text-3xl max-w-2xl mt-8 font-medium"
        >
          The rewards platform built for the <br/>
          <span className="text-tesoro-green">$125+ Billion gaming economy.</span>
        </motion.p>

        {/* Floating Element Animation */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-10 md:right-1/4 w-32 md:w-48"
        >
           <div className="bg-tesoro-red/90 p-6 rounded-2xl transform rotate-12 backdrop-blur-sm border border-white/20">
              <CreditCard className="text-white w-12 h-12" />
           </div>
        </motion.div>
      </div>
    </div>
  );
};

const ValueProp = () => {
  return (
    <section className="bg-tesoro-cream py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-5xl md:text-7xl text-tesoro-black mb-6"
        >
          Your brand. Their game.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-tesoro-orange to-tesoro-yellow">
            Everyone wins.
          </span>
        </motion.h2>
        <p className="text-gray-500 text-xl max-w-2xl mx-auto">
          Our patented system connects brands to gamers like never before, turning real-world spending into the currency they actually care about.
        </p>
      </div>
      
      {/* Decorative Hexagons */}
      <Hexagon className="text-tesoro-green/20 w-64 h-64 absolute top-0 -left-20 animate-pulse" />
      <Hexagon className="text-tesoro-purple/20 w-48 h-48 absolute bottom-0 -right-10" />
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { 
      color: 'bg-tesoro-red', 
      icon: <CreditCard className="w-12 h-12 text-white" />, 
      title: 'Connect', 
      desc: 'Gamers connect their Visa / Mastercard cards to Tesoro.' 
    },
    { 
      color: 'bg-tesoro-orange', 
      icon: <Zap className="w-12 h-12 text-white" />, 
      title: 'Activate', 
      desc: 'Activate offers at participating merchants to earn in-game currency.' 
    },
    { 
      color: 'bg-tesoro-green', 
      icon: <CreditCard className="w-12 h-12 text-white" />, 
      title: 'Spend', 
      desc: 'Pay using connected cards in-store, in-app, or online.' 
    },
    { 
      color: 'bg-tesoro-purple', 
      icon: <GamePadIcon />, // Custom component below
      title: 'Reward', 
      desc: 'Tesoro rewards gamers with in-game currency for each transaction.' 
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${step.color} rounded-[2rem] p-8 aspect-square flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 shadow-xl`}
            >
              <div className="bg-black/10 w-fit p-4 rounded-full backdrop-blur-sm">
                {step.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl text-white mb-2">{step.title}</h3>
                <p className="text-white/90 font-medium leading-tight">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CurrencySection = () => {
  return (
    <section className="bg-tesoro-purple py-32 relative">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display font-bold text-5xl md:text-7xl text-tesoro-black mb-6 leading-none">
            Turn every purchase into the <br/>
            <span className="text-white">in-game currency you want.</span>
          </h2>
          <div className="flex gap-4 mt-8">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1612287230217-15ad0ebc26dc?auto=format&fit=crop&w=100&q=80" className="w-12 h-12 rounded-full object-cover" alt="Gamer" />
              <span className="font-bold text-tesoro-black">Earns V-Bucks</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Card 1 */}
          <motion.div 
             whileHover={{ scale: 1.05 }}
             className="bg-tesoro-yellow rounded-2xl p-6 flex items-center justify-between shadow-lg"
          >
            <div className="flex items-center gap-4">
               <div className="bg-yellow-600/20 p-3 rounded-full"><Coins className="text-yellow-900" /></div>
               <div>
                 <h4 className="font-bold text-xl text-yellow-900">Gold Bars</h4>
                 <p className="text-yellow-800 text-sm">Candy Crush</p>
               </div>
            </div>
            <ArrowRight className="text-yellow-900" />
          </motion.div>

          {/* Card 2 */}
          <motion.div 
             whileHover={{ scale: 1.05 }}
             className="bg-blue-400 rounded-2xl p-6 flex items-center justify-between shadow-lg"
          >
            <div className="flex items-center gap-4">
               <div className="bg-blue-600/20 p-3 rounded-full"><Zap className="text-blue-900" /></div>
               <div>
                 <h4 className="font-bold text-xl text-blue-900">V-Bucks</h4>
                 <p className="text-blue-900 text-sm">Fortnite</p>
               </div>
            </div>
            <ArrowRight className="text-blue-900" />
          </motion.div>

           {/* Card 3 */}
           <motion.div 
             whileHover={{ scale: 1.05 }}
             className="bg-green-400 rounded-2xl p-6 flex items-center justify-between shadow-lg"
          >
            <div className="flex items-center gap-4">
               <div className="bg-green-600/20 p-3 rounded-full"><Gamepad2 className="text-green-900" /></div>
               <div>
                 <h4 className="font-bold text-xl text-green-900">Robux</h4>
                 <p className="text-green-900 text-sm">Roblox</p>
               </div>
            </div>
            <ArrowRight className="text-green-900" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ComparisonSection = () => {
    return (
        <section className="py-24 bg-tesoro-cream">
            <div className="container mx-auto px-6">
                 <div className="bg-red-800 rounded-[3rem] overflow-hidden relative min-h-[600px] flex items-center">
                    <img 
                        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2000&auto=format&fit=crop" 
                        alt="Burger" 
                        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                    />
                    <div className="relative z-10 p-12 w-full">
                        <h2 className="font-display font-bold text-4xl md:text-6xl text-white text-center mb-12 drop-shadow-lg">
                            Where real-world spending fuels <br/> in-game rewards.
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-white">
                                <h3 className="opacity-80 uppercase tracking-widest text-sm mb-4">Average Gamer Spend</h3>
                                <div className="text-5xl font-display font-bold mb-2">$13.74</div>
                                <div className="text-sm opacity-80">Monthly Frequency: 1.68 visits</div>
                            </div>
                            
                            <div className="bg-tesoro-green rounded-2xl p-8 text-tesoro-black relative overflow-hidden">
                                <h3 className="opacity-80 uppercase tracking-widest text-sm mb-4 font-bold">Tesoro User Spend</h3>
                                <div className="text-5xl font-display font-bold mb-2">$14.15</div>
                                <div className="text-sm opacity-80 font-semibold">Monthly Frequency: 2.92 visits</div>
                                
                                <div className="absolute right-0 bottom-0 bg-black/10 px-6 py-4 rounded-tl-2xl">
                                    <span className="text-4xl font-display font-black">+71%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
    )
}

const Footer = () => {
    return (
        <footer className="bg-tesoro-black text-white py-24 overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start mb-24">
                    <div className="space-y-6 text-2xl font-display font-bold">
                        <a href="#" className="block hover:text-tesoro-green">Merchants</a>
                        <a href="#" className="block hover:text-tesoro-green">Game Studios</a>
                        <a href="#" className="block hover:text-tesoro-green">Gamers</a>
                        <a href="#" className="block hover:text-tesoro-green">About</a>
                    </div>
                    
                    <div className="mt-12 md:mt-0 w-full md:w-1/3">
                        <p className="font-bold mb-4">Sign up to our newsletter for all the latest news.</p>
                        <div className="flex bg-white/10 rounded-full p-2">
                            <input 
                                type="email" 
                                placeholder="Email address" 
                                className="bg-transparent flex-1 px-4 outline-none text-white placeholder-white/50"
                            />
                            <button className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-tesoro-green transition-colors">
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-sm text-gray-500">
                    <p>© 2025 TESORO XP INC.</p>
                    <div className="space-x-4 mt-4 md:mt-0">
                        <a href="#">Credits</a>
                        <a href="#">Terms</a>
                        <a href="#">Privacy</a>
                    </div>
                </div>
            </div>

            {/* Background Hexagons */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                 <Hexagon className="text-tesoro-green w-96 h-96 absolute -bottom-24 -left-24" />
                 <Hexagon className="text-tesoro-purple w-64 h-64 absolute top-24 right-1/3" />
                 <Hexagon className="text-tesoro-orange w-48 h-48 absolute bottom-1/3 right-12" />
            </div>
            
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none opacity-10">
                <span className="font-display font-black text-[20vw] text-white whitespace-nowrap">TESORO</span>
            </div>
        </footer>
    )
}

const GamePadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/>
        <line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/>
        <rect width="20" height="12" x="2" y="6" rx="2"/>
    </svg>
)


// --- Main App Component ---

function App() {
  return (
    <div className="font-sans antialiased bg-tesoro-cream selection:bg-tesoro-green selection:text-black">
      <Navbar />
      <Hero />
      <ValueProp />
      <HowItWorks />
      <ComparisonSection />
      <CurrencySection />
      <Footer />
    </div>
  );
}

export default App;