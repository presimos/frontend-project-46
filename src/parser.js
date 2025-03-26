import { readFileSync } from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default (filepath) => {
  if (typeof filepath !== 'string') {
    throw new TypeError(`Expected filepath to be a string, but got ${typeof filepath}: ${JSON.stringify(filepath)}`);
  }

  const normalizedPath = path.resolve(filepath); // Приводим путь к абсолютному
  const fileContent = readFileSync(normalizedPath, 'utf-8');

  if (filepath.endsWith('.json')) {
    return JSON.parse(fileContent);
  }

  if (filepath.endsWith('.yml') || filepath.endsWith('.yaml')) {
    return yaml.load(fileContent);
  }

  throw new Error(`Unsupported file format: ${filepath}`);
};
