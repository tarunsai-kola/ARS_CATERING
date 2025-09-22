import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Bride',
      rating: 5,
      comment: 'ARS Catering made our wedding day absolutely perfect! The food was exceptional, the presentation was elegant, and the service was flawless. Our guests are still talking about the amazing meal months later.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      event: 'Wedding Reception - 150 guests',
      date: 'June 2024'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Corporate Event Manager',
      rating: 5,
      comment: 'We\'ve worked with ARS Catering for multiple corporate events, and they never disappoint. Professional, reliable, and the food quality is consistently outstanding. Highly recommend for any business event.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      event: 'Annual Company Conference',
      date: 'September 2024'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Birthday Celebrant',
      rating: 5,
      comment: 'ARS Catering turned my 50th birthday party into an unforgettable celebration. The custom menu was perfect, and they accommodated all dietary restrictions beautifully. The team was professional and friendly.',
      image: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      event: '50th Birthday Party - 75 guests',
      date: 'August 2024'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Event Organizer',
      rating: 5,
      comment: 'Outstanding service from start to finish! ARS Catering handled our charity gala with such professionalism. The food was restaurant-quality, and they managed the entire event seamlessly.',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      event: 'Charity Gala - 200 guests',
      date: 'October 2024'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Anniversary Celebrant',
      rating: 5,
      comment: 'For our 25th anniversary, ARS Catering created an intimate dining experience that was simply magical. Every detail was perfect, from the appetizers to the dessert. Thank you for making our night so special!',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      event: '25th Anniversary Dinner - 30 guests',
      date: 'November 2024'
    },
    {
      id: 6,
      name: 'Robert Martinez',
      role: 'Business Owner',
      rating: 5,
      comment: 'ARS Catering has been our go-to for all company events. Their attention to detail, quality ingredients, and exceptional service make them stand out. They truly understand what makes an event successful.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      event: 'Product Launch Event',
      date: 'December 2024'
    }
  ];

  const stats = [
    { label: 'Average Rating', value: '4.9/5' },
    { label: 'Total Reviews', value: '500+' },
    { label: 'Repeat Clients', value: '85%' },
    { label: 'Events Catered', value: '2000+' }
  ];

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay, reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
    setIsAutoplay(false);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoplay(false);
  };

  const goToReview = (index: number) => {
    setCurrentReview(index);
    setIsAutoplay(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
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
              Client Reviews
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Don't just take our word for it. See what our satisfied clients have to say 
              about their experiences with ARS Catering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-secondary-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <div className="flex items-center mb-6">
                  <Quote className="h-12 w-12 text-primary-200 mr-4" />
                  <div className="flex">
                    {renderStars(reviews[currentReview].rating)}
                  </div>
                </div>

                <p className="text-xl text-secondary-700 leading-relaxed mb-8 italic">
                  "{reviews[currentReview].comment}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={reviews[currentReview].image}
                      alt={reviews[currentReview].name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-secondary-800 text-lg">
                        {reviews[currentReview].name}
                      </h4>
                      <p className="text-secondary-600">{reviews[currentReview].role}</p>
                      <p className="text-sm text-primary-600 font-medium">
                        {reviews[currentReview].event}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-secondary-500 text-sm">{reviews[currentReview].date}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl p-3 rounded-full transition-all duration-200 hover:bg-primary-50"
            >
              <ChevronLeft className="h-6 w-6 text-secondary-600" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl p-3 rounded-full transition-all duration-200 hover:bg-primary-50"
            >
              <ChevronRight className="h-6 w-6 text-secondary-600" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentReview ? 'bg-primary-600 w-8' : 'bg-secondary-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold text-secondary-800 mb-4">
              More Happy Clients
            </h2>
            <p className="text-xl text-secondary-600">
              Discover why clients choose us for their special events
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-secondary-800">{review.name}</h4>
                    <p className="text-sm text-secondary-600">{review.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {renderStars(review.rating)}
                </div>
                
                <p className="text-secondary-700 text-sm leading-relaxed mb-4">
                  "{review.comment.substring(0, 120)}..."
                </p>
                
                <div className="text-xs text-primary-600 font-medium">
                  {review.event} • {review.date}
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Experience the exceptional service and quality that our clients rave about.
            </p>
            <motion.button
              className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-primary-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Event Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;