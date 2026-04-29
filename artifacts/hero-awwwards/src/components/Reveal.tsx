import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Delay in ms before the element starts animating once it's in view */
  delay?: number;
  /** Stagger animation across direct children */
  stagger?: boolean;
  /** HTML element to render */
  as?: ElementType;
  /** IntersectionObserver rootMargin */
  rootMargin?: string;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  stagger = false,
  as: Tag = "div",
  rootMargin = "0px 0px -10% 0px",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);

  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <Tag
      ref={ref as never}
      style={style}
      className={`${stagger ? "reveal-stagger" : "reveal"} ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
