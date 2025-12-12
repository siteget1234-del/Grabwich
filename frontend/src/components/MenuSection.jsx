import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Coffee, Sandwich, Croissant, Plus } from 'lucide-react';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('sandwiches');

  const menuData = {
    sandwiches: [
      { name: 'Egg & Cheese with Cheddar', price: '$6.00', description: 'Toasted English muffin, scrambled egg, and cheddar' },
      { name: 'Egg & Cheese with Pepper Jack', price: '$6.00', description: 'Toasted English muffin, scrambled egg, pepper jack cheese' },
      { name: 'Bacon & Egg with Cheddar', price: '$7.00', description: 'Toasted English muffin, scrambled egg, bacon, cheddar', popular: true },
      { name: 'Bacon & Egg with Pepper Jack', price: '$7.00', description: 'Toasted English muffin, scrambled egg, bacon, pepper jack' },
      { name: 'Sausage & Egg with Cheddar', price: '$7.00', description: 'Toasted English muffin, scrambled egg, sausage, cheddar' },
      { name: 'Sausage & Egg with Pepper Jack', price: '$7.00', description: 'Toasted English muffin, sausage, scrambled egg, and pepper jack' },
      { name: 'Veggie Sausage & Egg with Cheddar', price: '$7.50', description: 'Morningstar veggie sausage, scrambled egg, and cheddar' },
      { name: 'Veggie Sausage & Egg with Pepper Jack', price: '$7.50', description: 'Toasted English muffin, scrambled egg, Morningstar sausage, & pepper jack' },
    ],
    burritos: [
      { name: 'Potato & Egg Burrito with Cheddar', price: '$9.00', description: 'Toasted tortilla, savory potatoes, scrambled egg & cheddar' },
      { name: 'Potato & Egg Burrito with Pepper Jack', price: '$9.00', description: 'Toasted tortilla, savory potato, scrambled egg & pepper jack' },
      { name: 'Sausage Burrito with Cheddar', price: '$10.00', description: 'Toasted tortilla, savory potatoes, scrambled egg, sausage & cheddar', popular: true },
      { name: 'Sausage Burrito with Pepper Jack', price: '$10.00', description: 'Toasted tortilla, savory potatoes, scrambled egg, sausage & pepper jack' },
      { name: 'Bacon Burrito with Cheddar', price: '$10.00', description: 'Toasted tortilla, savory potatoes, scrambled egg, bacon & cheddar' },
      { name: 'Bacon Burrito with Pepper Jack', price: '$10.00', description: 'Toasted tortilla, savory potatoes, scrambled egg, bacon, pepper jack' },
      { name: 'Veggie Sausage Burrito with Cheddar', price: '$10.50', description: 'Toasted tortilla, savory potatoes, scrambled egg, Morningstar sausage, cheddar' },
      { name: 'Veggie Sausage Burrito with Pepper Jack', price: '$10.50', description: 'Toasted tortilla, savory potatoes, scrambled egg, Morningstar sausage, pepper jack' },
    ],
    biscuits: [
      { name: 'Biscuits & Gravy', price: '$10.00', description: 'Fresh buttermilk biscuits smothered in rich sausage gravy', popular: true },
      { name: '1/2 Biscuits & Gravy', price: '$6.00', description: 'A fresh buttermilk biscuit smothered in rich sausage gravy' },
      { name: 'Taters & Gravy', price: '$10.00', description: 'Savory potatoes smothered in rich sausage gravy' },
      { name: '1/2 Taters & Gravy', price: '$6.00', description: 'Savory potatoes smothered in rich sausage gravy' },
    ],
    drinks: [
      { name: 'Coffee', price: '$2.00', description: 'Freshly brewed' },
      { name: 'Orange Juice (16oz)', price: '$3.00', description: 'Fresh orange juice' },
      { name: 'Yerba Maté - Blueberry', price: '$3.25', description: 'Energizing tea' },
      { name: 'Yerba Maté - Mint', price: '$3.25', description: 'Refreshing tea' },
    ],
    addons: [
      { name: 'Egg', price: '$1.50' },
      { name: 'Cheese Slice', price: '$0.50' },
      { name: '2 Slices Bacon', price: '$2.00' },
      { name: 'Sausage Patty', price: '$2.00' },
      { name: 'Veggie Patty', price: '$2.50' },
      { name: 'Salsa Verde', price: '$0.75' },
      { name: 'Kimchi', price: '$0.75' },
      { name: 'Sour Cream', price: '$0.50' },
    ],
  };

  const MenuItem = ({ item }) => (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-orange-300">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
            {item.name}
          </h3>
          <span className="text-xl font-bold text-orange-600">{item.price}</span>
        </div>
        {item.description && (
          <p className="text-gray-600 text-sm">{item.description}</p>
        )}
        {item.popular && (
          <Badge className="mt-2 bg-orange-600 hover:bg-orange-700">Popular</Badge>
        )}
      </CardContent>
    </Card>
  );

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-600">Delicious</span> Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every item made fresh daily with quality ingredients
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-5 mb-12 h-auto">
            <TabsTrigger value="sandwiches" className="flex flex-col items-center py-3 data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              <Sandwich className="w-5 h-5 mb-1" />
              <span className="text-xs sm:text-sm">Sandwiches</span>
            </TabsTrigger>
            <TabsTrigger value="burritos" className="flex flex-col items-center py-3 data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              <Croissant className="w-5 h-5 mb-1" />
              <span className="text-xs sm:text-sm">Burritos</span>
            </TabsTrigger>
            <TabsTrigger value="biscuits" className="flex flex-col items-center py-3 data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              <Croissant className="w-5 h-5 mb-1" />
              <span className="text-xs sm:text-sm">Biscuits</span>
            </TabsTrigger>
            <TabsTrigger value="drinks" className="flex flex-col items-center py-3 data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              <Coffee className="w-5 h-5 mb-1" />
              <span className="text-xs sm:text-sm">Drinks</span>
            </TabsTrigger>
            <TabsTrigger value="addons" className="flex flex-col items-center py-3 data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              <Plus className="w-5 h-5 mb-1" />
              <span className="text-xs sm:text-sm">Add-Ons</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sandwiches" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuData.sandwiches.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="burritos" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuData.burritos.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="biscuits" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuData.biscuits.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="drinks" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuData.drinks.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="addons" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuData.addons.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;