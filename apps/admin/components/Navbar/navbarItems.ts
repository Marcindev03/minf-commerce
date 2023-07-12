import {
  IconAddressBook,
  IconDeviceDesktopAnalytics,
  IconTruckDelivery,
} from "@tabler/icons-react";

export const navbarItems = [
  {
    label: "Dashboard",
    icon: IconDeviceDesktopAnalytics,
    href: "/admin/dashboard",
  },
  {
    label: "Delivery Options",
    icon: IconTruckDelivery,
    href: "/admin/delivery",
  },
  { label: "Contact Info", icon: IconAddressBook, href: "/admin/contact" },
  // {
  //   label: "Market news",
  //   icon: IconNotes,
  //   links: [
  //     { label: "Overview", link: "/" },
  //     { label: "Forecasts", link: "/" },
  //     { label: "Outlook", link: "/" },
  //     { label: "Real time", link: "/" },
  //   ],
  // },
];
