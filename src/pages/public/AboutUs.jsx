import { Link } from 'react-router-dom';
import { CheckCircle, ShieldCheck, Zap, Users } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-premium-light min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary-500/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-sm font-bold mb-8 uppercase tracking-widest shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                Our Mission
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-black text-navy-900 leading-[1.1] mb-10 tracking-tight">
                Empowering <span className="gradient-text-blue">Performance</span> through Community.
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed max-w-xl mb-12">
                At Sportify, we bridge the gap between elite sports infrastructure and the everyday athlete. Everyone deserves a professional field.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/contact" className="btn-primary">
                  Partner with Us
                </Link>
                <Link to="/sports" className="btn-secondary !text-navy-900 !border-navy-900/10">
                  Explore Venues
                </Link>
              </div>
            </div>

            {/* Right Content - Modern Image Cluster */}
            <div className="lg:col-span-6 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                <img 
                  src={`${import.meta.env.BASE_URL}images/felix-yu-Ii7adwWwNh4-unsplash.jpg`} 
                  alt="Elite Basketball" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 glass-card-light p-4 z-20 hidden md:block animate-float">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-inner">
                  <img src={`${import.meta.env.BASE_URL}images/maria-budanova-pristavskaya-pJR5MpkKTM8-unsplash.jpg`} alt="Gymnastics" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 lg:py-40 bg-premium-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-600/5 blur-[150px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="order-2 lg:order-1 relative">
              <div className="glass-card p-10 relative z-10">
                <h2 className="text-4xl font-display font-bold text-white mb-8">Professional Grade Excellence</h2>
                <div className="space-y-6">
                  {[
                    { title: 'World-Class Maintenance', desc: 'Our venues undergo daily quality audits and professional cleaning.' },
                    { title: 'Instant Reservations', desc: 'No phone calls needed. Live availability and instant booking confirmation.' },
                    { title: 'Community Events', desc: 'Host and join tournaments, casual meetups, and pro training camps.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400 shrink-0">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-500 rounded-full blur-[80px] opacity-20"></div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-5xl lg:text-7xl font-display font-black text-white leading-tight mb-8">
                The Best in <span className="gradient-text-orange">Sports</span> Infrastructure
              </h2>
              <p className="text-xl text-white/50 leading-relaxed mb-10">
                We don't just list venues; we curate experiences. Each Sportify partner venue meets strict international standards for safety and performance.
              </p>
              <div className="flex items-center gap-8">
                <div className="group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:bg-primary-600 transition-all">
                    <ShieldCheck size={32} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-white/40">Secured Pay</span>
                </div>
                <div className="group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:bg-primary-600 transition-all">
                    <Zap size={32} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-white/40">Fast Entry</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Venues', value: '4+' },
              { label: 'Athletes', value: '50k+' },
              { label: 'Bookings', value: '300k+' },
              { label: 'Support', value: '24/7' }
            ].map((stat, i) => (
              <div key={i} className="group cursor-default">
                <div className="text-5xl md:text-7xl font-display font-black text-navy-900 mb-2 group-hover:gradient-text-blue transition-all duration-300">{stat.value}</div>
                <div className="text-slate-400 font-bold uppercase tracking-widest text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
