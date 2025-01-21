import React from "react";

interface GoogleMapProps {
  src: string;
  width?: string;
  height?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  src,
  width = "100%",
  height = "450px",
}) => {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
    />
  );
};

export default GoogleMap;
