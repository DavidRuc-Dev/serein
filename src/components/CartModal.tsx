"use client"

import Image from "next/image";

const CartModal = () => {

    const cartItems = true;


    return ( 
        <div className="w-max absolute p-4 top-12 right-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 flex flex-col gap-6 ">
            {!cartItems ? (
                <div className="">Aún no tienes ningún item.</div>
            ) : (
                <>
                <h2 className="text-xl">Carro de compras</h2>
                <div className="flex flex-col gap-6">
                    {/* ITEM */}
                    <div className="flex gap-4">
                        <Image src="https://images.pexels.com/photos/31098330/pexels-photo-31098330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={72} height={96} className="object-cover rounded-md"></Image>
                        <div className="flex flex-col justify-between w-full">
                            {/* TOP */}
                            <div className="">
                                {/* TITTLE */}
                                <div className="flex items-center justify-between gap-8">
                                    <h3 className="font-semibold">Product Name</h3>
                                    <div className="p-2 bg-gray-50 rounded-full">$30</div>
                                </div>
                                {/* DESC */}
                                <div className="text-sm text-gray-500">
                                    aviable
                                </div>
                            </div>
                            {/* BOTTOM */}
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Cantidad: 2</span>
                                <span className="text-blue-500">Quitar</span>
                            </div>
                        </div>
                    </div>
                    {/* ITEM */}
                    <div className="flex gap-4">
                        <Image src="https://images.pexels.com/photos/31098330/pexels-photo-31098330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={72} height={96} className="object-cover rounded-md"></Image>
                        <div className="flex flex-col justify-between w-full">
                            {/* TOP */}
                            <div className="">
                                {/* TITTLE */}
                                <div className="flex items-center justify-between gap-8">
                                    <h3 className="font-semibold">Product Name</h3>
                                    <div className="p-2 bg-gray-50 rounded-full">$30</div>
                                </div>
                                {/* DESC */}
                                <div className="text-sm text-gray-500">
                                    aviable
                                </div>
                            </div>
                            {/* BOTTOM */}
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Cantidad: 2</span>
                                <span className="text-blue-500">Quitar</span>
                            </div>
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="">
                        <div className="flex items-center justify-between  font-semibold">
                            <span className="">Total:</span>
                            <span className="">$46</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 mb-4">
                            Lorem insump dolor sit dolors.
                        </p>
                        <div className="flex items-center justify-between text-sm">
                            <button className="rounded-md py-2 px-4 ring-1 ring-gray-300">Ver carrito</button>
                            <button className="rounded-md py-2 px-4 bg-black text-white">Comprar</button>
                        </div>
                    </div>
                </div>
                </>
            )}
        </div>
     );
}

export default CartModal;