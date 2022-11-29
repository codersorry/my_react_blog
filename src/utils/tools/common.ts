// 简单防抖
let timer: any = null;
export function debounce(fn: () => any, delay: number) {
  timer && clearTimeout(timer);
  timer = setTimeout(fn, delay);
}
