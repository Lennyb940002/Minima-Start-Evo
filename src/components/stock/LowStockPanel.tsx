import React from 'react';
import { Trash2 } from 'lucide-react';
import { LowStockItem } from './types';

interface LowStockPanelProps {
    items: LowStockItem[];
    onDelete: (reference: string) => void;
}

export function LowStockPanel({ items, onDelete }: LowStockPanelProps) {
    return (
        <div className="bg-red-600/20 border border-red-600/80 rounded-2xl p-6 h-[500px]">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">
                    Stocks Critiques
                    <span className="ml-2 px-2 py-1 bg-red-600 rounded-full text-sm">
                        {items.length}
                    </span>
                </h2>
            </div>
            <div className="space-y-4">
                {items.map((item) => (
                    <div
                        key={item.reference}
                        className="flex items-center justify-between p-3 bg-black rounded-lg"
                    >
                        <div>
                            <p className="text-white font-mono">{item.product}</p>
                            <p className="text-gray-400 text-sm font-mono">
                                {item.reference}
                                <span className="ml-2">Stock: {item.stock}</span>
                            </p>
                        </div>
                        <button
                            onClick={() => onDelete(item.reference)}
                            className="p-2 text-red-400 hover:text-red-300 hover:bg-red-950/30 rounded"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}