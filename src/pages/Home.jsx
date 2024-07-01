import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* Social media icons */}
      <div className=" left-0 top-1/2 transform -translate-y-1/2">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-gray-600 hover:text-gray-800 mb-2"
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.297 0H3.703C1.657 0 0 1.657 0 3.703v16.594C0 22.343 1.657 24 3.703 24h16.594C22.343 24 24 22.343 24 20.297V3.703C24 1.657 22.343 0 20.297 0zM7.625 20.297H4.969V9.5h2.656v10.797zM6.297 8.094H6.28a1.86 1.86 0 0 0-1.84 1.945c0 1.08.848 1.945 1.895 1.945h.018c1.06 0 1.857-.865 1.857-1.945a1.86 1.86 0 0 0-1.895-1.945zm13.102 12.203h-2.656V14.78c0-1.207-.43-2.032-1.508-2.032-.822 0-1.308.552-1.523 1.086-.078.188-.078.45-.078.715v6.951H9.688s.035-7.285 0-8.039h2.656v1.137c.352-.54 1.008-1.31 2.453-1.31 1.789 0 3.133 1.17 3.133 3.68v4.532z" />
          </svg>
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-gray-600 hover:text-gray-800 mb-2"
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12 0C5.373 0 0 5.373 0 12c0 5.305 3.438 9.8 8.206 11.387.6.11.82-.257.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.547-1.388-1.335-1.757-1.335-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.24 1.838 1.24 1.07 1.834 2.807 1.305 3.49.997.108-.774.417-1.305.76-1.605-2.665-.297-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.124-.3-.54-1.52.12-3.17 0 0 1.005-.322 3.3 1.23a11.458 11.458 0 0 1 3-.405 11.458 11.458 0 0 1 3 .405c2.29-1.552 3.294-1.23 3.294-1.23.66 1.65.244 2.87.12 3.17.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.627-5.478 5.917.43.367.81 1.1.81 2.22 0 1.605-.015 2.895-.015 3.29 0 .315.21.695.825.575C20.565 21.793 24 17.298 24 12c0-6.627-5.373-12-12-12"
            />
          </svg>
        </a>
      </div>

      {/* Main content */}
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">HEY, I'M MAQOBA JIYANE</h1>
        <p className="text-lg mb-8">
          A Result-Oriented Web Developer building and managing Websites and Web
          Applications that lead to the success of the overall product.
        </p>
        <button className="bg-purple-600 text-white py-3 px-6 rounded-lg uppercase font-bold hover:bg-purple-700">
          Projects
        </button>
      </div>
    </div>
  );
};

export default Home;
