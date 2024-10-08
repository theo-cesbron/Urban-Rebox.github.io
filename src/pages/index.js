import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={clsx('bak-title')}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>

          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>


      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Accueil`}
      description="Découvrez le nouveau concept UrbanReBox">
      <HomepageHeader />
      <main className='center_item'>
      </main>
    </Layout>
  );
}
