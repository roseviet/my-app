import { MSWDevTools } from 'msw-devtools';
import { ReactNode } from 'react';

import { IS_DEVELOPMENT } from '@/config/constants';
import { db, handlers } from '@/testing/mocks';
import { initializeMocks } from '@/testing/mocks/initialize';

export type MSWWrapperProps = {
  children: ReactNode;
};

initializeMocks();

export const MSWWrapper = ({
  children,
}: MSWWrapperProps) => {
  return (
    <>
      {IS_DEVELOPMENT && (
        <MSWDevTools db={db} handlers={handlers} />
      )}
      {children}
    </>
  );
};
