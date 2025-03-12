import Link from "next/link";
import Menu from "./Menu";
import SwitchLanguage from "./SwitchLanguage";
import NavIcons from "./NavIcons";

const Navbar = () => {
    return ( 
        <div className="h-20 lg:h-28 2xl:h-32 px-4 md:px-8 lg:px-16 xl:px-32 relative">
            {/* MOBILE */}
            <div className="h-full flex justify-between items-center md:hidden">
                <Link className="serein-logo text-2xl" href="/">
                    SEREIN
                </Link>
                <Menu/>
            </div>
            {/* DESKTOP SCREENS */}
            <div className="hidden md:flex justify-between items-center h-full ">
                <div className="flex w-1/3 gap-8 justify-start text-sm 2xl:text-lg font-medium">
                    <Link href="/">Productos</Link>
                    <Link href="/">Nosotros</Link>
                    <Link href="/">Contacto</Link>
                </div>
                <Link className="serein-logo flex justify-center w-1/3 text-3xl xl:text-4xl 2xl:text-5xl" href="/">
                    SEREIN
                </Link>
                <div className="flex justify-end w-1/3 gap-10 items-center">
                    {/* <SwitchLanguage/> */}
                    <NavIcons/>
                </div>
            </div>
        </div>
     );
}

export default Navbar;