const Total = ({ course }) => {
  // KÄYTETÄÄN REDUCE METODIA!
  const exerciseSum = course.parts.reduce(function (sum, part) {
    console.log(sum, part);
    return sum + part.exercises;
  }, 0);

  return (
    <section>
      <p className="boldFont">Total of {exerciseSum} exercises</p>
    </section>
  );
};

export default Total;
