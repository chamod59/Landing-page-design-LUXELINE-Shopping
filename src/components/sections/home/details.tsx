
const details = () => {
    return (
        <>
            <div className="mx-10">
                <br />
                <hr />
                <br />
            </div>

            <div className="flex flex-col md:flex-row gap-10 container my-10">
                <div className="md:basis-1/3 mb-6 md:mb-0">
                    <div className="flex justify-center">
                        <p className="text-black font-semibold text-xl font-mono text-center">Low Delivery Fee Worldwide</p>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-gray-500 italic text-lg text-center">click here for more info</p>
                    </div>
                </div>
                <div className="md:basis-1/3 mb-6 md:mb-0">
                    <div className="flex justify-center">
                        <p className="text-black font-semibold text-xl font-mono text-center">30 Day Return</p>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-gray-500 italic text-lg text-center">Simply return it within 30 days for an exchange.</p>
                    </div>
                </div>
                <div className="md:basis-1/3">
                    <div className="flex justify-center">
                        <p className="text-black font-semibold text-xl font-mono text-center">Physical store opening</p>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-gray-500 italic text-lg text-center">Shop open from Monday to Sunday</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default details
