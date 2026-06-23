import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface Props extends HTMLMotionProps<"div"> {
  delay?: number;
  children: ReactNode;
}

export function FadeUp({ delay = 0, children, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
