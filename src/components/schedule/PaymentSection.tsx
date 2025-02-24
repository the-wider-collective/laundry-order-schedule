import { SectionTitle } from "./shared/SectionTitle";

export const PaymentSection = () => {
  return (
    <section>
      <SectionTitle>Payment Method</SectionTitle>

      <div className="text-[#666] text-sm mb-4">
        To confirm your pickup, please add your preferred Payment method. You'll
        be charged after delivery.
      </div>

      <button className="w-full text-white text-center bg-[#00bcd4] mb-6 p-4 rounded-lg max-sm:p-3.5">
        Add payment method
      </button>

      <div className="mb-6">
        <div className="flex items-center gap-2 text-[#666] text-sm mb-2">
          <i className="ti ti-calendar" />
          <span>Reschedule or cancel anytime.</span>
        </div>
        <div className="flex items-center gap-2 text-[#666] text-sm mb-2">
          <i className="ti ti-thumb-up" />
          <span>Satisfaction guaranteed.</span>
        </div>
        <div className="flex items-center gap-2 text-[#666] text-sm mb-2">
          <i className="ti ti-help" />
          <span>Have questions? Contact us!</span>
        </div>
      </div>

      <button className="w-full text-white text-center font-medium bg-[#00bcd4] p-4 rounded-lg max-sm:p-3.5">
        Confirm Pickup
      </button>
    </section>
  );
};
