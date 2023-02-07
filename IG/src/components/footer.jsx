import React from "react";

function Footer() {
  return (
    <footer className="footer items-center bg-purple-700 p-4  text-neutral-content">
      <div className="items-center grid-flow-col">
        <a href="https://lapage.website">
          <img src="./public/web.svg" height={20} width={20} className="" />
        </a>
        <p>Copyright © 2023 - Tim Keren Lapage</p>
      </div>

      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end"></div>
    </footer>
  );
}

export default Footer;
