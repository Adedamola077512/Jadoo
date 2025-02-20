import React from 'react';
import './Information.css';

const Information = () => {
  return (
    <div className='container my'>
      <div className='information'>
        <h1 className='subscribe-title'>
          Subscribe to get information, latest news and other <br />
          interesting offers about Jadoo
        </h1>

        <form className='subscribe-form'>
          {/* Input Field */}
          <label className="input-label">
            <span className="input-icon">
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="1.25"
                  d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                ></path>
              </svg>
            </span>
            <input
              type="text"
              className="input-field"
              placeholder="Enter name"
              autoComplete="off"
            />
          </label>

          {/* Subscribe Button */}
          <button type="submit" className="subscribe-button">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Information;
