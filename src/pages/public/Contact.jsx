import { MapPin, Phone, Mail } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent! We will get back to you shortly.');
    e.target.reset();
  };

  return (
    <div className="bg-premium-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">

        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-100 rounded-full blur-[100px] -z-10 opacity-30"></div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-navy-900 mb-6 tracking-tight">
            Connect with <span className="gradient-text-blue">Sportify</span>
          </h1>
          <p className="text-xl text-slate-500 font-light">
            Questions about our premium venues? Partner opportunities? We're dedicated to your athletic success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Contact Details & Map */}
          <div className="lg:col-span-5 space-y-10">
            <div className="glass-card-light p-10 border-white shadow-2xl">
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-10">HQ Information</h2>

              <div className="space-y-8">
                {[
                  { icon: MapPin, title: 'Our Hub', content: 'Andheri East, Mumbai, 400093', detail: 'HQ Operations' },
                  { icon: Phone, title: 'Direct Line', content: '+91 99676 73241', detail: 'Mon-Sat: 9am - 8pm' },
                  { icon: Mail, title: 'Support Email', content: 'inspiresports17@gmail.com', detail: '24/7 Monitoring' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-lg border border-primary-50 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shrink-0">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900 text-lg mb-1">{item.title}</h3>
                      <p className="text-slate-500 font-medium">{item.content}</p>
                      <p className="text-xs text-primary-500 font-bold uppercase tracking-widest mt-1 opacity-60">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-10 border-t border-slate-100">
                <h3 className="font-bold text-navy-900 text-lg mb-6">Global Presence</h3>
                <div className="flex gap-4">
                  {['IG', 'X', 'FB'].map((social) => (
                    <a key={social} href="#" className="w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-navy-900 hover:bg-primary-600 hover:text-white hover:border-primary-500 hover:shadow-xl transition-all duration-300 font-black text-xs">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Visual */}
            <div className="h-80 rounded-[2.5rem] overflow-hidden relative shadow-2xl border-4 border-white group">
              <iframe
                title="Google Maps Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent("Andheri East, Mumbai")}&output=embed&iwloc=near`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-premium-dark p-12 lg:p-16 rounded-[3.5rem] shadow-[0_30px_60px_-15px_rgba(15,23,42,0.5)]">
            <h2 className="text-4xl font-display font-bold text-white mb-4">Send a Message</h2>
            <p className="text-white/40 mb-12 text-lg">Leave your details and our team will get in touch within 2 hours.</p>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-black text-white/40 uppercase tracking-widest mb-3">First Name</label>
                  <input type="text" required className="input-field" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-black text-white/40 uppercase tracking-widest mb-3">Last Name</label>
                  <input type="text" required className="input-field" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-black text-white/40 uppercase tracking-widest mb-3">Email Address</label>
                <input type="email" required className="input-field" placeholder="john@athlete.com" />
              </div>


              <div>
                <label className="block text-sm font-black text-white/40 uppercase tracking-widest mb-3">Your Message</label>
                <textarea
                  rows="4"
                  required
                  className="input-field resize-none"
                  placeholder="How can we help your journey?"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full py-5 text-xl tracking-wide uppercase font-black">
                Send Transmission
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
