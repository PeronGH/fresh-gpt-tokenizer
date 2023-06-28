export function formatArray(arr: unknown[]) {
  return `Array(${arr.length}) ${JSON.stringify(arr)}`;
}
