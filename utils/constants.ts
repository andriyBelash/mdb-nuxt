export const ImageBaseUrl = "http://image.tmdb.org/t/p/" as const

export const BackdropSizes = {
  small: 'w300',
  middle: 'w780',
  large: 'w1280',
  original: 'original'
} as const

export const LogoSizes = {
  w45: 'w45',
  w92: 'w92',
  w154: 'w154',
  w185: 'w185',
  w300: 'w300',
  w500: 'w500',
  original: 'original'
} as const

export const PosterSizes = {
  w92: 'w92',
  w154: 'w154',
  w185: 'w185',
  w342: 'w342',
  w500: 'w500',
  w780: 'w780',
  original: 'original'
} as const

export const ProfileSizes = {
  w45: 'w45',
  w185: 'w185',
  h632: 'h632',
  original: 'original'
} as const

export const StillSizes = {
  w92: 'w92',
  w185: 'w185',
  w300: 'w300',
  original: 'original'
}

export const movieTabs: string[] = ['now_playing', 'popular', 'top_rated', 'upcoming']
export const tvTabs: string[] = ['airing_today', 'on_the_air', 'popular', 'top_rated']