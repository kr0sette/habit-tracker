import styles from './PageContainer.module.css';
import Habits from './HabitsPage';

function PageContainer () {

    return <div id="page_container" className={styles.pageContainer}>
        <Habits />
    </div>

}

export default PageContainer;