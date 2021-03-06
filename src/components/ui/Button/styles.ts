import styled from 'styled-components';
import tw from 'tailwind.macro';
import { motion } from 'framer-motion';

export interface StyledProps {
  primary?: boolean;
  block?: boolean;
}

export const Button = motion.custom(styled.button<StyledProps>`
  outline: none !important;
  ${tw`py-2 px-8 rounded-full border border-yellow-300 text-red-900`};

  ${({ primary }) => (primary ? tw`bg-yellow-300` : tw`text-red-600`)};

  ${({ block }) => block && tw`w-full`};
`);
