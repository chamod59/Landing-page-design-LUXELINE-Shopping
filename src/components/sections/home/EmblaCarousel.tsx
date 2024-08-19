
import useEmblaCarousel from 'embla-carousel-react';
import img1 from "@/assets/carousel-img/bg2-new.png";
import img2 from "@/assets/carousel-img/bg3-new.png";
import img3 from "@/assets/carousel-img/bg4-new.png";
import s_img from "@/assets/carousel-img/R.jpeg";
import Autoplay from 'embla-carousel-autoplay';
import { Button } from "@/components/ui/button";

const EmblaCarousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

    return (
        <>
            {/* Carousel for medium and large screens */}
            <div className="embla m-5 hidden sm:block" ref={emblaRef}>
                <div className="embla__container flex">
                    <div className="embla__slide relative flex-shrink-0 w-full">
                        <img src={img1} alt="" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <div className="text-white w-full max-w-md text-center p-4 rounded 
                                md:translate-x-8 md:left-1/4 
                                lg:-translate-x-1/4 lg:left-1/2">
                                <h1 className="text-4xl font-bold text-black mb-4">New Arrivals on All Collections</h1>
                                <Button className="hidden lg:block mx-auto rounded-full bg-purple-300 hover:bg-gray-400 px-10 text-black">Shop Now</Button>
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide relative flex-shrink-0 w-full">
                        <img src={img2} alt="" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <div className="text-white w-full max-w-md text-center p-4 rounded 
                                md:translate-x-8 md:left-1/4 
                                lg:-translate-x-1/4 lg:left-1/2">
                                <h1 className="text-4xl font-bold text-black mb-4">New Couple Dresses & Brand New Accessories</h1>
                                <Button className="hidden lg:block mx-auto rounded-full bg-purple-300 px-10 text-black">Shop Now</Button>
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide relative flex-shrink-0 w-full">
                        <img src={img3} alt="" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <div className="text-white w-full max-w-md text-center p-4 rounded 
                                md:translate-x-8 md:left-1/4 
                                lg:-translate-x-1/4 lg:left-1/2">
                                <h1 className="text-4xl font-bold text-black mb-4">New Woman Collections in 2024</h1>
                                <Button className="hidden lg:block mx-auto rounded-full bg-purple-300 px-10 text-black">Shop Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image section for small screens */}
            <div className="block sm:hidden">
                <div className="relative mb-4">
                    <img src={s_img} alt="" className="w-full h-64 object-cover opacity-80" />
                </div>
            </div>
        </>
    );
}

export default EmblaCarousel;
