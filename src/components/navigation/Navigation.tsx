import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import styles from './navigation.module.css';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '@/constants/navItems';



function Navigation () {
    const { pathname } = useLocation();
    const activeTab = navItems.find( item => item.path === pathname)?.value || '';

    return <>
        <div id="navigation" className={styles.navigation}>
            <BottomNavigation value={activeTab}>
                {
                    navItems.map(({value, label , icon, path}) => (
                            <BottomNavigationAction 
                                className="navItem"
                                key={value}
                                value={value}
                                label={label}
                                icon={icon}
                                component={Link}
                                to={path}
                            />
                    ))
                }

            </BottomNavigation>
        </div>
    </>
}

export default Navigation