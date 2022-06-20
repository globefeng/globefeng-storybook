import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, Button, DialogActions } from '@material-ui/core';

const DeleteDialog = ({node, onCancel, onOk}) => {
    return (
        <Dialog
            maxWidth={'sm'}
            fullWidth={true}
            open={node !== null}
        >
            <DialogTitle>Edit</DialogTitle>
            <DialogContent dividers>
                <div>Do you want to delete this node?</div>
                {node &&<h4>{node.path}</h4>}
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>Cancel</Button>
                <Button onClick={onOk}>Ok</Button>
            </DialogActions>
        </Dialog>
    )
}

DeleteDialog.propTypes = {
    node: PropTypes.shape(),
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
  };
  
export default DeleteDialog;
