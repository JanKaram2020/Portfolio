import React, { ReactNode, useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";

const MyComponent = ({
  children,
  Zoomed,
}: {
  children: ReactNode;
  Zoomed: ReactNode;
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback((shouldZoom: boolean) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
      {isZoomed ? Zoomed : children}
    </ControlledZoom>
  );
};

export default MyComponent;
