import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/ui/cn";

const asideStyle = cva(
  "flex flex-col h-screen w-64 bg-black text-white justify-between py-2 px-4",
);
const navStyle = cva("flex flex-col gap-8");
const groupStyle = cva("bg-brand-500 bg-opacity-15 rounded-md p-2 text-xl");

export function Sidemenu() {
  return (
    <aside className={cn(asideStyle())}>
      <div>Logo</div>
      <nav className={navStyle()}>
        <div className={groupStyle()}>
          <h2>Group</h2>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>
        <div className={groupStyle()}>
          <h2>Group</h2>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>
      </nav>
      <footer>Footer</footer>
    </aside>
  );
}
