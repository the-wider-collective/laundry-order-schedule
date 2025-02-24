
import { useState } from "react";
import { SectionTitle } from "./shared/SectionTitle";
import { IconCard } from "./shared/IconCard";
import { EditAddressDialog } from "./dialogs/EditAddressDialog";
import { useToast } from "@/components/ui/use-toast";

export const AddressSection = () => {
  const [selectedAddress, setSelectedAddress] = useState<"home" | "office">("home");
  const [editingAddress, setEditingAddress] = useState<{
    type: "home" | "office";
    title: string;
  } | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const { toast } = useToast();

  const handleAddressClick = (type: "home" | "office") => {
    setSelectedAddress(type);
    toast({
      description: `Selected ${type} address`,
    });
  };

  return (
    <section>
      <SectionTitle>Pickup and Delivery Address</SectionTitle>

      <div className="mb-4">
        <div className="text-[#92e3ed] text-sm mb-2">YOUR ADDRESS</div>
        <IconCard
          icon="home"
          title="Home"
          selected={selectedAddress === "home"}
          onClick={() => handleAddressClick("home")}
          action={{
            text: "Edit",
            onClick: () => setEditingAddress({ type: "home", title: "Home" }),
          }}
          variant="primary"
        />

        <IconCard
          icon="office"
          title="Office"
          selected={selectedAddress === "office"}
          onClick={() => handleAddressClick("office")}
          action={{
            text: "Edit",
            onClick: () => setEditingAddress({ type: "office", title: "Office" }),
          }}
          variant="primary"
        />
      </div>

      <div 
        className="text-[#92e3ed] text-sm mb-6 cursor-pointer hover:text-[#83d2db] transition-colors"
        onClick={() => setIsAddingNew(true)}
      >
        + Add new address
      </div>

      <EditAddressDialog
        isOpen={!!editingAddress}
        onClose={() => setEditingAddress(null)}
        address={editingAddress || undefined}
      />

      <EditAddressDialog
        isOpen={isAddingNew}
        onClose={() => setIsAddingNew(false)}
        isNew={true}
      />
    </section>
  );
};
