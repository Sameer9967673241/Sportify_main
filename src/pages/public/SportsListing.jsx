import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, MapPin, Filter, Star } from 'lucide-react';
import { venues, sportsCategories, locations } from '../../data/dummyData';

const SportsListing = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedSport, setSelectedSport] = useState(searchParams.get('filter') || 'All');
  const [selectedLocation, setSelectedLocation] = useState(searchParams.get('location') || 'Mumbai (All)');
  const [filteredVenues, setFilteredVenues] = useState(venues);

  useEffect(() => {
    let result = venues;

    if (searchTerm) {
      result = result.filter(v => v.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    
    if (selectedSport !== 'All') {
      result = result.filter(v => v.sport === selectedSport || v.sport === 'Multiple');
    }
    
    if (selectedLocation !== 'Mumbai (All)') {
      result = result.filter(v => v.location.includes(selectedLocation));
    }

    setFilteredVenues(result);
  }, [searchTerm, selectedSport, selectedLocation]);

  return (
    <div className="bg-premium-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        
        {/* Header & Search */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="text-5xl md:text-6xl font-display font-black text-navy-900 tracking-tight leading-none mb-4">
                Find your <span className="gradient-text-blue">Arena</span>
              </h1>
              <p className="text-xl text-slate-500 font-medium">Curated selection of Mumbai's most elite sports facilities.</p>
            </div>
            <div className="text-slate-400 font-bold tracking-widest text-sm uppercase">
              {filteredVenues.length} Results Found
            </div>
          </div>
          
          <div className="glass-card-light p-6 md:p-8 flex flex-col lg:flex-row gap-6 border-white shadow-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-500" size={24} />
              <input 
                type="text" 
                placeholder="Search venues by name..." 
                className="input-field-light pl-16 border-slate-200/60 shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 lg:w-1/2">
              <div className="relative flex-1">
                <Filter className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-500" size={24} />
                <select 
                  className="input-field-light pl-16 border-slate-200/60 shadow-sm appearance-none cursor-pointer"
                  value={selectedSport}
                  onChange={(e) => setSelectedSport(e.target.value)}
                >
                  <option value="All">All Sports</option>
                  {sportsCategories.map(cat => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="relative flex-1">
                <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-500" size={24} />
                <select 
                  className="input-field-light pl-16 border-slate-200/60 shadow-sm appearance-none cursor-pointer"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredVenues.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredVenues.map((venue) => (
              <div key={venue.id} className="glass-card-light group flex flex-col overflow-hidden hover:shadow-primary-500/10 h-full border-white">
                <div className="relative h-72 overflow-hidden p-3 pb-0">
                  <img src={venue.image} alt={venue.name} className="w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl text-sm font-black text-navy-900 flex items-center gap-1 shadow-2xl">
                    <Star className="text-accent-500 fill-accent-500" size={16} />
                    {venue.rating}
                  </div>
                  <div className="absolute top-8 left-8 bg-navy-900 border border-white/20 text-white px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl">
                    {venue.sport}
                  </div>
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <h3 className="text-2xl lg:text-3xl font-display font-black text-navy-900 mb-3 tracking-tight line-clamp-1">{venue.name}</h3>
                  <div className="flex items-center text-slate-400 mb-8 text-sm font-medium">
                    <MapPin size={20} className="mr-2 text-primary-500" />
                    <span className="line-clamp-1">{venue.location}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {venue.amenities.slice(0, 3).map((amenity, idx) => (
                      <span key={idx} className="bg-primary-50 text-primary-600 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-primary-100/50">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-center pt-8 border-t border-slate-100">
                    <Link to={`/venue/${venue.id}`} className="btn-primary w-full text-center">
                      Reserve Slot
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card-light py-24 text-center border-white shadow-2xl">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary-50 mb-8 text-primary-500">
              <Search size={40} className="stroke-[3]" />
            </div>
            <h3 className="text-4xl font-display font-black text-navy-900 mb-4">No Arenas Found</h3>
            <p className="text-xl text-slate-500 max-w-lg mx-auto font-medium">
              We couldn't match your elite criteria. Try clearing your filters for broader results.
            </p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedSport('All');
                setSelectedLocation('Mumbai (All)');
              }}
              className="mt-10 btn-primary px-12"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SportsListing;
