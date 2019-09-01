import React, {useState, useEffect} from "react";
import axios from "axios";

const Ranking = () => {
    const [questions, setQuestions] = useState([0]);

    useEffect(() => {

        axios
        .get(`https://opentdb.com/api.php?amount=20&difficulty=hard&type=multiple`)
        .then(res => {
            setQuestions(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])


    console.log(questions);

    return (
        <div className="ranking">
            
        </div>
    )
}

export default Ranking;