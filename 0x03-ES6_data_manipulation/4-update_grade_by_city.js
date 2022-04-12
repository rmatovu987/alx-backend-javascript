export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  return students.filter((std) => std.location === city)
    .map((std) => {
      const [grade] = newGrades.filter((g) => g.studentId === std.id);
      const grd = grade ? grade.grade : 'N/A';
      return { ...std, grd };
    });
}
