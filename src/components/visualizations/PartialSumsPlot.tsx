import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

interface PartialSumsPlotProps {
  partialSums: number[];
  estimatedLimit?: number | null;
  title?: string;
}

export default function PartialSumsPlot({
  partialSums,
  estimatedLimit = null,
  title = 'Sumas Parciales Sₙ'
}: PartialSumsPlotProps) {
  const data = partialSums.map((value, index) => ({
    n: index + 1,
    Sn: value,
  }));

  return (
    <div className="bg-gray-800/50 rounded-lg p-4">
      <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey="n"
            stroke="#9CA3AF"
            label={{ value: 'n', position: 'insideBottom', offset: -5, fill: '#9CA3AF' }}
          />
          <YAxis
            stroke="#9CA3AF"
            label={{ value: 'Sₙ', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: '1px solid #374151',
              borderRadius: '0.5rem',
              color: '#fff'
            }}
            formatter={(value: number) => [value.toFixed(6), 'Sₙ']}
            labelFormatter={(label) => `n = ${label}`}
          />

          {/* Línea de límite estimado si converge */}
          {estimatedLimit !== null && !isNaN(estimatedLimit) && (
            <ReferenceLine
              y={estimatedLimit}
              stroke="#10B981"
              strokeDasharray="5 5"
              label={{
                value: `Límite ≈ ${estimatedLimit.toFixed(4)}`,
                fill: '#10B981',
                position: 'top'
              }}
            />
          )}

          <Line
            type="monotone"
            dataKey="Sn"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={{ fill: '#3B82F6', r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Información adicional */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div className="bg-gray-900/50 p-2 rounded">
          <p className="text-gray-400">S₁₀</p>
          <p className="text-white font-bold">{partialSums[9]?.toFixed(4) || 'N/A'}</p>
        </div>
        <div className="bg-gray-900/50 p-2 rounded">
          <p className="text-gray-400">S₂₀</p>
          <p className="text-white font-bold">{partialSums[19]?.toFixed(4) || 'N/A'}</p>
        </div>
        <div className="bg-gray-900/50 p-2 rounded">
          <p className="text-gray-400">S₅₀</p>
          <p className="text-white font-bold">{partialSums[49]?.toFixed(4) || 'N/A'}</p>
        </div>
        <div className="bg-gray-900/50 p-2 rounded">
          <p className="text-gray-400">S₁₀₀</p>
          <p className="text-white font-bold">{partialSums[99]?.toFixed(4) || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
}
