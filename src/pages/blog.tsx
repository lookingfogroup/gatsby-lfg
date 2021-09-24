import React from 'react';
import Unity, { UnityContext } from "react-unity-webgl";

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Posts from 'components/Posts';


const unityContext = new UnityContext({
  loaderUrl: "https://dev.d2kb8d5702060z.amplifyapp.com/Build/pfdg.loader.js",
  dataUrl: "https://dev.d2kb8d5702060z.amplifyapp.com/Build/pfdg.data",
  frameworkUrl: "https://dev.d2kb8d5702060z.amplifyapp.com/Build/pfdg.framework.js",
  codeUrl: "https://dev.d2kb8d5702060z.amplifyapp.com/Build/pfdg.wasm",
});

const BlogPage: React.FC = () => {
  return (
    
    <Layout>
      <SEO title="Blog" />
      <Unity
        unityContext={unityContext}
        matchWebGLToCanvasSize={false}
        style={{ width: "500px", height: "500px" }}
    />
    </Layout>
  );
};

export default BlogPage;
