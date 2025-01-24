"use client";

interface TotalSummaryProps {
  total: number;
  travelers: { adults: string; children: string };
}

export function TotalSummary({ total, travelers }: TotalSummaryProps) {
  return (
    <div className="bg-muted/50 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-medium">Total Estimado</h3>
          <p className="text-sm text-muted-foreground">
            Para {parseInt(travelers.adults) + parseInt(travelers.children)} viajeros
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">${total}</div>
          <p className="text-sm text-muted-foreground">Impuestos incluidos</p>
        </div>
      </div>
    </div>
  );
}