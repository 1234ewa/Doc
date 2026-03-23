"use client";

import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export const MotionDiv = motion.div;
export const MotionSection = motion.section;

const revealUp = {
	hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
	},
};

const staggerChildren = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.04,
		},
	},
};

type ScrollRevealProps = ComponentPropsWithoutRef<typeof motion.div> & {
	children: ReactNode;
};

type ScrollRevealSectionProps = ComponentPropsWithoutRef<typeof motion.section> & {
	children: ReactNode;
};

export function ScrollReveal({ children, variants = revealUp, viewport, transition, ...props }: ScrollRevealProps) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={viewport ?? { once: false, amount: 0.2 }}
			variants={variants}
			transition={transition ?? { duration: 0.6 }}
			{...props}
		>
			{children}
		</motion.div>
	);
}

export function ScrollRevealSection({
	children,
	variants = staggerChildren,
	viewport,
	...props
}: ScrollRevealSectionProps) {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={viewport ?? { once: false, amount: 0.12 }}
			variants={variants}
			{...props}
		>
			{children}
		</motion.section>
	);
}

export const scrollRevealVariants = revealUp;

