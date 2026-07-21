import { useEffect, useRef } from 'react';

// Wraps children in a element that fades in when it enters the viewport.
// as="article" renders an <article> instead of the default <div>.
export default function FadeIn({ children, className = '', as: Tag = 'div', ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      el.classList.add('visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = ['fade-in', className].filter(Boolean).join(' ');

  return (
    <Tag ref={ref} className={classes} {...props}>
      {children}
    </Tag>
  );
}
