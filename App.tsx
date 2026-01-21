import React from 'react';
import { SERVICES, PROJECTS, TESTIMONIALS, Icons } from './constants';
import { AIConsultant } from './components/AIConsultant';

const Navbar = () => (
  <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center gap-2">
          <div className="bg-slate-900 text-white p-1.5 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">APEX</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#projects" className="hover:text-primary transition-colors">Réalisations</a>
          <a href="#about" className="hover:text-primary transition-colors">À Propos</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <a href="#contact" className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
          Demander un Devis
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <div className="relative bg-slate-900 overflow-hidden">
    <div className="absolute inset-0 opacity-40">
        <img 
            src="https://images.unsplash.com/photo-1581552824316-d86b0365775e?auto=format&fit=crop&q=80&w=2000" 
            alt="Cuisine professionnelle et four de boulangerie" 
            className="w-full h-full object-cover"
        />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          L'expert de l'installation <br />
          <span className="text-primary">Boulangerie & Cuisine</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
          Nous accompagnons boulangers et chefs dans l'installation, la maintenance et le dépannage de leurs équipements. Fours, froid, ventilation et aménagement de laboratoire.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#services" className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-semibold text-center transition-all shadow-lg shadow-orange-900/20">
            Nos Services
          </a>
          <a href="#projects" className="px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-lg font-semibold text-center transition-all">
            Voir nos Réalisations
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => (
  <section id="services" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-base font-semibold text-primary uppercase tracking-wider">Savoir-faire</h2>
        <p className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
          Solutions Complètes pour Professionnels
        </p>
        <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
          De la conception de votre fournil à la maintenance préventive de vos équipements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service) => (
          <div key={service.id} className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg transition-shadow group">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Stats = () => (
  <div className="bg-slate-900 border-y border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800/50">
        <div>
          <div className="text-4xl font-extrabold text-white mb-1">500+</div>
          <div className="text-sm text-slate-400 font-medium">Installations</div>
        </div>
        <div>
          <div className="text-4xl font-extrabold text-white mb-1">15</div>
          <div className="text-sm text-slate-400 font-medium">Ans d'Expérience</div>
        </div>
        <div>
          <div className="text-4xl font-extrabold text-white mb-1">7j/7</div>
          <div className="text-sm text-slate-400 font-medium">Service Dépannage</div>
        </div>
        <div>
          <div className="text-4xl font-extrabold text-white mb-1">100%</div>
          <div className="text-sm text-slate-400 font-medium">Conformité HACCP</div>
        </div>
      </div>
    </div>
  </div>
);

const Portfolio = () => (
  <section id="projects" className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-base font-semibold text-primary uppercase tracking-wider">Portfolio</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900">Dernières Réalisations</p>
        </div>
        <a href="#" className="hidden sm:block text-primary font-medium hover:text-primary-hover flex items-center gap-1">
          Voir tout 
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group relative rounded-xl overflow-hidden shadow-sm bg-white cursor-pointer">
            <div className="aspect-w-16 aspect-h-12 overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 pt-20">
              <p className="text-sm text-primary font-medium mb-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">{project.category}</p>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
    <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-16">Ils nous font confiance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="bg-slate-50 p-8 rounded-xl relative">
                        <div className="text-slate-300 absolute top-4 left-6 text-6xl font-serif">"</div>
                        <p className="text-slate-700 text-lg relative z-10 italic mb-6 pt-4 pl-2">
                            {t.quote}
                        </p>
                        <div className="flex items-center gap-4 pl-2">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                {t.author.charAt(0)}
                            </div>
                            <div>
                                <div className="font-bold text-slate-900">{t.author}</div>
                                <div className="text-sm text-slate-500">{t.role}, {t.company}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

const Contact = () => (
  <section id="contact" className="py-20 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-extrabold mb-6">Prêt à équiper votre fournil ?</h2>
          <p className="text-slate-400 mb-8 text-lg">
            Que ce soit pour une création complète, un renouvellement de matériel ou un contrat de maintenance, notre équipe technique est à votre écoute.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white/10 rounded-lg">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-lg">Siège Social</h4>
                <p className="text-slate-400">12 Rue de l'Industrie<br/>75000 Paris, France</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white/10 rounded-lg">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-lg">Contactez-nous</h4>
                <p className="text-slate-400">contact@apex-installations.fr</p>
              </div>
            </div>
          </div>
        </div>

        <form className="bg-white rounded-2xl p-8 text-slate-900 shadow-xl">
          <h3 className="text-xl font-bold mb-6">Demande d'Intervention / Devis</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Prénom</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nom</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Entreprise / Boulangerie</label>
              <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Détails du projet</label>
              <textarea rows={4} placeholder="Ex: Installation four rotatif, Panne chambre froide..." className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"></textarea>
            </div>
            <button type="button" className="w-full py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg transition-colors">
              Envoyer la demande
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
         <span className="font-bold text-white text-lg">APEX</span>
         <span className="text-sm">© {new Date().getFullYear()}</span>
      </div>
      <div className="flex space-x-6 text-sm">
        <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
        <a href="#" className="hover:text-white transition-colors">CGV</a>
        <a href="#" className="hover:text-white transition-colors">Plan du site</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <AIConsultant />
    </div>
  );
}