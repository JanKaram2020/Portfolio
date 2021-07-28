import { ListItem } from '@chakra-ui/react';
import React from 'react';

const ListItemColor = ({ children }: { children: React.ReactNode }) => (
  <ListItem
    _before={{
      content: '"•"',
      color: 'red.400',
      mr: '10px',
    }}
  >
    {children}
  </ListItem>
);
export default ListItemColor;
