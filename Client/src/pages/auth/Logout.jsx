/* eslint-disable react/prop-types */
// LogoutDialog.js
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

function LogoutDialog({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // Clear local storage
    onClose(); // Close the dialog

    toast({
      variant: 'black',
      title: 'Logged Out',
      description: 'You have successfully logged out',
    });

    // Set a timeout to reload the page after displaying the toast
    setTimeout(() => {
      window.location.reload(); // Reload the page
    }, 1500); // Adjust the delay as necessary (2000 ms = 2 seconds)
    navigate('/');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogDescription>
          Are you sure you want to logout? You will need to sign in again to
          access your account.
        </DialogDescription>
        <DialogFooter>
          <Button variant='outline' onClick={onClose}>
            Cancel
          </Button>
          <Button variant='destructive' onClick={handleLogout}>
            Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default LogoutDialog;
