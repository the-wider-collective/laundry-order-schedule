
import { ScheduleLayout } from "@/components/schedule/ScheduleLayout";

const Index = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@phosphor-icons/web@2.0.3/src/fill/style.css"
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
