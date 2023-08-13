import { motion } from "framer-motion";

const transition = (OgComponant) => {
    return () =>(
        <>
            <OgComponant />
            <motion.div 
                className="slide-in" 
                initial={{scaleY : 0}} 
                animate={{scaleY : 0}} 
                exit={{scaleY : 1}} 
                transition={{duration:0.8, ease: [.86,0,.15,1]}}
            />
            <motion.div
                className="slide-out" 
                initial={{scaleY : 1}} 
                animate={{scaleY : 0}} 
                exit={{scaleY : 0}} 
                transition={{duration:0.8, ease: [.86,0,.15,1]}}
            />
        </>
    )
}

export default transition;