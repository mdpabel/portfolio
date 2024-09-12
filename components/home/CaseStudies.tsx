import Link from 'next/link';
import React from 'react';
import Title from '../ui/Title';
import { ArrowUpRight } from '../ui/Icons';

const caseStudies = [
  {
    title: 'Malware Detection and Removal from WooCommerce Checkout Page',
    link: 'https://www.3zerodigital.com/case-study/malware-detection-and-removal-from-woocommerce-checkout-page',
    description:
      'Identified and eliminated a malicious script that intercepted customer payment information on a WooCommerce-based website.',
  },
];

const CaseStudies = () => {
  return (
    <div className='space-y-6 mx-auto py-10 w-full max-w-5xl'>
      <Title>Case Studies</Title>
      <ul className='space-y-6 w-full'>
        {caseStudies?.map((caseStudy, index) => (
          <li
            key={index}
            className='flex justify-between items-center px-8 transition-transform hover:scale-[1.01] md:pl-20 w-full'>
            <div className='md:max-w-[88%]'>
              <h3 className='line-clamp-1 font-medium'>{caseStudy.title}</h3>
              <h4 className='line-clamp-1 text-gray-600 text-sm'>
                {caseStudy.description}
              </h4>
            </div>

            <div className='flex items-center'>
              <Link
                className='flex items-center text-gray-600 hover:text-gray-800 transition-colors'
                target='_blank'
                href={caseStudy.link}>
                Read
                <ArrowUpRight />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaseStudies;
