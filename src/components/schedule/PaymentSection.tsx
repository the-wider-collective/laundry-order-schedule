
import { useState } from "react";
import { SectionTitle } from "./shared/SectionTitle";
import { ConfirmationModal } from "./dialogs/ConfirmationModal";

export const PaymentSection = () => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleConfirmPickup = () => {
    setIsConfirmationOpen(true);
  };

  return (
    <section className="relative">
      <SectionTitle>Payment Method</SectionTitle>

      <div className="text-[#666] text-sm mb-4">
        To confirm your pickup, please add your preferred Payment method. You'll
        be charged after delivery.
      </div>

      <button className="w-full text-white text-center bg-[#92e3ed] mb-8 p-4 rounded-xl font-medium">
        Add payment method
      </button>

      <div className="mb-6 space-y-3">
        <div className="flex items-center gap-3 text-[#666] text-sm">
          <div className="w-5 h-5 rounded-full border-2 border-[#ddd]" />
          <span>Reschedule or cancel anytime.</span>
        </div>
        <div className="flex items-center gap-3 text-[#666] text-sm">
          <div className="w-5 h-5 rounded-full border-2 border-[#ddd]" />
          <span>Satisfaction <span className="text-[#ffbf3d]">guaranteed</span>.</span>
        </div>
        <div className="flex items-center gap-3 text-[#666] text-sm">
          <div className="w-5 h-5 rounded-full border-2 border-[#ddd]" />
          <span>Have questions? <span className="text-[#92e3ed]">Contact us!</span></span>
        </div>
      </div>

      <div className="relative z-10">
        <button 
          onClick={handleConfirmPickup}
          className="w-full text-[#92e3ed] text-center font-medium bg-white p-4 rounded-xl border-2 border-[#92e3ed] hover:bg-[#f8fdfe] transition-colors"
        >
          Confirm Pickup
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-[#ffbf3d] rounded-t-[50%] -z-0 transform translate-y-1/2" />

      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        orderNumber="123456"
      />
    </section>
  );
};
