//  ----------------------- METHOD 1
function calculatePercentage() {
  const maxMarks = 400;

  let getStudentsData = classResult.map((student) => ({
    name: student.name,
    marks: student.marks.map((subject) => subject.marks),
    totalMarks: student.marks.reduce(
      (total, subject) => total + subject.marks,
      0
    ),
    percentage:
      (student.marks.reduce((total, subject) => total + subject.marks, 0) /
        maxMarks) *
      100,
  }));

  return getStudentsData;
}
