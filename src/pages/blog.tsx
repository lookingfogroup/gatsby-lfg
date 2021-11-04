import React from 'react';
import Unity, { UnityContext } from "react-unity-webgl";

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Posts from 'components/Posts';


// const unityContext = new UnityContext({
//   loaderUrl: "https://dev373.d3ets550hjjp1b.amplifyapp.com/Build/baccarat_gzip.loader.js",
//   dataUrl: "https://dev373.d3ets550hjjp1b.amplifyapp.com/Build/baccarat_gzip.data.unityweb",
//   frameworkUrl: "https://dev373.d3ets550hjjp1b.amplifyapp.com/Build/baccarat_gzip.framework.js.unityweb",
//   codeUrl: "https://dev373.d3ets550hjjp1b.amplifyapp.com/Build/baccarat_gzip.wasm.unityweb",
// });

// const BlogPage: React.FC = () => {
//   return (
    
//     <Layout>
//       <SEO title="Blog" />
//       <Unity
//         unityContext={unityContext}
//         matchWebGLToCanvasSize={false}
//         style={{ width: "750px", height: "500px", margin: "100px" }}
//     />
//     </Layout>
//   );
// };

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Posts />
    </Layout>
  );
};

export default BlogPage;
