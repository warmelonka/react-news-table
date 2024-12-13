import Navigation from '../Navigation/Navigation.tsx';
import Icon from '../UI/Icon/Icon.tsx';
import Button from '../UI/Button/Button.tsx';
import styles from './Header.module.css';

function Header({ className }: { className?: string }) {
  return (
    <header className={`${styles.header} ${className}`}>
      <Navigation />

      <div className={styles.header_buttons}>
        <Button
          type="button"
          className={styles.header_language}
          aria-label="Выбрать язык"
        >
          <Icon id="languages" width="22" height="20" />
        </Button>
        <Button className={styles.header_topUp}>Пополнить</Button>
        <Button className={styles.header_user}>
          <Icon id="user" width="36" height="36" />
        </Button>
      </div>
    </header>
  );
}

export default Header;
