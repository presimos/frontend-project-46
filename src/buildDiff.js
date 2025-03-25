import _ from 'lodash';

const buildDiff = (data1, data2) => {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));

  return keys.map((key) => {
    if (!_.has(data1, key)) {
      return { key, type: 'added', newValue: data2[key] };
    }
    if (!_.has(data2, key)) {
      return { key, type: 'removed', oldValue: data1[key] };
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key, type: 'nested', children: buildDiff(data1[key], data2[key]) };
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return { key, type: 'changed', oldValue: data1[key], newValue: data2[key] };
    }
    return { key, type: 'unchanged', value: data1[key] };
  });
};

export default buildDiff;
