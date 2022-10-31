import Link from "next/link";

export default function Footer({ links }) {
  return (
    <section className="section py-16 has-background-grey-darker">
      <div className="container">
        <div className="columns is-align-items-center mb-0">
          <div className="column mb-12 mb-0-tablet">
            <ul className="is-flex-tablet">
              {links &&
                links.map((link) => (
                  <li className="mb-6 mb-0-tablet ml-16-tablet" key={link.href}>
                    <Link
                      className="title is-size-6 has-text-white"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="column is-4"></div>
        </div>
      </div>
    </section>
  );
}
