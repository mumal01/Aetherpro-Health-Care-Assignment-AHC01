import Layout from "@/components/Layout";
import DashboardCard from "@/components/DashboardCard";

const sections = [
  "Regulatory Documents", "Commercial Documents", "External Contract", "Owner Documents",
  "Service Price List", "CME and Medical Training Records", "HPL Applications",
  "Human Resources", "Facility Policy", "Clinical Guideline", "Inspection Checklist",
  "Forms and Daily Checklist", "Key Performance Indicator", "Audit Reports",
  "Rooms and Infrastructure"
];

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, idx) => (
          <DashboardCard key={idx} title={section} />
        ))}
      </div>
    </Layout>
  );
}
