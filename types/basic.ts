export interface TFetch<T> {
  page: number
  results: T
  total_pages: number
  total_results: number
}

export interface Poster {
  id: number
  backdrop_path: string,
  title: string,
  original_title: string,
  vote_average: number,
  vote_count: number,
  release_date: string,
  overview: string,
}

export interface MediaCard {
  poster: string,
  title: string,
  rating?: number,
  link: string
}