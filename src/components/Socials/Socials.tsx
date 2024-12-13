import Button from '../UI/Button/Button.tsx';
import Icon from '../UI/Icon/Icon.tsx';
import styles from './Socials.module.css';

function Socials({ className }: { className?: string }) {
  return (
    <div className={`${styles.socials} ${className}`}>
      <Button className={styles.socials_social}>
        <Icon id="telegram" width="38" height="31" />
      </Button>
      <Button className={styles.socials_social}>
        <Icon id="youtube" width="25" height="29" />
      </Button>
      <Button className={styles.socials_social}>
        <Icon id="twitter" width="38" height="35" />
      </Button>
    </div>
  );
}

export default Socials;
