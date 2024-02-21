import logo from "../../public/images/logo.png";
const Navbar = () => {
  return (
    <header className="h-16 shadow-sm">
      <nav className="flex items-center justify-between w-9/12 mx-auto">
        <a href="/">
          <img src={logo} alt="logo" />
          {/* nav items */}
        </a>
        <div className="flex items-center space-x-5">
          <ul className="items-center hidden space-x-5 sm:flex">
            <a href="/">How it works?</a>
            <a href="/">Features</a>
            <a href="/">About us</a>
          </ul>
          <button className="px-5 py-1 font-medium border rounded border-primary ">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
