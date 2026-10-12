import { ReactNode } from "react";
import { useInView } from "@/lib/useInView";

export default function Reveal({ children }: { children: ReactNode }) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref}>
      {isInView ? children : null}
    </div>
  );
}
