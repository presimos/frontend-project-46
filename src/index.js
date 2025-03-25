import parseJson from './parser.js';
import genDiff from './genDiff.js';

export default (filepath1, filepath2) => {
  const data1 = parseJson(filepath1);
  const data2 = parseJson(filepath2);

  return genDiff(data1, data2);
};
