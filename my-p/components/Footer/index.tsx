import React from "react";

const Footer = () => {
  return (
    <div
      className="justify-start text-base text-left"
      style={{ maxWidth: "75%", backgroundColor: "#343436" }}
    >
      <div className="code-row">
        <div className="inline-block mr-2 methods">const</div>
        <span className="mr-2 name">{`Lucas Stella`}</span>
        <span className="mr-2">{`=`}</span>
        <span className="mr-2 parens">{`()`}</span>
        <span className="mr-2 methods">{`=>`}</span>
        {`{`}
      </div>
      <div className="code-row">
        <span className="mr-2 methods">{`··const`}</span>
        <span className="mr-2 name">{`Name`}</span>
        <span className="mr-2">{`=`}</span>
        <span className="">{`React.UseState`}</span>
        <span className="parens">{`(`}</span>
        <span className="string">{`"Lucas Stella"`}</span>
        <span className="parens">{`)`}</span>
        <span className="">{`;`}</span>
      </div>
      <div className="code-row">
        <span className="mr-2 methods">{`··const`}</span>
        <span className="mr-2 name">{`Location`}</span>
        <span className="mr-2">{`=`}</span>
        <span className="">{`React.UseState`}</span>
        <span className="parens">{`(`}</span>
        <span className="string">{`"Beaverton, OR"`}</span>
        <span className="parens">{`)`}</span>
        <span className="">{`;`}</span>
      </div>
      <div className="code-row">
        <span className="methods mr-2">{`··const`}</span>
        <span className="mr-2 name">{`workExperience`}</span>
        <span className="mr-2">{`=`}</span>
        <span className="mr-2 parens">{`()`}</span>
        <span className="mr-2 methods">{`=>`}</span>
        {`{`}
      </div>
      <div className="code-row">
        <span className="">{`····return [`}</span>
      </div>
      <div className="code-row">
        <span className="">{`····]`}</span>
      </div>
      <div className="code-row">
        <span className="">{`··};`}</span>
      </div>
    </div>
  );
};

export default Footer;
