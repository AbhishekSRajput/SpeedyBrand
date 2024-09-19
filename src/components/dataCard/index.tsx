import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Activity } from "lucide-react";
import { metrics } from "@/data";

const DataCard = () => {
	const dataSymbol: { [key: string]: string } = {
		number: "+",
		currency: "$",
		string: "",
	};
	return (
		<>
			{metrics?.length > 0 &&
				metrics.map((metric) => (
					<Card key={metric.key} x-chunk='dashboard-01-chunk-3'>
						<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
							<CardTitle className='text-sm font-medium'>
								{metric.key}
							</CardTitle>
							<Activity className='h-4 w-4 text-muted-foreground' />
						</CardHeader>
						<CardContent>
							<div className='text-2xl font-bold'>
								{dataSymbol[metric.type]}
								{metric.value}
							</div>
							<p className='text-xs text-muted-foreground'>
								{metric.change}
							</p>
						</CardContent>
					</Card>
				))}
		</>
	);
};

export default DataCard;
