import { Header } from "./Header";
import { PickupSection } from "./PickupSection";
import { ServicesSection } from "./ServicesSection";
import { AddressSection } from "./AddressSection";
import { PromotionsSection } from "./PromotionsSection";
import { PaymentSection } from "./PaymentSection";

export const ScheduleLayout = () => {
  return (
    <div className="max-w-[393px] bg-white mx-auto my-0">
      <Header />

      <main className="p-6 max-sm:p-4">
        <h1 className="text-xl font-semibold mb-6">Schedule your order</h1>

        <PickupSection />
        <ServicesSection />
        <AddressSection />
        <PromotionsSection />
        <PaymentSection />
      </main>
    </div>
  );
};
