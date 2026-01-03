
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, Bot, BarChart3, PenTool, Target, 
  Linkedin, Mail, Github, ExternalLink, Play, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { NAV_ITEMS, SKILLS, PORTFOLIO, TESTIMONIALS } from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-zinc-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-lime-400 flex items-center justify-center rounded-lg group-hover:rotate-12 transition-transform">
            <Bot className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight">SAIM<span className="text-lime-400">.</span>AHMAD</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-zinc-400 hover:text-lime-400 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-lime-400 transition-colors">
            Let's Chat
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-8 absolute top-20 left-0 right-0 flex flex-col gap-6">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-300">
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 bg-lime-400 text-black text-center font-bold rounded-xl">
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 text-xs font-medium mb-8">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
      </span>
      BS Digital Marketing at UCP
    </div>
    <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
      Driving ROI with <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">AI Automation</span> & Storytelling
    </h1>
    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 font-light leading-relaxed">
      Helping B2B SaaS & E-commerce brands grow through strategic content systems and AI-powered automation workflows.
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <a href="#portfolio" className="px-8 py-4 bg-lime-400 text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(163,230,53,0.4)] transition-all flex items-center gap-2 group">
        Explore My Work
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </a>
      <a href="#expertise" className="px-8 py-4 bg-zinc-900 text-white font-bold rounded-full border border-zinc-800 hover:bg-zinc-800 transition-all">
        My Expertise
      </a>
    </div>

    {/* Featured logos/social proof placeholder area */}
    <div className="mt-24 w-full border-t border-zinc-900 pt-12 flex flex-col items-center">
      <span className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-bold mb-8">Trusted by visionary teams</span>
      <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale contrast-125">
        <div className="text-2xl font-black italic">TECHFLOW</div>
        <div className="text-2xl font-black italic">AURORA</div>
        <div className="text-2xl font-black italic">NEXUS</div>
        <div className="text-2xl font-black italic">QUANTUM</div>
      </div>
    </div>
  </section>
);

const Expertise = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot className="w-6 h-6 text-lime-400" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-lime-400" />;
      case 'PenTool': return <PenTool className="w-6 h-6 text-lime-400" />;
      case 'Target': return <Target className="w-6 h-6 text-lime-400" />;
      default: return <Target className="w-6 h-6 text-lime-400" />;
    }
  };

  return (
    <section id="expertise" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Expertise</h2>
          <p className="text-zinc-400 max-w-md">Bridging the gap between manual marketing and autonomous growth engines.</p>
        </div>
        <a href="#resources" className="text-lime-400 flex items-center gap-2 font-medium hover:underline">
          View all programs <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="card-blur p-8 rounded-3xl hover:border-lime-400/30 transition-all group">
            <div className="mb-6 w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:scale-110 transition-transform">
              {getIcon(skill.icon)}
            </div>
            <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Portfolio = () => (
  <section id="portfolio" className="py-24 px-6 bg-zinc-950">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Recent Projects</h2>
        <p className="text-zinc-400">Case studies that deliver tangible impact and measurable growth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PORTFOLIO.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-zinc-800">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute top-4 left-4 bg-lime-400 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {item.category}
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-2 mb-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] text-white/60 bg-white/10 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 uppercase font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-lime-400 transition-colors">{item.title}</h3>
            <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{item.description}</p>
            <button className="flex items-center gap-2 text-sm font-bold text-white hover:text-lime-400 transition-colors">
              Case Study <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Resources = () => (
  <section id="resources" className="py-24 px-6 max-w-7xl mx-auto">
    <div className="card-blur rounded-[3rem] p-10 md:p-16 border-lime-400/20 bg-gradient-to-br from-zinc-900 to-black overflow-hidden relative">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-lime-400/10 rounded-full blur-[100px]"></div>
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Free AI Automation Toolkit</h2>
          <p className="text-zinc-400 text-lg mb-8 font-light">
            I've compiled my best n8n blueprints and storytelling frameworks to help you scale your digital presence effortlessly.
          </p>
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3 text-sm">
              <CheckCircle2 className="w-5 h-5 text-lime-400" />
              <span>3 n8n Lead Gen Workflows</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <CheckCircle2 className="w-5 h-5 text-lime-400" />
              <span>Brand Storytelling Template</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <CheckCircle2 className="w-5 h-5 text-lime-400" />
              <span>SaaS Growth Checklist</span>
            </li>
          </ul>
          <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-lime-400 transition-colors flex items-center gap-2">
            Download Toolkit <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-sm aspect-[4/5] bg-zinc-800/50 border border-zinc-700 rounded-2xl flex flex-col items-center justify-center relative shadow-2xl overflow-hidden group">
            <img src="https://picsum.photos/seed/book/400/500" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
               <div className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center text-black">
                  <Play className="w-8 h-8 fill-black" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="py-24 px-6 bg-zinc-950">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our <span className="text-lime-400">Partners</span> Say</h2>
        <p className="text-zinc-400 max-w-2xl">Real people, real results. Scaling businesses through collaborative intelligence.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="card-blur p-8 rounded-3xl border-zinc-800 hover:border-lime-400/20 transition-all">
             <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border border-zinc-800" />
                <div>
                   <h4 className="font-bold text-white">{t.name}</h4>
                   <p className="text-xs text-zinc-500">{t.role} @ {t.company}</p>
                </div>
             </div>
             <p className="text-zinc-300 italic font-light leading-relaxed">"{t.content}"</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <button className="px-8 py-3 border border-zinc-800 rounded-full text-zinc-400 hover:bg-zinc-900 transition-colors flex items-center gap-2 font-medium">
          View All Testimonials <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="py-20 px-6 border-t border-zinc-900 bg-black">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <a href="#" className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-lime-400 flex items-center justify-center rounded-xl">
              <Bot className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-black tracking-tight uppercase">Saim Ahmad</span>
          </a>
          <p className="text-zinc-400 max-w-sm mb-8 text-lg">
            Let's build the future of your brand today. Available for internships and collaborations.
          </p>
          <div className="flex gap-4">
            <a href="https://linkedin.com" className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-lime-400 hover:text-black transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:saimahmadpervaiz@gmail.com" className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-lime-400 hover:text-black transition-all">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com" className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-lime-400 hover:text-black transition-all">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Navigation</h4>
          <ul className="space-y-4 text-zinc-500">
            {NAV_ITEMS.map(item => (
              <li key={item.label}><a href={item.href} className="hover:text-lime-400 transition-colors">{item.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Say Hello</h4>
          <p className="text-zinc-500 mb-4">Lahore, Punjab, Pakistan</p>
          <a href="mailto:saimahmadpervaiz@gmail.com" className="text-lime-400 font-bold hover:underline">saimahmadpervaiz@gmail.com</a>
        </div>
      </div>

      <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs">
        <p>© 2025 Saim Ahmad. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
        </div>
      </div>
    </div>
    
    <button className="fixed bottom-8 right-8 bg-lime-400 text-black px-6 py-3 rounded-full font-bold shadow-2xl green-glow flex items-center gap-2 group z-40">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
      </span>
      Let's have a chat!
    </button>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Expertise />
      <Portfolio />
      <Resources />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
