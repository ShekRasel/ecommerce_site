import Container from '@/components/Container';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <Container>
      <div className=" mx-auto p-6 font-sans text-md text-gray-700">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
        <p className="mb-4">
          At Synzo, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          We collect personal information such as your name, email, and contact details when you use our services or sign up for an account.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use your information to provide and improve our services, process transactions, and communicate updates related to our platform.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">3. Data Protection</h2>
        <p className="mb-4">
          We implement security measures to protect your personal data from unauthorized access, alteration, or disclosure.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">4. Changes to Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically. Continued use of Synzo after changes means you accept the updated policy.
        </p>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;