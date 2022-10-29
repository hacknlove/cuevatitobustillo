/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

export default function Header() {
  const [isHidden, setIsHidden] = useState(true);

  function close() {
    setIsHidden(true);
  }
  return (
    <section>
      <nav className="navbar py-2 has-background-grey-darker">
        <div className="container px-8-mobile">
          <div className="navbar-brand is-align-items-center">
            <Link className="navbar-item" href="/">
              <span className="px-0 title is-size-4 has-text-white">
                <img
                  src="/acros-assets/cabezadecaballo.png"
                  style={{ maxHeight: 50 }}
                  alt=""
                  width="auto"
                />
              </span>
            </Link>
            <a
              className="navbar-menu-open navbar-burger"
              role="button"
              type="button"
              data-toggle="side-menu"
              onClick={() => setIsHidden(false)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <ul className="navbar-item pl-0">
                <li>
                  <Link
                    className="title is-size-6 has-text-white has-text-weight-normal navbar-item"
                    href="/el-descubrimiento"
                  >
                    El descubrimiento
                  </Link>
                </li>
                <li>
                  <Link
                    className="title is-size-6 has-text-white has-text-weight-normal navbar-item"
                    href="/como-llegar"
                  >
                    Cómo llegar
                  </Link>
                </li>
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
            <img src="acros-assets/icons/mobile-decline.svg" alt="" />
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
            >
              <img
                src="acros-assets/cabezadecaballo.png"
                style={{ maxHeight: 50 }}
                alt=""
                width="auto"
              />
            </Link>
            <ul className="menu-list title is-size-6">
              <li onClick={close}>
                <Link
                  className="py-4 px-6 has-text-grey-darker"
                  href="/el-descubrimiento"
                >
                  El descubrimiento
                </Link>
              </li>
              <li onClick={close}>
                <Link
                  className="py-4 px-6 has-text-grey-darker"
                  href="/como-llegar"
                >
                  Cómo llegar
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
