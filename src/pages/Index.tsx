import { ScheduleLayout } from "@/components/schedule/ScheduleLayout";

const Index = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
      />
      <div className="min-h-screen bg-gray-100 py-8">
        <ScheduleLayout />
      </div>
    </>
  );
};

export default Index;
