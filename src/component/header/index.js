import "./index.css";

import logo from "./logo.svg";

export default function Header() {
  return (
    <header className="header">
      {/* {logo} */}
      <img src={logo} alt="logo" height={32}></img>
    </header>
  );
}
