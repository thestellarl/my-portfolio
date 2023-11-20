import React from "react";

interface PageSectionProps {
  children?: any;
  id?: string;
}

const PageSection = (props: PageSectionProps) => (
  <div
    id={props?.id}
    className="relative flex flex-col z-0 align-center justify-center items-center"
    style={{ fontFamily: "BeVietnam-Regular" }}
  >
    {props.children}
  </div>
);

// const PageSection = styled.section<PageSectionProps>`
//   position: relative;
//   display: flex;
//   font-family: BeVietnam-Regular;
//   flex-direction: column;
//   position: relative;
//   background-color: ${({ theme }) => theme.background};
//   z-index: 1;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   min-height: ${({ height }) =>
//     (typeof height === "number" ? height + `px` : height) || "min-content"};
//   overflow-x: hidden;
//   color: ${({ color }) => color || "inherit"};
// `;

export default PageSection;
