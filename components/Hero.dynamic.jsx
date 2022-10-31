import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
export default function Hero({ title, text }) {
  return (
    <div>
      <section
        className="section"
        style={{
          position: "relative",
        }}
      >
        <Image
          src="/acros-assets/images/headers/header-1-bg.jpg"
          alt="background"
          className="background"
          width={1440}
          height={640}
        />
        <div className="container">
          <div className="columns">
            <div className="column pt-8-tablet mb-12 mb-0-tablet">
              <small className="is-block has-text-white has-text-weight-semibold is-uppercase mb-2">
                {title}
              </small>

              <p className="has-text-white has-mw-xl title hero-title">
                {text}
              </p>
            </div>
            <div className="column">
              <Image
                className="image mx-auto"
                src="/images/http-com-ft-imagepublish-upp-prod-eu-s3-amazonaws.avif"
                alt="Pintura rupestre de una cabeza de caballo"
                width={700}
                height={744}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
