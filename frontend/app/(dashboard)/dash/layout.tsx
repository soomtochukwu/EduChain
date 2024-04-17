import Sidebar from "./_components/sidebar";

import DashHeader from "./_components/dash-header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div key="1" className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <DashHeader />
        {children}
      </div>
    </div>
  );
}
