export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const arr = [...set].map((e) => {
    if ((e).startsWith(startString)) {
      return e.slice(startString.lenght);
    }
    return '';
  }).filter((e) => e !== '');
  return arr.join('-');
}
