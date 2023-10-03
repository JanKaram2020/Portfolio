import { Link } from '@chakra-ui/react';
import Image from 'next/legacy/image';
import React from 'react';
import type { StackLogo } from './types';

export const TechLinks = {
  bootstrap: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
  framer: 'https://www.framer.com/docs/',
  gatsby: 'https://www.gatsbyjs.com/',
  mantine: 'https://mantine.dev/',
  next: 'https://nextjs.org/',
  puppeteer: 'https://pptr.dev/',
  react: 'https://react.dev/',
  redux: 'https://redux.js.org/',
  sanity: 'https://www.sanity.io/',
  themeui: 'https://theme-ui.com/',
} as const;

const Technology = ({ tech }: { tech: StackLogo }) => (
  <Link href={TechLinks[tech]} isExternal rel="noopener">
    <Image
      src={`/logos/${tech}.png`}
      width={190}
      height={72.5}
      alt={`${tech} logo`}
    />
  </Link>
);
export default Technology;
