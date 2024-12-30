import styles from './PageContainer.module.css';
import { Outlet } from 'react-router-dom';

function PageContainer () {

    return <div id="page_container" className={styles.pageContainer}>
        <Outlet />
    </div>

}

export default PageContainer;