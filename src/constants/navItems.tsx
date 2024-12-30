import Face from '@mui/icons-material/Face';
import List from '@mui/icons-material/List';
import Analytics from '@mui/icons-material/Analytics';

export const navItems = [
    {
        value: 'identity',
        label: 'Identity',
        icon: <Face />,
        path: '/identity'
    },
    {
        value: 'habits',
        label: 'Habits',
        icon: <List />,
        path: '/'
    },
    {
        value: 'reflections',
        label: 'Reflections',
        icon: <Analytics />,
        path: '/reflections'
    }

]