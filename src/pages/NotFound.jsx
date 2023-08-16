import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center w-screen h-[80vh]  bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4"></h1>
        <p className="text-gray-600">The page you are looking for does not exist.</p>
        <img
          src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png"
          alt="404 Page Not Found"
          className="mt-8 w-64 mx-auto"
        />
      </div>
    </div>
  );
};

export default NotFound;
