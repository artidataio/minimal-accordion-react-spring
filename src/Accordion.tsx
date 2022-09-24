import React from "react";
import { animated, useSpring } from "@react-spring/web";

type Props = {
  open: boolean;
  children: React.ReactNode;
};

const Accordion = ({ children, open }: Props) => {
  const [height, setHeight] = React.useState("0px");
  const measuredRef = React.useCallback((node: HTMLElement | null) => {
    if (node) {
      setHeight(`${node.scrollHeight}px`);
    }
  }, []);

  const { ...props } = useSpring({
    height: open ? height : "0px",
    opacity: open ? 1 : 0
  });

  return (
    <animated.div ref={measuredRef} style={{ ...props, overflow: "hidden" }}>
      {children}
    </animated.div>
  );
};

export default Accordion;
