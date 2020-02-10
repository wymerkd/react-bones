import React from "react";

function Header(){
  var headerStyle = {
    backgroundColor: 'lightyellow',
    fontSize: '4rem'
  }
  
  return (
    <div style= {headerStyle}>
      <h1>Clam Queue!</h1>
      <hr></hr>
      <h3>Clam time, dude.</h3>
      <h3>Eat clams, dude.</h3>
      <h3>Hello clam, dude.</h3>
    </div>
  );
}

export default Header;
