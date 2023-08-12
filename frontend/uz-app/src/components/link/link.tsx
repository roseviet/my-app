import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ReactNode } from 'react';

const variants = {
  link: {
    variant: 'link',
    color: 'primary',
  },
  solid: {
    variant: 'solid',
    bg: 'primary',
    color: 'primaryAccent',
    _hover: {
      opacity: '0.9',
    },
  },
  outline: {
    variant: 'outline',
    color: 'primary',
    bg: 'white',
  },
};

export type LinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  icon?: JSX.Element;
  shallow?: boolean;
};

export const Link = ({
  href,
  children,
  variant = 'link',
  icon,
  shallow = false,
}: LinkProps) => {
  return (
    <NextLink shallow={shallow} href={href} passHref>
      <Button
        leftIcon={icon}
        /** In nextjs 13, Next Link renders an a tag by default, so having the Chakra Link as a Child renders another a tag as the child of the a tag from nextjs.
What you can do is use the as prop to change the element rendered by Chakra Link */
        as="span"
        {...variants[variant]}
      >
        {children}
      </Button>
    </NextLink>
  );
};
