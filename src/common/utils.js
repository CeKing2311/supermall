// 防抖函数,解决函数的频繁调用问题
export function debounce(func, delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
export function dateformat(_time) {
  const date = new Date(parseInt(_time));
  let dateStr = date.toLocaleDateString();
  dateStr = dateStr.replace("/", "-").replace("/", "-");
  return dateStr;
}
