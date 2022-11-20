import { useState, useRef } from "react";
import { createPopper } from "@popperjs/core";

const UserDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = useRef();
  const popoverDropdownRef = useRef();
  const openDropdownPopover = () => {
    setDropdownPopoverShow(true);
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <button
        className="tw-text-blueGray-500 tw-block"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="tw-items-center tw-flex">
          <span className="tw-w-12 tw-h-12 tw-text-sm tw-text-white tw-bg-blueGray-200 tw-inline-flex tw-items-center tw-justify-center tw-rounded-full">
            <img
              alt="avatar"
              className="tw-w-full tw-rounded-full tw-align-middle tw-border-none tw-shadow-lg"
              src="/images/avatar-01.jpg"
            />
          </span>
        </div>
      </button>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "tw-block " : "tw-hidden ") +
          "tw-bg-white tw-text-base tw-z-50 tw-py-2 tw-list-none tw-text-left tw-rounded tw-shadow-lg tw-min-w-48"
        }
      >
        <button
          className={
            "tw-text-sm tw-text-left tw-py-2 tw-px-4 tw-font-normal tw-block tw-w-full tw-whitespace-nowrap tw-bg-transparent tw-text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Profile
        </button>
        <button
          className={
            "tw-text-sm tw-text-left tw-py-2 tw-px-4 tw-font-normal tw-block tw-w-full tw-whitespace-nowrap tw-bg-transparent tw-text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Settings
        </button>
        <div className="tw-h-0 tw-my-2 tw-border tw-border-solid tw-border-blueGray-100" />
        <button
          className={
            "tw-text-sm tw-text-left tw-py-2 tw-px-4 tw-font-normal tw-block tw-w-full tw-whitespace-nowrap tw-bg-transparent tw-text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default UserDropdown;
