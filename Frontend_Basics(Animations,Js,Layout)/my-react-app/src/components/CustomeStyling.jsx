import React from "react";

import AirflowImg from "../assets/Airflow.png";
import AWSImg from "../assets/AWS.png";
import DockerImg from "../assets/Docekr.jpg";
import FastAPi from "../assets/FastAPI.png";

// Notes

// If we use custome TailwindCSS then there might be a situation where
// we will need to change the style or color. In such cases manually modifying
// each file becomes a tidious task. The solution is to create our custom
// variable in the TailwindCSS config.

// Move to the index.css for tailwind CSS config

// Refer to Theme Variable Namespcaes Documentation

const CustomeStyling = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-20 justify-center items-center w-auto max-w-full h-auto">
        <div className="flex flex-row gap-20 flex-wrap my-20 mx-20 justify-between">
          <div className="w-100 h-100 bg-amber-400 rounded-full shrink-0 text-chestnut text-center text-4xl flex flex-col justify-center items-center">
            <img
              src={AirflowImg}
              alt="Img"
              width="200"
              height="200"
              loading="lazy"
              className="h-full w-full object-fit "
            ></img>
          </div>
          <div className="w-100 h-100 bg-amber-400 rounded-full shrink-0 text-chestnut text-center text-4xl flex flex-col justify-center items-center">
            <img
              src={DockerImg}
              alt="Img"
              width="200"
              height="200"
              loading="lazy"
              className="h-full w-full object-fit "
            ></img>
          </div>
          <div className="w-100 h-100 bg-amber-400 rounded-full shrink-0 text-chestnut text-center text-4xl flex flex-col justify-center items-center">
            <img
              src={FastAPi}
              alt="Img"
              width="200"
              height="200"
              loading="lazy"
              className="h-full w-full object-fit "
            ></img>
          </div>
          <div className="w-100 h-100 bg-amber-400 rounded-full shrink-0 text-chestnut text-center text-4xl flex flex-col justify-center items-center">
            <img
              src={AWSImg}
              alt="Img"
              width="200"
              height="200"
              loading="lazy"
              className="h-full w-full object-fit "
            ></img>
          </div>
          <div className="w-100 h-100 bg-amber-400 rounded-full shrink-0 text-chestnut text-center text-4xl flex flex-col justify-center items-center">
            <img
              src={DockerImg}
              alt="Img"
              width="200"
              height="200"
              loading="lazy"
              className="h-full w-full object-fit "
            ></img>
          </div>
          <div className="w-100 h-100 bg-amber-400 rounded-full shrink-0 text-chestnut text-center text-4xl flex flex-col justify-center items-center">
            <img
              src={DockerImg}
              alt="Img"
              width="200"
              height="200"
              loading="lazy"
              className="h-full w-full object-fit "
            ></img>
          </div>
          <div className="w-100 h-100 bg-amber-400 rounded-full shrink-0 text-chestnut text-center text-4xl flex flex-col justify-center items-center">
            <img
              src={DockerImg}
              alt="Img"
              width="200"
              height="200"
              loading="lazy"
              className="h-full w-full object-fit "
            ></img>
          </div>
          <div className="w-100 h-100 bg-amber-400 rounded-full shrink-0 text-chestnut text-center text-4xl flex flex-col justify-center items-center">
            <img
              src={DockerImg}
              alt="Img"
              width="200"
              height="200"
              loading="lazy"
              className="h-full w-full object-fit "
            ></img>
          </div>
          <div className="w-100 h-100 bg-amber-400 rounded-full shrink-0 text-chestnut text-center text-4xl flex flex-col justify-center items-center">
            <img
              src={DockerImg}
              alt="Img"
              width="200"
              height="200"
              loading="lazy"
              className="h-full w-full object-fit rounded-full"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomeStyling;
