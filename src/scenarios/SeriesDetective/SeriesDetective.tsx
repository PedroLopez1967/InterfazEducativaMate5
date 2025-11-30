import { useState, useEffect } from 'react';
import { BlockMath } from 'react-katex';
import SeriesTermsPlot from '../../components/visualizations/SeriesTermsPlot';
import PartialSumsPlot from '../../components/visualizations/PartialSumsPlot';
import ConvergenceTests from '../../components/math/ConvergenceTests';
import VerdictPanel from '../../components/math/VerdictPanel';
import {
  calculateSeriesTerms,
  calculatePartialSums,
  logarithmicSeries,
  estimateConvergence,
} from '../../utils/seriesCalculations';

export default function SeriesDetective() {
  const [beta] = useState(2); // Puedes cambiar esto o hacerlo configurable
  const [terms, setTerms] = useState<number[]>([]);
  const [partialSums, setPartialSums] = useState<number[]>([]);
  const [convergenceEstimate, setConvergenceEstimate] = useState<{ likelyConverges: boolean; estimatedLimit: number | null }>({
    likelyConverges: false,
    estimatedLimit: null,
  });

  useEffect(() => {
    // Calcular términos de la serie logarítmica
    const calculatedTerms = calculateSeriesTerms(logarithmicSeries, beta, 100);
    setTerms(calculatedTerms);

    // Calcular sumas parciales
    const sums = calculatePartialSums(calculatedTerms);
    setPartialSums(sums);

    // Estimar convergencia
    const estimate = estimateConvergence(sums);
    setConvergenceEstimate(estimate);
  }, [beta]);

  // Para β > 1, la serie diverge
  // Para 0 < β < 1, la serie converge
  const correctAnswer: 'converge' | 'diverge' = beta > 1 ? 'diverge' : 'converge';

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-xl p-6 mb-6">
        <div className="text-center">
          <span className="text-5xl mb-3 block">🔍</span>
          <h1 className="text-3xl font-heading font-bold mb-2">Detective de Series</h1>
          <p className="text-gray-400">Objetivo 1: Convergencia de Series Infinitas</p>
        </div>
      </div>

      {/* Serie bajo investigación */}
      <div className="bg-gray-800/50 rounded-lg p-6 mb-6 border border-gray-700">
        <h2 className="text-xl font-bold mb-4 text-blue-400">📊 Caso #1: Serie bajo Investigación</h2>
        <div className="bg-gray-900/50 p-4 rounded-lg mb-4">
          <p className="text-gray-300 mb-3 text-center">Determina si la siguiente serie converge o diverge:</p>
          <div className="flex justify-center">
            <BlockMath>{`\\sum_{n=1}^{\\infty} \\ln\\left(\\frac{1}{\\beta^n}\\right) = \\sum_{n=1}^{\\infty} (-n \\cdot \\ln(${beta}))`}</BlockMath>
          </div>
          <p className="text-center text-gray-400 mt-3">donde β = {beta}</p>
        </div>
      </div>

      {/* Grid de visualizaciones y herramientas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Columna izquierda: Visualizaciones */}
        <div className="lg:col-span-2 space-y-6">
          <SeriesTermsPlot terms={terms} title="📈 Términos de la Serie (a₁, a₂, a₃, ...)" />
          <PartialSumsPlot
            partialSums={partialSums}
            estimatedLimit={convergenceEstimate.estimatedLimit}
            title="📊 Sumas Parciales (S₁, S₂, S₃, ...)"
          />
        </div>

        {/* Columna derecha: Pruebas y Veredicto */}
        <div className="space-y-6">
          <ConvergenceTests
            expression={logarithmicSeries}
            beta={beta}
          />
          <VerdictPanel correctAnswer={correctAnswer} beta={beta} />
        </div>
      </div>

      {/* Pistas */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
        <h3 className="font-bold text-blue-400 mb-3">💡 Pistas para el Detective</h3>
        <div className="space-y-2 text-sm text-gray-300">
          <p>• <strong>Nivel 1:</strong> Observa el comportamiento de los términos aₙ en el gráfico superior.</p>
          <p>• <strong>Nivel 2:</strong> ¿Las sumas parciales Sₙ se estabilizan o crecen sin límite?</p>
          <p>• <strong>Nivel 3:</strong> Aplica la prueba de la razón y observa el valor de L.</p>
        </div>
      </div>
    </div>
  );
}
