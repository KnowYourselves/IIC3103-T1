/* eslint-disable no-param-reassign */
const groupBy = (array, key) => array.reduce((accumulator, object) => {
  accumulator[object[key]] = [...accumulator[object[key]] || [], object];
  return accumulator;
}, {});

export default groupBy;
