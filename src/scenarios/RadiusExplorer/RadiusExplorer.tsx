export default function RadiusExplorer() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/30 rounded-xl p-8">
        <div className="text-center mb-8">
          <span className="text-6xl mb-4 block">🚀</span>
          <h1 className="text-3xl font-heading font-bold mb-2">Explorador de Radio</h1>
          <p className="text-gray-400">Objetivo 2: Series de Potencias</p>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 text-purple-400">🌌 Misión</h2>
          <p className="text-gray-300 mb-4">
            Emprende una aventura espacial explorando "zonas de convergencia" en el plano x.
            Busca el radio de convergencia de series de potencias.
          </p>
          <p className="text-gray-400">
            Tu nave exploradora te ayudará a mapear las zonas seguras (convergencia) y
            peligrosas (divergencia).
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
