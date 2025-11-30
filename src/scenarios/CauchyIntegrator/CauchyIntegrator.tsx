export default function CauchyIntegrator() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-indigo-900/20 to-indigo-800/20 border border-indigo-500/30 rounded-xl p-8">
        <div className="text-center mb-8">
          <span className="text-6xl mb-4 block">∮</span>
          <h1 className="text-3xl font-heading font-bold mb-2">Integrador de Cauchy</h1>
          <p className="text-gray-400">Objetivo 5: Integración Compleja</p>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 text-indigo-400">🎯 Misión</h2>
          <p className="text-gray-300 mb-4">
            Viaja a través de curvas en el plano complejo, evaluando integrales de línea
            y aplicando el poderoso Teorema de Cauchy.
          </p>
          <p className="text-gray-400">
            Encuentra singularidades, calcula residuos y determina el valor de integrales complejas.
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
