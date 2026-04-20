import { MDXProvider } from "@mdx-js/react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const mdxComponents = {
  img: ({ style, ...props }) => (
    <img {...props} style={{ display: "block", width: "100%", ...style }} />
  ),
};

createRoot(document.getElementById("root")).render(
  <MDXProvider components={mdxComponents}>
    <App />
  </MDXProvider>
);
