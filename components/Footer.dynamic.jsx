import Link from "next/link";

export default function Footer () {
    return (
        <section className="section py-16 has-background-grey-darker">
        <div className="container">
          <div className="columns is-align-items-center mb-0">
            <div className="column is-8 mb-12 mb-0-tablet">
              <ul className="is-flex-tablet">
                <li className="mb-6 mb-0-tablet ml-16-tablet"><Link className="title is-size-6 has-text-white" href="/el-descubrimiento">El
                    descubrimiento</Link></li>
                <li><Link className="title is-size-6 has-text-white ml-16-tablet" href="/como-llegar">Cómo llegar</Link></li>
              </ul>
            </div>
            <div className="column is-4">
  
            </div>
          </div>
  
        </div>
      </section>
    )
}