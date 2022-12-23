import React from "react";

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div style={{ display: "flex", width: "100%", paddingTop: "60px", justifyContent: "center" }}>
      <div style={{ width: "75%" }}>{children}</div>
    </div>
  );
};
