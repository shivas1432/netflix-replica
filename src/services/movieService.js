// Movie API service for Netflix replica
import { API_CONFIG } from "../config/constants";

class MovieService {
  constructor() {
    this.apiKey = process.env.REACT_APP_TMDB_API_KEY;
    this.baseUrl = API_CONFIG.BASE_URL;
  }

  async fetchMovies(endpoint) {
    try {
      const response = await fetch(
        `${this.baseUrl}${endpoint}?api_key=${this.apiKey}`
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching movies:", error);
      return [];
    }
  }

  getTrendingMovies() {
    return this.fetchMovies("/trending/movie/week");
  }

  getNetflixOriginals() {
    return this.fetchMovies("/discover/tv?with_networks=213");
  }

  getTopRated() {
    return this.fetchMovies("/movie/top_rated");
  }
}

export default new MovieService();
