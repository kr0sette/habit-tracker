import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import styles from './NewIdentityModal.module.css';

interface NewIdentityModalProps {
    open: boolean,
    onClose: () => void;
}

function NewIdentityModal ({ open = false, onClose }: NewIdentityModalProps) {
    return (
        <Modal open={open} className="newIdentityModal">
            <div className={`${styles.newIdentityModalContent}`}>
                <div className='modalHeader'>
                    <h2>Create New Identity</h2>
                </div>
                <div className='modalBody'>
                    <p>I want to be ...</p>
                    <TextField 
                        variant="standard"
                        sx={{ "& input": { textAlign: "center" } }}
                    />
                </div>
                <div className={`${styles.modalFooter}`}>
                    <Button className="modalCancel" variant="text" onClick={ onClose }>Cancel</Button>
                    <Button className="modalAdd" variant="contained">Add</Button>
                </div>
            </div>
        </Modal>
    )
}

export default NewIdentityModal;