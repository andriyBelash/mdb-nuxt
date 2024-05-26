import slugify from 'slugify'

export const formatRatingNumber = (int: number): number => {
  return Math.round( int * 10 ) / 10
}

export const generateHumanLink = (name: string, id: number): string => {
  if(!name) return '0'

  const clearSymbol: string[] = [',', '.', '!', '-', '?', ':']
  const text = slugify(name, {  lower: true, strict: true })
  const arr: string[] = [...text.split(' ').map(i => i.toLocaleLowerCase()).filter(i => !clearSymbol.includes(i)), String(id)]
  return arr.join('-')
}

export function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): T {
  let timeoutID: NodeJS.Timeout;

  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  } as T;
}