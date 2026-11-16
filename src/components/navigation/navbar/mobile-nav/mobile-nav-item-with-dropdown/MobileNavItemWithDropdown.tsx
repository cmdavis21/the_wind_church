'use client';

import React, { useEffect, useRef, useState } from 'react';

import { useCart } from '@/data/client/shopify/use-cart';
import { PageRoutes } from '@/data/page-routes';
import { NavbarColumnItem } from '@/data/types';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import MobileNavItem from '../mobile-nav-item/MobileNavItem';

interface MobileNavItemWithDropdownProps {
  label: string;
  submenu: NavbarColumnItem['submenu'];
  changeColor: boolean;
  pathname: string;
  isNavMenuOpen: boolean;
  onToggle: () => void;
}

const MobileNavItemWithDropdown: React.FC<MobileNavItemWithDropdownProps> = ({
  label,
  submenu,
  changeColor,
  pathname,
  isNavMenuOpen,
  onToggle,
}) => {
  const { cart } = useCart();
  const t = useTranslations('Cart');

  const [open, setOpen] = useState(false);
  const subMenuDropdown = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (Array.isArray(submenu) && submenu.some((i) => pathname.includes(i.link))) {
      setOpen(true);
    } else {
      if (!isNavMenuOpen) setOpen(false);
    }
  }, [isNavMenuOpen, pathname, submenu]);

  return (
    <div
      className={cn(
        'rounded-lg p-sm transition-[colors,height] duration-300 flex flex-col gap-sm',
        open && `${changeColor ? 'bg-light-neutral dark:bg-dark-gray' : 'bg-dark-charcoal/20'}`
      )}
    >
      <MobileNavItem
        label={label}
        changeColor={changeColor}
        onClick={() => setOpen(!open)}
        active={(Array.isArray(submenu) && submenu.some((i) => pathname.includes(i.link))) || open}
      />

      <div
        style={{
          height: open ? `${subMenuDropdown.current?.offsetHeight}px` : '0px',
        }}
        className={cn(
          !open && 'pointer-events-none -mb-sm',
          'transition-[height] duration-300 mx-xs overflow-hidden'
        )}
      >
        <div ref={subMenuDropdown} className="flex flex-col gap-xs w-full">
          {Array.isArray(submenu) &&
            submenu.map((item) => (
              <Link
                key={`mobile-submenu-nav-item-${item.label}-${item.link}`}
                href={item.link}
                onClick={() => {
                  onToggle();
                  setOpen(false);
                }}
              >
                <div
                  className={cn(
                    pathname === item.link
                      ? 'text-brand-primary bg-light-gray/20'
                      : `${!changeColor && 'text-dark-primaryText'}`,
                    'w-full p-sm body-large rounded-lg capitalize flex items-center'
                  )}
                >
                  {item.label}
                  {item.link === PageRoutes.cart && cart && cart.total_quantity > 0 && (
                    <span className="ml-1.5 body-small">
                      (
                      {t.rich('quantity', {
                        bold: (chunks) => <span className="font-bold">{chunks}</span>,
                        count: cart.total_quantity,
                      })}
                      )
                    </span>
                  )}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavItemWithDropdown;
