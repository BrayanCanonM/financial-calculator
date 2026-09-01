"use client";

import { useState, useMemo } from "react";
import InputField from "./InputField";
import ResultSummary from "./ResultSummary";
import RightPanel from "./RightPanel";

function monthlyPayment(
  principal: number,
  monthlyRate: number,
  months: number
): number {
  if (monthlyRate === 0) return principal / months;
  const factor = Math.pow(1 + monthlyRate, months);
  return (principal * monthlyRate * factor) / (factor - 1);
}

export default function CalculatorCard() {
  const [monto, setMonto] = useState<string>("0");
  const [tasa, setTasa] = useState<string>("0");
  const [plazo, setPlazo] = useState<string>("0");

  const { cuota, totalPagado, intereses, sobrecosto } = useMemo(() => {
    const P = parseFloat(monto) || 0;
    const rate = (parseFloat(tasa) || 0) / 100;
    const n = parseInt(plazo) || 1;

    const cuotaCalc = monthlyPayment(P, rate, n);
    const total = cuotaCalc * n;
    const interest = total - P;
    const over = P > 0 ? (interest / P) * 100 : 0;

    return {
      cuota: cuotaCalc,
      totalPagado: total,
      intereses: interest,
      sobrecosto: over,
    };
  }, [monto, tasa, plazo]);

  return (
    <div className="w-full h-screen p-6 flex items-center justify-center">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        {/* Panel izquierdo — calculadora */}
        <div className="bg-white/80 backdrop-blur-xl border border-purple-100 p-10 rounded-3xl shadow-2xl flex flex-col justify-between">
          <div>
            {/* 
              IMPORTANTE: No hay <h1> aquí.
              El <h1> principal vive en page.tsx para SEO correcto.
              Este título usa <h2> para no romper la jerarquía.
            */}
            <h2 className="text-3xl font-bold mb-6 text-purple-900">
              Simulador de crédito
            </h2>

            <section className="border border-purple-200 bg-white/50 rounded-2xl px-4 py-3 shadow-sm">
              <InputField
                label="Monto del crédito"
                value={monto}
                onChange={(e) =>
                  setMonto(e.target.value.replace(/[^0-9.]/g, ""))
                }
              />
              <InputField
                label="Tasa de interés mensual (%)"
                value={tasa}
                onChange={(e) =>
                  setTasa(e.target.value.replace(/[^0-9.]/g, ""))
                }
              />
              <InputField
                label="Plazo (meses)"
                value={plazo}
                onChange={(e) =>
                  setPlazo(e.target.value.replace(/[^0-9]/g, ""))
                }
              />
            </section>
          </div>

          <ResultSummary
            cuota={cuota}
            totalPagado={totalPagado}
            intereses={intereses}
            sobrecosto={sobrecosto}
          />
        </div>

        {/* Panel derecho — reflexión y consejos */}
        <RightPanel
          cuota={cuota}
          intereses={intereses}
          sobrecosto={sobrecosto}
          plazo={parseInt(plazo)}
          monto={parseFloat(monto)}
        />
      </div>
    </div>
  );
}