
import { Header } from "./Header";
import { PickupSection } from "./PickupSection";
import { ServicesSection } from "./ServicesSection";
import { AddressSection } from "./AddressSection";
import { PromotionsSection } from "./PromotionsSection";
import { PaymentSection } from "./PaymentSection";

export const ScheduleLayout = () => {
  return (
    <div className="max-w-[393px] bg-white mx-auto my-0 min-h-screen">
      <Header />

      <main className="p-6 space-y-8">
        <h1 className="text-2xl font-semibold text-[#333]">Schedule your order</h1>

        <PickupSection />
        <ServicesSection />
        <AddressSection />
        <PromotionsSection />
        <PaymentSection />
      </main>
    </div>
  );
};
