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

const Statistics = ({ text, feedback }) => {
    return (
        <div>
            <p>
                {text} {feedback}
            </p>
        </div>
    )
}

const Stats = ({ good, neutral, bad, allClicks }) => {
    if (allClicks.length == 0) {
        return (
            <div>
                No feedback given
        </div>
        )
    }
    return (
        <div>
            <Statistics text='good' feedback={good} />
            <Statistics text='neutral' feedback={neutral} />
            <Statistics text='bad' feedback={bad} />
            <Statistics text='all' feedback={allClicks.length} />
            <Average good={good} bad={bad} all={allClicks.length} />
            <Percent text='positive' good={good} all={allClicks.length} />

        </div>

    )
}

const Average = ({ good, bad, all }) => {
    const avg = (good - bad) / all
    return (
        <Statistics text='average' feedback={avg} />
    )
}

const Percent = ({ text, all, good }) => {
    const percent = (good / all) * 100
    return (
        <div>
            <p>
                {text} {percent} %
            </p>
        </div>
    )
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleGoodClick = () => {
        setAll(allClicks.concat('good'))
        setGood(good + 1)
    }
    const handleNeutralClick = () => {
        setAll(allClicks.concat('neutral'))
        setNeutral(neutral + 1)

    }
    const handleBadClick = () => {
        setAll(allClicks.concat('bad'))
        setBad(bad + 1)

    }


    return (
        <div>
            <Header header="give feedback" />
            <Button onClick={handleGoodClick} text='good' />
            <Button onClick={handleNeutralClick} text='neutral' />
            <Button onClick={handleBadClick} text='bad' />
            <Header header="statistics" />
        <Stats good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)