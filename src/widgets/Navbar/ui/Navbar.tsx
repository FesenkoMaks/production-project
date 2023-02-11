import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/lib/ui/AppLink";
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
   return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={classNames(cls.links)}>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={classNames(cls.mainLink)}>Main</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About</AppLink>
        </div>
      </div>
   )
};
