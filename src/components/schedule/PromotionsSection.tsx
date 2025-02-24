
import { SectionTitle } from "./shared/SectionTitle";

export const PromotionsSection = () => {
  return (
    <section>
      <SectionTitle>Promotions</SectionTitle>

      <div className="relative">
        <input
          type="text"
          placeholder="Apply coupon code"
          className="w-full border border-[#ffbf3d] mb-6 p-4 rounded-xl border-solid text-[#333] placeholder:text-[#999]"
        />
      </div>
    </section>
  );
};
