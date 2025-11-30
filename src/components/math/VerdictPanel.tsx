import { useState } from 'react';
import { useProgressStore } from '../../store/progressStore';

interface VerdictPanelProps {
  correctAnswer: 'converge' | 'diverge';
  beta: number;
  onSubmit?: (isCorrect: boolean) => void;
}

export default function VerdictPanel({ correctAnswer, beta, onSubmit }: VerdictPanelProps) {
  const [verdict, setVerdict] = useState<'converge' | 'diverge' | null>(null);
  const [test, setTest] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const { addPoints } = useProgressStore();

  const handleSubmit = () => {
    if (!verdict || !test) {
      alert('Por favor selecciona un veredicto y la prueba utilizada');
      return;
    }

    const correct = verdict === correctAnswer;
    setIsCorrect(correct);
    setSubmitted(true);

    // Otorgar puntos
    if (correct) {
      addPoints(100);
    }

    onSubmit?.(correct);
  };

  const resetVerdict = () => {
    setVerdict(null);
    setTest('');
    setSubmitted(false);
    setIsCorrect(false);
  };

  if (submitted) {
    return (
      <div className="bg-gray-800/50 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">🎯 Resultado</h3>

        {isCorrect ? (
          <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 mb-4">
            <div className="text-center">
              <div className="text-6xl mb-4">✓</div>
              <h4 className="text-2xl font-bold text-green-400 mb-2">¡Correcto!</h4>
              <p className="text-green-200 mb-4">
                La serie <strong>Σ ln(1/β<sup>n</sup>)</strong> con β={beta} efectivamente <strong>{correctAnswer === 'converge' ? 'CONVERGE' : 'DIVERGE'}</strong>.
              </p>
              <div className="bg-gray-900/50 p-4 rounded">
                <p className="text-yellow-400 font-bold text-xl">+100 puntos</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-6 mb-4">
            <div className="text-center">
              <div className="text-6xl mb-4">✗</div>
              <h4 className="text-2xl font-bold text-red-400 mb-2">Incorrecto</h4>
              <p className="text-red-200 mb-4">
                Tu veredicto fue: <strong>{verdict?.toUpperCase()}</strong>
                <br />
                La respuesta correcta es: <strong>{correctAnswer.toUpperCase()}</strong>
              </p>
              <p className="text-gray-300 text-sm">
                Intenta nuevamente con otra prueba de convergencia.
              </p>
            </div>
          </div>
        )}

        <button
          onClick={resetVerdict}
          className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg font-medium transition"
        >
          Intentar Nuevo Caso
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-800/50 rounded-lg p-6">
      <h3 className="text-xl font-bold text-yellow-400 mb-4">🎯 Tu Veredicto</h3>

      <div className="space-y-4">
        {/* Selección de veredicto */}
        <div>
          <label className="block text-gray-300 mb-2 font-medium">
            La serie Σ ln(1/β<sup>n</sup>) con β={beta}:
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setVerdict('converge')}
              className={`p-4 rounded-lg border-2 transition ${
                verdict === 'converge'
                  ? 'border-green-500 bg-green-500/20 text-green-400'
                  : 'border-gray-600 bg-gray-900/50 text-gray-400 hover:border-green-500/50'
              }`}
            >
              <div className="text-2xl mb-2">✓</div>
              <div className="font-bold">CONVERGE</div>
            </button>
            <button
              onClick={() => setVerdict('diverge')}
              className={`p-4 rounded-lg border-2 transition ${
                verdict === 'diverge'
                  ? 'border-red-500 bg-red-500/20 text-red-400'
                  : 'border-gray-600 bg-gray-900/50 text-gray-400 hover:border-red-500/50'
              }`}
            >
              <div className="text-2xl mb-2">✗</div>
              <div className="font-bold">DIVERGE</div>
            </button>
          </div>
        </div>

        {/* Selección de prueba */}
        <div>
          <label className="block text-gray-300 mb-2 font-medium">
            Prueba utilizada:
          </label>
          <select
            value={test}
            onChange={(e) => setTest(e.target.value)}
            className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Seleccionar prueba...</option>
            <option value="ratio">Prueba de la Razón</option>
            <option value="root">Prueba de la Raíz</option>
            <option value="comparison">Prueba de Comparación</option>
            <option value="integral">Prueba Integral</option>
          </select>
        </div>

        {/* Botón enviar */}
        <button
          onClick={handleSubmit}
          disabled={!verdict || !test}
          className={`w-full px-6 py-3 rounded-lg font-bold text-lg transition ${
            verdict && test
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
          }`}
        >
          Enviar Veredicto
        </button>

        {/* Información */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 text-sm text-blue-200">
          <p>
            💡 <strong>Recuerda:</strong> Justifica tu respuesta con la prueba que aplicaste.
            Un veredicto correcto con justificación vale 100 puntos.
          </p>
        </div>
      </div>
    </div>
  );
}
