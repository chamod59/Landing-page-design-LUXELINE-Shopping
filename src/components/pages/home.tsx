import Navbar from "@/components/sections/home/navbar";
import SearchSection from "@/components/sections/home/search";
import Carousel from "@/components/sections/home/EmblaCarousel";
import Cards from "@/components/sections/home/cards";
import TestImonials from "@/components/sections/home/testImonials";
import Products from "@/components/sections/home/products";
import Details from "@/components/sections/home/details";
import Footer from "@/components/sections/home/footer";

const home = () =>{
    return (
        <>
            <Navbar />
            <SearchSection />
            <Carousel />
            <Cards/>
            <TestImonials/>
            <Products/>
            <Details/>
            <Footer/>
        </>
    )
}

export default home