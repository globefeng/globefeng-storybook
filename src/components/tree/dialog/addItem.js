import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, Button } from '@material-ui/core';

const AddItemDialog = (props) => {
    return (
        <Dialog maxWidth="md" fullWidth={true} open={props.open} aris-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add Fracture Data</DialogTitle>
            <DialogContent>
                This is a test.
                <Button style={{marginRight: '10px', textTransform:'none'}}  size="medium" variant="contained" onClick={() => props.handleDialogClose()} >Cancel</Button>
            </DialogContent>
        </Dialog>
    )
}

AddItemDialog.propTypes = {
    open: PropTypes.bool,
    handleDialogClose: PropTypes.func,
  };
  
export default AddItemDialog;
