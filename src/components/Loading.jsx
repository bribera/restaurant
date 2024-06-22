// Loader.jsx
"use client"
import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
