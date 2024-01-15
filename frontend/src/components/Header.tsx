const Header = () => {
    return (
        <div className="bg-blue-800 py-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-3xl">
                    <Link to="/"></Link>
                </span>
                <span className="text-3xl">
                    <Link to="/sign-in">Sign In</Link>
                </span>
            </div>
        </div>
    )
}