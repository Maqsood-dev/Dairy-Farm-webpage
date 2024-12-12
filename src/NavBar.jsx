import React from "react";

function NavBar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="title"><h3>MILKY</h3></div>
      <ul className="manu">
        <li>
          <button className="home" onClick={() => scrollToSection("home")}>
            Home
          </button>
        </li>
        <li>
          <button className="About" onClick={() => scrollToSection("about")}>
            About
          </button>
        </li>
        <li>
          <button className="Services" onClick={() => scrollToSection("services")}>
            Services
          </button>
        </li>
        <li>
          <button className="Products" onClick={() => scrollToSection("products")}>
            Products
          </button>
        </li>
        <li>
          <button className="Page" onClick={() => scrollToSection("team")}>
            Team
          </button>
        </li>
        <li>
          <button className="Contact" onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
