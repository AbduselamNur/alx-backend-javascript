export default function getStudentIdsSum(list) {
  return list.reduce((e, i) => e + i.id, 0);
}
