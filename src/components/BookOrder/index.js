import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// The books are sold only in the Android app "Fars dili kitabları" on Google Play (also used on / and /kitablar).
// Set PLAY_LIVE to true once the app is published: the buttons then link to its Play page.
export const PLAY_LIVE = false;
export const PLAY_URL = 'https://play.google.com/store/apps/details?id=az.farsdili.kitablar';

/** "Google Play-də yükləyin" (a link) once the app is live; until then a plain "Tezliklə Google Play-də" label. */
export function PlayButton({size, block, className}) {
  const cls = ['button', size === 'lg' ? 'button--lg' : '', block ? 'button--block' : '', styles.play, className || '']
    .filter(Boolean).join(' ');
  if (!PLAY_LIVE) {
    return <span className={`${cls} ${styles.soon}`} aria-disabled="true">Tezliklə Google Play-də</span>;
  }
  return (
    <a className={cls} href={PLAY_URL} target="_blank" rel="noopener noreferrer">
      Google Play-də yükləyin
    </a>
  );
}

export default function BookOrder({className}) {
  return (
    <aside className={`${styles.box} ${className || ''}`}>
      <div className={styles.title}>Fars dili kitabları</div>
      <p className={styles.text}>
        Qrammatika, söz ehtiyatı və oxu kitabları Android tətbiqində.{' '}
        <Link to="/kitablar">Kitablarla tanış olun</Link>
      </p>
      <PlayButton block />
    </aside>
  );
}
