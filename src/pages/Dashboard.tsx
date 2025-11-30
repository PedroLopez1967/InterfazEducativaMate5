import { Link } from 'react-router-dom';
import { scenarios } from '../data/scenarios';
import { useProgressStore } from '../store/progressStore';

export default function Dashboard() {
  const { completedObjectives, totalPoints, scenarioProgress } = useProgressStore();

  const getLevelInfo = (points: number) => {
    if (points >= 3000) return { level: '💎 Maestro', color: 'text-purple-400' };
    if (points >= 1500) return { level: '🥇 Experto', color: 'text-yellow-400' };
    if (points >= 500) return { level: '🥈 Estudiante', color: 'text-gray-300' };
    return { level: '🥉 Aprendiz', color: 'text-amber-600' };
  };

  const levelInfo = getLevelInfo(totalPoints);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Welcome Section */}
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Bienvenido a Matemática V
        </h1>
        <p className="text-xl text-gray-300 mb-2">
          Plataforma Educativa Interactiva
        </p>
        <p className="text-gray-400">
          Explora 5 escenarios gamificados para dominar series, variable compleja y análisis
        </p>

        {/* User Level */}
        <div className="mt-6 inline-flex items-center gap-3 bg-gray-800/50 px-6 py-3 rounded-full border border-gray-700">
          <span className={`text-lg font-bold ${levelInfo.color}`}>
            {levelInfo.level}
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-yellow-400 font-bold">{totalPoints} puntos</span>
          <span className="text-gray-400">•</span>
          <span className="text-green-400 font-bold">
            {completedObjectives.length}/5 objetivos
          </span>
        </div>
      </div>

      {/* Scenarios Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {scenarios.map((scenario, index) => {
          const isCompleted = completedObjectives.includes(scenario.objective);
          const progress = scenarioProgress.get(scenario.id) || 0;

          return (
            <Link
              key={scenario.id}
              to={scenario.route}
              className="group relative bg-gray-800/40 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/60 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Completion Badge */}
              {isCompleted && (
                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <span>✓</span>
                  <span>Completado</span>
                </div>
              )}

              {/* Icon */}
              <div
                className="text-5xl mb-4 group-hover:scale-110 transition-transform"
                style={{ color: scenario.color }}
              >
                {scenario.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-bold mb-2 text-white">
                {scenario.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                {scenario.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Objetivo {scenario.objective}</span>
                <span
                  className={`px-2 py-1 rounded ${
                    scenario.difficulty === 'Básica'
                      ? 'bg-green-500/20 text-green-400'
                      : scenario.difficulty === 'Media'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : scenario.difficulty === 'Alta'
                      ? 'bg-orange-500/20 text-orange-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  {scenario.difficulty}
                </span>
              </div>

              {/* Progress Bar */}
              {progress > 0 && (
                <div className="mt-4">
                  <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1 text-right">{progress}%</p>
                </div>
              )}
            </Link>
          );
        })}
      </div>

      {/* Quick Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-lg p-6">
          <div className="text-3xl mb-2">📊</div>
          <h3 className="font-bold text-white mb-2">Sistema de Puntos</h3>
          <p className="text-sm text-gray-400">
            Gana puntos resolviendo problemas. 100 pts por solución perfecta.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-lg p-6">
          <div className="text-3xl mb-2">🎯</div>
          <h3 className="font-bold text-white mb-2">Pistas Inteligentes</h3>
          <p className="text-sm text-gray-400">
            Pistas multi-nivel disponibles si te atascas en algún problema.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 rounded-lg p-6">
          <div className="text-3xl mb-2">🏆</div>
          <h3 className="font-bold text-white mb-2">Logros</h3>
          <p className="text-sm text-gray-400">
            Desbloquea insignias completando objetivos y desafíos especiales.
          </p>
        </div>
      </div>
    </div>
  );
}
