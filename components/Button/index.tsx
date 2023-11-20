import React, { useState } from "react";

interface ButtonProps {
  href?: string;
  disabled?: boolean;
  isDownload?: boolean;
  children?: string;
  target?: string;
}

export const Button = ({
  href,
  children,
  isDownload = false,
  disabled = false,
}: ButtonProps) => {
  return (
    <a
      className="text-decoration-none font-weight-bold border-2 border-red-600 border-solid rounded-full bg-white text-red-600 px-10 py-2 text-xl transition-all duration-150 ease-in-out hover:bg-red-600 hover:text-white"
      target="_blank"
      href={href}
      download={isDownload}
      disabled={disabled}
    >
      {children}
    </a>
  );
};

// const StyledButton = styled.a<{ disabled: boolean }>`
//   text-decoration: none;
//   font-weight: bold;
//   border: 2px solid #d64933;
//   border-radius: 16px;
//   background-color: #ffffff;
//   color: #d64933;
//   padding: 0.25em 3em;
//   font-size: 1.25em;
//   transition: all 0.15s ease-in-out;
//   :hover {
//     color: #ffffff;
//     background-color: #d64933;
//   }
//   ${({ disabled }) =>
//     !disabled
//       ? ""
//       : `
//         border: 2px solid #b0b0b0 !important;
//         background-color: #FFFFFF !important;
//         color: #b0b0b0 !important;
//         cursor: default;
//     `}
// `;
