import React from 'react';
  
function alkoholittomat () {
  return (
    <div>
      <h1>ALKOHOLITTOMAT JUOMAT</h1>
      <div class="dropdown">
  <button class="dropbtn" onclick="myFunction()">Dropdown
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content" id="myDropdown">
    <a href="#">välivesi</a>
    <a href="#">vesivesi</a>
    <a href="#">vettä</a>
  </div>
  </div> 
    </div>
  );
};
  
export default alkoholittomat;