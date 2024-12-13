import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableNews from './TableNews/TableNews.tsx';
import styles from './News.module.css';

const StyledCard = styled(Card)(() => ({
  maxWidth: 1360,
  margin: '0 auto',
  backgroundColor: '#141414',
  borderRadius: '16px',
}));

function News() {
  return (
    <StyledCard>
      <h1 className={styles.news_title}>Новости рынков</h1>

      <TableNews />
    </StyledCard>
  );
}

export default News;
