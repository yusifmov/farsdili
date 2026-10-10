import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Book orders go to the author's WhatsApp with a ready-made first message (also used on / and /kitablar).
const WHATSAPP_NUMBER = '994507938033';
export const WHATSAPP_DISPLAY = '+994 50 793 80 33';
const WHATSAPP_TEXT = 'Salam. Fars dili kitablarını sifariş etmək istəyirəm.';
export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

export default function BookOrder({className}) {
  return (
    <aside className={`${styles.box} ${className || ''}`}>
      <div className={styles.title}>Kitab sifarişi</div>
      <p className={styles.text}>
        Fars dilinin qrammatikası, söz ehtiyatı və oxu kitabları.{' '}
        <Link to="/kitablar">Kitablarla tanış olun</Link>
      </p>
      <a
        className={`button button--block ${styles.whatsapp}`}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer">
        WhatsApp ilə sifariş
      </a>
    </aside>
  );
}
