/* eslint-disable linebreak-style */
import ArrayBufferConverter, { getBuffer } from '../app';

test('test', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  expect(`${converter}`).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
