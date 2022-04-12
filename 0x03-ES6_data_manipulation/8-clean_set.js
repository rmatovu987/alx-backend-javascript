export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  if (typeof set !== 'object') {
    return '';
  }

  const str = [];

  for (const x of set) {
    if (x.startsWith(startString)) {
      str.push(x.slice(startString.length));
    }
  }
  return str.join('-');
}
