import React from "react";

const NewsHeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Today's Headlines: Stay <br className="hidden sm:block" />
              Informed
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
              Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage.
            </p>
          </div>
        </div>
      </div>

      {/* Featured News Article */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-900 rounded-xl shadow-lg p-6 sm:p-10 flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {/* Image */}
          <div className="relative w-full lg:w-2/5 flex-shrink-0">
            <img
              src="/Image1.png"
              alt="Featured news"
              className="w-full h-56 sm:h-72 object-cover rounded-lg"
            />
            <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </div>
          </div>
          {/* News Content */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Global Climate Summit Addresses Urgent Climate Action
              </h2>
              <p className="text-gray-300 mb-6">
                World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.
              </p>
              <div className="flex flex-wrap gap-8 mb-6">
                <div>
                  <span className="block text-gray-400 text-xs">Category</span>
                  <span className="font-semibold text-white text-sm">Environment</span>
                </div>
                <div>
                  <span className="block text-gray-400 text-xs">Publication Date</span>
                  <span className="font-semibold text-white text-sm">October 10, 2023</span>
                </div>
                <div>
                  <span className="block text-gray-400 text-xs">Author</span>
                  <span className="font-semibold text-white text-sm">Jane Smith</span>
                </div>
              </div>
              <div className="flex gap-4 mb-6">
                <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  14k
                </div>
                <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2m10-4h-4m0 0V4m0 0a4 4 0 00-4 4v4h8V8a4 4 0 00-4-4z" />
                  </svg>
                  204
                </div>
              </div>
            </div>
            <div>
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* News Cards Section */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col">
              <img src="/Image1.png" alt="News 1" className="h-40 w-full object-cover" />
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-white font-semibold text-lg mb-2">A Decisive Victory for Progressive Policies</h3>
                <span className="text-gray-400 text-xs mb-4">Politics</span>
                <div className="flex items-center gap-4 mt-auto mb-4">
                  <div className="flex items-center text-gray-300 text-xs">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    2.3k
                  </div>
                  <div className="flex items-center text-gray-300 text-xs">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2m10-4h-4m0 0V4m0 0a4 4 0 00-4 4v4h8V8a4 4 0 00-4-4z" />
                    </svg>
                    60
                  </div>
                </div>
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-semibold mt-auto">
                  Read More
                </button>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col">
              <img src="/logo192.png" alt="News 2" className="h-40 w-full object-cover" />
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-white font-semibold text-lg mb-2">Tech Giants Unveil Cutting-Edge AI Innovations</h3>
                <span className="text-gray-400 text-xs mb-4">Technology</span>
                <div className="flex items-center gap-4 mt-auto mb-4">
                  <div className="flex items-center text-gray-300 text-xs">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    6k
                  </div>
                  <div className="flex items-center text-gray-300 text-xs">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2m10-4h-4m0 0V4m0 0a4 4 0 00-4 4v4h8V8a4 4 0 00-4-4z" />
                    </svg>
                    92
                  </div>
                </div>
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-semibold mt-auto">
                  Read More
                </button>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col">
              <img src="/logo512.png" alt="News 3" className="h-40 w-full object-cover" />
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-white font-semibold text-lg mb-2">COVID-19 Variants</h3>
                <span className="text-gray-400 text-xs mb-4">Health</span>
                <div className="flex items-center gap-4 mt-auto mb-4">
                  <div className="flex items-center text-gray-300 text-xs">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    10k
                  </div>
                  <div className="flex items-center text-gray-300 text-xs">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2m10-4h-4m0 0V4m0 0a4 4 0 00-4 4v4h8V8a4 4 0 00-4-4z" />
                    </svg>
                    124
                  </div>
                </div>
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-semibold mt-auto">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsHeroSection;
