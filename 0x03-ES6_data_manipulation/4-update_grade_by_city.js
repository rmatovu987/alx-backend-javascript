export default function updateStudentGradeByCity(stds, city, grade) {
  if (!Array.isArray(stds)) {
    return [];
  }
  if (!Array.isArray(grade)) {
    return [];
  }
  const newStd = stds.filter((std) => std.location === city)
    .map((std) => {
      const [fgrades] = grade.filter((grds) => grds.studentId === std.id);
      const grd = fgrades ? fgrades.grade : 'N/A';
      return { ...std, grd };
    });
  return newStd;
}
