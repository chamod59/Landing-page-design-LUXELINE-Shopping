import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import img_1 from "@/assets/products-img/watch.png";
import img_2 from "@/assets/products-img/shoe.png";
import img_3 from "@/assets/products-img/tshirt.png";


const products = () => {
    return (
        <>
            <div className="flex justify-center mt-10">
                <h1 className="text-3xl md:text-4xl font-serif text-center">Latest featured Products</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 container my-10">
                <div className="col-span-1">
                    <Card>
                        <div className="flex flex-col items-center border border-gray-400 rounded-lg overflow-hidden">
                            <img
                                src={img_3}
                                alt=""
                                className="w-4/6 transition-transform duration-300 ease-in-out transform hover:scale-110"
                            />
                            <CardHeader>
                                <CardTitle>Polo T-Shirt</CardTitle>
                                <CardDescription>Brand new collection</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="font-bold">RS.4,899.00</p>
                            </CardContent>
                            <CardFooter>
                                <div className="flex flex-row gap-5">
                                    <Button className="bg-green-500 hover:bg-green-700 text-black px-10">Buy Now</Button>
                                    <Button className="bg-yellow-500 hover:bg-yellow-700 text-black px-10">See All --</Button>
                                </div>
                            </CardFooter>
                        </div>
                    </Card>
                </div>
                <div className="col-span-1">
                    <Card>
                        <div className="flex flex-col items-center border border-gray-400 rounded-lg overflow-hidden">
                            <img
                                src={img_2}
                                alt=""
                                className="w-4/6 transition-transform duration-300 ease-in-out transform hover:scale-110"
                            />
                            <CardHeader>
                                <CardTitle>Nike Shoes</CardTitle>
                                <CardDescription>Brand new collection</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="font-bold">RS.11,899.00</p>
                            </CardContent>
                            <CardFooter>
                                <div className="flex flex-row gap-5">
                                    <Button className="bg-green-500 hover:bg-green-700 text-black px-10">Buy Now</Button>
                                    <Button className="bg-yellow-500 hover:bg-yellow-700 text-black px-10">See All --</Button>
                                </div>
                            </CardFooter>
                        </div>
                    </Card>
                </div>
                <div className="col-span-1">
                    <Card>
                        <div className="flex flex-col items-center border border-gray-400 rounded-lg overflow-hidden">
                            <img
                                src={img_1}
                                alt=""
                                className="w-4/6 transition-transform duration-300 ease-in-out transform hover:scale-110"
                            />
                            <CardHeader>
                                <CardTitle>Old Money Frock</CardTitle>
                                <CardDescription>Brand new collection</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="font-bold">RS.9,899.00</p>
                            </CardContent>
                            <CardFooter>
                                <div className="flex flex-row gap-5">
                                    <Button className="bg-green-500 hover:bg-green-700 text-black px-10">Buy Now</Button>
                                    <Button className="bg-yellow-500 hover:bg-yellow-700 text-black px-10">See All --</Button>
                                </div>
                            </CardFooter>
                        </div>
                    </Card>
                </div>
            </div>


        </>
    )
}

export default products