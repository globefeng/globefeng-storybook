import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, Button, DialogActions } from '@material-ui/core';
import TextField from '@mui/material/TextField';

const EditDialog = ({node, onClose}) => {
    const [text, setText] = useState('');

    useEffect(() => {
        if (node) setText(node.path)
    }, [node]);

    return (
        <Dialog maxWidth={'sm'} fullWidth={true} open={node !== null}>
            <DialogTitle>Edit</DialogTitle>
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
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onClose}>Ok</Button>
            </DialogActions>
        </Dialog>
    )
}

EditDialog.propTypes = {
    node: PropTypes.shape(),
    onClose: PropTypes.func,
  };
  
export default EditDialog;
