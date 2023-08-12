'use client';

import React from 'react';
import { CacheProvider } from '@chakra-ui/next-js';
import {
  ChakraProvider,
  GlobalStyle,
} from '@chakra-ui/react';

import { theme } from '@/config/theme';

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
