
import { SectionTitle } from "./shared/SectionTitle";
import { IconCard } from "./shared/IconCard";

export const AddressSection = () => {
  return (
    <section>
      <SectionTitle>Pickup and Delivery Address</SectionTitle>

      <div className="mb-4">
        <div className="text-[#92e3ed] text-sm mb-2">YOUR ADDRESS</div>
        <IconCard
          icon="home"
          title="Home"
          selected={true}
          action={{
            text: "Edit",
            onClick: () => console.log("Edit home address"),
          }}
          variant="primary"
        />

        <IconCard
          icon="office"
          title="Office"
          selected={false}
          action={{
            text: "Edit",
            onClick: () => console.log("Edit office address"),
          }}
          variant="primary"
        />
      </div>

      <div className="text-[#92e3ed] text-sm mb-6 cursor-pointer">
        + Add new address
      </div>
    </section>
  );
};
