import Container from '@/components/Container';
import React from 'react';

const TermsCondition = () => {
  return (
    <Container>
      <div className=" mx-auto p-6 font-sans text-md text-gray-700">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Terms and Conditions</h1>
        <p className="mb-4">
          Welcome to Synzo! By accessing and using our platform, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our services.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By using Synzo, you acknowledge that you have read, understood, and agree to these terms. If you do not agree, please refrain from using our services.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">2. User Responsibilities</h2>
        <p className="mb-4">
          You are responsible for maintaining the confidentiality of your account details. Any activity under your account is your responsibility.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">3. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to update or modify these terms at any time. Continued use of Synzo after changes means you accept the new terms.
        </p>
      </div>
    </Container>
  );
};

export default TermsCondition;