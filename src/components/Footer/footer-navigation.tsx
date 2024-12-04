import { Link } from "@/i18n/routing";
import useNavigationData from "../Header/Navigation/useNavigation";
import FooterLogo from "./footer-logo";

const FooterNavigation = () => {
  const navigation = useNavigationData();

  return (
    <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-3 p-4 text-base sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
      <FooterLogo />
      <div className="space-y-3">
        <Link
          className="text-base font-semibold underline-offset-4 hover:underline"
          href={navigation[0].href}
        >
          {navigation[0].title}
        </Link>
        <ul className="space-y-2">
          {navigation[0]?.subMenu?.map((subMenuItem) => (
            <li key={subMenuItem.title}>
              <Link
                className="underline-offset-4 hover:underline"
                href={subMenuItem.href}
              >
                {subMenuItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* solutins */}
      <div className="space-y-3">
        <Link
          className="text-base font-semibold underline-offset-4 hover:underline"
          href={navigation[1].href}
        >
          {navigation[1].title}
        </Link>
        <ul className="space-y-2">
          {navigation[1]?.subMenu?.map((subMenuItem) => (
            <li key={subMenuItem.title}>
              <Link
                className="underline-offset-4 hover:underline"
                href={subMenuItem.href}
              >
                {subMenuItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* about us */}
      <div className="flex flex-col space-y-3">
        <Link
          className="font-semibold underline-offset-4 hover:underline"
          href={navigation[2].href}
        >
          {navigation[2].title}
        </Link>
        <Link
          className="font-semibold underline-offset-4 hover:underline"
          href={navigation[3].href}
        >
          {navigation[3].title}
        </Link>
        <Link
          className="font-semibold underline-offset-4 hover:underline"
          href={navigation[4].href}
        >
          {navigation[4].title}
        </Link>
      </div>
    </div>
  );
};

export default FooterNavigation;
