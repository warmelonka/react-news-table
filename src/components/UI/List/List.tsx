import styles from './List.module.css';

interface Props {
  data: string[];
  type?: 'default' | 'medium';
}

function List(props: Props) {
  const { data, type } = props;
  const stylesMedium = type === 'medium' && styles.list__medium;

  return (
    <ul className={`${styles.list} ${stylesMedium}`}>
      {data.map((item) => (
        <li key={item}>
          <a>{item}</a>
        </li>
      ))}
    </ul>
  );
}

export default List;
