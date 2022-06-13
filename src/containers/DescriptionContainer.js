import React from 'react';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import performant from '../images/icons8-performance-64.png'
import structure from '../images/icons8-structure-64.png'
import easy from '../images/icons8-easy-return-64.png'
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/DescriptionContainer.module.scss';
import { motion } from "framer-motion";

const DescriptionContainer = () => {

  return (
    <>
      <div id="home-features">
        <div id="feature-1">
          {/* <ConstructionOutlinedIcon className="first-icon" fontSize="large"/> */}
          <img className="first-icon" src={performant}/>
          <h3>
            <strong>Incredibly Performant</strong>
          </h3>
          <span className="span-1">Reactime lives within the Chrome extension environment, allowing it to utilize Chrome's V8 engine to analyze React applications seamlessly.</span>
        </div>
        <div id="feature-1">
        <img className="second-icon" src={structure}/>
          <h3>
            <strong>Structured with Intention</strong>
          </h3>
          <span className="span-2">Reactime was built with structure in mind, every feature is laid out clearly for developers to find and use.</span>
        </div>
        <div id="feature-1">
        <img className="third-icon" src={easy}/>
          <h3>
            <strong>Intuitive Features</strong>
          </h3>
          <span className="span-3">Created with developers in mind, Reactime has a wide set of features that gives React developers more insight on what is happening within their application.</span>
        </div>
      </div>
    </>
  )
};

export default DescriptionContainer;