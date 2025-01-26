import React, { useState } from 'react';
import { Menu as MenuIcon, X, Coffee, CupSoda, IceCream2, Sandwich, ChevronRight, MapPin, Facebook, Twitter, Instagram, Star, Gift, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { name: 'Menu', href: '#menu', id: 'menu' },
    { name: 'Rewards', href: '#rewards', id: 'rewards' },
    { name: 'Gift Cards', href: '#gift-cards', id: 'gift-cards' },
    { name: 'Find a Store', href: '#stores', id: 'stores' },
  ];

  const menuCategories = [
    {
      title: 'Hot Coffees',
      items: [
        { name: 'Caffè Americano', price: '$3.95', image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { name: 'Cappuccino', price: '$4.45', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { name: 'Flat White', price: '$4.75', image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }
      ]
    },
    {
      title: 'Cold Drinks',
      items: [
        { name: 'Iced Coffee', price: '$3.75', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { name: 'Cold Brew', price: '$4.25', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { name: 'Nitro Cold Brew', price: '$4.95', image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }
      ]
    }
  ];

  const rewardLevels = [
    { stars: 25, benefits: ['Customize your drink', 'Extra espresso shot', 'Dairy substitute'], image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { stars: 50, benefits: ['Hot coffee', 'Tea', 'Select bakery items'], image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { stars: 150, benefits: ['Handcrafted drink', 'Hot breakfast', 'Parfait'], image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { stars: 200, benefits: ['Lunch sandwich', 'Protein box', 'Salad'], image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }
  ];

  const giftCards = [
    { name: 'Birthday Celebration', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { name: 'Thank You', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { name: 'Congratulations', image: 'https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { name: 'Holiday Special', image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }
  ];

  const featuredItems = [
    { name: 'Caramel Macchiato', icon: Coffee, description: 'Freshly steamed milk with vanilla-flavored syrup marked with espresso and caramel drizzle', price: '$4.95' },
    { name: 'Iced Green Tea Lemonade', icon: CupSoda, description: 'Green tea blended with mint, lemongrass and lemon verbena', price: '$3.95' },
    { name: 'Java Chip Frappuccino', icon: IceCream2, description: 'Mocha sauce, Frappuccino chips with coffee, milk and ice', price: '$5.45' },
    { name: 'Chicken & Bacon Panini', icon: Sandwich, description: 'Herbed chicken, bacon and maple mustard butter', price: '$6.95' },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'menu':
        return (
          <div className="py-16 bg-gradient-to-br from-green-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-center mb-12 text-green-800"
              >
                Our Menu
              </motion.h2>
              {menuCategories.map((category, idx) => (
                <motion.div 
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="mb-12"
                >
                  <h3 className="text-2xl font-semibold mb-6 text-green-700">{category.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {category.items.map((item, itemIdx) => (
                      <motion.div
                        key={item.name}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                      >
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                        <div className="p-6">
                          <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                          <p className="text-green-600 font-bold">{item.price}</p>
                          <button className="mt-4 bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition duration-300">
                            Add to Cart
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'rewards':
        return (
          <div className="py-16 bg-gradient-to-br from-green-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <Star className="w-16 h-16 text-green-700 mx-auto mb-4" />
                <h2 className="text-4xl font-bold mb-4 text-green-800">Starbucks® Rewards</h2>
                <p className="text-xl text-gray-600">Join Starbucks Rewards to earn Stars for free food and drinks</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {rewardLevels.map((level, idx) => (
                  <motion.div
                    key={level.stars}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <img src={level.image} alt={`${level.stars} Stars`} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <Star className="w-6 h-6 text-green-700 mr-2" />
                        <h3 className="text-2xl font-bold">{level.stars}</h3>
                      </div>
                      <ul className="space-y-2">
                        {level.benefits.map((benefit, benefitIdx) => (
                          <li key={benefitIdx} className="flex items-center">
                            <ChevronRight className="w-4 h-4 text-green-700 mr-2" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-12 text-center"
              >
                <button className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition duration-300">
                  Join Now
                </button>
              </motion.div>
            </div>
          </div>
        );

      case 'gift-cards':
        return (
          <div className="py-16 bg-gradient-to-br from-green-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <Gift className="w-16 h-16 text-green-700 mx-auto mb-4" />
                <h2 className="text-4xl font-bold mb-4 text-green-800">Gift Cards</h2>
                <p className="text-xl text-gray-600">Share the love with a Starbucks Gift Card</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {giftCards.map((card, idx) => (
                  <motion.div
                    key={card.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <img src={card.image} alt={card.name} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-4">{card.name}</h3>
                      <button className="w-full bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition duration-300">
                        Select
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <CreditCard className="w-12 h-12 text-green-700 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">eGift Cards</h3>
                  <p className="mb-6">Send an eGift Card instantly to anyone, anywhere</p>
                  <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition duration-300">
                    Send eGift
                  </button>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <Gift className="w-12 h-12 text-green-700 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Physical Gift Cards</h3>
                  <p className="mb-6">Purchase a physical gift card to give in person</p>
                  <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition duration-300">
                    Buy Card
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        );

      case 'stores':
        return (
          <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <MapPin className="w-16 h-16 text-green-700 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Find a Store</h2>
                <p className="text-xl text-gray-600">Find your nearest Starbucks location</p>
              </div>
              <div className="max-w-2xl mx-auto">
                <div className="flex">
                  <div className="relative flex-grow">
                    <MapPin className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter your location"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-green-700"
                    />
                  </div>
                  <button className="bg-green-700 text-white px-6 py-2 rounded-r-full hover:bg-green-800 transition duration-300">
                    Search
                  </button>
                </div>
                <div className="mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&auto=format&fit=crop&w=1389&q=80"
                    alt="Starbucks Store"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <>
            {/* Hero Section */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Starbucks Coffee"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Starbucks</h1>
                  <p className="text-xl md:text-2xl mb-8">Handcrafted beverages and delicious food</p>
                  <button className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition duration-300">
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Items */}
            <div className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Featured Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {featuredItems.map((item) => (
                    <div key={item.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                      <item.icon className="w-12 h-12 text-green-700 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <button className="flex items-center text-green-700 hover:text-green-800">
                        Learn More <ChevronRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-green-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" 
                alt="Starbucks" 
                className="h-12 w-auto cursor-pointer bg-white rounded-full p-1"
                onClick={() => setActiveSection('home')}
              />
              <div className="hidden md:flex ml-10 space-x-8">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection(item.id);
                    }}
                    className={`text-white hover:text-green-200 px-3 py-2 text-sm font-medium ${
                      activeSection === item.id ? 'text-green-200 border-b-2 border-green-200' : ''
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-green-200"
              >
                {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-green-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 text-base font-medium text-white hover:text-green-200 ${
                    activeSection === item.id ? 'text-green-200 bg-green-900' : ''
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      {renderSection()}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-500">Our Company</a></li>
                <li><a href="#" className="hover:text-green-500">Careers</a></li>
                <li><a href="#" className="hover:text-green-500">Social Impact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="mailto:s.shubham999000@gmail.com" className="hover:text-green-500">Contact Us</a></li>
                <li><a href="#" className="hover:text-green-500">FAQs</a></li>
                <li><a href="#" className="hover:text-green-500">Store Locator</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-500">Menu</a></li>
                <li><a href="#" className="hover:text-green-500">Rewards</a></li>
                <li><a href="#" className="hover:text-green-500">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-500"><Facebook /></a>
                <a href="#" className="hover:text-green-500"><Twitter /></a>
                <a href="https://www.instagram.com/singhshubham0001?igsh=bXR4eWdkdDYwc243" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><Instagram /></a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p>&copy; {new Date().getFullYear()} Starbucks Clone. Made by Shubam Singh. All rights reserved.</p>
            <p className="mt-2">Contact: <a href="mailto:s.shubham999000@gmail.com" className="text-green-500 hover:text-green-400">s.shubham999000@gmail.com</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;