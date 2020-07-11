/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import InstallationOlder from './installationOlder';
import VisualStateOlder from './visualStateOlder';
import demogifold from '../images/demo.gif';

const styles = {
  reactGreen: '#072D2B',
  redCode: '#99A93A',
};

const OlderVersion = () => (
  <>
    <InstallationOlder>
      <h2 style={{ color: styles.reactGreen }}>
        <strong>Simple Installation</strong>
      </h2>
      <h6>
        <a
          style={{ textDecoration: 'none', color: styles.redCode }}
          href="https://www.youtube.com/watch?v=lmG1X7Kf6zo&t="
        >
          Youtube Tutorial
        </a>
      </h6>
    </InstallationOlder>
    <VisualStateOlder>
      <h2 style={{ textAlign: 'center' }}>
        <strong>STATE:</strong>
        {' '}
Track, Revert, Visualize
      </h2>
      <img src={demogifold} alt="ReacTime Demo" />
    </VisualStateOlder>
  </>
);

export default OlderVersion;
