export default function FourierHarmonizer() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-violet-900/20 to-violet-800/20 border border-violet-500/30 rounded-xl p-8">
        <div className="text-center mb-8">
          <span className="text-6xl mb-4 block">🎵</span>
          <h1 className="text-3xl font-heading font-bold mb-2">Armonizador de Fourier</h1>
          <p className="text-gray-400">Objetivo 3: Series de Fourier</p>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 text-violet-400">🎹 Misión</h2>
          <p className="text-gray-300 mb-4">
            Usa un sintetizador musical-matemático para "componer" funciones periódicas
            descomponiéndolas en componentes armónicos (senos y cosenos).
          </p>
          <p className="text-gray-400">
            Calcula coeficientes a₀, aₙ, bₙ y observa cómo la aproximación mejora con más términos.
          </p>
        </div>

        <div className="text-center">
          <div className="inline-block bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-6 py-4">
            <p className="text-yellow-400 font-bold mb-2">🚧 En Desarrollo</p>
            <p className="text-gray-400 text-sm">
              Este escenario está siendo implementado. ¡Próximamente disponible!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
