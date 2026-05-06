import { MDXProvider } from "@mdx-js/react";
import { Box, Link, Typography } from "@mui/material";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import MdxImage from "./Components/MdxImage.jsx";
import "./index.css";

const mdxComponents = {
  h1: (props) => <Typography variant="h3" component="h1" sx={{ mt: 0, mb: 2, fontWeight: 700 }} {...props} />,
  h2: (props) => <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2, fontWeight: 700 }} {...props} />,
  h3: (props) => <Typography variant="h5" component="h3" sx={{ mt: 3, mb: 2, fontWeight: 700 }} {...props} />,
  p: (props) => <Typography component="p" sx={{ mb: 2, lineHeight: 1.8, fontSize: { xs: "1rem", sm: "1.05rem" } }} {...props} />,
  ul: (props) => <Box component="ul" sx={{ pl: 3, mb: 2, lineHeight: 1.8 }} {...props} />,
  ol: (props) => <Box component="ol" sx={{ pl: 3, mb: 2, lineHeight: 1.8 }} {...props} />,
  li: (props) => <Box component="li" sx={{ mb: 0.75 }} {...props} />,
  a: (props) => <Link {...props} sx={{ color: "#1f3f5b", textUnderlineOffset: "0.15rem" }} />,
  img: (props) => <MdxImage {...props} />,
};

createRoot(document.getElementById("root")).render(
  <MDXProvider components={mdxComponents}>
    <App />
  </MDXProvider>
);
