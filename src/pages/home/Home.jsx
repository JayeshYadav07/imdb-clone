import React from "react";
import { useEffect, useState } from "react";
function Home() {
    const [date, setDate] = useState([]);
    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=339061d81d640d76bc091664f6a2aab9&language=en-US"
        )
            .then((res) => res.json())
            .then((result) => console.log(result));
    }, []);

    return <div>Home</div>;
}

export default Home;
