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
    label: "Delivery",
    icon: IconTruckDelivery,
    links: [
      { label: "General", link: "/admin/delivery" },
      { label: "Delivery Options", link: "/admin/delivery/options/manage" },
    ],
  },
  { label: "Contact Info", icon: IconAddressBook, href: "/admin/contact" },
];
