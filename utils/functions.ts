export const formatRatingNumber = (int: number): number => {
  return Math.round( int * 10 ) / 10
}

export const generateHumanLink = (name: string, id: number): string => {
  const clearSymbol: string[] = [',', '.', '!', '-', '?', ':']
  const arr: string[] = [...name.split(' ').map(i => i.toLocaleLowerCase()).filter(i => !clearSymbol.includes(i)), String(id)]
  return arr.join('-')
}