import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import styles from './identityList.module.css'

interface IdentityListProps {
    identityCount: number
}


function IdentityList ({identityCount}:IdentityListProps) {
    if(identityCount === 0 ) {
        return <div className={`${styles.identityList} empty`}><div className="emptyMsg">You have no identities defined.  Create a new one to get started.</div></div>
    }

    return <div className={styles.identityList}>
            <List>
                <ListItem>Test 1</ListItem>
                <ListItem>Test 2</ListItem>
                <ListItem>Test 3</ListItem>
            </List>      
        </div>

}

export default IdentityList;