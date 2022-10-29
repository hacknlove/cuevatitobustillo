/* eslint-disable @next/next/no-img-element */
export default function Hero () {
    return (
        <div>

        <section className="section"
          style={{ backgroundImage: "url('/acros-assets/images/headers/header-1-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container">
            <div className="columns">
              <div className="column pt-8-tablet mb-12 mb-0-tablet">
                <small className="is-block has-text-white has-text-weight-semibold is-uppercase mb-2">
                  <span>LA JOYA DEL</span>
                  <span className="has-text-success">ARTE PALEOLÍTICO</span>
                </small>
  
                <p className="has-text-white has-mw-xl title">La cueva «Tito Bustillo» (en Ribadesella, Asturias) alberga
                  pinturas rupestres realizadas entre el 33.000 hasta el 10.000 a. C. algunas de ellas de carácter único y
                  sorprendente.</p>
  
              </div>
              <div className="column">
                <img className="image mx-auto" src="images/http-com-ft-imagepublish-upp-prod-eu-s3-amazonaws.avif" alt=""/>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}