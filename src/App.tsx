import React, { useState, useEffect } from 'react';
import { ChevronDown, Bot, Globe, TrendingUp, Users, CheckCircle, Heart, Leaf, ArrowRight, Mail, Instagram, Zap, Target, Sparkles, Star } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    sector: '',
    pagina: ''
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">Mosaiko Labs</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-green-600 transition-colors">Servicios</a>
              <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">Nosotros</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Contacto</a>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-all duration-300">
                Diagnóstico Gratuito
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 pt-20">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-60 animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-40 animate-float-delayed"></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-orange-200 rounded-full opacity-50 animate-float"></div>
          <div className="absolute top-60 left-1/3 w-8 h-8 bg-pink-200 rounded-full opacity-30 animate-float-delayed"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Agencia de automatización sostenible</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Tecnología con <span className="text-green-500">propósito</span>.
              <br />
              Ventas con <span className="text-orange-500">alma</span>.
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Automatizamos y potenciamos marcas sostenibles que quieren crecer sin perder su esencia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2">
                <span>Diagnóstico Gratuito</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 hover:border-green-500 text-gray-700 hover:text-green-600 px-8 py-4 rounded-2xl font-semibold transition-all duration-300">
                Ver Servicios
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Marcas sostenibles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">300%</div>
                <div className="text-sm text-gray-600">Crecimiento promedio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Automatización</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">IA Automatizada</div>
                    <div className="text-sm text-gray-500">Ventas 24/7</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">Conversiones este mes</span>
                    <span className="text-green-600 text-sm font-semibold">+47%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full w-3/4"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">89%</div>
                    <div className="text-xs text-purple-600">Satisfacción</div>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">2.5x</div>
                    <div className="text-xs text-orange-600">ROI Promedio</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Automatizado</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg animate-float-delayed">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Con propósito</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        data-animate 
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible['about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              <span>¿Qué es Mosaiko Labs?</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto">
              Una agencia de automatización y ventas para empresas sostenibles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fusionamos tecnología de punta con sensibilidad estética y visión ética. 
              Integramos herramientas de IA, automatización, CRM y diseño estratégico.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "Tecnología Inteligente",
                description: "IA y automatización que respeta los valores humanos y sostenibles de tu marca.",
                color: "green"
              },
              {
                icon: Heart,
                title: "Diseño con Propósito",
                description: "Estética impecable que comunica tus valores y conecta con tu audiencia consciente.",
                color: "purple"
              },
              {
                icon: Leaf,
                title: "Visión Regenerativa",
                description: "Convertimos la sostenibilidad en ventaja competitiva real y mensurable.",
                color: "orange"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-white border border-gray-100 hover:border-gray-200 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-${item.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="services" 
        data-animate 
        className={`py-20 bg-gradient-to-br from-gray-50 to-purple-50 transition-all duration-1000 ${
          isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>Nuestros servicios</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Servicios que transforman
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones integrales para que tu marca sostenible alcance su máximo potencial
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: "Automatización de ventas", desc: "Sistemas inteligentes que venden mientras duermes", color: "green" },
              { icon: Globe, title: "Diseño de funnels y webs", desc: "Experiencias digitales que convierten visitantes en clientes", color: "blue" },
              { icon: Bot, title: "Bots inteligentes", desc: "WhatsApp, Web y Email automatizados con personalidad", color: "purple" },
              { icon: Users, title: "CRM y fidelización", desc: "Gestión de clientes que fortalece relaciones duraderas", color: "orange" },
              { icon: CheckCircle, title: "Posicionamiento ético (SEO)", desc: "Visibilidad orgánica sin comprometer valores", color: "green" },
              { icon: Heart, title: "Diagnóstico estratégico", desc: "Análisis profundo de oportunidades de crecimiento", color: "pink" },
              { icon: Leaf, title: "Branding con impacto", desc: "Identidad visual que comunica tu propósito", color: "green" },
              { icon: Users, title: "Capacitación tech", desc: "Formación en tecnología humanizada para equipos", color: "blue" }
            ].map((service, index) => (
              <div 
                key={index}
                className="group bg-white hover:bg-gray-900 rounded-2xl p-6 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-transparent hover:shadow-xl"
              >
                <div className={`w-12 h-12 bg-${service.color}-100 group-hover:bg-${service.color}-500 rounded-xl flex items-center justify-center mb-4 transition-all duration-300`}>
                  <service.icon className={`w-6 h-6 text-${service.color}-600 group-hover:text-white transition-colors duration-300`} />
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-300 text-sm transition-colors duration-300">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section 
        id="audience" 
        data-animate 
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible['audience'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Para quién trabajamos</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Si vendes con propósito, esto es para ti
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trabajamos con marcas conscientes que quieren escalar sin perder autenticidad
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Moda sostenible", icon: "👗", color: "purple" },
              { name: "Proyectos educativos", icon: "📚", color: "blue" },
              { name: "Turismo regenerativo", icon: "🌍", color: "green" },
              { name: "Emprendimientos sociales", icon: "🤝", color: "orange" },
              { name: "Gastronomía consciente", icon: "🌱", color: "green" },
              { name: "Consultores sostenibles", icon: "💡", color: "purple" }
            ].map((sector, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-${sector.color}-50 to-${sector.color}-100 border border-${sector.color}-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{sector.icon}</div>
                  <h3 className="font-bold text-gray-900">{sector.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section 
        id="results" 
        data-animate 
        className={`py-20 bg-gray-900 text-white transition-all duration-1000 ${
          isVisible['results'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Resultados comprobados</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Escala tu impacto. Aumenta tus ingresos.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Resultados reales para marcas que trabajan por un futuro mejor
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Más ventas sin perder valores",
              "Canales organizados y automatizados", 
              "Marca posicionada con identidad",
              "Tiempo liberado para crear y crecer"
            ].map((result, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg text-gray-200">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="contact" 
        data-animate 
        className={`py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 transition-all duration-1000 ${
          isVisible['contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ArrowRight className="w-4 h-4" />
              <span>Comienza hoy</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Haz parte de la nueva economía digital regenerativa
            </h2>
            <p className="text-xl text-gray-600">
              Únete a las marcas que están transformando el mundo con tecnología consciente
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="sector" className="block text-sm font-semibold text-gray-700 mb-2">
                    Sector
                  </label>
                  <select
                    id="sector"
                    name="sector"
                    value={formData.sector}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Selecciona tu sector</option>
                    <option value="moda-sostenible">Moda sostenible</option>
                    <option value="turismo-responsable">Turismo responsable</option>
                    <option value="gastronomia-consciente">Gastronomía consciente</option>
                    <option value="educacion-alternativa">Educación alternativa</option>
                    <option value="economia-circular">Economía circular</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="pagina" className="block text-sm font-semibold text-gray-700 mb-2">
                    Página web actual
                  </label>
                  <input
                    type="url"
                    id="pagina"
                    name="pagina"
                    value={formData.pagina}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="https://"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center space-x-2"
                >
                  <span>Solicitar Asesoría</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
            
            <div className="text-center mt-8">
              <a 
                href="https://instagram.com/mosaikostudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
                <span>Síguenos en @mosaikostudio</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Mosaiko Labs</h3>
            <p className="text-gray-400 mb-6">
              Tecnología con propósito para marcas sostenibles
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:info@mosaikolabs.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/mosaikostudio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              © 2025 Mosaiko Labs. Parte del Grupo Mosaiko.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;