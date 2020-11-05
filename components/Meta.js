import Head from "next/head";

const Meta = ({ title, description }) => (
  <Head>
    <meta charSet="utf-8"></meta>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta
      name="og:description"
      property="og:description"
      content={description}
    />
    <meta property="og:site_name" content={title} />
    <meta property="og:url" content="" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content="" />
    <meta name="twitter:creator" content="Simplo" />
    <link rel="icon" type="image/png" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/favicon.ico" />
    <link rel="stylesheet" href="" />
    <meta property="og:image" content="" />
    <meta name="twitter:image" content="" />
    <link rel="canonical" href="" />

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  </Head>
);

export default Meta;
