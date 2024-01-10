import React from "react";
import Directory from "../../components/card-directory/Directory";
import './styles.css'

const contentArray = [
  {
    id: 1,
    title: "Introduction",
    description: "An overview of the topic.",
  },
  {
    id: 2,
    title: "Main Features",
    description: "Key features and functionalities explained.",
  },
  {
    id: 3,
    title: "Usage Guide",
    description: "A step-by-step guide on how to use the product or service.",
  },
  {
    id: 4,
    title: "Introduction",
    description: "An overview of the topic.",
  },
  {
    id: 5,
    title: "Main Features",
    description: "Key features and functionalities explained.",
  },
  {
    id: 6,
    title: "Usage Guide",
    description: "A step-by-step guide on how to use the product or service.",
  },
  // Add more objects as needed
];

const Home = () => {
  return (
    <div className="Home">
      <Directory content={contentArray} />
    </div>
  );
};

export default Home;
