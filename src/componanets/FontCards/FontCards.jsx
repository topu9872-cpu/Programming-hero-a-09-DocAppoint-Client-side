import React from 'react';

const FontCards = async() => {
    const res=await fetch('https://programming-hero-a-09-doc-appoint-c.vercel.app/data.json');
    const doctors=await res.json()
console.log(doctors)
  return (
    <div>
      
    </div>
  );
};

export default FontCards;