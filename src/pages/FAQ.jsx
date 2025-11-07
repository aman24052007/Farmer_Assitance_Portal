// FAQ page - frequently asked questions with accordion
import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  // State to track which FAQ is open (null means all closed)
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle accordion item - close if already open, open if closed
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ data array
  const faqs = [
    {
      question: "Who is eligible for PM-KISAN scheme?",
      answer: "All small and marginal farmers with cultivable landholding up to 2 hectares are eligible for PM-KISAN. The scheme provides ₹6,000 per year in three equal installments directly to the farmer's bank account. Farmers must have Aadhaar card and land ownership documents for registration."
    },
    {
      question: "How can I apply for crop insurance under PMFBY?",
      answer: "You can apply for PMFBY through multiple channels: visit your nearest bank branch, apply online through the PMFBY portal (pmfby.gov.in), or visit Common Service Centers (CSC). The application must be submitted during the sowing period. You'll need your Aadhaar card, land documents, and bank account details."
    },
    {
      question: "What documents are required for scheme applications?",
      answer: "Most schemes require: Aadhaar card, land ownership documents or lease agreement, bank account passbook with active account, passport-size photographs, and income certificate (where applicable). Some schemes may require additional documents like crop registration certificates or farmer ID cards."
    },
    {
      question: "How do I check my PM-KISAN payment status?",
      answer: "Visit pmkisan.gov.in and click on 'Beneficiary Status'. Enter your Aadhaar number, mobile number, or account number to check your payment status. You can also call the PM-KISAN helpline at 155261 or 011-24300606 for assistance."
    },
    {
      question: "What is the premium amount for crop insurance?",
      answer: "Under PMFBY, farmers pay: 2% premium for Kharif crops, 1.5% premium for Rabi crops, and 5% premium for commercial and horticultural crops. The balance premium is paid by the government. The premium is calculated on the sum insured amount."
    },
    {
      question: "Can tenant farmers apply for these schemes?",
      answer: "Yes, tenant farmers and sharecroppers can apply for several schemes including PMFBY. They need to provide valid land lease agreements and other required documents. PM-KISAN currently covers landholding farmers, but tenant farmers can benefit from insurance and other support schemes."
    },
    {
      question: "How can I get a Soil Health Card?",
      answer: "Contact your nearest Agriculture Department office or Krishi Vigyan Kendra (KVK). They will collect soil samples from your farm and provide you with a Soil Health Card containing nutrient status and fertilizer recommendations. The service is free for farmers."
    },
    {
      question: "What is Minimum Support Price (MSP)?",
      answer: "MSP is the minimum price at which the government purchases crops from farmers. It's announced before the sowing season for 23 major crops. Farmers can sell their produce at government procurement centers at MSP rates, protecting them from price crashes in the open market."
    },
    {
      question: "How do I join a Farmer Producer Organization (FPO)?",
      answer: "Contact your district agriculture office or existing FPOs in your area. FPOs are collective groups of farmers (minimum 300 in plains, 100 in hilly areas) registered as legal entities. They provide better access to inputs, markets, and technology. You'll need to become a member and contribute to the organization."
    },
    {
      question: "Are there any schemes for organic farming?",
      answer: "Yes, Paramparagat Krishi Vikas Yojana (PKVY) supports organic farming. It provides financial assistance and training to farmer groups (minimum 50 farmers per cluster) for adopting organic practices. The scheme covers certification costs and provides ₹50,000 per hectare over three years."
    },
    {
      question: "How can I get subsidy for solar pumps?",
      answer: "Apply under PM-KUSUM scheme through your state electricity distribution company (DISCOM) or agriculture department. The scheme provides up to 90% subsidy for installing solar pumps and solar power plants. You need land ownership documents, electricity connection details, and bank account information."
    },
    {
      question: "What should I do if my scheme application is rejected?",
      answer: "First, check the reason for rejection through the scheme portal or contact the helpline. Common reasons include incomplete documents, incorrect information, or eligibility issues. You can rectify errors and reapply. If you believe the rejection is unjustified, contact your district agriculture officer or file a grievance through the portal."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <HelpCircle className="w-10 h-10" />
            Frequently Asked Questions
          </h1>
          <p className="text-green-100 text-lg">
            Find answers to common questions about farmer schemes and benefits
          </p>
        </div>
      </div>

      {/* FAQ accordion section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* FAQ question button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  {/* Toggle icon based on open state */}
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
                  )}
                </button>

                {/* FAQ answer - only shown when open */}
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions section */}
          <div className="mt-12 bg-green-50 rounded-lg p-8 text-center border-2 border-green-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Please contact our support team.
            </p>
            <a
              href="/contact"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
