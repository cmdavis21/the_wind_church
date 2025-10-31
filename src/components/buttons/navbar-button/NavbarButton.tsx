import cn from 'classnames';
import { Button } from 'flowbite-react';
import Link from 'next/link';

enum NAV_TYPE {
  CHANGING,
  SOLID,
}

interface NavbarButtonProps {
  label: string;
  link: string;
  activeNav: boolean;
  forMobile?: boolean;
  changeColor: boolean;
  onClick: () => void;
}

const getNavType = (shouldChange: boolean): NAV_TYPE =>
  shouldChange ? NAV_TYPE.CHANGING : NAV_TYPE.SOLID;

const variants = {
  [NAV_TYPE.CHANGING]: 'text-black dark:text-textInverse',
  [NAV_TYPE.SOLID]: 'text-white dark:text-textInverse dark:group-hover:text-black',
};

const NavbarButton: React.FC<NavbarButtonProps> = ({
  label,
  link,
  activeNav,
  forMobile,
  changeColor,
  onClick,
}) => {
  const navType = getNavType(changeColor);
  const variantClass = variants[navType];

  return (
    <Link href={link}>
      <Button
        pill
        onClick={onClick}
        className="px-xs group"
        size={forMobile ? 'sm' : 'lg'}
        color={changeColor ? 'primary' : 'ghost'}
      >
        <h5 className={cn(variantClass, 'uppercase')}>{label}</h5>
      </Button>
    </Link>
  );
};

export default NavbarButton;
