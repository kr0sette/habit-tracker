import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IdentityCard from './IdentityCard';
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
                <ListItem>
                    <IdentityCard/>
                </ListItem>
                <ListItem>
                    <IdentityCard/>
                </ListItem>
                <ListItem>
                    <IdentityCard/>
                </ListItem>
            </List>      
        </div>

}

export default IdentityList;