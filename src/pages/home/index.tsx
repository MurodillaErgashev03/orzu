import { Link } from 'react-router-dom';
import { CustomButton } from 'src/components/common';
import styles from './home.module.scss';

function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Home</h1>
      <Link to="/help">
        <CustomButton type="primary">Go to help page</CustomButton>
      </Link>
    </div>
  );
}

export default Home;
