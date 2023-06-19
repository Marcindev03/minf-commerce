import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useActiveNavbarItem = (href: string) => {
  const pathname = usePathname();

  const [isActive, setIsActive] = useState(false);

  useEffect(
    () => setIsActive(decodeURI(href) === decodeURI(pathname)),
    [pathname]
  );

  return isActive;
};
