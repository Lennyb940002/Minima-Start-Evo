import { SalesChartData } from '../sales/types';

interface SalesChartProps {
  data: SalesChartData[];
}

export function SalesChart({ data }: SalesChartProps) {
  const maxValue = Math.max(...data.map(d => d.sales));

  return (
    <div className="bg-black p-6 h-full">
      <div className="h-64 flex items-end space-x-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center"
          >
            <div
              className="w-full bg-yellow-500/20 hover:bg-yellow-500/30 transition-colors rounded-t"
              style={{ height: `${(item.sales / maxValue) * 100}%` }}
            />
            <span className="text-xs text-zinc-400 mt-2">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}