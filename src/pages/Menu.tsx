import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('starters');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const menuCategories = [
    { id: 'starters', name: 'Starters', icon: '🥗' },
    { id: 'mains', name: 'Main Course', icon: '🍽️' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'beverages', name: 'Beverages', icon: '🥤' },
  ];

  const menuItems = {
    starters: [
      {
        id: 'bruschetta',
        name: 'Artisan Bruschetta',
        price: '$12.99',
        description: 'Fresh tomatoes, basil, and mozzarella on toasted artisan bread',
        ingredients: ['Roma tomatoes', 'Fresh basil', 'Mozzarella', 'Olive oil', 'Balsamic glaze'],
        dietary: ['Vegetarian'],
        image: 'https://images.pexels.com/photos/1643771/pexels-photo-1643771.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'shrimp',
        name: 'Coconut Shrimp',
        price: '$16.99',
        description: 'Crispy coconut-crusted shrimp with mango chutney',
        ingredients: ['Jumbo shrimp', 'Coconut flakes', 'Mango chutney', 'Sweet chili sauce'],
        dietary: ['Gluten-free available'],
        image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'cheese-board',
        name: 'Gourmet Cheese Board',
        price: '$24.99',
        description: 'Selection of artisan cheeses with fruits and nuts',
        ingredients: ['Aged cheddar', 'Brie', 'Goat cheese', 'Seasonal fruits', 'Mixed nuts', 'Honey'],
        dietary: ['Vegetarian', 'Gluten-free'],
        image: 'https://images.pexels.com/photos/1229149/pexels-photo-1229149.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
    ],
    mains: [
      {
        id: 'salmon',
        name: 'Grilled Atlantic Salmon',
        price: '$28.99',
        description: 'Fresh salmon with lemon herb butter and seasonal vegetables',
        ingredients: ['Atlantic salmon', 'Lemon', 'Fresh herbs', 'Seasonal vegetables', 'Wild rice'],
        dietary: ['Gluten-free', 'Healthy choice'],
        image: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'beef',
        name: 'Prime Ribeye Steak',
        price: '$42.99',
        description: 'USDA Prime ribeye with garlic mashed potatoes and red wine reduction',
        ingredients: ['Prime ribeye', 'Garlic mashed potatoes', 'Asparagus', 'Red wine reduction'],
        dietary: ['Gluten-free'],
        image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'pasta',
        name: 'Truffle Mushroom Risotto',
        price: '$22.99',
        description: 'Creamy Arborio rice with wild mushrooms and truffle oil',
        ingredients: ['Arborio rice', 'Wild mushrooms', 'Truffle oil', 'Parmesan', 'Fresh herbs'],
        dietary: ['Vegetarian'],
        image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
    ],
    desserts: [
      {
        id: 'tiramisu',
        name: 'Classic Tiramisu',
        price: '$8.99',
        description: 'Traditional Italian tiramisu with espresso and mascarpone',
        ingredients: ['Mascarpone', 'Ladyfingers', 'Espresso', 'Cocoa powder', 'Marsala wine'],
        dietary: ['Contains alcohol'],
        image: 'https://images.pexels.com/photos/6102166/pexels-photo-6102166.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'chocolate-cake',
        name: 'Decadent Chocolate Cake',
        price: '$7.99',
        description: 'Rich chocolate cake with raspberry coulis and fresh berries',
        ingredients: ['Dark chocolate', 'Fresh raspberries', 'Vanilla cream', 'Cocoa'],
        dietary: ['Vegetarian'],
        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
    ],
    beverages: [
      {
        id: 'wine',
        name: 'House Wine Selection',
        price: '$8.99',
        description: 'Curated selection of red and white wines',
        ingredients: ['Red wine', 'White wine', 'Rosé'],
        dietary: ['Contains alcohol', '21+'],
        image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'coffee',
        name: 'Artisan Coffee Bar',
        price: '$4.99',
        description: 'Freshly brewed specialty coffees and teas',
        ingredients: ['Premium coffee beans', 'Various teas', 'Milk alternatives'],
        dietary: ['Vegan options available'],
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
    ],
  };

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-serif font-bold text-secondary-800 mb-6">
              Our Menu
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Discover our carefully crafted menu featuring fresh, locally-sourced ingredients 
              and dishes designed to delight every palate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-8 bg-white sticky top-20 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {menuCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-primary-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="font-bold text-primary-600">{item.price}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-serif font-bold text-secondary-800">
                        {item.name}
                      </h3>
                    </div>
                    
                    <p className="text-secondary-600 mb-4">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.dietary.map((diet) => (
                        <span
                          key={diet}
                          className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                        >
                          {diet}
                        </span>
                      ))}
                    </div>
                    
                    <motion.button
                      onClick={() => toggleExpanded(item.id)}
                      className="flex items-center justify-between w-full text-primary-600 hover:text-primary-700 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      <span>View Ingredients</span>
                      {expandedItems.has(item.id) ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </motion.button>
                    
                    <AnimatePresence>
                      {expandedItems.has(item.id) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-secondary-200"
                        >
                          <h4 className="font-medium text-secondary-800 mb-2">Ingredients:</h4>
                          <ul className="text-sm text-secondary-600 space-y-1">
                            {item.ingredients.map((ingredient) => (
                              <li key={ingredient} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                                {ingredient}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Custom Menu Options Available
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Have specific dietary requirements or preferences? We'd love to create a custom menu just for you.
            </p>
            <motion.button
              className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-primary-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Custom Menu
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Menu;