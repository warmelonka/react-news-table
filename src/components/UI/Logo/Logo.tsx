import Icon from '../Icon/Icon.tsx';
import styles from './Logo.module.css';

function Logo() {
  return (
    <a href="#" className={styles.logo}>
      <Icon id="logo" width="150" height="46" />
    </a>
  );
}

export default Logo;
