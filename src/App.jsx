import { useState } from "react";
import "./Reset.css";
import "./App.css";
import Course from "./components/Course";

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
    {
      name: "React Native",
      id: 3,
      parts: [
        {
          name: "Getting Started",
          exercises: 5,
          id: 1,
        },
        {
          name: "Building Components",
          exercises: 8,
          id: 2,
        },
        {
          name: "Navigation",
          exercises: 6,
          id: 3,
        },
      ],
    },
    {
      name: "MongoDB",
      id: 4,
      parts: [
        {
          name: "Introduction to MongoDB",
          exercises: 4,
          id: 1,
        },
        {
          name: "CRUD Operations",
          exercises: 9,
          id: 2,
        },
      ],
    },
    {
      name: "Python Programming",
      id: 5,
      parts: [
        {
          name: "Syntax and Variables",
          exercises: 6,
          id: 1,
        },
        {
          name: "Functions and Modules",
          exercises: 10,
          id: 2,
        },
        {
          name: "Object-Oriented Programming",
          exercises: 12,
          id: 3,
        },
      ],
    },
    {
      name: "Web Development Fundamentals",
      id: 6,
      parts: [
        {
          name: "HTML and CSS Basics",
          exercises: 8,
          id: 1,
        },
        {
          name: "JavaScript Essentials",
          exercises: 11,
          id: 2,
        },
        {
          name: "Responsive Design",
          exercises: 7,
          id: 3,
        },
      ],
    },
  ];
  return (
    <>
      <header>
        <h1>Web development curriculum</h1>
      </header>
      <main>
        <Course courses={courses} />
      </main>
    </>
  );
};

export default App;
