import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-gray-800 py-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-3xl text-white font-bold tracking-tight">
                    <Link to="/">Home Page</Link>
                </span>
                <span className="flex space-x-2">
                    <Link to="/sign-in" className="flex items-center text-white px-3 font-bold hover:bg-black
                    border rounded border-white">Sign In</Link>
                </span>
            </div>
        </div>
    )
}

export default Header;