import { useState } from 'react';
import { UserCircle, Lock, ArrowRight, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import emailjs from "@emailjs/browser";


export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);

    try {
      // ✅ Simulate successful login
      localStorage.setItem('isLoggedIn', 'true');
      window.dispatchEvent(new Event('authChange'));

      // ✅ Send Welcome Email via EmailJS
      const templateParams = {
        user_name: formData.username,
        user_email: formData.email,
      };

      await emailjs.send(
        'service_02vmt6m', // ✅ Your Service ID
        'template_ad6m5av', // ✅ Your Template ID
        templateParams,
        '8ZbXGBAnneJEKfHkH' // ✅ Your Public Key
      );

      alert(`✅ Welcome email sent successfully to ${formData.email}`);
    } catch (error) {
      console.error('❌ Email sending failed:', error);
      alert('Login successful, but email sending failed. Check console for details.');
    }

    // ✅ Redirect to home
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      {/* Header */}
      <div className="bg-green-700 text-white py-12 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Login</h1>
          <p className="text-green-100 text-lg">
            Access your farmer portal account
          </p>
        </div>
      </div>

      {/* Login Form */}
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Username field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="username">
                  Username
                </label>
                <div className="relative">
                  <UserCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your username"
                    required
                  />
                </div>
              </div>

              {/* Email field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              {/* Password field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2"
              >
                Login
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Forgot password link */}
              <div className="text-center">
                <a href="#" className="text-green-600 hover:text-green-700 text-sm">
                  Forgot your password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
