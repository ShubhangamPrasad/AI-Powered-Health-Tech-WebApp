import React from 'react';
import FileUpload from './FileUpload';
import Typewriter from "typewriter-effect";

function App() {
  return (
    <div className='bg-gray-900 min-h-screen flex flex-col'>
      <h2 className="text-5xl mx-auto py-2 mt-16 animate-text bg-gradient-to-r from-teal-500 via-yellow-300 to-orange-500 bg-clip-text text-transparent md:text-7xl ">
                MSD.ai
              </h2>

              <div className="mx-auto text-3xl mt-2 md:text-3xl text-white">
              <Typewriter
                options={{
                  strings: [
                    "Making Doctor Lives Easier",
                    "Your Friendly Healthcare AI",
                    "Less Time Reading",
                    "More Time Curing"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
      <FileUpload />
    </div>
    
  );
}
export default App;
