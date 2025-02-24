import { SectionTitle } from "./shared/SectionTitle";
import { IconCard } from "./shared/IconCard";

export const PickupSection = () => {
  return (
    <section>
      <SectionTitle>Pickup</SectionTitle>
      <div className="text-[#666] text-sm mb-4">
        <span>All pickups are between 6 pm and 10 pm.</span>
        <div className="mt-2">
          You will receive a text from our pickup agent at least 30 minutes
          before they arrive.
        </div>
      </div>

      <IconCard
        icon="package"
        label="PICKUP"
        title="Tonight, Feb 8"
        action={{
          text: "Edit",
          onClick: () => console.log("Edit pickup"),
        }}
      />

      <div className="bg-[#f8f8f8] mb-6 p-4 rounded-lg">
        <span>Not available in the evening?</span>
        <div className="text-[#666] text-sm mt-1">
          No worries! You can check the "Remote Pickup" Box in the checkout page
          to make this super easy.
        </div>
      </div>
    </section>
  );
};
