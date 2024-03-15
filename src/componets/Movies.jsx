import { Movie } from "./Movie";

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie}/>)
            ) : (<div className="movie card">
                <div className="card-image waves-effect waves-bkock waves-light">
                    <img className="activator" src={`https://via.placeholder.com/300x400?text=пусто`}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Мы не нашли ничего по вашему запросу</span>
                    <p>но мы пытались<span className="right">(правда)</span></p>
                </div>
            </div>)}
        </div>
    );
}

export { Movies };