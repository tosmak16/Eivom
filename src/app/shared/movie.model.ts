export interface IMovie {
  id: number,
  title: string,
  overview: string,
  poster_path: string,
  backdrop_path: string,
  status: string,
  release_date: string,
  genre?: any[],
  vote_average: string,
  popularity: string,
  tagline?: string
}
