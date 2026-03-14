const {deepClone} = require('./x');
test('cloned object should pass', () => {
  const obj = { x: new Date() };
  const cloned = deepClone(obj);
  expect(cloned.x).toBeTruthy();
});
