import { SectionTitle } from "./shared/SectionTitle";

export const PromotionsSection = () => {
  return (
    <section>
      <SectionTitle>Promotions</SectionTitle>

      <div>
        <input
          type="text"
          placeholder="Apply coupon code"
          className="w-full border border-neutral-200 mb-6 p-3 rounded-lg border-solid"
        />
      </div>
    </section>
  );
};
