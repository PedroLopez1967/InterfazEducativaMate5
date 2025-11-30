import { useState } from 'react';
import { ratioTest, rootTest } from '../../utils/seriesCalculations';

interface ConvergenceTestsProps {
  expression: (n: number, beta: number) => number;
  beta: number;
  onTestComplete?: (testName: string, result: boolean | null) => void;
}

export default function ConvergenceTests({ expression, beta, onTestComplete }: ConvergenceTestsProps) {
  const [ratioResult, setRatioResult] = useState<{ limit: number; converges: boolean | null } | null>(null);
  const [rootResult, setRootResult] = useState<{ limit: number; converges: boolean | null } | null>(null);

  const handleRatioTest = () => {
    const result = ratioTest(expression, beta);
    setRatioResult(result);
    onTestComplete?.('ratio', result.converges);
  };

  const handleRootTest = () => {
    const result = rootTest(expression, beta);
    setRootResult(result);
    onTestComplete?.('root', result.converges);
  };

  const getResultColor = (converges: boolean | null) => {
    if (converges === null) return 'text-yellow-400';
    return converges ? 'text-green-400' : 'text-red-400';
  };

  const getResultText = (converges: boolean | null) => {
    if (converges === null) return 'INDEFINIDO (L = 1)';
    return converges ? 'CONVERGE' : 'DIVERGE';
  };

  return (
    <div className="bg-gray-800/50 rounded-lg p-6">
      <h3 className="text-xl font-bold text-blue-400 mb-4">🧮 Pruebas de Convergencia</h3>

      <div className="space-y-6">
        {/* Prueba de la Razón */}
        <div className="bg-gray-900/50 rounded-lg p-4">
          <h4 className="font-bold text-white mb-2">📊 Prueba de la Razón</h4>
          <div className="text-sm text-gray-300 mb-4">
            <p className="mb-2">Calcula: lim<sub>n→∞</sub> |a<sub>n+1</sub>/a<sub>n</sub>| = L</p>
            <div className="bg-gray-800 p-3 rounded border border-gray-700">
              <p className="text-green-400">L &lt; 1 → CONVERGE</p>
              <p className="text-red-400">L &gt; 1 → DIVERGE</p>
              <p className="text-yellow-400">L = 1 → INDEFINIDO</p>
            </div>
          </div>

          <button
            onClick={handleRatioTest}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
          >
            Calcular L
          </button>

          {ratioResult && (
            <div className="mt-4 bg-gray-800 p-4 rounded border border-gray-700">
              <p className="text-gray-400 mb-2">Resultado:</p>
              <p className="text-2xl font-bold mb-2">
                L ≈ <span className="text-blue-400">{ratioResult.limit.toFixed(6)}</span>
              </p>
              <p className={`text-lg font-bold ${getResultColor(ratioResult.converges)}`}>
                La serie {getResultText(ratioResult.converges)}
              </p>
            </div>
          )}
        </div>

        {/* Prueba de la Raíz */}
        <div className="bg-gray-900/50 rounded-lg p-4">
          <h4 className="font-bold text-white mb-2">📈 Prueba de la Raíz</h4>
          <div className="text-sm text-gray-300 mb-4">
            <p className="mb-2">Calcula: lim<sub>n→∞</sub> ⁿ√|a<sub>n</sub>| = L</p>
            <div className="bg-gray-800 p-3 rounded border border-gray-700">
              <p className="text-green-400">L &lt; 1 → CONVERGE</p>
              <p className="text-red-400">L &gt; 1 → DIVERGE</p>
              <p className="text-yellow-400">L = 1 → INDEFINIDO</p>
            </div>
          </div>

          <button
            onClick={handleRootTest}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition"
          >
            Calcular L
          </button>

          {rootResult && (
            <div className="mt-4 bg-gray-800 p-4 rounded border border-gray-700">
              <p className="text-gray-400 mb-2">Resultado:</p>
              <p className="text-2xl font-bold mb-2">
                L ≈ <span className="text-purple-400">{rootResult.limit.toFixed(6)}</span>
              </p>
              <p className={`text-lg font-bold ${getResultColor(rootResult.converges)}`}>
                La serie {getResultText(rootResult.converges)}
              </p>
            </div>
          )}
        </div>

        {/* Información adicional */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
          <p className="text-sm text-blue-200">
            💡 <strong>Tip:</strong> Usa diferentes pruebas para confirmar tu resultado.
            Si una prueba no es concluyente (L=1), intenta otra.
          </p>
        </div>
      </div>
    </div>
  );
}
