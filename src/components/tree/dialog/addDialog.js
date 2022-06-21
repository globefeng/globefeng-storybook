import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, Button, DialogActions } from '@material-ui/core';
import TextField from '@mui/material/TextField';

const AddDialog = ({node, onClose, onAdd}) => {
    const [text, setText] = useState('');

    return (
        <Dialog maxWidth={'sm'} fullWidth={true} open={node !== null}>
            <DialogTitle>Add</DialogTitle>
            <DialogContent dividers>
                {node && 
                    <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    />
                }
            </DialogContent>
            <DialogActions>
                <Button onClick={() => { setText(''); onClose(); }}>Cancel</Button>
                {text.length > 0 && <Button onClick={() => { onAdd(text); setText(''); }}>Add</Button>}
                {text.length == 0 && <Button disabled>Add</Button>}
            </DialogActions>
        </Dialog>
    )
}

AddDialog.propTypes = {
    node: PropTypes.shape(),
    onClose: PropTypes.func,
    onAdd: PropTypes.func
  };
  
export default AddDialog;
