// import OrbitCirlce from "@/components/OrbitCircle"

// const Hero = () => {
//     return (
//         <div
//             className="relative w-full min-h-screen text-white pt-8"
//             style={{
//                 background: "radial-gradient(circle, rgba(67,48,32) 0%, rgba(29,24,22,1) 100%)",
//             }}
//         >
//             {/* Orbit Circle in the Background */}
//             <div className="absolute inset-0 flex w-full items-baseline justify-center z-0">
//                 <OrbitCirlce />
//             </div>

//             {/* Content on Top */}
//             <div className="relative w-full flex flex-col items-center z-10">
//                 <div className="border rounded-full border-[#F7A554] px-6 py-1 mb-2">
//                     &rdquo;Leverage advanced AI tools
//                 </div>

//                 <div className="text-[52px] font-medium text-center w-full flex items-center justify-center bg-transparent">
//                     <div className="w-[40%]">
//                         <h2 className="bg-transparent">Enhance your productivity through the power of AI</h2>
//                     </div>
//                 </div>

//                 <div className="text-2xl font-medium text-center w-full flex flex-col items-center justify-center gap-4">
//                     <div className="w-[35%]">
//                         <h2>
//                             &rdquo;Leverage advanced AI tools to streamline tasks, optimize workflows, and
//                             achieve more in less time.&ldquo;
//                         </h2>
//                     </div>

//                     <button className="bg-[#F7A554] rounded-full py-2 px-6 text-base">
//                         Get Started
//                     </button>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Hero


import OrbitCircle from "@/components/OrbitCircle";

const Hero = () => {
    return (
        <div
            className="relative w-full min-h-screen text-white pt-8"
            style={{
                background: "radial-gradient(circle, rgba(67,48,32) 0%, rgba(29,24,22,1) 100%)",
            }}
        >
            {/* Orbit Circle in the Background */}
            <div className="absolute inset-0 flex w-full items-baseline justify-center z-0">
                <OrbitCircle />
            </div>

            {/* Content on Top */}
            <div className="relative w-full flex flex-col items-center z-10 px-4 md:px-8">
                {/* Tagline */}
                <div className="border rounded-full border-[#F7A554] px-4 py-1 mb-2 text-sm md:text-base">
                    &rdquo;Leverage advanced AI tools
                </div>

                {/* Main Heading */}
                <div className="text-center bg-transparent mb-6">
                    <h2 className="text-3xl md:text-5xl font-medium">
                        Enhance your productivity through the power of AI
                    </h2>
                </div>

                {/* Subtitle */}
                <div className="text-center text-base md:text-xl font-medium mb-6 px-4 lg:w-2/3">
                    <h2>
                        &rdquo;Leverage advanced AI tools to streamline tasks, optimize workflows,
                        and achieve more in less time.&ldquo;
                    </h2>
                </div>

                {/* Call-to-Action Button */}
                <div>
                    <button className="bg-[#F7A554] rounded-full py-2 px-6 text-sm md:text-base">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
