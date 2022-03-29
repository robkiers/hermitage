const Navbar = (props: any) => {
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
