import React from "react";

function Footer() {
  return (
    <footer>
      Weather App
      {`${new Date().getFullYear()}`}
    </footer>
  );
}

export default Footer;
