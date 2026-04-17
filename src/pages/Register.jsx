import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import toast from 'react-hot-toast';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send registration data to backend for email notification
      const emailResponse = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (emailResponse.ok) {
        toast.success('Registration request sent! We will contact you shortly.');
        navigate('/'); // Redirect to Home
      } else {
        toast.error('Failed to notify administration. Please try again.');
      }
    } catch (error) {
      console.error('Registration/Email Error:', error);
      toast.error('Backend connection lost. Please try later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-premium-light flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center text-primary-600">
          <UserPlus className="w-12 h-12" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-display font-black text-navy-900 tracking-tight">
          Join <span className="gradient-text-blue">Sportify</span>
        </h2>
        <p className="mt-2 text-center text-sm text-slate-500 font-medium lowercase tracking-widest px-4">
          Experience Mumbai's elite sport community
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-8 shadow-2xl sm:rounded-3xl border border-slate-100 mx-4">
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field-light"
                placeholder="Cristiano Ronaldo"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
                Email address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field-light"
                placeholder="cr7@legend.com"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
                Desired Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field-light"
                placeholder="••••••••"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-4 text-sm font-black uppercase tracking-[0.2em] shadow-xl disabled:opacity-50"
              >
                {isSubmitting ? 'Sending Request...' : 'Send Join Request'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
