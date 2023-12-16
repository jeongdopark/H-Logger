export const debounce = (func: Function, delay: number) => {
  let timer: NodeJS.Timeout;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, delay);
  };
};
