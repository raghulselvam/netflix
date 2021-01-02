const API_KEY="b56b65ffb42acdecd4a066321768364d";
const response={
    fetchTrending:`/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchHorror:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedy:`/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchWar:`discover/movie?api_key=${API_KEY}&with_genres=10752`,
}
export default response;