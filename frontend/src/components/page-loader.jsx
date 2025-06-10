import React from "react";
const PageLoader = () => {
  return (
    <div className="h-main-height flex items-center justify-center">
      <span className="loader -translate-y-full"/>
      <span className="fixed inset-0 bg-black/10"/>
    </div>
  );
};

export default PageLoader;
