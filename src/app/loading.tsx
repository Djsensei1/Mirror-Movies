'use client';

// pages/index.tsx
import React, { useState, useEffect } from 'react';
import MovieLoadingSkeleton from '../components/ComponentLoader';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate data fetching or delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // The loader will show for 3 seconds
  }, []);

  if (isLoading) {
    return <MovieLoadingSkeleton />;
  }

  return (
    <div className="p-6 text-white">
      <h1 className="mb-6 text-3xl font-bold">Popular Movies</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="h-48 rounded-lg bg-gray-800">Movie 1</div>
        <div className="h-48 rounded-lg bg-gray-800">Movie 2</div>
        <div className="h-48 rounded-lg bg-gray-800">Movie 3</div>
        <div className="h-48 rounded-lg bg-gray-800">Movie 4</div>
        <div className="h-48 rounded-lg bg-gray-800">Movie 5</div>
        <div className="h-48 rounded-lg bg-gray-800">Movie 6</div>
      </div>
    </div>
  );
};

export default Home;
