import { readFileSync } from 'fs';
import yaml from 'js-yaml';

export default (filepath) => {
  const fileContent = readFileSync(filepath, 'utf-8');

  if (filepath.endsWith('.json')) {
    return JSON.parse(fileContent);
  }

  if (filepath.endsWith('.yml') || filepath.endsWith('.yaml')) {
    return yaml.load(fileContent);
  }
};
