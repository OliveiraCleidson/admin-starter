import { Sidemenu } from "./components";

export default function AuthLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <div className="flex flex-row">
      <Sidemenu />
      <main>{children}</main>
    </div>
  );
}
