import { useState } from 'react';
import Logo from '../UI/Logo/Logo.tsx';
import { Fires, navigationItems } from './navigationItems.ts';
import styles from './Navigation.module.css';

function Navigation() {
  const [selectItem, _] = useState(1);

  return (
    <nav className={styles.navigation}>
      <Logo />

      <ul className={styles.navigation_list}>
        {navigationItems.map((item) => {
          const { id, label, link, soon, fire } = item;
          const isSelected = selectItem === item.id;
          const selectedClass = isSelected
            ? styles.navigation_link__selected
            : '';

          return (
            <li key={id} className={styles.navigation_item}>
              {soon ? (
                <>
                  <p className={styles.navigation_label}>{label}</p>
                  <span className={styles.navigation_soon}>Soon</span>
                </>
              ) : (
                <a
                  href={link}
                  className={`${styles.navigation_link} ${selectedClass}`}
                >
                  {label}
                  {fire && (
                    <span
                      className={`${styles.navigation_fire} ${fire === Fires.purple && styles.navigation_fire__purple}`}
                    >
                      &#128293;
                    </span>
                  )}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
