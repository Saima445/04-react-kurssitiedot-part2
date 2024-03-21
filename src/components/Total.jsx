const Total = ({ course }) => {
  // KÄYTETÄÄN REDUCE METODIA!
  // vähän pidempi versio
  //   const exerciseSum = course.parts.reduce(function (sum, part) {
  //     console.log(sum, part);
  //     return sum + part.exercises;
  //   }, 0);
  // toinen pidempi versio
  //   const total = course.parts.reduce((sum, { exercises }) => {
  //     return sum + exercises;
  //   }, 0);
  const total = course.parts.reduce((sum, { exercises }) => sum + exercises, 0);

  return (
    <section>
      <p className="boldFont">Total of {total} exercises</p>
    </section>
  );
};

export default Total;
