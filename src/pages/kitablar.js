import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './kitablar.module.css';

// Early sign-up goes to the author's WhatsApp with a ready-made first message.
const WHATSAPP_NUMBER = '994507938033';
const WHATSAPP_DISPLAY = '+994 50 793 80 33';
const WHATSAPP_TEXT = 'Salam. Fars dili kitablarına əvvəlcədən yazılmaq istəyirəm.';
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

const BOOKS = [
  {
    no: 'Kitab 1',
    title: 'Fars dilində oxu',
    fa: 'خواندن فارسی',
    points: [
      'Oxuyub yazmağı öyrənmək üçün dərslər',
      'A1-dən B2-yə qədər 46 oxu mətni',
      'Hər mətndə lüğət, anlama sualları, söz çalışmaları və mətnin Tehran danışıq dilində dialoqu',
      'İran və Azərbaycanın ortaq mədəniyyəti haqqında mətnlər: Nizami, Şəhriyar, Novruz, Təbriz, klassik poeziya',
    ],
  },
  {
    no: 'Kitab 2',
    title: 'Fars dili: qrammatika və söz ehtiyatı',
    fa: 'دستور زبان و واژگان',
    points: [
      'Fars dilinin qrammatikasının geniş izahı',
      'Söz ehtiyatını artırmaq üçün mövzular: gündəlik mövzular, mürəkkəb feillər, ortaq sözlər',
      'Hər bölmədə izah, Azərbaycan dili ilə müqayisə, danışıq dili və çalışmalar',
      'Söz cədvəlləri, ən çox işlənən sözlərin öyrənilməsi və düzgün işlədilmə qaydaları',
    ],
  },
];

const FEATURES = [
  {title: 'Azərbaycan dilində izah', text: 'Bütün izahlar və tapşırıqlar Azərbaycan dilindədir; qrammatika Azərbaycan dili ilə müqayisədə izah olunur.'},
  {title: 'Tanış əlifba ilə oxunuş', text: 'Fars sözlərinin oxunuşu Azərbaycan latın əlifbası ilə verilir: کتاب — ketab, شب — şəb.'},
  {title: 'Danışıq dili', text: 'Hər bölmədə yazı dili ilə yanaşı Tehran danışıq dili də göstərilir.'},
  {title: 'Cavablar QR kodla', text: 'Hər bölmənin sonundakı QR kod çalışmaların cavablarına aparır; cavablar bu saytda yerləşir.'},
];

export default function Kitablar() {
  return (
    <Layout
      title="Fars dili kitabları"
      description="Azərbaycan dilli tələbələr üçün iki fars dili kitabı: “Fars dilində oxu” və “Fars dili: qrammatika və söz ehtiyatı”. Əvvəlcədən yazılmaq üçün WhatsApp ilə əlaqə saxlayın.">
      <header className={styles.hero}>
        <div className="container">
          <p className={styles.kicker}>Tezliklə</p>
          <Heading as="h1" className={styles.title}>Fars dili kitabları</Heading>
          <p className={styles.subtitle}>
            Fars dilini öyrənmək üçün nəşrə hazırlanan iki kitabımızla tanış olun. Kitablar asandan mürəkkəbə doğru inkişaf
            etmək üçün seçilmiş mətnlərdən və qrammatika mövzularından ibarətdir.
          </p>
          <div className={styles.buttons}>
            <a className={`button button--lg ${styles.whatsapp}`} href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp ilə əvvəlcədən yazılın
            </a>
            <a className="button button--secondary button--lg" href="#kitablar">Kitablarla tanış olun</a>
          </div>
        </div>
      </header>

      <main>
        <section id="kitablar" className={styles.section}>
          <div className="container">
            <div className={styles.books}>
              {BOOKS.map((b) => (
                <article key={b.no} className={styles.book}>
                  <div className={styles.bookHead}>
                    <span className={styles.bookNo}>{b.no}</span>
                    <span className="fa">{b.fa}</span>
                  </div>
                  <Heading as="h2" className={styles.bookTitle}>{b.title}</Heading>
                  <ul>
                    {b.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            <p className={styles.together}>
              Hər iki kitab bir-birini tamamlayır. Bu kitabları birlikdə işləmək sizin fars dili biliyinizi möhkəmləndirəcək.
            </p>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className="container">
            <div className={styles.features}>
              {FEATURES.map((f) => (
                <div key={f.title} className={styles.feature}>
                  <Heading as="h3">{f.title}</Heading>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={`container ${styles.signup}`}>
            <Heading as="h2">Əvvəlcədən yazılın</Heading>
            <p>
              Kitablar çapdan çıxanda ilk xəbər tutmaq və nüsxənizi əvvəlcədən sifariş etmək üçün WhatsApp vasitəsilə yazın:
              {' '}<a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><b>{WHATSAPP_DISPLAY}</b></a>.
            </p>
            <a className={`button button--lg ${styles.whatsapp}`} href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp-da yazın
            </a>
            <p className={styles.small}>
              Bu vaxta qədər saytdakı <Link to="/dersler">pulsuz dərslərlə</Link> başlaya bilərsiniz.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
