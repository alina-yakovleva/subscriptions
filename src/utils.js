export const debouce = (cb, delay) => {
  let timer;
  return function () {
    const fn = cb.bind(this, Array.from(arguments));

    clearTimeout(timer);

    timer = setTimeout(fn, delay);
  };
};
