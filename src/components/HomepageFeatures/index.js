import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    icon: 'ا ب پ',
    title: 'Əlifba və oxu',
    to: '/dersler/fars-elifbasi-1',
    description: (
      <>
        Fars-ərəb əlifbasını hərf-hərf öyrənin, sözlərin necə oxunduğunu və
        yazıldığını mənimsəyin.
      </>
    ),
  },
  {
    icon: '﷼',
    title: 'Qrammatika',
    to: '/dersler/feiller-kecmis-zaman',
    description: (
      <>
        Feillərin zamanları, izafə, qoşmalar və cümlə quruluşu — hamısı sadə
        izahlar və cədvəllərlə.
      </>
    ),
  },
  {
    icon: '💬',
    title: 'Danışıq dili',
    to: '/dersler/fars-danisiq-dili-1',
    description: (
      <>
        Gündəlik danışıqda işlənən ifadələr və canlı fars dilinin xüsusiyyətləri
        ilə tanış olun.
      </>
    ),
  },
];

function Feature({icon, title, description, to}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={to} className={styles.card}>
        <div className={styles.cardIcon} aria-hidden="true">
          {icon}
        </div>
        <Heading as="h3" className={styles.cardTitle}>
          {title}
        </Heading>
        <p className={styles.cardText}>{description}</p>
        <span className={styles.cardLink}>Dərslərə keç →</span>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Nə öyrənəcəksiniz?
        </Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
