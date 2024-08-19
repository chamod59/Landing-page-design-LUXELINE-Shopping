import { IoMdHome } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhone, FaFacebookSquare, FaGoogle, FaInstagram } from "react-icons/fa";
import { BsFillPrinterFill } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const footer = () => {
    return (
        <>

            <div className="bg-gray-600 mt-16 py-10">
                <div className="flex flex-col md:flex-row gap-10 container px-4 md:px-0">
                    <div className="basis-full md:basis-1/4 mb-6 md:mb-0 text-center md:text-left">
                        <h3 className="text-lg font-bold text-white">LUXELINE</h3>
                        <p className="mt-2 text-white">
                            Discover the ultimate online destination for fashion enthusiasts! Our e-commerce website offers a curated collection of trendy and timeless clothing, from chic dresses to cozy loungewear. Elevate your wardrobe with ease, shop now for the latest fashion must-haves!
                        </p>
                    </div>
                    <div className="basis-full md:basis-1/4 mb-6 md:mb-0 text-center md:text-left md:ml-10">
                        <h3 className="text-lg font-bold text-white mb-2">Products</h3>
                        <ul>
                            <li className="mb-3 text-white">Gents clothing</li>
                            <li className="mb-3 text-white">Ladies clothing</li>
                            <li className="mb-3 text-white">Kids clothing</li>
                            <li className="mb-3 text-white">Shoes</li>
                            <li className="mb-3 text-white">Accessories</li>
                        </ul>
                    </div>
                    <div className="basis-full md:basis-1/4 mb-6 md:mb-0 text-center md:text-left">
                        <h3 className="text-lg font-bold text-white mb-2">Useful Links</h3>
                        <ul>
                            <li className="mb-3 text-white">Your account</li>
                            <li className="mb-3 text-white">Become a Seller</li>
                            <li className="mb-3 text-white">Shipping Rates</li>
                            <li className="mb-3 text-white">Help</li>
                        </ul>
                    </div>
                    <div className="basis-full md:basis-1/4 text-center md:text-left">
                        <h3 className="text-lg font-bold text-white mb-2">Contact</h3>
                        <ul>
                            <li className="mb-3 text-white">
                                <p className="flex items-center justify-center md:justify-start">
                                    <IoMdHome className="mr-2" />Colombo 10, Sri Lanka
                                </p>
                            </li>
                            <li className="mb-3 text-white">
                                <p className="flex items-center justify-center md:justify-start">
                                    <MdAlternateEmail className="mr-2" />Luxeline@gmail.com
                                </p>
                            </li>
                            <li className="mb-3 text-white">
                                <p className="flex items-center justify-center md:justify-start">
                                    <FaPhone className="mr-2" />+ 01 234 567 88
                                </p>
                            </li>
                            <li className="mb-3 text-white">
                                <p className="flex items-center justify-center md:justify-start">
                                    <BsFillPrinterFill className="mr-2" />+ 01 234 567 89
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mx-4 md:mx-10 mt-5">
                    <br />
                    <hr />
                    <br />
                </div>

                <div className="grid grid-cols-12 gap-4 px-4 md:px-0">
                    <div className="col-span-12 md:col-start-2 md:col-end-6">
                        <p className="text-white text-center md:text-left">
                            © 2023 Copyright:<b className="ml-2">ArtLife Software Solutions (Pvt) Ltd.</b>
                        </p>
                    </div>
                    <div className="col-span-12 md:col-start-10 md:col-end-12 flex justify-center md:justify-end gap-4 mt-4 md:mt-0">
                        <Button className="border border-white bg-inherit hover:bg-white hover:text-black">
                            <FaFacebookSquare className="w-full" />
                        </Button>
                        <Button className="border border-white bg-inherit hover:bg-white hover:text-black">
                            <FaXTwitter className="w-full" />
                        </Button>
                        <Button className="border border-white bg-inherit hover:bg-white hover:text-black">
                            <FaGoogle className="w-full" />
                        </Button>
                        <Button className="border border-white bg-inherit hover:bg-white hover:text-black">
                            <FaInstagram className="w-full" />
                        </Button>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default footer
