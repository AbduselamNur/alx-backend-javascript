export default function updateStudentGradeByCity(list, city, newGrades) {
  return list.filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.find((i) => i.studentId === student.id);
      return { ...student, grade: grade ? grade.grade : 'N/A' };
    });
}
