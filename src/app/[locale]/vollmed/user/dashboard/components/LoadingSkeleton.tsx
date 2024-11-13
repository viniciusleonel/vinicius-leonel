import React from 'react';

const LoadingSkeleton = () => (
    <div className="animate-pulse">
        <div className="w-full">
            <div className="flex justify-between items-center p-4">
                <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                <div className="h-6 bg-gray-300 rounded w-1/6"></div>
            </div>
            <div className="container mx-auto my-8 px-4 md:px-6">
                <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                    <div className="h-4 bg-gray-300 rounded w-full mb-4"></div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-300 rounded w-full"></div>
                        <div className="h-4 bg-gray-300 rounded w-11/12"></div>
                        <div className="h-4 bg-gray-300 rounded w-10/12"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default LoadingSkeleton;