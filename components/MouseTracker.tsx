import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const AnimatedBox = motion(Box);
interface OnMoveInterface {
  currentTarget: {
    getBoundingClientRect(): { x: number; y: number };
    clientWidth: number;
    clientHeight: number;
  };
  clientX: number;
  clientY: number;
}
const MouseTracker = ({
  width,
  height,
  children,
}: {
  width: string;
  height: string;
  children: React.ReactNode;
}) => {
  const angle = 30;
  const y = useMotionValue(0.5);
  const x = useMotionValue(0.5);

  const rotateY = useTransform(x, [0, 1], [-angle, angle], {
    clamp: true,
  });
  const rotateX = useTransform(y, [0, 1], [angle, -angle], {
    clamp: true,
  });
  // 2. create an event handler for the move event
  const onMove = (e: OnMoveInterface) => {
    // 1. get position information about the card
    const bounds = e.currentTarget.getBoundingClientRect();
    // 2. Transform the current pointer position so that it related
    //    to the top left corner of the Card.
    //    In addition make sure the value is between 0 and 1
    const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth;

    // 3. Perform same steps as for X Axis to the Y Axis
    const yValue = (e.clientY - bounds.y) / e.currentTarget.clientHeight;
    x.set(xValue, true);
    y.set(yValue, true);
  };
  return (
    <AnimatedBox
      onPointerMove={onMove}
      padding="25px"
      textAlign="center"
      width={width}
      height={height}
      style={{
        rotateY,
        rotateX,
      }}
    >
      {children}
    </AnimatedBox>
  );
};

export default MouseTracker;
