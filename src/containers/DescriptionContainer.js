import React from 'react';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';

const DescriptionContainer = () => {

  return (
    <>
      <div id="home-features">
        <div id="feature-1">
          <ConstructionOutlinedIcon fontSize="large"/>
          <h3>
            <strong>Performant</strong>
          </h3>
        </div>
        <div id="feature-2">
        <ConstructionOutlinedIcon fontSize="large"/>
          <h3>
            <strong>Structured</strong>
          </h3>
        </div>
        <div id="feature-3">
        <ConstructionOutlinedIcon fontSize="large"/>
          <h3>
            <strong>Intuitive</strong>
          </h3>
        </div>
      </div>
    </>
  )
};

export default DescriptionContainer;