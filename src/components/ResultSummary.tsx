"use client";

type CardProps = {
  title: string;
  value: string;
  highlight?: boolean;
};

function Card({ title, value, highlight = false }: CardProps) {
  return (
    <div className="p-5 rounded-2xl bg-white/80 border border-purple-100 shadow-md">
      <p className="text-sm text-gray-800">{title}</p>
      <p className={`text-2xl font-semibold ${highlight ? "text-purple-700" : "text-gray-400"}`}>
        {value}
      </p>
    </div>
  );
}

type ResultSummaryProps = {
  cuota: number;
  totalPagado: number;
  intereses: number;
  sobrecosto: number;
};

function formatCOP(value: number): string {
  if (Number.isNaN(value) || !Number.isFinite(value)) return "$ 0";
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ResultSummary({
  cuota,
  totalPagado,
  intereses,
  sobrecosto,
}: ResultSummaryProps) {
  return (
    <section className="grid gap-4">
      <Card title="Cuota mensual" value={formatCOP(cuota)} />
      <Card title="Total pagado" value={formatCOP(totalPagado)} />
      <Card title="Intereses pagados" value={formatCOP(intereses)} highlight />
      <Card title="Sobrecosto" value={`${sobrecosto.toFixed(1)}%`} />
    </section>
  );
}