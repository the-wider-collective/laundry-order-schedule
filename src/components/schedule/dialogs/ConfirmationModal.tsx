
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderNumber: string;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  orderNumber,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden bg-[#92e3ed] border-0">
        <div className="relative">
          {/* Bubble pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-[#83d2db] opacity-50" />
            <div className="absolute top-12 -right-4 w-16 h-16 rounded-full bg-[#83d2db] opacity-50" />
            <div className="absolute top-32 left-8 w-8 h-8 rounded-full bg-[#83d2db] opacity-50" />
          </div>

          {/* Content */}
          <div className="px-8 pt-16 pb-8 text-center relative z-10">
            <DialogTitle className="sr-only">Order Confirmation</DialogTitle>
            <div className="w-24 h-24 rounded-full bg-[#ffbf3d] mx-auto mb-6 overflow-hidden">
              <img
                src="/lovable-uploads/f80607ca-1261-44f8-ae81-2dffd4f99949.png"
                alt="Success"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-white text-3xl font-semibold mb-2">Thank you!</h2>
            <p className="text-white opacity-90 mb-6">Your pickup has been confirmed!</p>
            
            <div className="mb-6">
              <p className="text-white opacity-90 text-sm mb-2">Your Order Number</p>
              <div className="bg-[#ffbf3d] text-white text-2xl font-semibold py-3 px-6 rounded-xl">
                {orderNumber}
              </div>
            </div>

            <button 
              onClick={onClose}
              className="w-full bg-white/20 text-white py-4 px-6 rounded-xl hover:bg-white/30 transition-colors"
            >
              Track order
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
