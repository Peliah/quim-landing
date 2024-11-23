import OrbitingCircles from "../ui/orbiting-circles"
import mercury from '../../assets/images/mercury.png'
import venus from '../../assets/images/venus.png'
import earth from '../../assets/images/earth.png'
import mars from '../../assets/images/mars.png'
import jupiter from '../../assets/images/Jupiter.png'
import saturn from '../../assets/images/saturn.png'
import neptune from '../../assets/images/neptune.png'
import uranus from '../../assets/images/uranus.png'
import aiImage from '../../assets/images/ai-generated-concept-human.png'
const OrbitCirlce = () => {
    return (
        <div className="relative flex w-full h-screen flex-col items-center justify-center mt-56">
            {/* <img src={aiImage} alt="aiImage" className="w-5/12 z-20" /> */}

            <div
                className="absolute h-30 w-[40%] bg-transparent z-10 bg-clip-border border-white"
                style={{
                    clipPath: `polygon(0% 25%, 100% 25%, 100% 65%, 0% 65%)`,
                    boxSizing: "border-box",
                }}
            >
                <img src={aiImage} alt="Blurred aiImage" className="w-full h-full object-cover" />
            </div>


            {/* Clear Centerpiece */}
            <div className="absolute h-30 w-[40%]"
                style={{
                    filter: "blur(10px)",
                }}
            >
                <img src={aiImage} alt="Center aiImage" className="w-full h-full object-cover" />
            </div>




            <OrbitingCircles
                className="size-[100px] border-none bg-transparent"
                duration={40}
                delay={10}
                radius={400}
                path
            >
                <img src={mercury} alt="mercury" />

            </OrbitingCircles>

            <OrbitingCircles
                className="size-[100px] border-none bg-transparent"
                duration={40}
                delay={20}
                radius={400}
                path
            >
                <img src={venus} alt="venus" />

            </OrbitingCircles>

            <OrbitingCircles
                className="size-[100px] border-none bg-transparent"
                duration={40}
                delay={30}
                radius={400}
                path
            >
                <img src={earth} alt="earth" />

            </OrbitingCircles>

            <OrbitingCircles
                className="size-[100px] border-none bg-transparent"
                duration={40}
                delay={40}
                radius={400}
                path
            >
                <img src={mars} alt="mars" />

            </OrbitingCircles>


            <OrbitingCircles
                className="size-[100px] border-none bg-transparent"
                duration={40}
                delay={10}
                radius={650}
                reverse
                path
            >
                <img src={jupiter} alt="jupiter" />

            </OrbitingCircles>

            <OrbitingCircles
                className="size-[200px] border-none bg-transparent"
                duration={40}
                delay={30}
                radius={650}
                reverse
                path
            >
                <img src={saturn} alt="saturn" />

            </OrbitingCircles>

            <OrbitingCircles
                className="size-[100px] border-none bg-transparent"
                duration={40}
                delay={40}
                radius={650}
                reverse
                path
            >
                <img src={neptune} alt="neptune" />

            </OrbitingCircles>


            <OrbitingCircles
                className="size-[200px] border-none bg-transparent"
                duration={40}
                delay={60}
                radius={650}
                reverse
                path
            >
                <img src={uranus} alt="uranus" />

            </OrbitingCircles>

        </div>
    )
}

export default OrbitCirlce