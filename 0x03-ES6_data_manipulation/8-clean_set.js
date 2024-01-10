const cleanSet = (set, startString) => {
  if (set instanceof Set && typeof startString === 'string' && startString.length > 0) {
    const res = [];
    for (const el of set) {
      if (typeof el === 'string' && el.length > 0 && el.startsWith(startString)) {
        res.push(el.substring(startString.length));
      }
    }
    return res.join('-');
  }
  return '';
};

export default cleanSet;
