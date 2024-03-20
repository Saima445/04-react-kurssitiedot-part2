import { useState } from "react";
import "./Reset.css";
import "./App.css";
import Course from "./components/Course";

const App = () => {
  const course = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundimentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };
  return (
    <>
      <Course course={course} />
    </>
  );
};

export default App;
