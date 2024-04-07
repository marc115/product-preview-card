import Image from "next/image"
import productMobile from '../public/image-product-mobile.jpg'
import productDesktop from '../public/image-product-desktop.jpg'
import iconCart from '../public/icon-cart.svg'
import { frauncese } from "@/app/font"

export const TestComponent = () => {
    return (
        <div className="bg-white rounded-xl w-11/12 flex flex-col sm:w-6/6 sm:flex-row xl:w-6/12 text-dark-grayish-blue">
            <div className="">
                <Image
                    src={productMobile}
                    className="rounded-t-xl sm:hidden"
                    alt="product"
                    priority
                />

                <Image
                    src={productDesktop}
                    className="rounded-l-xl sm:block hidden"
                    alt="product"
                    priority
                />
            </div>

            <div className="flex-grow w-full p-5 gap-y-4 flex flex-col justify-center">
                <h3 className='tracking-widest'>PERFUME</h3>

                <h1 className={`${frauncese.className} text-3xl text-very-dark-blue`}>Gabrielle Essence Eau De Parfum</h1>

                <p>A floral, solar and voluptuous, interpretation composed by Olivier
                    Polge, Perfume-Creator for the House of CHANEL.
                </p>

                <div className="flex flex-row gap-x-5 items-center">
                    <h2 className={`text-3xl ${frauncese.className} text-dark-cyan`}>$149.99</h2> <small className="line-through">$169.99</small>
                </div>

                <button className="rounded-md bg-dark-cyan py-3 text-white flex flex-row gap-x-3 justify-center
                    cursor-pointer hover:bg-dark-cyan-hover">
                    <Image
                        src={iconCart}
                        className=""
                        alt="cart"
                    />
                    Add to cart
                </button>
            </div>
        </div>
    )
}
