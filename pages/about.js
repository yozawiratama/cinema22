import Meta from '../components/Meta';
import Layout from '../components/Layout';
import Breadcumb from '../components/Breadcumb';

const About = () => (
    <Layout>
      <Meta title="" description="" />
      <Breadcumb
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
