/**
 * Calcula los primeros n términos de una serie
 */
export function calculateSeriesTerms(
  expression: (n: number, beta: number) => number,
  beta: number,
  count: number
): number[] {
  const terms: number[] = [];
  for (let n = 1; n <= count; n++) {
    try {
      terms.push(expression(n, beta));
    } catch (error) {
      console.error(`Error calculating term ${n}:`, error);
      terms.push(NaN);
    }
  }
  return terms;
}

/**
 * Calcula las sumas parciales de una serie
 */
export function calculatePartialSums(terms: number[]): number[] {
  const sums: number[] = [];
  let sum = 0;
  for (let i = 0; i < terms.length; i++) {
    sum += terms[i];
    sums.push(sum);
  }
  return sums;
}

/**
 * Prueba de la Razón (Ratio Test)
 * Retorna lim |a(n+1)/a(n)| cuando n→∞
 */
export function ratioTest(
  expression: (n: number, beta: number) => number,
  beta: number
): { limit: number; converges: boolean | null } {
  const testPoints = [100, 200, 500, 1000];
  const ratios: number[] = [];

  for (const n of testPoints) {
    const an = expression(n, beta);
    const an1 = expression(n + 1, beta);
    if (an !== 0 && !isNaN(an) && !isNaN(an1)) {
      ratios.push(Math.abs(an1 / an));
    }
  }

  if (ratios.length === 0) {
    return { limit: NaN, converges: null };
  }

  const limit = ratios[ratios.length - 1];

  let converges: boolean | null = null;
  if (limit < 1) converges = true;
  else if (limit > 1) converges = false;
  // Si limit = 1, la prueba no es concluyente

  return { limit, converges };
}

/**
 * Prueba de la Raíz (Root Test)
 * Retorna lim n√|a(n)| cuando n→∞
 */
export function rootTest(
  expression: (n: number, beta: number) => number,
  beta: number
): { limit: number; converges: boolean | null } {
  const testPoints = [100, 200, 500, 1000];
  const roots: number[] = [];

  for (const n of testPoints) {
    const an = expression(n, beta);
    if (!isNaN(an)) {
      roots.push(Math.pow(Math.abs(an), 1 / n));
    }
  }

  if (roots.length === 0) {
    return { limit: NaN, converges: null };
  }

  const limit = roots[roots.length - 1];

  let converges: boolean | null = null;
  if (limit < 1) converges = true;
  else if (limit > 1) converges = false;

  return { limit, converges };
}

/**
 * Determina si los términos son decrecientes
 */
export function isDecreasing(terms: number[]): boolean {
  for (let i = 1; i < Math.min(terms.length, 20); i++) {
    if (Math.abs(terms[i]) >= Math.abs(terms[i - 1])) {
      return false;
    }
  }
  return true;
}

/**
 * Estima si la serie converge basándose en el comportamiento de las sumas parciales
 */
export function estimateConvergence(partialSums: number[]): {
  likelyConverges: boolean;
  estimatedLimit: number | null;
} {
  const n = partialSums.length;
  if (n < 10) {
    return { likelyConverges: false, estimatedLimit: null };
  }

  // Ver si las últimas sumas parciales se estabilizan
  const lastTen = partialSums.slice(-10);
  const avg = lastTen.reduce((a, b) => a + b, 0) / lastTen.length;
  const variance = lastTen.reduce((sum, val) => sum + Math.pow(val - avg, 2), 0) / lastTen.length;
  const stdDev = Math.sqrt(variance);

  // Si la desviación estándar es pequeña comparada con el promedio, probablemente converge
  const relativeStdDev = Math.abs(avg) > 0.001 ? stdDev / Math.abs(avg) : stdDev;

  const likelyConverges = relativeStdDev < 0.01;
  const estimatedLimit = likelyConverges ? avg : null;

  return { likelyConverges, estimatedLimit };
}

/**
 * Serie logarítmica del problema: Σ ln(1/β^n) = Σ -n·ln(β)
 */
export function logarithmicSeries(n: number, beta: number): number {
  if (beta <= 0 || beta === 1) {
    return NaN;
  }
  return -n * Math.log(beta);
}

/**
 * Serie geométrica: Σ r^n
 */
export function geometricSeries(n: number, r: number): number {
  return Math.pow(r, n);
}

/**
 * Serie armónica: Σ 1/n
 */
export function harmonicSeries(n: number): number {
  return 1 / n;
}

/**
 * Serie p: Σ 1/n^p
 */
export function pSeries(n: number, p: number): number {
  return 1 / Math.pow(n, p);
}
