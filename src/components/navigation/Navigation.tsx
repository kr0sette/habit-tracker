import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Face from '@mui/icons-material/Face';
import List from '@mui/icons-material/List';
import Analytics from '@mui/icons-material/Analytics';
import styles from './navigation.module.css';

interface NavigationProps {
    activeTab: string,
    onSelectTab: (item: string) => void
}


function Navigation ({activeTab, onSelectTab}: NavigationProps) {
    const navItems = [
        {
            value: 'identity',
            label: 'Identity',
            icon: <Face />
        },
        {
            value: 'habits',
            label: 'Habits',
            icon: <List />
        },
        {
            value: 'reflections',
            label: 'Reflections',
            icon: <Analytics />
        }

    ]

    const handleChange = (_event: React.SyntheticEvent, newValue: string)=> { 
        onSelectTab(newValue);
    }



    return <>
    <div id="navigation" className={styles.navigation}>
        <BottomNavigation value={activeTab} onChange={handleChange}>
            {
                navItems.map(({value, label ,icon}) => (
                    <BottomNavigationAction 
                        className="navItem"
                        key={value}
                        value={value}
                        label={label}
                        icon={icon}
                    />
                ))
            }

        </BottomNavigation>
    </div>
    </>
}

export default Navigation