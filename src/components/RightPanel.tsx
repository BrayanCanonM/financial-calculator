"use client";

import React from "react";

function formatCOP(value: number): string {
  if (Number.isNaN(value) || !Number.isFinite(value)) return "$ 0";
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

const generarConsejo = (
  cuota: number,
  intereses: number,
  plazo: number,
  monto: number
): string => {
  const consejos = [
    `En solo 3 meses ahorrarías ${formatCOP(cuota * 3)}. Eso ya cubre una parte importante del valor y reduce significativamente lo que tendrías que financiar.`,
    `Si pospones esta compra 6 meses y ahorras ${formatCOP(cuota)} cada mes, tendrías ${formatCOP(cuota * 6)}. Eso es dinero real que evita que pagues ${formatCOP(intereses)} en intereses.`,
    `En 9 meses podrías reunir ${formatCOP(cuota * 9)}. Entre más reduces el monto a financiar, menos dinero terminas regalando en intereses.`,
    `En un año ahorrarías ${formatCOP(cuota * 12)}. Eso puede representar una gran parte del producto sin necesidad de endeudarte por completo.`,
    `Vas a pagar ${formatCOP(intereses)} en intereses. Con solo ahorrar ${formatCOP(cuota)} durante algunos meses, puedes reducir drásticamente ese valor.`,
    `Cada mes que esperas y ahorras ${formatCOP(cuota)}, es un mes en el que reduces cuánto dinero termina perdiéndose en intereses.`,
    `Este crédito te cuesta ${formatCOP(intereses)} adicionales. Ahorrar durante unos meses cambia completamente ese resultado.`,
    `No necesitas esperar años. Solo algunos meses de ahorro pueden evitar que ${formatCOP(intereses)} desaparezcan en intereses.`,
  ];
  return consejos[Math.floor(Math.random() * consejos.length)];
};

type RightPanelProps = {
  cuota: number;
  intereses: number;
  sobrecosto: number;
  plazo: number;
  monto: number;
};

export default function RightPanel({
  cuota,
  intereses,
  sobrecosto,
  plazo,
  monto,
}: RightPanelProps) {
  const [mostrarConsejo, setMostrarConsejo] = React.useState(false);
  const [consejo, setConsejo] = React.useState<string>("");

  React.useEffect(() => {
    setMostrarConsejo(false);
    setConsejo("");
  }, [cuota, intereses, plazo, monto]);

  const handleMostrarConsejo = () => {
    const nuevoConsejo = generarConsejo(cuota, intereses, plazo, monto);
    setConsejo(nuevoConsejo);
    setMostrarConsejo(true);
  };

  return (
    <aside className="h-full p-10 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-2xl flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Reflexiona antes de decidir
        </h2>

        <p className="text-lg mb-4">
          Este crédito implica un sobrecosto real de{" "}
          <strong>{sobrecosto.toFixed(1)}%</strong>.
        </p>
        <p className="text-lg mb-4">
          Esto significa que le regalarás al banco{" "}
          <strong>{formatCOP(intereses)}</strong>.
        </p>

        {!mostrarConsejo && (
          <button
            onClick={handleMostrarConsejo}
            className="mt-6 px-8 py-4 bg-white text-purple-700 font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            ¿Consejo financiero?
          </button>
        )}

        {mostrarConsejo && (
          <div className="bg-white text-purple-900 rounded-2xl p-6 shadow-xl mt-8 animate-fadeIn">
            <p className="text-sm text-gray-500 mb-1">
              Una alternativa financiera
            </p>
            <p className="text-md font-medium">{consejo}</p>
          </div>
        )}
      </div>

      <div className="mt-12 border-t border-white/30 pt-8 text-white/90">
        <h3 className="text-xl font-semibold mb-4 text-white">
          ¿Vale la pena adquirir crédito?
        </h3>

        <div className="mb-5">
          <h4 className="text-xl font-semibold mb-2 text-white">
            Cuándo sí vale la pena
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              El crédito genera un retorno económico superior al costo de los
              intereses.
            </li>
            <li>Se trata de una urgencia médica o necesidad crítica.</li>
            <li>
              Cuando un familiar tiene el monto que necesitas y le das un
              interés menor que al banco, ambos se ven beneficiados.
            </li>
            <li>
              Tienes flujo de caja estable y no compromete tus gastos
              esenciales.
            </li>
            <li>El plazo es corto y el impacto de intereses es reducido.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-2 text-white">
            Cuándo no vale la pena
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Es para consumo impulsivo o compras no esenciales.</li>
            <li>La cuota presiona tu presupuesto mensual.</li>
            <li>Ya tienes otras deudas activas.</li>
            <li>Puedes ahorrar el dinero en pocos meses.</li>
          </ul>
        </div>
      </div>
    </aside>
  );
}