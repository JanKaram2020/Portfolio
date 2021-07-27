import { motion } from 'framer-motion';
import { chakra } from '@chakra-ui/react';

const ChakraSvg = chakra('svg');
interface IconInterface {
  width: string;
  height?: string;
}
function Icon({ width, height }: IconInterface) {
  return (
    <ChakraSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 768.92 231.53"
      w={width}
      height={height}
    >
      <g data-name="Layer 2">
        <g
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
          strokeWidth="5"
          data-name="Layer 3"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3 }}
            d="M.92 2.46c69.86 27.82 151.82 13.34 225 0-48 8.76 51 204.7-59.63 225.62-39.29 7.43-169.4-29.65-139.24-82.31 41.41-72.3 178.48 15.17 228.8-5.31 64.91-26.42-16.83-63.27-21-9.33-4.05 52.7 40.67 13.08 45-5.11-13.68 57.55 46.57-2.09 39.27-19.44-2.82 17.76-8.26 51 3.78 50.88 5.79-16.12 26.14-52.69 40.93-60.83 23.2 1.92-33 111.23 71.07 32.83 0 0 34-42 36-127 0 0 6 172-27 206 0 0 29-127 127-174 0 0-97 67-79 111 0 0 7 8 46-3"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 2.8, duration: 3 }}
            d="M534.92 143.46s22-16 15-36-36-6-36 10c0 0-8 28 8 41s28-31 32-34c0 0-8 25 4 33s38-54 34-59-23-5-22 12 60 7 64-8-26 51-8 58 64-35 50-55-51 42-19 53 27-45 26-51-6 53 8 54c12.62.9 17.92-48.88 18.85-58.37a.18.18 0 01.36 0c1 8.27 5.12 47.73-.21 58.38-6 12 17-64 21-63s9 55 5 64 21-66 28-64-4 65 5 65"
          />
        </g>
      </g>
    </ChakraSvg>
  );
}
export default Icon;
