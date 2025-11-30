import { Link, Outlet, useLocation } from 'react-router-dom';
import { useProgressStore } from '../../store/progressStore';
import { scenarios } from '../../data/scenarios';

export default function Layout() {
  const location = useLocation();
  const { totalPoints, completedObjectives } = useProgressStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
              <span className="text-3xl">📐</span>
              <div>
                <h1 className="text-xl font-heading font-bold text-white">
                  Interfaz Educativa Matemática V
                </h1>
                <p className="text-xs text-gray-400">UNA - Código 739</p>
              </div>
            </Link>

            {/* Stats */}
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-xs text-gray-400">Puntos</p>
                <p className="text-lg font-bold text-yellow-400">{totalPoints}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">Objetivos</p>
                <p className="text-lg font-bold text-green-400">
                  {completedObjectives.length}/5
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs (if not on home) */}
      {location.pathname !== '/' && (
        <nav className="bg-gray-800/50 border-b border-gray-700">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto py-2">
              {scenarios.map((scenario) => {
                const isActive = location.pathname === scenario.route;
                const isCompleted = completedObjectives.includes(scenario.objective);

                return (
                  <Link
                    key={scenario.id}
                    to={scenario.route}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition
                      ${
                        isActive
                          ? 'bg-white/10 text-white ring-2 ring-white/20'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }
                    `}
                  >
                    <span className="text-xl">{scenario.icon}</span>
                    <span className="text-sm font-medium">
                      {scenario.name.replace(/^[^a-zA-Z]+/, '')}
                    </span>
                    {isCompleted && <span className="text-green-400">✓</span>}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-gray-700 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-400 text-sm">
          <p>
            Matemática V (Cód. 739) - Universidad Nacional Abierta (UNA) - Lapso 2025-2
          </p>
          <p className="mt-1">
            Plataforma Educativa Interactiva • Objetivos 1-5
          </p>
        </div>
      </footer>
    </div>
  );
}
