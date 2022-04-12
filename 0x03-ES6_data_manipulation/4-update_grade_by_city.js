export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(newGrades)) {
    return [];
  }

  if (!Array.isArray(students)) {
    return [];
  }

  const mp = students.filter((std) => std.location === city)
    .map((std) => {
      const [grade] = newGrades.filter((g) => g.studentId === std.id);
      const grd = grade ? grade.grade : 'N/A';
      return { ...std, grd };
    });

  return mp;
}
