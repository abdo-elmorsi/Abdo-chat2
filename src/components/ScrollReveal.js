import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const ScrollReveal = ({
    children,
    className = null,
    variants,
    custom = 0.1,
}) => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.1,
    })

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variants}
            custom={custom}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default ScrollReveal