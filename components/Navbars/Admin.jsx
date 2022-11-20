import Link from "next/link";
import { UserDropdown } from "../Dropdowns";

export default function Navbar() {
  return (
    <>
      <nav className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-z-10 tw-bg-transparent md:tw-flex-row md:tw-flex-nowrap md:tw-justify-start tw-flex tw-items-center tw-p-4">
        <div className="tw-w-full tw-mx-auto tw-items-center tw-flex tw-justify-between md:tw-flex-nowrap tw-flex-wrap md:tw-px-10 tw-px-4">
          <Link
            className="tw-text-white tw-text-sm tw-uppercase tw-hidden lg:tw-inline-block tw-font-semibold"
            href="/admin"
          >
            Dashboard
          </Link>
          <ul className="tw-flex-col md:tw-flex-row tw-list-none tw-items-center tw-hidden md:tw-flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
    </>
  );
}
