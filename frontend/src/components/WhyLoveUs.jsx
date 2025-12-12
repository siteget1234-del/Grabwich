import React from 'react';
import { Heart, Leaf, Clock, DollarSign, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const WhyLoveUs = () => {
  const reasons = [
    {
      icon: <Leaf className="w-12 h-12 text-orange-600" />,
      title: 'Fresh Ingredients',
      description: 'We use only the freshest, quality ingredients in every meal',
    },
    {
      icon: <Heart className="w-12 h-12 text-orange-600" />,
      title: 'Handmade Every Morning',
      description: 'Each sandwich and burrito is crafted with care and love',
    },
    {
      icon: <DollarSign className="w-12 h-12 text-orange-600" />,
      title: 'Fair Prices',
      description: 'Big portions at prices that won\'t break the bank',
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: 'Fast Service',
      description: 'Perfect for busy mornings when you need to grab and go',
    },
    {
      icon: <Users className="w-12 h-12 text-orange-600" />,
      title: 'Vegetarian Options',
      description: 'Delicious veggie sausage options for all dietary preferences',
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-orange-600" />,
      title: 'Made With Heart',
      description: 'Good food doesn\'t need to be complicated — just made with heart',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why People <span className="text-orange-600">Love</span> Grab'Wich
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            More than just breakfast — it's a morning ritual
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-orange-300 bg-white"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Food Truck Image */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src="https://customer-assets.emergentagent.com/job_00f31d1a-3172-4d0d-bf8b-94dc51647531/artifacts/x4pjqgb3_Screenshot_20251212-235102.png"
              alt="Grab'Wich Food Truck"
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <p className="text-center text-gray-600 mt-6 text-lg">
            Visit our food truck for a taste of handmade breakfast perfection!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyLoveUs;