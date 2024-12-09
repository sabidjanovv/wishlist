import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={700}
    height={400}
    viewBox="0 0 700 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* Image Placeholder */}
    <rect x="10" y="20" rx="10" ry="10" width="250" height="250" />

    {/* Title Placeholder */}
    <rect x="280" y="20" rx="4" ry="4" width="300" height="20" />

    {/* Description Placeholder */}
    <rect x="280" y="60" rx="4" ry="4" width="400" height="12" />
    <rect x="280" y="80" rx="4" ry="4" width="350" height="12" />

    {/* Price Placeholder */}
    <rect x="280" y="120" rx="4" ry="4" width="100" height="20" />

    {/* Button Placeholder */}
    <rect x="280" y="160" rx="10" ry="10" width="150" height="40" />

    {/* Details Placeholder */}
    <rect x="280" y="220" rx="4" ry="4" width="200" height="12" />
    <rect x="280" y="240" rx="4" ry="4" width="180" height="12" />
    <rect x="280" y="260" rx="4" ry="4" width="220" height="12" />
  </ContentLoader>
);

export default MyLoader;
