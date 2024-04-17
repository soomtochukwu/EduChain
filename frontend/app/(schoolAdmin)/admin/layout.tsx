import Header from "./_components/header";
import AdminDashboardSidebar from "./_components/sidebar";

export default function SchoolAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex-1">
            <AdminDashboardSidebar />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
}
