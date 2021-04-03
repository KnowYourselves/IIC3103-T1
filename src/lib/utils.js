/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
function groupBy(array, key) {
  return array.reduce((accumulator, object) => {
    accumulator[object[key]] = [...accumulator[object[key]] || [], object];
    return accumulator;
  }, {});
}

export {
  groupBy,
};
