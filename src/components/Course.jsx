import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
  return (
    <section>
      <Header course={course} />
      <Content course={course} />
    </section>
  );
};

export default Course;
