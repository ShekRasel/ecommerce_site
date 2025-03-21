import React from 'react';
import Container from './Container';
import FooterColumn from './FooterColumn';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Github, MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Button } from './ui/button';

const footerData = [
  {
    title: 'Quick Links',
    links: [
      { name: 'About us', url: '/about' },
      { name: 'Contact us', url: '/contact' },
      { name: 'Terms & Conditions', url: '/terms&condition' },
      { name: 'Privacy Policy', url: '/privacy' },
      { name: 'FAQs', url: '/faq' },
    ],
  },
  {
    title: 'Categories',
    links: [
      { name: "Men's Fashion", url: '#' },
      { name: "Women's Fashion", url: '#' },
      { name: 'Kids corner', url: '#' },
      { name: 'Tshirt', url: '#' },
      { name: 'Accessories', url: '#' },
      { name: 'Household', url: '#' },
      { name: 'Others', url: '#' },
    ],
  },
];

function Footer() {
  return (
    <footer className="border-t font-sans">
      <Container className='py-0'>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8 border-b">
          <div className="flex px-5 gap-2 items-center hover:bg-zinc-50 py-2.5 w-full">
            <MapPin className="text-gray-600 mr-2" />
            <div className='flex flex-col'>
              <h1 className='font-semibold'>Visit Us</h1>
              <p className="text-gray-600">Gazipur, Bangladesh</p>
            </div>
          </div>
          <div className="flex px-5 gap-2 items-center hover:bg-zinc-50 py-2.5 w-full">
            <Phone className="text-gray-600 mr-2" />
            <div className='flex flex-col'>
              <h1 className='font-semibold'>Call Us</h1>
              <p className="text-gray-600">(123) 456-7890</p>
            </div>
          </div>
          <div className="flex px-5 gap-2 items-center hover:bg-zinc-50 py-2.5 w-full">
            <Clock className="text-gray-600 mr-2" />
            <div className='flex flex-col'>
              <h1 className='font-semibold'>Working Hours</h1>
              <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
          <div className="flex px-5 gap-2 items-center hover:bg-zinc-50 py-2.5 w-full">
            <Mail className="text-gray-600 mr-2" />
            <div className='flex flex-col'>
              <h1 className='font-semibold'>Email Us</h1>
              <p className="text-gray-600">info@amazona.com</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 border-b py-4 gap-8">
          <FooterColumn title="Shynzo" text={'text-2xl font-extrabold italic  mb-2'}>
            <p className="text-gray-600 mb-4">
              Discover curated furniture collections at Shynzo, blending style and comfort to elevate your living spaces.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-800 border rounded-full p-2">
                <Facebook className='w-5 h-5'/>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800 border rounded-full p-2">
                <Twitter className='w-5 h-5 '/>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800 border rounded-full p-2">
                <Instagram className='w-5 h-5 '/>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800 border rounded-full p-2">
                <Youtube className='w-5 h-5 '/>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800 border rounded-full p-2">
                <Github className='w-5 h-5 '/>
              </Link>
            </div>
          </FooterColumn>
          {footerData.map((column, index) => (
            <FooterColumn text={'text-lg mb-4'} key={index} title={column.title} links={column.links} />
          ))}
          <FooterColumn text={'text-lg mb-4'} title="Newsletter">
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter to receive updates and exclusive offers.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
              />
              <Button className="w-full">
                Subscribe
              </Button>
            </form>
          </FooterColumn>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600">© 2025 Shynzo. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;