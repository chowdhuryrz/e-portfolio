import React from "react";

function Background() {
  return (
    <div className="z-0">
      {/* Triangle */}
      <svg
        id="shape"
        className="w-28 h-28 fixed top-[50vh] left-[80vw] select-none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsBx="https://boxy-svg.com"
        viewBox="0 0 500 500"
      >
        <path
          fill="none"
          stroke="#D00000"
          strokeWidth="6"
          d="M232.247 151.156l84.846 146.958H147.401l84.846-146.958z"
          bxShape="triangle 147.401 151.156 169.692 146.958 0.5 0 1@4cfb8017"
        ></path>
      </svg>
      <svg
        id="shape"
        className="w-28 h-28 fixed top-[50vh] left-[30vw] select-none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsBx="https://boxy-svg.com"
        viewBox="0 0 500 500"
      >
        <path
          fill="none"
          stroke="#D00000"
          strokeWidth="6"
          d="M232.247 151.156l84.846 146.958H147.401l84.846-146.958z"
          bxShape="triangle 147.401 151.156 169.692 146.958 0.5 0 1@4cfb8017"
        ></path>
      </svg>

      {/* Star */}
      <svg
        id="shape"
        className="w-28 h-28 fixed top-[15vh] left-[5vw] select-none star"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsBx="https://boxy-svg.com"
        viewBox="0 0 500 500"
      >
        <path
          fill="none"
          stroke="#D00000"
          strokeWidth="6"
          d="M241.411 236.639l-61.55-42.832-61.552 42.831 21.714-71.774-59.754-45.303 74.97-1.528 24.621-70.83 24.62 70.83 74.972 1.528-59.755 45.304z"
          bxShape="star 367 319 104.717 104.717 0.4 5 1@98c669c6"
        ></path>
      </svg>
      <svg
        id="shape"
        className="w-28 h-28 fixed top-[80vh] left-[80vw] select-none star"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsBx="https://boxy-svg.com"
        viewBox="0 0 500 500"
      >
        <path
          fill="none"
          stroke="#D00000"
          strokeWidth="6"
          d="M241.411 236.639l-61.55-42.832-61.552 42.831 21.714-71.774-59.754-45.303 74.97-1.528 24.621-70.83 24.62 70.83 74.972 1.528-59.755 45.304z"
          bxShape="star 367 319 104.717 104.717 0.4 5 1@98c669c6"
        ></path>
      </svg>
      {/* Eclipse */}
      <svg
        id="shape"
        className="w-28 h-28 fixed top-[15vh] left-[45vw] select-none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsBx="https://boxy-svg.com"
        viewBox="0 0 500 500"
      >
        <path
          fill="none"
          stroke="#D00000"
          strokeWidth="6"
          d="M184.207 265.537a65.402 65.402 0 1146.247 46.246 47.858 47.858 0 10-46.247-46.246z"
          bxShape="crescent 286 373 65.402 300 0.7 1@0df85979"
        ></path>
      </svg>
      <svg
        id="shape"
        className="w-28 h-28 fixed top-[80vh] left-[5vw] select-none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsBx="https://boxy-svg.com"
        viewBox="0 0 500 500"
      >
        <path
          fill="none"
          stroke="#D00000"
          strokeWidth="6"
          d="M184.207 265.537a65.402 65.402 0 1146.247 46.246 47.858 47.858 0 10-46.247-46.246z"
          bxShape="crescent 286 373 65.402 300 0.7 1@0df85979"
        ></path>
      </svg>
      {/* Circle */}
      <svg
        id="shape"
        className="w-16 h-16 fixed top-[15vh] left-[80vw] select-none circle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
      >
        <circle
          cx="179.86"
          cy="153.667"
          r="131.405"
          fill="none"
          stroke="#D00000"
          strokeWidth="10"
        ></circle>
      </svg>
      <svg
        id="shape"
        className="w-16 h-16 fixed top-[50vh] left-[5vw] select-none circle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
      >
        <circle
          cx="179.86"
          cy="153.667"
          r="131.405"
          fill="none"
          stroke="#D00000"
          strokeWidth="10"
        ></circle>
      </svg>
      <svg
        id="shape"
        className="w-16 h-16 fixed top-[80vh] left-[50vw] select-none circle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
      >
        <circle
          cx="179.86"
          cy="153.667"
          r="131.405"
          fill="none"
          stroke="#D00000"
          strokeWidth="10"
        ></circle>
      </svg>
    </div>
  );
}

export default Background;
