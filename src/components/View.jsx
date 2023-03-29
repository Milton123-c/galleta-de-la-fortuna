import React from "react";

export const View = ({ galleta }) => {
  const { author, phrase } = galleta;

  return (
    <div className="view">
      <svg
        className="bandera"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="500.0px"
        height="250.0px"
        viewBox="0 0 500.0 250.0"
        enableBackground="new 0 0 500.0 250.0"
        xmlSpace="preserve"
      >
        <path
          fill="#FFFFFF"
          stroke="#000000"
          fillOpacity="1.000"
          strokeOpacity="1.000"
          fillRule="nonzero"
          strokeWidth="0.0"
          strokeLinejoin="miter"
          strokeLinecap="square"
          d="M485.59,198.18L485.59,18.41C411.52,56.10,336.98,56.10,270.64,33.33C190.83,0.17,92.18,-6.21,20.16,39.48L20.16,219.25C92.18,173.56,190.83,179.94,270.64,213.10C336.98,235.86,411.52,235.86,485.59,198.18z"
        />
      </svg>
      <div className="text__container">
        <p>{phrase}</p>
      </div>

      <div className="comillas">
        <i className="bx bxs-quote-single-right"></i>
        <i className="bx bxs-quote-single-right"></i>
      </div>
    </div>
  );
};
