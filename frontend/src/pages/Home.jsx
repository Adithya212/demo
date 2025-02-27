import MovieCard from "../components/MovieCard";

function Home(){
    const movies=[
        {id:1,title:"Spiderman",release_date:2020},
        {id:2,title:"Deadpool",release_date:2022}
    ]

    return (
        <div>
            <div>
                {movies.map((movie)=> (
                    <MovieCard movie={movie} key={movie.id}></MovieCard>
               ) )}
            </div>
        </div>
    );
}