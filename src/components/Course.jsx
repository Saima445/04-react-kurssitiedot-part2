import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  return (
    <section>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </section>
  );
};

export default Course;
