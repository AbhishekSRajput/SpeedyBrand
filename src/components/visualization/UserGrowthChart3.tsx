"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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

export const description = "A multiple line chart";

const chartData = [
	// January Data
	{ month: "January", users: 150, activeUsers: 120 },

	// February Data
	{ month: "February", users: 330, activeUsers: 270 },

	// March Data
	{ month: "March", users: 480, activeUsers: 390 },

	// April Data (Existing)
	{ month: "April", users: 222, activeUsers: 150 },

	// May Data (Existing)
	{ month: "May", users: 165, activeUsers: 220 },

	// June Data (Existing)
	{ month: "June", users: 178, activeUsers: 200 },

	// July Data
	{ month: "July", users: 160, activeUsers: 180 },

	// August Data
	{ month: "August", users: 340, activeUsers: 270 },

	// September Data
	{ month: "September", users: 380, activeUsers: 320 },

	// October Data
	{ month: "October", users: 430, activeUsers: 350 },

	// November Data
	{ month: "November", users: 460, activeUsers: 400 },

	// December Data
	{ month: "December", users: 490, activeUsers: 420 },
];

const chartConfig = {
	users: {
		label: "Users",
		color: "hsl(var(--chart-1))",
	},
	activeUsers: {
		label: "Active Users",
		color: "hsl(var(--chart-2))",
	},
} satisfies ChartConfig;

export function UserGrowthChart3() {
	return (
		<Card className='h-full flex flex-col justify-between'>
			<CardHeader>
				<CardTitle>User Growth</CardTitle>
				<CardDescription>January - December 2024</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<LineChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='month'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent />}
						/>
						<Line
							dataKey='users'
							type='monotone'
							stroke='var(--color-users)'
							strokeWidth={2}
							dot={false}
						/>
						<Line
							dataKey='activeUsers'
							type='monotone'
							stroke='var(--color-activeUsers)'
							strokeWidth={2}
							dot={false}
						/>
					</LineChart>
				</ChartContainer>
			</CardContent>
			<CardFooter>
				<div className='flex w-full items-start gap-2 text-sm'>
					<div className='grid gap-2'>
						<div className='flex items-center gap-2 font-medium leading-none'>
							Trending up by 5.2% this month
							<TrendingUp className='h-4 w-4' />
						</div>
						<div className='flex items-center gap-2 leading-none text-muted-foreground'>
							Showing total visitors for the last 12 months
						</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}
