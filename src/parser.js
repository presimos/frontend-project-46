import path from 'path';
import { readFileSync } from 'fs';
import yaml from 'js-yaml';

export default (filepath) => {
  const extname = path.extname(filepath);
  const data = readFileSync(filepath, 'utf-8');

  switch (extname) {
    case '.json':
      return JSON.parse(data);
    case '.yml':
    case '.yaml':
      return yaml.load(data);
  }
};
