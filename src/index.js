import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Kandy from './components/KandyKorner'

import './index.css'

ReactDOM.render(
    <Router>
        <Kandy />
    </Router>
    , document.getElementById('root'))


