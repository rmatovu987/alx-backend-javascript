export default function getListStudentIds(students) {
  const array = [];
  if (!(students instanceof Array)) {
    return [];
  }

  for (const student of students) {
    array.push(student.id);
  }
  return array;
}
