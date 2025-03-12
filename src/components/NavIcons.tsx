"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);


    const router = useRouter();

    // Temporalmente
    const isLoggedIn = true;

    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push("/login");
        }

        setIsProfileOpen((prev) => !prev);
    }

    return ( 
        <div className="flex gap-3 relative">
            <Image  src="/user-icon.png" alt="" width={28} height={28} className="cursor-pointer" onClick={handleProfile}></Image>{
                isProfileOpen && <div className="absolute p-4 top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
                    <Link href="/">Perfil</Link>
                    <div className="mt-2 cursor-pointer">Cerrar sesión</div>
                </div>
            }
            <div className="relative cursor-pointer">
                <Image  src="/shopping-cart.png" alt="" width={28} height={28} className="cursor-pointer" onClick={() => setIsCartOpen((prev) => !prev)}></Image>
                <div className="absolute -top-4 -right-4 w-5 h-5 bg-[#F35C7A] text-sm rounded-full text-white flex items-center justify-center">2</div>
            </div>{
                isCartOpen && <CartModal/>
            }
        </div>
     );
}

export default NavIcons;