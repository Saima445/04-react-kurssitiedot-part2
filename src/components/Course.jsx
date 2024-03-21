import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ courses }) => {
  return (
    <section>
      {courses.map((course) => (
        <div key={course.id}>
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />
        </div>
      ))}
    </section>
  );
};

// Jokaisen karttatietueen (map-funktion tuloksena)
// tulisi olla käärittynä yhteen elementtiin

export default Course;
