// import Img from "gatsby-image";
import React, { useState } from "react";
import styles from "../styles/GifFeatures.module.scss";
import { motion } from "framer-motion";
import MyMovie from '../images/MyMovie.gif';
import MyMovieOld from '../images/MyMovieOld.gif';
import ShortMovie from '../images/ShortMovie.gif';

const GifFeatures = () => {
  const [section, setSection] = useState(0);

  const sectionComponents = sections.map(({ title, description }, i) => (
    <motion.div
      key={i}
      onClick={(_) => setSection(i)}
      className="section"
      initial={{ backgroundColor: "#ffffff" }}
      animate={{ backgroundColor: section === i ? "#EDE7F6" : "#ffffff" }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  ));

  const imageComponents = sections.map(({ gif }, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: section === i ? 1 : 0, x: section === i ? 0 : 200 }}
      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
    >
      {section === i && (
        <img
          className="image"
          src={gif}
          width={600}
          height={431}
          layout='intrinsic'
        />
      )}
    </motion.div>
  ));

  return (
    <div className="container">
      <div className="imageContainer">{imageComponents}</div>
      <div className="sectionContainer">{sectionComponents}</div>
    </div>
  );
};

const sections = [
  {
    title: "State SnapShot Display",
    description:
      "See your application state in a stylized and intereactive format, for clear concise state management.",
    gif: MyMovie
  },
  {
    title: "Time Travel Rendering",
    description:
      "Simulate any state change from your DOM history, with a simple click of a button.",
    gif: ShortMovie
  },
  {
    title: "Web Metrics",
    description:
      "Improve user experience with insight into Web Metrics, such as LCP, FCP, FID, TTFB.",
    gif: MyMovieOld
  }
];

export default GifFeatures;