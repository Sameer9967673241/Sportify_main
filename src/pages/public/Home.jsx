import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, ChevronRight, Star } from 'lucide-react';
import { sportsCategories, venues, locations } from '../../data/dummyData';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Mumbai (All)');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/sports?search=${searchTerm}&location=${selectedLocation}`);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden bg-transparent pt-6 lg:pt-20">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-primary-600/10 blur-[120px] rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-primary-500/10 blur-[100px] rounded-full -ml-10 -mb-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 pr-0 lg:pr-12 text-center lg:text-left mb-16 lg:mb-0 pt-10">
            <h1 className="text-[3.5rem] sm:text-[5rem] lg:text-[7rem] font-playfair leading-[1.0] lg:leading-[1.1] mb-8 flex flex-col justify-center lg:justify-start items-center lg:items-start italic">
              <span className="gradient-text-blue w-full text-center lg:text-left tracking-tight drop-shadow-2xl font-black">SPORTS</span>
              <span className="text-white font-black tracking-tighter w-full text-center lg:text-left drop-shadow-2xl opacity-90 not-italic">IN MUMBAI</span>
            </h1>
            <p className="text-white/80 text-2xl sm:text-3xl lg:text-4xl mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0 font-dancing">
              Premium venues, elite performance — book your space in the heart of Mumbai.
            </p>
            
            <a href="#categories" className="inline-block text-xl uppercase tracking-widest font-black text-white pb-2 border-b-4 border-primary-500 hover:text-primary-400 hover:border-primary-400 transition-all mb-16 shadow-[0_10px_30px_-10px_rgba(37,99,235,0.4)]">
              Find a Venue
            </a>

            {/* Quick Search */}
            <div className="relative z-20 max-w-xl mx-auto lg:mx-0 bg-white/10 backdrop-blur-xl p-3 rounded-full shadow-2xl flex items-center border border-white/10 w-[95%] lg:w-full transition-all hover:bg-white/15">
              <div className="pl-5 text-white/40 flex items-center justify-center">
                <Search size={22} className="stroke-[2.5px]" />
              </div>
              <input 
                type="text" 
                placeholder="Find your favorite sport..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-4 px-5 bg-transparent border-none focus:ring-0 text-white outline-none text-lg placeholder-white/30 font-medium"
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
              />
              <button type="submit" onClick={handleSearch} className="btn-primary px-10 py-4 text-lg">
                Search
              </button>
            </div>
          </div>

          {/* Right Hexagon Cluster */}
          <div className="w-full lg:w-1/2 relative h-[320px] sm:h-[450px] lg:h-[600px] flex items-center justify-center -mt-16 lg:mt-0 z-0 overflow-visible animate-float">
            <div className="relative w-[500px] h-[660px] mx-auto scale-[0.55] sm:scale-75 lg:scale-100 origin-center lg:origin-center shrink-0 drop-shadow-2xl">
              {/* Hexagon Path Definition */}
              <style>{`
                .hex-clip { clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); }
              `}</style>

              {/* Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-[220px] hex-clip bg-slate-200 z-30 transition-all duration-300 hover:scale-105 hover:z-50 hover:brightness-110 filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-4 ring-white/10">
                 <img src={`${import.meta.env.BASE_URL}images/felix-yu-Ii7adwWwNh4-unsplash.jpg`} alt="Sport center" className="w-full h-full object-cover" />
              </div>

              {/* Top Left */}
              <div className="absolute top-1/2 left-1/2 ml-[-144px] mt-[-165px] -translate-x-1/2 -translate-y-1/2 w-48 h-[220px] hex-clip bg-slate-200 z-20 transition-all duration-300 hover:scale-105 hover:z-50 hover:brightness-110 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
                 <img src={`${import.meta.env.BASE_URL}images/maria-budanova-pristavskaya-pJR5MpkKTM8-unsplash.jpg`} alt="Gymnastics" className="w-full h-full object-cover" />
              </div>

              {/* Top Right */}
              <div className="absolute top-1/2 left-1/2 ml-[144px] mt-[-165px] -translate-x-1/2 -translate-y-1/2 w-48 h-[220px] hex-clip bg-slate-200 z-20 transition-all duration-300 hover:scale-105 hover:z-50 hover:brightness-110 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
                 <img src={`${import.meta.env.BASE_URL}images/august-phlieger-CREqtqgBFcU-unsplash.jpg`} alt="Basketball indoor" className="w-full h-full object-cover" />
              </div>

              {/* Bottom Left */}
              <div className="absolute top-1/2 left-1/2 ml-[-144px] mt-[165px] -translate-x-1/2 -translate-y-1/2 w-48 h-[220px] hex-clip bg-slate-200 z-20 transition-all duration-300 hover:scale-105 hover:z-50 hover:brightness-110 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
                 <img src={`${import.meta.env.BASE_URL}images/naveen-ketterer-EIxQkHx4rWk-unsplash.jpg`} alt="Swimming" className="w-full h-full object-cover opacity-90" />
              </div>

              {/* Bottom Right */}
              <div className="absolute top-1/2 left-1/2 ml-[144px] mt-[165px] -translate-x-1/2 -translate-y-1/2 w-48 h-[220px] hex-clip bg-slate-200 z-20 transition-all duration-300 hover:scale-105 hover:z-50 hover:brightness-110 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
                 <img src={`${import.meta.env.BASE_URL}images/eduardo-cano-photo-co-6aHmLVmw1qk-unsplash.jpg`} alt="Football turf" className="w-full h-full object-cover opacity-90" />
              </div>
              

            </div>
          </div>
          
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-24 lg:py-32 bg-premium-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-navy-900 mb-6">Explore by Sport</h2>
            <p className="text-xl text-slate-500">Pick your passion and find your field.</p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {sportsCategories.map((sport, index) => (
              <Link key={sport.id} to={`/sports?filter=${sport.name}`} className="group block">
                <div className="relative h-80 md:h-[450px] rounded-[2.5rem] overflow-hidden mb-6 shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3 group-hover:shadow-primary-500/20">
                  <img src={sport.image} alt={sport.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  {/* Heavy Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute inset-0 p-10 flex flex-col justify-end items-start">
                    <span className="text-white font-black text-3xl md:text-4xl drop-shadow-2xl capitalize tracking-tight">{sport.name}</span>
                    <div className="mt-4 flex items-center text-white/80 font-bold tracking-widest text-sm uppercase">
                      {sport.count} venues Available <ChevronRight size={18} className="ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <Link to="/sports" className="mt-12 flex md:hidden items-center justify-center w-full btn-secondary text-lg py-4">
            View All Sports
          </Link>
        </div>
      </section>

      {/* Popular Venues */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Popular Venues in Mumbai</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Top-rated facilities loved by our community. Book your slot before they run out!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues.slice(0, 3).map((venue) => (
              <div key={venue.id} className="glass-card-light group flex flex-col overflow-hidden">
                <div className="relative h-64 overflow-hidden p-3 pb-0">
                  <img src={venue.image} alt={venue.name} className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold text-navy-900 flex items-center gap-1 shadow-md">
                    <Star className="text-accent-500 fill-accent-500" size={14} />
                    {venue.rating}
                  </div>
                  <div className="absolute top-6 left-6 bg-primary-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    {venue.sport}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-display font-bold text-navy-900 mb-2 line-clamp-1">{venue.name}</h3>
                  <div className="flex items-center text-slate-400 mb-6 text-sm">
                    <MapPin size={18} className="mr-2 text-primary-500" />
                    <span className="line-clamp-1">{venue.location}</span>
                  </div>
                  <div className="mt-auto flex items-center justify-center pt-6 border-t border-slate-100">
                    <Link to={`/venue/${venue.id}`} className="btn-primary w-full text-center">
                      Book Slot
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/sports" className="btn-secondary inline-flex items-center gap-2">
              Explore All Venues <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-premium-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 blur-[80px] rounded-full"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl lg:text-7xl font-display font-black text-white mb-8 tracking-tighter">
            Ready to <span className="gradient-text-blue">Dominate?</span>
          </h2>
          <p className="text-xl lg:text-2xl text-white/50 mb-12 font-light leading-relaxed">
            Join Mumbai's elite sport community. Secure your arena, elevate your game, and become a part of the Sportify legacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/sports" className="btn-primary text-lg px-12 py-5 shadow-[0_20px_50px_-10px_rgba(37,99,235,0.5)]">
              Secure a Venue
            </Link>
            <Link to="/about" className="btn-secondary text-lg px-12 py-5">
              Experience More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
