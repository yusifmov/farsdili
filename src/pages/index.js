import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import {whatsappUrl} from '@site/src/components/BookOrder';

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

const COVERS = [
  {slug: 'qrammatika', title: 'Fars dilinin qrammatikası'},
  {slug: 'oxu', title: 'Fars dilində oxu'},
  {slug: 'soz-ehtiyati', title: 'Fars dilinin söz ehtiyatı'},
];

function HomepageBooks() {
  const coverBase = useBaseUrl('/img/kitablar/');
  return (
    <section className={styles.books}>
      <div className="container">
        <Heading as="h2" className={styles.booksTitle}>Fars dili kitabları</Heading>
        <p className={styles.booksText}>
          “Fars dilinin qrammatikası”, “Fars dilinin söz ehtiyatı” və “Fars dilində oxu” kitabları satışdadır.
          Kitabları WhatsApp vasitəsilə sifariş edə bilərsiniz.
        </p>
        <Link to="/kitablar" className={styles.covers}>
          {COVERS.map((c) => (
            <img key={c.slug} className={styles.cover} src={`${coverBase}${c.slug}.jpg`}
              alt={`“${c.title}” kitabının üz qabığı`} loading="lazy" width="600" height="847" />
          ))}
        </Link>
        <div className={styles.buttons}>
          <a className={`button button--lg ${styles.whatsapp}`} href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp ilə sifariş verin
          </a>
          <Link className="button button--secondary button--lg" to="/kitablar">
            Kitablar haqqında
          </Link>
        </div>
      </div>
    </section>
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
        <HomepageBooks />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
