"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A pie chart with a label list";

const chartData = [
	{ category: "subscription", value: 35, fill: "var(--color-subscription)" },
	{ category: "partnerships", value: 45, fill: "var(--color-partnerships)" },
	{ category: "sponsorships", value: 20, fill: "var(--color-sponsorships)" },
];

const chartConfig = {
	value: {
		label: "Market Share in %-",
	},
	subscription: {
		label: "Subscription",
		color: "hsl(var(--chart-1))",
	},
	partnerships: {
		label: "Partnerships",
		color: "hsl(var(--chart-2))",
	},
	sponsorships: {
		label: "Sponsorships",
		color: "hsl(var(--chart-3))",
	}
} satisfies ChartConfig;

export function RevenueDistribution() {
	return (
		<Card className='flex flex-col justify-between h-full'>
			<CardHeader className='items-center pb-0'>
				<CardTitle>Revenue Distribution</CardTitle>
				<CardDescription>January - December 2024</CardDescription>
			</CardHeader>
			<CardContent className='flex-1 pb-0'>
				<ChartContainer
					config={chartConfig}
					className='mx-auto aspect-square max-h-[428px]'
				>
					<PieChart className="cursor-pointer" onClick={(e)=> console.log(e)}>
						<ChartTooltip
							content={
								<ChartTooltipContent
									nameKey='value'
									hideLabel
								/>
							}
						/>
						<Pie data={chartData} dataKey='value'>
							<LabelList
								dataKey='category'
								className='fill-background'
								stroke='none'
								fontSize={12}
								formatter={(value: keyof typeof chartConfig) =>
									chartConfig[value]?.label 
								}
							/>
						</Pie>
					</PieChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className='flex-col gap-2 text-sm'>
				<div className='flex items-center gap-2 font-medium leading-none'>
					Trending up by 5.2% this month{" "}
					<TrendingUp className='h-9 w-9' />
				</div>
				<div className='leading-none text-muted-foreground'>
					Showing total visitors for the last 12 months
				</div>
			</CardFooter>
		</Card>
	);
}
