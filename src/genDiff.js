import parse from './parser.js';
import buildDiff from "./buildDiff.js";
import stylish from "./formatters/stylish.js";

const genDiff = (data1, data2) => {
  const diff = buildDiff(parse(data1), parse(data2));
  return stylish(diff);
};

export default genDiff;
