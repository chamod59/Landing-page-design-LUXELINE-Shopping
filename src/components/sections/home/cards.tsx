import img1 from "@/assets/card-img/gallary1.png";
import img2 from "@/assets/card-img/gallary2.png";
import img3 from "@/assets/card-img/gallary3.png";
import img4 from "@/assets/card-img/gallary4.png";
import img5 from "@/assets/card-img/gallary5.png";
import img6 from "@/assets/card-img/gallary6.png";
import { Button } from "@/components/ui/button";


const cards = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-center md:pl-32 md:pr-32">
                <div className="flex flex-col justify-center w-full md:w-auto md:m-8">
                    <div className="mx-auto my-5 relative w-10/12 md:w-auto">
                        <img src={img1} className="bg-black w-full"></img>
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-4">
                            <Button className="bg-white text-black hover:bg-purple-300 hover:border-black hover:border px-10">Watches</Button>
                        </div>
                    </div>
                    <div className="mx-auto my-5 relative w-10/12 md:w-auto">
                        <img src={img3} className="bg-black w-full"></img>
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-4">
                            <Button className="bg-white text-black hover:bg-purple-300 hover:border-black hover:border px-10">Gents</Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center w-full md:w-auto md:m-8">
                    <div className="mx-auto my-5 relative w-10/12 md:w-auto">
                        <img src={img5} className="bg-black w-full"></img>
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-4">
                            <Button className="bg-white text-black hover:bg-purple-300 hover:border-black hover:border px-10">Footwear</Button>
                        </div>
                    </div>
                    <div className="mx-auto my-5 relative w-10/12 md:w-auto">
                        <img src={img6} className="bg-black w-full"></img>
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-4">
                            <Button className="bg-white text-black hover:bg-purple-300 hover:border-black hover:border px-10">Sign Up</Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center w-full md:w-auto md:m-8">
                    <div className="mx-auto my-5 relative w-10/12 md:w-auto">
                        <img src={img2} className="bg-black w-full"></img>
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-4">
                            <Button className="bg-white text-black hover:bg-purple-300 hover:border-black hover:border px-10">Singlass</Button>
                        </div>
                    </div>
                    <div className="mx-auto my-5 relative w-10/12 md:w-auto">
                        <img src={img4} className="bg-black w-full"></img>
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-4">
                            <Button className="bg-white text-black hover:bg-purple-300 hover:border-black hover:border px-10">Ladies</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default cards