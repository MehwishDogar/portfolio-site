/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */

export const setClassName = (items, index) => {
  const item = items[index];
  item.class += 'active';
  items.slice(0, index).forEach(prevItem => {
    prevItem.class += 'done';
  });
};
