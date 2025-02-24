import { SectionTitle } from "./shared/SectionTitle";
import { IconCard } from "./shared/IconCard";

export const AddressSection = () => {
  return (
    <section>
      <SectionTitle>Pickup and Delivery Address</SectionTitle>

      <div className="mb-4">
        <div>YOUR ADDRESS</div>
        <IconCard
          icon="home"
          title="Home"
          selected={true}
          action={{
            text: "Edit",
            onClick: () => console.log("Edit home address"),
          }}
        />

        <IconCard
          icon="building"
          title="Office"
          selected={false}
          action={{
            text: "Edit",
            onClick: () => console.log("Edit office address"),
          }}
        />
      </div>

      <div className="text-[#00bcd4] mb-6 cursor-pointer">
        + Add new address
      </div>
    </section>
  );
};
