const sandcat = (string) => {
  if (typeof string !== 'string') {
    throw new TypeError('Sandcat needs a string!');
  }
  return string.replace(/\s/g, '');
}

module.exports = sandcat;
