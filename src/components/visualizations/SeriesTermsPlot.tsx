import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface SeriesTermsPlotProps {
  terms: number[];
  title?: string;
}

export default function SeriesTermsPlot({ terms, title = 'Términos de la Serie' }: SeriesTermsPlotProps) {
  const data = terms.slice(0, 20).map((value, index) => ({
    n: index + 1,
    value: value,
    absValue: Math.abs(value),
  }));

  // Determinar color basado en si los términos decrecen
  const getBarColor = (index: number) => {
    if (index === 0) return '#3B82F6'; // Azul para el primero

    const current = Math.abs(data[index].value);
    const previous = Math.abs(data[index - 1].value);

    if (current < previous) return '#10B981'; // Verde: decreciente
    if (current === previous) return '#F59E0B'; // Amarillo: constante
    return '#EF4444'; // Rojo: creciente
  };

  return (
    <div className="bg-gray-800/50 rounded-lg p-4">
      <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey="n"
            stroke="#9CA3AF"
            label={{ value: 'n', position: 'insideBottom', offset: -5, fill: '#9CA3AF' }}
          />
          <YAxis
            stroke="#9CA3AF"
            label={{ value: 'aₙ', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: '1px solid #374151',
              borderRadius: '0.5rem',
              color: '#fff'
            }}
            formatter={(value: number) => [value.toFixed(6), 'aₙ']}
            labelFormatter={(label) => `n = ${label}`}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {data.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Leyenda de colores */}
      <div className="flex gap-4 justify-center mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span className="text-gray-400">Decreciente</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-yellow-500 rounded"></div>
          <span className="text-gray-400">Constante</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded"></div>
          <span className="text-gray-400">Creciente</span>
        </div>
      </div>
    </div>
  );
}
