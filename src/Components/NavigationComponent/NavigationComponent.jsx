import React from 'react'
import WordCounterComponent from '../WordCounterComponent/WordCounterComponent'
import NumberGuessingComponent from '../NumberGuessingComponent/NumberGuessingComponent'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
const NavigationComponent = () => {
  return (
    <Router>
            <div>
                <ul>
                    <li>
                        <Link to='/wordcounter'>WordCounting Component</Link>
                    </li>
                    <li>
                        <Link to='/Numberguessing'>NumberCounting Component</Link>
                    </li>
                    
                </ul>
            </div>
            <Routes>
                <Route exact path='/wordcounter' element={<WordCounterComponent/>}></Route>
                <Route exact path='/Numberguessing' element={<NumberGuessingComponent/>}></Route>
            </Routes>
        </Router>
    )
}

export default NavigationComponent