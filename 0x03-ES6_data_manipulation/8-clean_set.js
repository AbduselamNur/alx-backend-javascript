export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const array = [...set].map((item) => {
    if (item.startsWith(startString)) {
      return item.slice(startString.length);
    }
    return '';
  }).filter((item) => item !== '');
  return array.join('-');
}
