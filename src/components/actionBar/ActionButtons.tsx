import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import { AddCircle } from '@mui/icons-material';


interface ActionButtonsProps {
    onNewClick: () => void;
}

function ActionButtons ( { onNewClick }: ActionButtonsProps ) {

    return <>
        <ButtonGroup className="actionButtons" onClick={onNewClick}>
            <IconButton color='primary' className="addNewButton">
                <AddCircle/>
            </IconButton>
        </ButtonGroup>
    </>
}

export default ActionButtons;