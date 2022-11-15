import React from 'react';
import  ContentLoader from 'react-content-loader';

export const SkeletonPizza = () => {
  return (<ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="135" r="125" />
    <rect x="0" y="269" rx="5" ry="5" width="280" height="27" />
    <rect x="3" y="310" rx="5" ry="5" width="280" height="88" />
    <rect x="-1" y="420" rx="5" ry="5" width="91" height="27" />
    <rect x="198" y="478" rx="0" ry="0" width="0" height="1" />
    <rect x="126" y="407" rx="13" ry="13" width="152" height="45" />
  </ContentLoader>);
};

