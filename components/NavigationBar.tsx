import React from "react";
import logo from "./logo.svg";
import styles from "../app/app.module.css";

interface INavigationBarProps {
  closed: boolean;
  navLinks: Record<string, string>;
  children?: React.ReactNode;
}

export const NavigationBar = ({
  navLinks = {},
  children,
}: INavigationBarProps) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleMouseOver = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div className="pointer-events-none flex font-BeVietnam-Thin content-center w-100 bg-inherit fixed top-0 transition-all duration-200 ease-in-out h-screen z-2 text-black">
      <div
        className="flex flex-none h-1/4 items-center justify-around pointer-events-auto"
        style={{
          transition: "margin-bottom",
        }}
      >
        {children}
      </div>
      <div
        className={`${styles.nav_container} flex flex-col flex-1 items-center justify-around pointer-events-auto left-0 h-75vh w-100px text-white`}
      >
        {Object.keys(navLinks).map((linkText) => (
          <a
            className="cursor-pointer no-underline px-0 sm:px-10 font-bold text-inherit"
            key={linkText}
            href={navLinks[linkText]}
          >
            {linkText}
          </a>
        ))}
      </div>
    </div>
  );
};

// const SubWrapper = styled.div<{
//   flexNum: string;
//   scrollPosition: number;
// }>`
//   > * {
//     transition: all 0.2s ease-in-out;
//     margin: 25px 0;
//     :hover {
//       transform: scale(1.15);
//     }
//   }
// `;

// const NavigationLinkWrapper = styled.div<{
//   visible: boolean;
//   flexNum: string;
//   scrollPosition: number;
// }>`
//   display: flex;
//   position: absolute;
//   left: ${({ scrollPosition }) => (scrollPosition < 150 ? "0" : "-100")}px;
//   height: 75vh;
//   width: 100px;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
//   transition: all 0.5s ease-in-out;
//   pointer-events: auto;
//   color: #ffffff;
//   > * {
//     transition: all 0.2s ease-in-out;
//     :hover {
//       transform: scale(1.15);
//     }
//   }
// `;

// const NavigationLink = styled.a`
//   cursor: pointer;
//   text-decoration: none;
//   padding: 0 10px;
//   font-weight: 900;
//   color: inherit;
// `;
