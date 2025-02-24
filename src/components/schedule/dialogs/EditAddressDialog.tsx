
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface EditAddressDialogProps {
  isOpen: boolean;
  onClose: () => void;
  address?: {
    type: "home" | "office";
    title: string;
  };
  isNew?: boolean;
}

export const EditAddressDialog: React.FC<EditAddressDialogProps> = ({
  isOpen,
  onClose,
  address,
  isNew = false,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-[#333]">
            {isNew ? "Add New Address" : `Edit ${address?.title}`}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#666]">Address Type</label>
            <div className="flex gap-4">
              <button
                className={`flex items-center justify-center px-4 py-2 rounded-xl border ${
                  address?.type === "home"
                    ? "border-[#92e3ed] text-[#92e3ed]"
                    : "border-[#e0e0e0] text-[#666]"
                }`}
              >
                Home
              </button>
              <button
                className={`flex items-center justify-center px-4 py-2 rounded-xl border ${
                  address?.type === "office"
                    ? "border-[#92e3ed] text-[#92e3ed]"
                    : "border-[#e0e0e0] text-[#666]"
                }`}
              >
                Office
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#666]">Street Address</label>
            <input
              type="text"
              className="w-full p-4 rounded-xl border border-[#e0e0e0] focus:border-[#92e3ed] outline-none"
              placeholder="Enter your street address"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#666]">City</label>
              <input
                type="text"
                className="w-full p-4 rounded-xl border border-[#e0e0e0] focus:border-[#92e3ed] outline-none"
                placeholder="City"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#666]">ZIP Code</label>
              <input
                type="text"
                className="w-full p-4 rounded-xl border border-[#e0e0e0] focus:border-[#92e3ed] outline-none"
                placeholder="ZIP Code"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl border border-[#e0e0e0] text-[#666] hover:bg-gray-50"
          >
            Cancel
          </button>
          <button className="px-6 py-3 rounded-xl bg-[#92e3ed] text-white hover:bg-[#83d2db]">
            {isNew ? "Add Address" : "Save Changes"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
