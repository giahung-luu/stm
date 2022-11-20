import { useState, useRef } from "react";
import { createPopper } from "@popperjs/core";

const NotificationDropdown = () => {
  // dropdown props
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
        className="tw-text-blueGray-500 tw-block tw-py-1 tw-px-3"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fa-solid fa-bell"></i>
      </button>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "tw-block " : "tw-hidden ") +
          "tw-bg-white tw-text-base tw-z-50 tw-float-left tw-py-2 tw-list-none tw-text-left tw-rounded tw-shadow-lg tw-min-w-48"
        }
      >
        <button
          className={
            "tw-text-sm tw-py-2 tw-px-4 tw-font-normal tw-block tw-w-full tw-whitespace-nowrap tw-bg-transparent tw-text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Action
        </button>
        <button
          className={
            "tw-text-sm tw-py-2 tw-px-4 tw-font-normal tw-block tw-w-full tw-whitespace-nowrap tw-bg-transparent tw-text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </button>
        <button
          className={
            "tw-text-sm tw-py-2 tw-px-4 tw-font-normal tw-block tw-w-full tw-whitespace-nowrap tw-bg-transparent tw-text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </button>
        <div className="tw-h-0 tw-my-2 tw-border tw-border-solid tw-border-blueGray-100" />
        <button
          className={
            "tw-text-sm tw-py-2 tw-px-4 tw-font-normal tw-block tw-w-full tw-whitespace-nowrap tw-bg-transparent tw-text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Seprated link
        </button>
      </div>
    </>
  );
};

export default NotificationDropdown;
