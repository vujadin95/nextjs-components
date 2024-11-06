import { useTranslations } from "next-intl"
import Logo from "../Logo/Logo"
import useNavigationData from "../Header/Navigation/useNavigation";
import { Link } from "@/i18n/routing";

const Footer = () => {
 const t = useTranslations('footer');
 const navigation = useNavigationData();
 const copyrightYear = () => {
  return new Date().getFullYear();
 };

 const firstTwoLinks = navigation.slice(0, 2);

 return (
  <footer className="bg-background border-t border-border text-textColor">

   <div className="">

    <div className="p-4 py-8 max-w-screen-2xl mx-auto grid grid-cols-4 gap-4">
     {/* logo start */}
     <div className="space-y-4 max-w-sm ">
      <Logo />
      <div className="max-w-md pr-16 mt-4 tracking-wide">
       {t('slogan')}
      </div>
     </div>
     {/* logo end */}
     <div>
      <div className="space-y-2 text-sm">
       <h2 className="text-xl font-bold">SUPERHEAR DOO KRAGUJEVAC</h2>
       <p>Sedište: 34000 Kragujevac Vojislava Ilića 14</p>
       <p>Proizvodnja i Magacin: 37000 Kruševac Srnje bb</p>
      </div>
      <div className="space-y-2">
       <p className="">Oficialni email: <span>info@superheat.rs</span></p>

       <p className="">Komercijalna služba: m.popovic@superheat.rs; 065/200 77 78</p>
       <p className="">Tehnička služba: n.milojevic@superheat.rs; 064/925 54 54</p>
       <p className="">Služba finansija: finance@superheat.rs</p>
      </div>
     </div>
     <div className="mt-10 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-6 xl:mt-0 col-span-2">
      {/* first link with sublinks */}

      <div>
       <Link
        className="text-md font-semibold leading-6 hover:text-textHover transition-colors"
        href={navigation[0].href}>
        {navigation[0].title}
       </Link>
       <ul className="mt-3">
        {navigation[0]?.subMenu?.map(subMenuItem => (
         <li key={subMenuItem.title} className="hover:bg-hoverBackground transition-colors rounded-sm">
          <Link className="w-full inline-block p-1" href={subMenuItem.href}>
           {subMenuItem.title}
          </Link>
         </li>))}
       </ul>
      </div>
      {/* second link with sublinks */}
      <div>
       <Link
        className="text-md font-semibold leading-6 hover:text-textHover transition-colors"
        href={navigation[1].href}>
        {navigation[1].title}
       </Link>
       <ul className="mt-3">
        {navigation[1]?.subMenu?.map(subMenuItem => (
         <li key={subMenuItem.title} className="hover:bg-hoverBackground transition-colors rounded-sm">
          <Link className="w-full inline-block p-1" href={subMenuItem.href}>
           {subMenuItem.title}
          </Link>
         </li>))}
       </ul>
      </div>
      <div className="flex flex-col space-y-3">
       <Link
        className="text-md font-semibold leading-6 hover:text-textHover transition-colors"
        href={navigation[2].href}>
        {navigation[2].title}
       </Link>
       <Link
        className="text-md mt-3 font-semibold leading-6 hover:text-textHover transition-colors"
        href={navigation[3].href}>
        {navigation[3].title}
       </Link>
       <Link
        className="text-md  font-semibold leading-6 hover:text-textHover transition-colors"
        href={navigation[4].href}>
        {navigation[4].title}
       </Link>
      </div>


      {/* {navigation.map((link) => (
       <div key={link.title}>
        <Link href={link.href} className="text-md font-semibold leading-6 hover:text-textHover transition-colors">{link.title}</Link>

        {link?.subMenu && (
         <ul className="mt-3">
          {link.subMenu.map(subMenuItem => (
           <li className="hover:bg-hoverBackground transition-colors rounded-sm">
            <Link className="w-full inline-block p-1" href={subMenuItem.href}>
             {subMenuItem.title}
            </Link>
           </li>))}
         </ul>
        )}
       </div>
      ))} */}

     </div>
    </div>
    <div className="mt-10 border-t border-border py-8 lg:mt-14 text-md text-center ">
     Copyright © {copyrightYear()}
    </div>

   </div>
  </footer>
 )
}
export default Footer

/*
 <div className="md:grid md:grid-cols-2 md:gap-8  ">
       <div>
        <h3 className="text-md font-semibold leading-6 ">Our Solutions</h3>
        <ul role="list" className="mt-6 space-y-4">
         <li>
          <a href="/aiplatform"
           className="text-md leading-6 hover:text-gray-50">AI Platform
          </a>
         </li>
         <li>
          <a href="/aialgorithms"
           className="text-md leading-6 hover:text-gray-50">AI Algorithms
          </a>
         </li>
         <li>
          <a href="/industryapplications"
           className="text-md leading-6 hover:text-gray-50">Industry
           Applications
          </a>
         </li>
        </ul>
       </div>
       <div className="mt-10 md:mt-0">
        <h3 className="text-md font-semibold leading-6 ">Use Cases</h3>
        <ul role="list" className="mt-6 space-y-4">
         <li>
          <a href="/predictiveanalysis"
           className="text-md leading-6 hover:text-gray-50">Predictive
           Analysis
          </a>
         </li>
         <li>
          <a href="/customerexperience"
           className="text-md leading-6  hover:text-gray-50">Customer
           Experience
          </a>
         </li>
         <li>
          <a href="/automation"
           className="text-md leading-6  hover:text-gray-50">Automation
          </a>
         </li>
        </ul>
       </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-8  ">
       <div className=" ">
        <h3 className="text-md font-semibold leading-6 ">Resources</h3>
        <ul role="list" className="mt-6 space-y-4">
         <li>
          <a href="/pricing"
           className="text-md leading-6 ">Pricing
          </a>
         </li>
         <li>
          <a href="/blog" className="text-md leading-6 ">Blog
          </a>
         </li>
         <li>
          <a href="/casestudies"
           className="text-md leading-6 ">Case Studies
          </a>
         </li>
         <li>
          <a href="/terms" className="text-md leading-6 ">Terms
           of Service
          </a>
         </li>
         <li>
          <a href="/privacy"
           className="text-md leading-6 ">Privacy Policy
          </a>
         </li>
        </ul>
       </div>
       <div className="mt-10 md:mt-0">
        <h3 className="text-md font-semibold leading-6 ">Company</h3>
        <ul role="list" className="mt-6 space-y-4">
         <li>
          <a href="/aboutus"
           className="text-md leading-6 ">About Us
          </a>
         </li>
         <li>
          <a href="/careers"
           className="text-md leading-6 ">Careers
          </a>
         </li>
         <li>
          <a href="/contactus"
           className="text-md leading-6 ">Contact Us
          </a>
         </li>
        </ul>
       </div>
      </div>
      

*/