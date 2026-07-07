import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          Fars dilini sıfırdan öyrən
        </Heading>
        <p className={styles.heroSubtitle}>
          Əlifbadan başlayaraq qrammatika və danışıq dilinə qədər — {siteConfig.tagline.toLowerCase()}.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--accent button--lg" to="/dersler/fars-elifbasi-1">
            Əlifbadan başla →
          </Link>
          <Link className="button button--secondary button--lg" to="/dersler">
            Bütün dərslər
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Fars dili dərsləri"
      description="Fars dilini sıfırdan, Azərbaycan dilində öyrənin: əlifba, qrammatika, danışıq dili və oxu mətnləri.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
