import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './identityList.module.css'


function IdentityCard () {
    return (
        <Card variant="outlined" sx={{width: '100%'}}>
            <CardContent>
                <h3 className={styles.cardTitle} >Identity Name</h3>
                Identity Description
            </CardContent>
        </Card>
    )
}

export default IdentityCard;