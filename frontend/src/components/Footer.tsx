const Footer = () => {
    return (
        <div className="bg-gray-800 py-16">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-3xl text-white font-bold tracking-tight">
                    Find your next Meal
                </h1>
                <span className="text-white font-bold tracking-tight flex gap-4">
                    <p className="cursor-pointer">Privacy policy</p>
                    <p className="cursor-pointer">Terms of Service</p>
                </span>
            </div>
        </div>
    )
}

export default Footer;