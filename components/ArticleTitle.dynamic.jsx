export default function ArticleTitle({ title, author }) {
  return (
    <section className="section py-12">
      <div className="container">
        <h1 className="title has-mw-3xl">{title}</h1>
        <div className="columns is-vcentered is-mobile">
          <div className="column is-narrow">
            <div className="is-flex is-align-items-center">
              <small className="has-text-weight-medium">{author}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
