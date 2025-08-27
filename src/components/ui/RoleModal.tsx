
import React from 'react';
import { Dialog, DialogContent, DialogHeader } from './dialog';
import { DialogTitle } from '@radix-ui/react-dialog';

interface RoleModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (role: 'USER' | 'AGENT') => void;
}

const RoleModal: React.FC<RoleModalProps> = ({ open, onClose, onSelect }) => {
 
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Select Role</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => {
              onSelect('USER');
            }}
           
            className="group relative z-10 w-full cursor-pointer overflow-hidden rounded-full border-2 border-purple-500 bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 px-6 py-1.5 font-sans text-xs font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 sm:px-8 sm:py-2 sm:text-sm md:px-10 md:py-2.5 md:text-base"
          >
            <span className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>

            <span className="relative">Continue as User</span>
          </button>
          <button
            onClick={() => {
              onSelect('AGENT');
            }}
           
            className="group relative z-10 w-full cursor-pointer overflow-hidden rounded-full border-2 border-purple-500 bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 px-6 py-1.5 font-sans text-xs font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 sm:px-8 sm:py-2 sm:text-sm md:px-10 md:py-2.5 md:text-base"
          >
            <span className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>

            <span className="relative"> Continue as Agent</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RoleModal;
