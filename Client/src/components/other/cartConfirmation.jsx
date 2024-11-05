/* eslint-disable react/prop-types */
// ConfirmAddToCart.js
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogFooter,
  } from '@/components/ui/dialog';
  import { Button } from '@/components/ui/button';
  
  function ConfirmAddToCart({ isOpen, onClose, onAdd }) {
  
   
  
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogTitle>Add to Cart</DialogTitle>
          <DialogDescription>
            Add the Item to the Cart?
          </DialogDescription>
          <DialogFooter>
            <Button variant='outline' onClick={onClose}>
              Cancel
            </Button>
            <Button variant='' onClick={onAdd}>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
  
  export default ConfirmAddToCart;
  