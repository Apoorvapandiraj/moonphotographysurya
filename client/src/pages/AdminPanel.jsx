import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeInAnimation from '../components/FadeInAnimation';
import { FaUpload, FaEdit, FaTrash, FaSignOutAlt } from 'react-icons/fa';

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [activeTab, setActiveTab] = useState('images');

  // Mock data - replace with actual data from backend
  const [images, setImages] = useState([
    { id: 1, title: 'Full Moon', url: '/gallery/full-moon-1.jpg' },
    { id: 2, title: 'Lunar Eclipse', url: '/gallery/eclipse-1.jpg' }
  ]);

  const [packages, setPackages] = useState([
    { id: 1, name: 'Basic Lunar', price: 299 },
    { id: 2, name: 'Premium Eclipse', price: 599 },
    { id: 3, name: 'Royal Celestial', price: 999 }
  ]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login - replace with actual authentication
    if (loginData.username === 'admin' && loginData.password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Mock upload - replace with actual upload logic
      const newImage = {
        id: images.length + 1,
        title: file.name,
        url: URL.createObjectURL(file)
      };
      setImages([...images, newImage]);
    }
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter(img => img.id !== id));
  };

  const handleUpdatePackage = (id, newData) => {
    setPackages(packages.map(pkg =>
      pkg.id === id ? { ...pkg, ...newData } : pkg
    ));
  };

  const handleDeletePackage = (id) => {
    setPackages(packages.filter(pkg => pkg.id !== id));
  };

  if (!isLoggedIn) {
    return (
      <div className="pt-20 min-h-screen">
        <div className="max-w-md mx-auto px-4">
          <FadeInAnimation>
            <h1 className="text-3xl font-bold mb-8 gradient-text text-center">
              Admin Login
            </h1>
          </FadeInAnimation>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Username</label>
              <input
                type="text"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                className="w-full bg-moon-gray/30 border border-gray-700 rounded-lg px-4 py-3 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Password</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="w-full bg-moon-gray/30 border border-gray-700 rounded-lg px-4 py-3 text-white"
                required
              />
            </div>
            <button type="submit" className="w-full btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold gradient-text">Admin Panel</h1>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-2 text-gray-400 hover:text-white"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('images')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'images'
                ? 'bg-moon-blue text-white'
                : 'bg-moon-gray/30 text-gray-300'
            }`}
          >
            Images
          </button>
          <button
            onClick={() => setActiveTab('packages')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'packages'
                ? 'bg-moon-blue text-white'
                : 'bg-moon-gray/30 text-gray-300'
            }`}
          >
            Packages
          </button>
        </div>

        {/* Content */}
        {activeTab === 'images' ? (
          <div>
            <div className="mb-8">
              <label className="btn-primary inline-flex items-center gap-2 cursor-pointer">
                <FaUpload />
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUploadImage}
                  className="hidden"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map(image => (
                <div key={image.id} className="bg-moon-gray/30 rounded-lg p-4">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{image.title}</span>
                    <button
                      onClick={() => handleDeleteImage(image.id)}
                      className="text-red-500 hover:text-red-400"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {packages.map(pkg => (
              <div key={pkg.id} className="bg-moon-gray/30 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{pkg.name}</h3>
                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        const newPrice = prompt('Enter new price:', pkg.price);
                        if (newPrice && !isNaN(newPrice)) {
                          handleUpdatePackage(pkg.id, { price: Number(newPrice) });
                        }
                      }}
                      className="text-moon-blue hover:text-blue-400"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDeletePackage(pkg.id)}
                      className="text-red-500 hover:text-red-400"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
                <p className="text-2xl text-moon-silver">${pkg.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;