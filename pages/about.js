import Meta from '../components/Meta';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

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
    </Layout>
);

export default About;
