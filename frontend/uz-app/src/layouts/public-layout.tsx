import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import { Link } from '@/components/link';

type PublicLayoutProps = {
  children: ReactNode;
};

export const PublicLayout = ({
  children,
}: PublicLayoutProps) => {
  return (
    <Box maxW="container.lg" mx="auto" h="full">
      <Box minH="80%" mx="4">
        {children}
      </Box>
      <Box py="8" textAlign="center">
        Powered by <Link href="/">UZ APP</Link>
      </Box>
    </Box>
  );
};
