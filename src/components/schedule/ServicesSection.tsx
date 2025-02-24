import { SectionTitle } from "./shared/SectionTitle";
import { IconCard } from "./shared/IconCard";

export const ServicesSection = () => {
  return (
    <section>
      <SectionTitle>Services and Delivery</SectionTitle>

      <IconCard icon="wash" title="Wash + Fold" tag="Added" />

      <IconCard
        icon="truck-delivery"
        label="DELIVERY"
        title="Tomorrow, Feb 9"
        action={{
          text: "Edit",
          onClick: () => console.log("Edit delivery"),
        }}
      />

      <IconCard
        icon="shirt"
        title="Dry Cleaning"
        action={{
          text: "Add",
          onClick: () => console.log("Add dry cleaning"),
        }}
      />
    </section>
  );
};
