import React from 'react';
import wand from "../../../assets/wand.svg"
import pyramid from "../../../assets/pyramid.svg"
import love from "../../../assets/love.svg"

function Blog() {
  const cardsData = [
    {
      title: 'Limited Resources',
      detail: 'Startups often operate with restricted budgets, manpower, and infrastructure, making it challenging to execute plans or scale operations effectively',
      imageSrc: pyramid,
    },
    {
      title: 'Product-Market Fit',
      detail: ' Identifying the right target audience and ensuring that their product or service fulfills a  genuine need in the market is crucial but challenging.',
      imageSrc: wand,
    },
    {
      title: 'Strong Brand Identit',
      detail: '  Establishing a unique brand identity and gaining trust and credibility within the market is an ongoing challenge for startups.',
      imageSrc: love,
    },
  ];

  return (
    <div className='bg-[#EDF7FF] '>
      <div className='container mx-auto'>
        <div className='grid gap-2 py-10  grid-cols-2 '>
          <p className='text-left font-semibold text-[#0d1317] text-4xl'>We are building a software solution that solves your business challenges</p>
          <p className='text-left text-[#1d3444] text-lg font-medium'>  At our core, we excel in crafting software solutions that not only align with your distinct
  requirements but also surpass expectations. Our technology solutions range from blockchain
  applications, healthcare management systems, and a spectrum of cutting-edge tools.</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {cardsData.map((card, index) => (
            <div key={index} className="bg-white my-10 p-10  text-left  gap-4 rounded-[20px]">
              <img src={card.imageSrc} className="w-[33px] mb-4 h-[34px] object-cover" />
              <p className="text-lg my-2 font-semibold">{card.title}</p>
              <p className="text-gray-700">{card.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
