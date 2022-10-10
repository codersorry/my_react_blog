export default function InterSectionLazyLoad(childClassName: string, fn: (entry: any) => void) {
  // 根据传入的类名，批量获取类名下的dom元素
  const children: any = document.getElementsByClassName(childClassName) || [];
  // 定义 IntersectionObserver 类的回调函数
  const callback = (entries: Array<any>) => {
    entries.forEach((entry) => {
      // 进入可视区域
      if (entry.isIntersecting) {
        fn && fn(entry);
        // 进入可视区域后取消监听
        observer.unobserve(entry.target);
      }
    });
  };

  // 实例化IntersectionObserver对象
  const observer = new IntersectionObserver(callback);
  // 遍历批量获取的dom，添加监听
  [...children].forEach((child: any) => {
    observer.observe(child);
  });
}
