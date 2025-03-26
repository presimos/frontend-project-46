import parse from './parser.js';
import buildDiff from './buildDiff.js';
import formatDiff from './formatters/index.js';

const genDiff = (data1, data2, format = 'stylish') => {
  const data1s = parse(data1);
  const data2s = parse(data2);
  const diff = buildDiff(data1s, data2s);
  return formatDiff(diff, format);
};

export default genDiff;
