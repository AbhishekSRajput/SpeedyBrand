"use client";

import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ViewIcon } from "lucide-react";

const artists = [
	{
		name: "Taylor Swift",
		genre: "Pop",
		listeners: "82M",
		description:
			"Taylor Swift is an American singer-songwriter known for narrative songs about her personal life. She has become one of the best-selling music artists of all time.",
		image: "/taylor_swift.webp",
	},
	{
		name: "Ed Sheeran",
		genre: "Pop",
		listeners: "75M",
		description:
			"Ed Sheeran is an English singer-songwriter known for his soulful voice and heartfelt lyrics. He has won multiple Grammy Awards and sold millions of records worldwide.",
		image: "/ed_sheeran.webp",
	},
	{
		name: "Beyoncé",
		genre: "R&B",
		listeners: "70M",
		description:
			"Beyoncé is an American singer, songwriter, record producer, and actress. She is one of the world's best-selling recording artists and a multi-time Grammy Award winner.",
		image: "/beyonce.webp",
	},
	{
		name: "Drake",
		genre: "Hip-Hop",
		listeners: "68M",
		description:
			"Drake is a Canadian rapper, singer, songwriter and entrepreneur. He is one of the world's best-selling music artists and has broken numerous streaming records.",
		image: "/drake.jpg",
	},
	{
		name: "Ariana Grande",
		genre: "Pop",
		listeners: "65M",
		description:
			"Ariana Grande is an American singer, songwriter, and actress. She has become one of the most successful and influential pop artists of her generation.",
		image: "/ariana_grande.jpg",
	},
];

export default function TopArtistCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);
	// const [showButtons, setShowButtons] = useState(true);

	const nextSlide = () => {
		setIsTransitioning(true);
		setTimeout(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % artists.length);
			setIsTransitioning(false);
		}, 500);
	};

	const prevSlide = () => {
		setIsTransitioning(true);
		setTimeout(() => {
			setCurrentIndex(
				(prevIndex) => (prevIndex - 1 + artists.length) % artists.length
			);
			setIsTransitioning(false);
		}, 500);
	};

	useEffect(() => {
		const timer = setInterval(nextSlide, 9000);
		return () => clearInterval(timer);
	}, []);

	const handlers = useSwipeable({
		onSwipedLeft: nextSlide,
		onSwipedRight: prevSlide,
		preventScrollOnSwipe: true,
		trackMouse: true,
	});

	const currentArtist = artists[currentIndex];

	return (
		<div className='relative h-full w-full max-w-4xl mx-auto' {...handlers}>
			<Card className='overflow-hidden h-full'>
				<CardContent className='p-0 h-full flex flex-col justify-center items-center'>
					<div className='h-full'>
						{/* Text content */}
						<div className='flex-1 p-6 md:p-8 space-y-4 md:space-y-6 overflow-hidden'>
							<div
								className={`space-y-2 transition-all duration-500 ease-in-out ${
									isTransitioning
										? "-translate-y-full opacity-0"
										: "translate-y-0 opacity-100"
								}`}
							>
								<Badge className='mb-2' variant='secondary'>
									Top {currentIndex + 1} Artist
								</Badge>
								<h2 className='text-2xl md:text-3xl font-bold tracking-tight'>
									{currentArtist.name}
								</h2>
								<p className='text-base md:text-md text-muted-foreground'>
									{currentArtist.genre} •{" "}
									{currentArtist.listeners} monthly listeners
								</p>
							</div>
							<p
								className={`text-sm text-muted-foreground transition-all duration-500 ease-in-out delay-100 ${
									isTransitioning
										? "-translate-y-full opacity-0"
										: "translate-y-0 opacity-100"
								}`}
							>
								{currentArtist.description}
							</p>
							<Button
								className={`w-full md:w-auto rounded-full transition-all space-x-2 duration-500 ease-in-out delay-200 ${
									isTransitioning
										? "-translate-y-full opacity-0"
										: "translate-y-0 opacity-100"
								}`}
								size='lg'
							>
								<ViewIcon />
								<span>View Top Artists</span>
							</Button>
						</div>
					</div>
					<div className='flex space-x-2 p-2 justify-center'>
						{artists.map((_, index) => (
							<div
								key={index}
								className={`w-2 h-2 rounded-full ${
									index === currentIndex
										? "bg-primary"
										: "bg-primary/30"
								}`}
							/>
						))}
					</div>
				</CardContent>
			</Card>
			{/* Indicators */}
		</div>
	);
}
