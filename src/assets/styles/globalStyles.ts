import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

export default createGlobalStyle`
  body {
    ${tw`m-0 text-red-900 bg-white`};
  }

  a {
    ${tw`text-red-600 hover:text-red-700`};
  }

  p + p {
    ${tw`mt-3`};
  }
`;
