export const useIntersectionObserver = (
  target: Ref<Element | undefined>,
  cb: () => void,
  options?: IntersectionObserverInit,
) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cb();
        }
      });
    },
    { threshold: 0.8, ...options },
  );

  watchEffect(() => {
    if (target.value) observer.observe(target.value!);
  });

  onUnmounted(() => {
    observer.disconnect();
  });

  return {
    observer,
  };
};
