import React from 'react';
import { Phone, Facebook, MapPin, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-orange-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? Want to order ahead? Need catering for an event? We've got you covered.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* WhatsApp/Call Card */}
          <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-orange-300">
            <CardContent className="p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <Phone className="w-10 h-10 text-orange-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Call or WhatsApp</h3>
              <p className="text-gray-600 mb-6">Order ahead or ask us anything</p>
              <a
                href="tel:+15415564566"
                className="text-2xl font-bold text-orange-600 hover:text-orange-700 block mb-4"
              >
                +1 (541) 556-4566
              </a>
              <Button
                className="w-full bg-orange-600 hover:bg-orange-700 text-white transition-all hover:scale-105"
                onClick={() => window.open('https://wa.me/15415564566', '_blank')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Message on WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Facebook Card */}
          <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-orange-300">
            <CardContent className="p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <Facebook className="w-10 h-10 text-orange-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Us on Facebook</h3>
              <p className="text-gray-600 mb-6">
                Stay updated on new specials, mouth-watering photos, and daily announcements
              </p>
              <Button
                className="w-full bg-orange-600 hover:bg-orange-700 text-white transition-all hover:scale-105"
                onClick={() => window.open('https://www.facebook.com/share/1F2dTeqEVS/', '_blank')}
              >
                <Facebook className="w-5 h-5 mr-2" />
                Visit Our Facebook
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Location Info with Google Maps */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-orange-50 rounded-2xl p-8 border-2 border-orange-200">
            <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Visit Us</h3>
            <div className="text-center space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                Mary Lou's Laundromat
              </p>
              <p className="text-lg text-gray-700">
                1755 W 18th Ave<br />
                Eugene, OR 97402<br />
                United States
              </p>
              <div className="pt-4">
                <Button
                  variant="outline"
                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all"
                  onClick={() => window.open('https://maps.app.goo.gl/JFPCE16jFucWCg2A6', '_blank')}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View on Google Maps
                </Button>
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                Check our Facebook for current hours and daily specials!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;