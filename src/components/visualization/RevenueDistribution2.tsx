"use client"
import { useState } from "react"
import { TrendingUp } from "lucide-react"
import { Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart with an active sector"

const chartData = [
	{ category: "sponsorships", value: 35, fill: "var(--color-sponsorships)" },
	{ category: "partnerships", value: 45, fill: "var(--color-partnerships)" },
	{ category: "subscription", value: 20, fill: "var(--color-subscription)" },
];

const chartConfig = {
	value: {
		label: "Market Share in %-",
	},
	sponsorships: {
		label: "Sponsorships",
		color: "hsl(var(--chart-2))",
	},
	partnerships: {
		label: "Partnerships",
		color: "hsl(var(--chart-1))",
	},
	subscription: {
		label: "Subscription",
		color: "hsl(var(--chart-3))",
	},
} satisfies ChartConfig;

export function RevenueDistribution2() {
	// Step 2: Manage the active index state
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const [activeTempIndex, setActiveTempIndex] = useState<number>(activeIndex);

	// Step 3: Function to handle mouse events
	const onPieEnter = (_: unknown, index: number) => {
		setActiveTempIndex(index);
	};

	const onPieLeave = () => {
		setActiveTempIndex(-1);
	};

	const onPieClick = (e: unknown, index: number) => {
		setActiveIndex(index);
	};

	console.log("activeTempIndex", activeTempIndex);

	return (
		<Card className='flex flex-col'>
			<CardHeader className='items-center pb-0'>
				<CardTitle>Revenue Distribution</CardTitle>
				<CardDescription>January - December 2024</CardDescription>
			</CardHeader>
			<CardContent className='flex-1 pb-0'>
				<ChartContainer
					config={chartConfig}
					className='mx-auto aspect-square max-h-[250px]'
				>
					<PieChart>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Pie
							data={chartData}
							dataKey='value'
							nameKey='category'
							innerRadius={60}
							strokeWidth={5}
							// Step 4: Use the activeIndex state here
							activeIndex={
								activeTempIndex !== -1
									? activeTempIndex
									: activeIndex
							}
							onMouseEnter={onPieEnter}
							onMouseLeave={onPieLeave}
							onClick={onPieClick}
							activeShape={(props: PieSectorDataItem) => (
								<Sector
									{...props}
									outerRadius={props.outerRadius! + 10}
								/>
							)}
						/>
					</PieChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className='flex-col gap-2 text-sm'>
				<div className='flex items-center gap-2 font-medium leading-none'>
					Trending up by 5.2% this month{" "}
					<TrendingUp className='h-4 w-4' />
				</div>
				<div className='leading-none text-muted-foreground'>
					Showing total value for the last 12 months
				</div>
			</CardFooter>
		</Card>
	);
}
