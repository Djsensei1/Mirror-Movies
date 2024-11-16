// components/MovieLoadingSkeleton.tsx
import React from 'react';

const MovieLoadingSkeleton: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-6">
      {/* Header Skeleton */}
      <div className="mb-8 h-16 w-full max-w-screen-xl animate-pulse rounded-lg bg-gray-800"></div>

      <div className="flex w-full max-w-screen-xl animate-pulse">
        {/* Sidebar Skeleton */}
        <div className="mr-8 h-96 w-64 rounded-lg bg-gray-800"></div>

        {/* Main Content Skeleton */}
        <div className="flex-1 space-y-6">
          {/* Movie Title Skeleton */}
          <div className="mb-6 h-6 w-3/4 rounded-lg bg-gray-800"></div>

          {/* Movie List Skeleton */}
          <div className="grid grid-cols-3 gap-6">
            {/* Movie Card Skeleton */}
            <div className="h-48 rounded-lg bg-gray-800"></div>
            <div className="h-48 rounded-lg bg-gray-800"></div>
            <div className="h-48 rounded-lg bg-gray-800"></div>
            <div className="h-48 rounded-lg bg-gray-800"></div>
            <div className="h-48 rounded-lg bg-gray-800"></div>
            <div className="h-48 rounded-lg bg-gray-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieLoadingSkeleton;
