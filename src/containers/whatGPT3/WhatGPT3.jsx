import "./whatGPT3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of piate heard oh ought. His defective nor convinced residence own. Connections has put impossible own apartments boisterous. At jointure ladyship an insiste so humanity he. Friendly bachelor entrnace to on by."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of piate heard oh ought."
        />
        <Feature
          title="Knowledgebase"
          text=" At jointure ladyship an insiste so humanity he. Friendly bachelor entrnace to on by."
        />
        <Feature
          title="Education"
          text=" At jointure ladyship an insiste so humanity he. Friendly bachelor entrnace to on by."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
