import { Seq } from "immutable";

export default function printBestStudents(studentData) {
  const studentSequence = Seq(studentData);

  const highScoringStudents = studentSequence.filter(
    (studentDetails) => studentDetails.score > 70
  );

  function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  const formattedStudentData = highScoringStudents
    .map((studentDetails) => ({
      ...studentDetails,
      firstName: capitalizeFirstLetter(studentDetails.firstName),
      lastName: capitalizeFirstLetter(studentDetails.lastName),
    }))
    .toJS();

  console.log(formattedStudentData);
}
