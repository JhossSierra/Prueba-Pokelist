import React from "react";

const Loading = ({ children, isLoading }) => (

  <div>{isLoading ? <><h3>Loading...</h3>  <div className="loader"></div></>: children}
  
  </div>
);

export default Loading;
