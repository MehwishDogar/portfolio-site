/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */

const setMobileVisibleClass = item => {
  item.className = 'mobile-visible';
};

export const setClassName = (items, index) => {
  const item = items[index];
  const prevItem = items[index - 1];
  const nextItem = items[index + 1];
  const afterNextItem = items[index + 2];
  const afterPrevItem = items[index - 2];
  // eslint-disable-next-line no-return-assign
  items.forEach(i => (i.className = ''));
  setMobileVisibleClass(item);
  item.className += ' active';

  prevItem
    ? setMobileVisibleClass(prevItem)
    : setMobileVisibleClass(afterNextItem);
  nextItem
    ? setMobileVisibleClass(nextItem)
    : setMobileVisibleClass(afterPrevItem);
};
