import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ header }) => {
    return (
        <div>
            <h1>{header}</h1>
        </div>
    )
}

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const Vote = ({ votes }) => {
    return (
        <div>
            has {votes} votes
        </div>
    )
}



const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [allVotes, setAll] = useState([])

    const handleClick = () => {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        setSelected(getRandomInt(6))
    }

    const handleVoteClick = () => {

        props.votes[selected] += 1
        setAll(allVotes.concat(selected))
        console.log(allVotes)
        console.log(props.votes)
    }

    function mostVotes(votes) {
        return votes.indexOf(Math.max(...votes));
    }
    return (

        <div>
            <Header header='Anecdote of the date' />
            <p>
                {props.anecdotes[selected]}
            </p>
            <Vote votes={props.votes[selected]} />
            <Button onClick={handleVoteClick} text='vote' />
            <Button onClick={handleClick} text='next anecdote' />
            <Header header='Anecdote with most votes' />
            <p>
                {props.anecdotes[mostVotes(props.votes)]}
            </p>
        </div>
    )
}

const votes = [0, 0, 0, 0, 0, 0]

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} votes={votes} />,
    document.getElementById('root')
)