import _ from 'lodash';

const formatValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return String(value);
};

const plain = (diff, parent = '') => (diff
  .filter((node) => node.type !== 'unchanged')
  .map((node) => {
    const property = parent ? `${parent}.${node.key}` : node.key;
    switch (node.type) {
      case 'added':
        return `Property '${property}' was added with value: ${formatValue(node.newValue)}`;
      case 'removed':
        return `Property '${property}' was removed`;
      case 'changed':
        return `Property '${property}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`;
      case 'nested':
        return plain(node.children, property);
      default:
        return 0;
    }
  })
  .join('\n'));

export default plain;
