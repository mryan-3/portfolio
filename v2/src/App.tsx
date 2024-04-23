import { useRef, useState } from "react"
import Navbar from '../src/components/Navbar.tsx'
import About from '../src/components/About.tsx'
import Projects from '../src/components/Projects.tsx'

function App() {
    //const divRef = useRef<HTMLDivElement>(null);
    //const [isFocused, setIsFocused] = useState(false);
    //const [position, setPosition] = useState({ x: 0, y: 0 });
    //const [opacity, setOpacity] = useState(0);

    //const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        //if (!divRef.current || isFocused) return;

        //const div = divRef.current;
        //const rect = div.getBoundingClientRect();

        //setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    //};

    //const handleFocus = () => {
        //setIsFocused(true);
        //setOpacity(1);
    //};

    //const handleBlur = () => {
        //setIsFocused(false);
        //setOpacity(0);
    //};

    //const handleMouseEnter = () => {
        //setOpacity(1);
    //};

    //const handleMouseLeave = () => {
        //setOpacity(0);
    //};

    return (

        <>
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
            <div className='relative h-full w-full bg-slate-950'>
                <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]'>
                </div>
                </div>
                </div>
                <Navbar />
                <About />
                <Projects />
                </>
    )
}

export default App
