import React from "react";



const Navbar = (props) => {
  console.log('proprs', props);
  return (
    <div>
      <div>
        <button onClick={props.onClick}>Commons</button>
      </div>
      <div>
        <button>Temple</button>
      </div>
      <div>
      <button>Central Oak</button>
      </div>
    </div>
  );
}

export default Navbar;
