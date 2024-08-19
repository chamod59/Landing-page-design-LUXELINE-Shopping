import img from "@/assets/Imonials-img/prof32.png";

const testImonials = () => {
    return (
        <>
            <div className="flex flex-col justify-center mt-10 px-4 md:px-0">
                <hr className="m-5" />
                <div className="flex justify-center">
                    <h5 className="text-yellow-600 font-bold text-center">Only The Best</h5>
                </div>
                <div className="flex justify-center my-3">
                    <h1 className="text-3xl md:text-5xl font-serif text-center">TESTIMONIALS</h1>
                </div>
                <div className="flex justify-center text-center mt-4">
                    <h1 className="text-xl md:text-2xl text-gray-500 italic">
                        "Fashion you can buy, but style you possess. The key to style is learning who you are, which takes years. There's no how-to road map to style. It's about self-expression and, above all, attitude."
                    </h1>
                </div>
                <div className="flex justify-center mt-10">
                    <img src={img} alt="" className="rounded-full w-32 h-32 md:w-38 md:h-38" />
                </div>
                <div className="flex justify-center">
                    <h5 className="font-semibold text-center">– Iris Apfel</h5>
                </div>
                <div className="flex justify-center">
                    <p className="text-yellow-600 font-semibold text-center">FASHION DESIGNER</p>
                </div>
                <hr className="m-5" />
            </div>

        </>
    )
}

export default testImonials