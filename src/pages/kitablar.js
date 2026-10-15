import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {PlayButton} from '@site/src/components/BookOrder';
import styles from './kitablar.module.css';

const BOOKS = [
  {
    no: 'Qrammatika',
    cover: 'qrammatika.jpg',
    title: 'Fars dilinin qrammatikası',
    fa: 'دستور زبان فارسی',
    points: [
      'Fars dilinin qrammatikasının geniş izahı: 94 bölmə, A1-dən B2-yə qədər',
      'Hər bölmədə izah, Azərbaycan dili ilə müqayisə, danışıq dili və çalışmalar',
      'Yazı və tələffüzdən başlayaraq feil zamanlarına, mürəkkəb cümlələrə və söz yaradıcılığına qədər',
      'Tehran danışıq dilinə ayrıca fəsil',
    ],
  },
  {
    no: 'Oxu',
    cover: 'oxu.jpg',
    title: 'Fars dilində oxu',
    fa: 'خواندن فارسی',
    points: [
      'Oxuyub yazmağı öyrənmək üçün dərslər',
      'A1-dən B2-yə qədər 52 oxu mətni',
      'Hər mətndə lüğət, anlama sualları, söz çalışmaları və mətnin Tehran danışıq dilində dialoqu',
      'İran və Azərbaycanın ortaq mədəniyyəti haqqında mətnlər: Nizami, Şəhriyar, Novruz, Təbriz, klassik poeziya',
    ],
  },
  {
    no: 'Söz ehtiyatı',
    cover: 'soz-ehtiyati.jpg',
    title: 'Fars dilinin söz ehtiyatı',
    fa: 'واژگان فارسی',
    points: [
      'Söz ehtiyatını artırmaq üçün 49 mövzu: gündəlik həyat, səyahət, sənədlər, sərhəd və gömrük',
      'Mürəkkəb feillər, atalar sözləri və idiomlar',
      'Azərbaycan dili ilə ortaq sözlər və “yalançı dostlar”',
      'Söz cədvəlləri, ən çox işlənən sözlərin öyrənilməsi və düzgün işlədilmə qaydaları',
    ],
  },
];

const FEATURES = [
  {title: 'Azərbaycan dilində izah', text: 'Bütün izahlar və tapşırıqlar Azərbaycan dilindədir; qrammatika Azərbaycan dili ilə müqayisədə izah olunur.'},
  {title: 'Tanış əlifba ilə oxunuş', text: 'Fars sözlərinin oxunuşu Azərbaycan latın əlifbası ilə verilir: کتاب — ketab, شب — şəb.'},
  {title: 'Danışıq dili', text: 'Hər bölmədə yazı dili ilə yanaşı Tehran danışıq dili də göstərilir.'},
  {title: 'Cavablar saytda', text: 'Hər bölmənin sonunda çalışmaların cavablarına keçid var; cavablar bu saytda yerləşir.'},
];

export default function Kitablar() {
  const coverBase = useBaseUrl('/img/kitablar/');
  return (
    <Layout
      title="Fars dili kitabları"
      description="Azərbaycan dilli tələbələr üçün üç fars dili kitabı: “Fars dilinin qrammatikası”, “Fars dilinin söz ehtiyatı” və “Fars dilində oxu”. Kitablar Google Play-dəki “Fars dili kitabları” Android tətbiqində olacaq.">
      <header className={styles.hero}>
        <div className="container">
          <p className={styles.kicker}>Tezliklə Google Play-də</p>
          <Heading as="h1" className={styles.title}>Fars dili kitabları</Heading>
          <p className={styles.subtitle}>
            Fars dilini öyrənmək üçün hazırladığımız üç kitabla tanış olun: qrammatika, söz ehtiyatı və oxu. Kitablar asandan
            mürəkkəbə doğru inkişaf etmək üçün seçilmiş qrammatika mövzularından, söz mövzularından və mətnlərdən ibarətdir.
          </p>
          <div className={styles.buttons}>
            <PlayButton size="lg" />
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
                  <img className={styles.cover} src={coverBase + b.cover} alt={`“${b.title}” kitabının üz qabığı`} loading="lazy" width="600" height="847" />
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
              Üç kitab bir-birini tamamlayır. Bu kitabları birlikdə işləmək sizin fars dili biliyinizi möhkəmləndirəcək.
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
            <Heading as="h2">Google Play-də “Fars dili kitabları” tətbiqi</Heading>
            <p>
              Üç kitab Android telefonlar üçün bir tətbiqdə toplanır. Hər kitabın mündəricatı və hər fəslin ilk bir-iki
              bölməsi pulsuz oxunur; kitabları ayrı-ayrılıqda və ya üçünü birlikdə endirimli qiymətlə almaq olar.
            </p>
            <ul className={styles.appPoints}>
              <li>Alış Google hesabınıza bağlıdır: tətbiqi yenidən yükləsəniz və ya başqa telefonda eyni hesabla daxil olsanız, kitablar yenə açılır.</li>
              <li>Kitablar internetsiz oxunur; səhifələr A4 kitab görünüşündə və ya telefonun eninə uyğun axıcı mətn kimi göstərilir.</li>
              <li>Hər bölmənin irəliləyişi görünür; bölmələri ulduzla işarələmək və onlara qeyd yazmaq olar.</li>
            </ul>
            <PlayButton size="lg" />
            <p className={styles.small}>
              Kitablarla yanaşı saytdakı <Link to="/dersler">pulsuz dərslərdən</Link> də istifadə edə bilərsiniz.
              Tətbiqin <Link to="/mexfilik-siyaseti">məxfilik siyasəti</Link>.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
