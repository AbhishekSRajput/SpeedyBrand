import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayIcon } from "lucide-react";
import Image from "next/image";
import { topArtistData } from "@/data";

export function TopArtistHeroCard() {
	return (
		<Card className='w-full max-w-4xl overflow-hidden m-auto'>
			<CardContent className='p-0'>
				<div className='flex flex-col md:flex-row'>
					<div className='flex-1 p-6 md:p-8 space-y-4 md:space-y-6'>
						<div className='space-y-2'>
							<Badge className='mb-2' variant='secondary'>
								Top Artist
							</Badge>
							<h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
								{topArtistData.name}
							</h2>
							<p className='text-base md:text-lg text-muted-foreground'>
								{topArtistData.genre} •{" "}
								{topArtistData.listeners}
							</p>
						</div>
						<p className='text-sm md:text-base text-muted-foreground'>
							{topArtistData.description}
						</p>
						<Button
							className='w-full md:w-auto rounded-full'
							size='lg'
						>
							<PlayIcon className='mr-2 h-5 w-5' />
							Play Top Tracks
						</Button>
					</div>

					<div className='flex-1 relative order-first md:order-last'>
						<Image
							src={topArtistData.imageSrc}
							alt='top artist'
							width={500}
							height={500}
						/>
						<Badge
							className='absolute top-4 left-4 md:hidden'
							variant='secondary'
						>
							Top Artist
						</Badge>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
