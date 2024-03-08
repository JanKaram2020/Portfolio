import type {ReactNode} from "react";
import {SimpleGrid} from "@chakra-ui/react";

const FullWidthColumn = ({ children }: { children: ReactNode }) => (
  <SimpleGrid
    columns={{ sm: 1 }}
    sx={{
      '@media print': {
        gridTemplateColumns: '1fr',
      },
    }}
    w="100%"
  >
    {children}
  </SimpleGrid>
);
export default FullWidthColumn;
