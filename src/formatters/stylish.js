import _ from 'lodash';

const getIndent = (depth, spaces = 4) => ' '.repeat(depth * spaces - 2);
const getBracketIndent = (depth, spaces = 4) => ' '.repeat((depth * spaces) - 2);

const formatValue = (value, depth) => {
  if (!_.isObject(value)) {
    return String(value);
  }
  const entries = Object.entries(value)
    .map(([key, val]) => `${getIndent(depth + 1)}  ${key}: ${formatValue(val, depth + 1)}`)
    .join('\n');
  return `{\n${entries}\n${getBracketIndent(depth)}  }`;
};

const formatStylish = (diff, depth = 1) => {
  const formatted = diff.map((node) => {
    switch (node.type) {
      case 'added':
        return `${getIndent(depth)}+ ${node.key}: ${formatValue(node.newValue, depth)}`;
      case 'removed':
        return `${getIndent(depth)}- ${node.key}: ${formatValue(node.oldValue, depth)}`;
      case 'changed':
        return [
          `${getIndent(depth)}- ${node.key}: ${formatValue(node.oldValue, depth)}`,
          `${getIndent(depth)}+ ${node.key}: ${formatValue(node.newValue, depth)}`,
        ].join('\n');
      case 'unchanged':
        return `${getIndent(depth)}  ${node.key}: ${formatValue(node.value, depth)}`;
      case 'nested':
        return `${getIndent(depth)}  ${node.key}: {\n${formatStylish(node.children, depth + 1)}\n${getBracketIndent(depth)}  }`;
    }
  });

  return formatted.join('\n');
};

// ✅ Добавляем фигурные скобки на верхнем уровне
const stylish = (diff) => `{\n${formatStylish(diff)}\n}`;

export default stylish;