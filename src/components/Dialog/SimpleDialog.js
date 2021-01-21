import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';


export default function SimpleDialog(props) {
  const { onClose, selectedValue, open, Content } = props;

  const handleClose = () => {
    console.log('dialog');
    onClose(selectedValue);
  };


  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogContent>
        <Content />
      </DialogContent>
      <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Usar
          </Button>
        </DialogActions>
    </Dialog>
  );
}