import Logo from '../UI/Logo/Logo.tsx';
import List from '../UI/List/List.tsx';
import Icon from '../UI/Icon/Icon.tsx';
import Button from '../UI/Button/Button.tsx';
import Socials from '../Socials/Socials.tsx';
import styles from './Footer.module.css';

const sections = [
  'Криптовалюта',
  'Фондовый рынок',
  'P2P',
  'Earn',
  'Лаунчпад',
  'Академия',
];

const sectionsInfo = [
  'О нас',
  'Партнёрская программа',
  'Биржевые новости',
  'Экономический календарь',
];

const additionalInfo = [
  'AML/KYC процедуры',
  'Использование файлов Cookies',
  'Политика конфиденциальности',
  'Условия пользования',
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
      <List data={sections} />
      <List data={sectionsInfo} />
      <List data={additionalInfo} type="medium" />

      <div className={styles.footer_description}>
        <p>
          WIXI - Криптобиржа. Покупка, продажа криптовалют. Предупреждение о
          рисках, 18+
        </p>
        <br />
        <span>Все права защищены, 2024</span>
      </div>

      <div className={styles.footer_buttons}>
        <Button className={styles.footer_languages}>
          <p className={styles.footer_language}>Ру</p>
          <Icon id="arrow" width="8" height="5" />
        </Button>

        <Socials />
      </div>

      <Button className={styles.footer_application}>Заявка на листинг</Button>
    </footer>
  );
}

export default Footer;
