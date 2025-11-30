export default function ComplexWorld() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-blue-900/20 to-cyan-800/20 border border-blue-500/30 rounded-xl p-8">
        <div className="text-center mb-8">
          <span className="text-6xl mb-4 block">🌐</span>
          <h1 className="text-3xl font-heading font-bold mb-2">Mundo Complejo</h1>
          <p className="text-gray-400">Objetivo 4: Funciones de Variable Compleja</p>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 text-cyan-400">🧮 Misión</h2>
          <p className="text-gray-300 mb-4">
            Explora visualmente el plano complejo. Investiga funciones f(z) = u(x,y) + i·v(x,y)
            y verifica si son "analíticas" (derivables en todo punto).
          </p>
          <p className="text-gray-400">
            Usa las ecuaciones de Cauchy-Riemann para determinar la analiticidad de funciones complejas.
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
