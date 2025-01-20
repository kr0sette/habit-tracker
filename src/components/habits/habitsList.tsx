import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import styles from './habitsList.module.css';

interface HabitsListProps {
    identityCount: number,
    habitCount: number
}


function HabitsList ({identityCount}:HabitsListProps) {


    if(identityCount === 0 ) {
        return <div className={`${styles.habitsList} empty`}><div className="emptyMsg">You have no identities defined.  Create a new identity in order to create a new habit</div></div>
    }

    return <div className={styles.habitsList}>
            <List>
                <ListItem>Test 1</ListItem>
                <ListItem>Test 2</ListItem>
                <ListItem>Test 3</ListItem>
            </List>      
        </div>

}

export default HabitsList;