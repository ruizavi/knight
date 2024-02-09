import React from "react";
import "./css/loader.css";

const Loader = React.forwardRef<HTMLDivElement, object>((props, ref) => {
  return (
    <div className="container" ref={ref} {...props}>
      <div className="rose-petals">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="sparkles">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
});

export { Loader };
