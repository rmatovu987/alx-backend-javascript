export default function getListStudentIds(students) {
  const array = [];
  if ((students instanceof Array)) {
    for (const student of students) {
      array.push(student.id);
    }
  }
  return array;
}
