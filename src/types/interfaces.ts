export interface BaseMovieProps {
    title: string;
    budget: number;
    homepage: string | undefined;
    id: number;
    imdb_id: string;
    original_language: string;
    overview: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    poster_path?: string;
    tagline: string;
    runtime: number;
    revenue: number;
    vote_count: number;
    favourite?: boolean;
    movies: BaseMovieProps[];
    selectFavourite: (movieId: number) => void;  //add this
    genre_ids?: number[];
  }

  export interface MovieListPageTemplateProps extends BaseMovieListProps {
    title: string;
  }

  export interface MovieDetailsProps extends BaseMovieProps {
    genres: {
      id: number;
      name: string;
    }[];
  }
  export type FilterOption = "title" | "genre";

  export interface BaseMovieListProps {
    movies: BaseMovieProps[];
    selectFavourite: (movieId: number) => void;  //add this
  }
  

  export interface MovieImage {
    file_path: string;
    aspect_ratio?: number; //some props are optional...
    height?: number;
    iso_639_1?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }
  
  export interface MoviePageProps {
    movie: MovieDetailsProps;
    images: MovieImage[];
  }

  export interface Review{
    id: string;
    content: string
    author: string
  }
  export interface GenreData {
    genres: {
      id: string;
      name: string
    }[];
  }
  
  export interface DiscoverMovies {
    page: number;	
    total_pages: number;
    total_results: number;
    results: BaseMovieProps[];
  }
  export interface BaseMovieListProps {
    movies: BaseMovieProps[];
    action: (m: BaseMovieProps) => React.ReactNode;
  }