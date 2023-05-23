export default function orderByProps(obj, order) {
  const result = [];
  const orderedKeys = [];

  for (const key of order) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      result.push({ key, value: obj[key] });
      orderedKeys.push(key);
    }
  }
  const keys = Object.keys(obj).sort();
  for (const key of keys) {
    if (!orderedKeys.includes(key)) {
      result.push({ key, value: obj[key] });
    }
  }

  return result;
}
