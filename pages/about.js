import Meta from "../components/Meta";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";

import "../styles/About.module.css";

const About = () => (
  <Layout>
    <Meta title="" description="" />
    <Breadcrumb
      items={[
        {
          path: "/about",
          text: "About",
        },
      ]}
    />
    <section class="hero is-info is-medium is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Cinema 22, <br />
            Simple movie database, with SSR Support.
          </h1>
        </div>
      </div>
    </section>

    <div class="card article">
      <div class="card-content">
        <div class="media">
          <div class="media-center">
            <figure class="image is-128x128">
              <img
                class="is-rounded"
                src="https://media-exp1.licdn.com/dms/image/C5635AQFSyQBra29JQw/profile-framedphoto-shrink_400_400/0?e=1604674800&v=beta&t=mUdC1lYcERsSWtV71K4qcHFJRIQq7PaSxCTYc_9AxVE"
              />
            </figure>
          </div>
        </div>
        <div class="media-content has-text-centered">
          <p class="title article-title">Yoza Wiratama 🔱</p>
          <p class="subtitle is-6 article-subtitle">
            <a href="https://www.linkedin.com/in/yozawiratama/">@yozawiratama</a> on August 27, 1990
          </p>
        </div>
        <div class="content has-text-centered mt-5">
          <p>
            Cinema 22 created with creativity. I create this web to share knowledge about Nextjs.
          </p>
        </div>
      </div>
    </div>
    <br />
    <br />
  </Layout>
);

export default About;
