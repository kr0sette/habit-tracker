import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import { AddCircle } from '@mui/icons-material';

function ActionButtons () {
    return <>
        <ButtonGroup className="actionButtons">
            <IconButton color='primary' className="addNewButton">
                <AddCircle/>
            </IconButton>
        </ButtonGroup>
    </>
}

export default ActionButtons;