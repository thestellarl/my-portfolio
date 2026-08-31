import React from "react";

//prettier-ignore
const Footer = () => {
  return (
    <div
      style={{display: 'flex'}}
      id="output"
      className="flex w-fit justify-start text-xs xl:text-sm text-left"
    >
      <pre className="prettyprint leading-3">
        <span className="token keyword">const</span> <span className="token function-variable function"><span className="token maybe-className-name">LucasStella</span></span> <span className="token operator">=</span> <span className="token punctuation">(</span><span className="token punctuation">)</span> <span className="token arrow operator">=&gt;</span> <span className="token punctuation">{"{"}</span><br />
        <span>{'  '}</span><span className="token keyword">const</span> <span className="token punctuation">[</span><span className="token maybe-className-name">Email</span><span className="token punctuation">,</span> <span className="token maybe-className-name">SetEmail</span><span className="token punctuation">]</span> <span className="token operator">=</span> <span className="token maybe-className-name">React</span><span className="token punctuation">.</span><span className="token method function property-access">useState</span><span className="token punctuation">(</span><span className="token string bold">{`lucas@lstella.dev`}</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
        <span>{'  '}</span><span className="token keyword">const</span> <span className="token punctuation">[</span><span className="token maybe-className-name">Location</span><span className="token punctuation">,</span> <span className="token maybe-className-name">SetLocation</span><span className="token punctuation">]</span> <span className="token operator">=</span> <span className="token maybe-className-name">React</span><span className="token punctuation">.</span><span className="token method function property-access">useState</span><span className="token punctuation">(</span><span className="token string bold">{`Portland, OR`}</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
        <br />
        <span>{'  '}</span><span className="token keyword">const</span> <span className="token maybe-className-name">Work</span> <span className="token maybe-className-name">Experience</span> <span className="token operator">=</span> <span className="token punctuation">{"{"}</span><br />
        <span>{'      '}</span><span className="token string-property property bold">{`Becton Dickinson`}</span><span className="token operator">:</span> <span className="token string"><span className="token bold">{`Senior Test Automation Engineer`}</span>{` Mar 2024 - Present`}</span><span className="token punctuation">,</span><br />
        <span>{'      '}</span><span className="token string-property property bold">{`Intel`}</span><span className="token operator">:</span> <span className="token string">{`Development Tools Software Engineer Dec 2021 - Mar 2024`}</span><span className="token punctuation">,</span><br />
        <span>{'      '}</span><span className="token string-property property bold">{`Becton Dickinson`}</span><span className="token operator">:</span> <span className="token string">{`Software Engineering Intern June 2019 - Sept 2020`}</span><span className="token punctuation">,</span><br />
        <span>{'      '}</span><span className="token string-property property bold">{`Collins Aerospace`}</span><span className="token operator">:</span> <span className="token string">{`Capstone team lead Sept 2020 - June 2021`}</span><br />
        <span>{'  '}</span><span className="token punctuation">{"}"}</span><br />
        <br />
        <span>{'  '}</span><span className="token keyword">const</span> <span className="token maybe-className-name">Education</span> <span className="token operator">=</span> <span className="token punctuation">{"{"}</span><br />
        <span>{'      '}</span><span className="token string-property property bold">{`Oregon State University`}</span><span className="token operator">:</span> <span className="token string">{`Bachelors Degree - 2021`}</span><br />
        <span>{'  '}</span><span className="token punctuation">{"}"}</span><br />
        <br />
        <span>{'  '}</span><span className="token keyword control-flow">return </span><span className="token punctuation">(</span><br />
        <span>{'      '}</span><span className="token operator">&lt;</span><span className="token maybe-className-name">Skills</span><span className="token operator">&gt;</span><br />
        <span>{'          '}</span><span className="token operator">&lt;</span><span className="token maybe-className-name token bold">Typescript</span> <span className="token operator">/</span><span className="token operator">&gt;</span><br />
        <span>{'          '}</span><span className="token operator">&lt;</span><span className="token maybe-className-name token bold">React</span> <span className="token operator">/</span><span className="token operator">&gt;</span><br />
        <span>{'          '}</span><span className="token operator">&lt;</span><span className="token maybe-className-name token bold">Playwright</span> <span className="token operator">/</span><span className="token operator">&gt;</span><br />
        <span>{'          '}</span><span className="token operator">&lt;</span><span className="token constant token bold">C</span><span className="token operator token bold">++</span> <span className="token operator">/</span><span className="token operator">&gt;</span><br />
        <span>{'          '}</span><span className="token operator">&lt;</span><span className="token constant bold">UI</span><span className="token operator bold">/</span><span className="token constant bold">UX</span> <span className="token maybe-className-name token bold">Design</span><span className="token operator">/</span><span className="token operator">&gt;</span><br />
        <span>{'          '}</span><span className="token operator">&lt;</span><span className="token constant bold">CI</span><span className="token operator bold">/</span><span className="token constant bold">CD</span> <span className="token maybe-className-name token bold">Deployment</span><span className="token operator">/</span><span className="token operator">&gt;</span><br />
        <span>{'      '}</span><span className="token operator">&lt;</span><span className="token operator">/</span><span className="token maybe-className-name">Skills</span><span className="token operator">&gt;</span><br />
        <span>{'  '}</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br /><span className="token punctuation">{"}"}</span>
      </pre>
    </div>
  );
};

export default Footer;
