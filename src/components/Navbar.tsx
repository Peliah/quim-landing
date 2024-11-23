
const Navbar = () => {
    return (
        <nav className="bg-[#09080E] shadow-md w-full">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* Section 1: Logo */}
                <div className="text-xl font-bold text-white">
                    <a href="#">MyLogo</a>
                </div>

                {/* Section 2: Navigation Links */}
                <div className="hidden md:flex space-x-8 text-white font-medium">
                    <a href="#features">
                        Features
                    </a>
                    <a href="#pricing">
                        Pricing
                    </a>
                    <a href="#how-to-use">
                        How to Use
                    </a>
                    <a href="#resources">
                        Resources
                    </a>
                </div>

                {/* Section 3: Login and Get Started */}
                <div className="flex space-x-8 items-center">
                    <a
                        href="#login"
                        className="text-white font-medium"
                    >
                        Login
                    </a>
                    <a
                        href="#get-started"
                        className=" text-[#F7A554] text-base font-medium px-4 py-2 rounded-full border border-[#F7A554]"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
