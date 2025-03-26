import parse from './parser.js';
import buildDiff from "./buildDiff.js";
import formatDiff from './formatters/index.js';

const genDiff = (data1, data2, format = 'stylish') => {
  const diff = buildDiff(parse(data1), parse(data2));
  return formatDiff(diff, format);
};

export default genDiff;
