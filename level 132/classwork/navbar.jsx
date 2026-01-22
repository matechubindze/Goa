import { Heart, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
    return (
            <div className="w-full bg-gradient-to-r from-slate-900 to-slate-800 py-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
                    <h1 className="text-white text-xl font-semibold">Logo Here.</h1>
                            <ul className="flex gap-8 text-gray-300 text-sm">
                                <li className="hover:text-white cursor-pointer">Home</li>
                                <li className="hover:text-white cursor-pointer">Catagory</li>
                                <li className="hover:text-white cursor-pointer">Collections</li>
                                <li className="hover:text-white cursor-pointer">Contact Us</li>
                            </ul>
                        <div className="flex items-center gap-5 text-gray-300">
                        <Heart className="w-5 h-5 cursor-pointer hover:text-white" />
                        <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-white" />
                    <User className="w-5 h-5 cursor-pointer hover:text-white" />
                </div>
            </div>
        </div>
    );
}
