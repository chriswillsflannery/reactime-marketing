import React from 'react';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/DescriptionContainer.module.scss';
import { motion } from "framer-motion";

const DescriptionContainer = () => {

  return (
    <>
      <div id="home-features">
        <div id="feature-1">
          <ConstructionOutlinedIcon className="first-icon" fontSize="large"/>
          <h3>
            <strong>Incredibly Performant</strong>
          </h3>
          <span className="span-1"><strong>Reactime lives within the Chrome extension environment, allowing it to utilize Chrome's V8 engine to analyze React applications seamlessly.</strong></span>
        </div>
        <div id="feature-2">
        <HouseSidingIcon className="second-icon" fontSize="large"/>
          <h3>
            <strong>Structured with Intention</strong>
          </h3>
          <span className="span-2"><strong>Reactime was built with structure in mind, every feature is laid out clearly for developers to find and use.</strong> </span>
        </div>
        <div id="feature-3">
        <SearchIcon className="third-icon" fontSize="large"/>
          <h3>
            <strong>Intuitive Features</strong>
          </h3>
          <span className="span-3"><strong>Created with developers in mind, Reactime has a wide set of features that gives React developers more insight on what is happening within their application.</strong></span>
        </div>
      </div>
    </>
  )
};

export default DescriptionContainer;

// import React from "react";
// import styles from "../styles/Features.module.scss";
// import { BiGitBranch } from "react-icons/bi";
// import { MdCompare } from "react-icons/md";
// import { RiRouteLine } from "react-icons/ri";

// import { motion } from "framer-motion";

// const Features = () => {
//   return (
//     <div className={styles.container}>
//       <h4>Integrate Google Lighthouse into your development process with automated data capture and insightful comparisons.</h4>
    
//       <span>
//         Vantage is a data collection and reporting suite that developers can add to their Next.js project to gather <a href=
//         'https://developers.google.com/web/tools/lighthouse'>Google Lighthouse</a> metrics during development.  Vantage runs automatically and in the background when you commit, gathering data over time and allowing you to explore results and recommendations via a user-friendly interface. 
//       </span>
//       <div className={styles.cardContainer}>
//         {cardData.map(({ title, desc, icon, color, backgroundColor }, i) => (
//           <motion.div
//             key={i}
//             className={styles.card}
//             whileHover={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)" }}
//             transition={{duration: '.3'}}
//           >
//             <div className={styles.iconContainer} style={{ backgroundColor }}>
//               {React.cloneElement(icon, { size: 40, color })}
//             </div>
//             <h4>{title}</h4>
//             <span>{desc}</span>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const cardData = [
//   {
//     title: "Hands-free Data Capture",
//     desc: "Vantage runs in the background as you commit, consolidating data over time so it's quick and easy to look back at your site's improvement",
//     icon: <BiGitBranch />,
//     color: "2096F3",
//     backgroundColor: "#E3F2FD",
//   },
//   {
//     title: "Clear Comparisons",
//     desc: "See exactly which recommendations changed from one commit to the next, and how your updates have directly influenced metrics",
//     icon: <MdCompare />,
//     color: "#673AB6",
//     backgroundColor: "#EDE7F6",
//   },
//   {
//     title: "Automatic Project Traversal",
//     desc: "Designed for the structure of Next.js projects, Vantage will detect and traverse all endpoints of your project to automatically gather data with minimal setup",
//     icon: <RiRouteLine />,
//     color: "#00C852",
//     backgroundColor: "#c8f7d5",
//   },
// ];

// export default Features;