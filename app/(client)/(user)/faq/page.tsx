'use client'
import Container from '@/components/Container';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is Synzo?",
      answer: "Synzo is a premium e-commerce platform that offers high-quality products with seamless shopping experiences."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you will receive a tracking number via email to monitor your shipment."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a hassle-free 14-day return policy. If you're not satisfied, you can return the product within 14 days of delivery."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      <div className=" mx-auto p-6 font-sans text-md text-gray-700">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
        <div className="space-y-4  hoverEffect">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-3">
              <button
                className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800 py-2 hoverEffect"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openIndex === index && <p className="text-gray-600 text-md mt-2 hoverEffect">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FAQ;