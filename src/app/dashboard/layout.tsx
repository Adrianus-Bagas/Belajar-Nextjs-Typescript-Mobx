import Link from "next/link";

function LayoutPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Menu
          </label>
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-red-100 text-base-content">
            <li>
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link href={"/dashboard/user"}>User</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default LayoutPage;
