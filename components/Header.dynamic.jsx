/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";

export default function Header({ links }) {
  const [isHidden, setIsHidden] = useState(true);

  function close() {
    setIsHidden(true);
  }
  return (
    <section>
      <nav className="navbar py-2 has-background-grey-darker">
        <div className="container px-8-mobile">
          <div className="navbar-brand is-align-items-center">
            <Link className="navbar-item" href="/" title="home">
              <span className="px-0 title is-size-4 has-text-white">
                <Image
                  src="/acros-assets/cabezadecaballo.png"
                  style={{ maxHeight: 50, width: "auto" }}
                  width={500}
                  height={712}
                  alt="Logo, cabeza de caballo"
                />
              </span>
            </Link>
            <a
              className="navbar-menu-open navbar-burger"
              role="button"
              type="button"
              data-toggle="side-menu"
              onClick={() => setIsHidden(false)}
              title="menu"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <ul className="navbar-item pl-0">
                {links &&
                  links.map((link) => (
                    <li key={link.href}>
                      <Link
                        className="title is-size-6 has-text-white has-text-weight-normal navbar-item"
                        href={link.href}
                        title={link.label}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={clsx(
          "navbar-side is-fixed is-top-0 is-left-0 has-background-blur",
          { "is-hidden": isHidden }
        )}
        style={{ zIndex: 50, width: "100%", height: "100%" }}
      >
        <div className="is-absolute" style={{ zIndex: -1 }}></div>
        <div className="container is-relative">
          <div
            className="navbar-close is-absolute is-right-0 mt-6 mr-6"
            onClick={close}
          >
            <img src="acros-assets/icons/mobile-decline.svg" alt="close menu" />
          </div>
        </div>
        <aside
          className="py-6 px-6 pb-8 has-background-white is-flex is-flex-direction-column is-justify-content-space-between"
          style={{ height: "100%", width: 288, overflowY: "auto" }}
        >
          <div className="mb-8">
            <Link
              href="/"
              className="navbar-item title is-size-4 has-text-dark pl-4 mb-5"
              title="home"
            >
              <img
                src="acros-assets/cabezadecaballo.png"
                style={{ maxHeight: 50 }}
                alt=""
                width="auto"
              />
            </Link>
            <ul className="menu-list title is-size-6">
              {links &&
                links.map((link) => (
                  <li onClick={close} key={link.href}>
                    <Link
                      className="py-4 px-6 has-text-grey-darker"
                      href={link.href}
                      title={link.label}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
