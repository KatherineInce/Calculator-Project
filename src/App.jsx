//import
import React from 'react'
import './App.css'
import Result from './components/Result'

//function
const App = () => {//function flecha
    console.log("Render of App.jsx")
    return (
        <main className="react-calculator">
            <div className="calc-name">CALCULATOR KAT</div>
            <Result/>  
            <div className="left">
                    <div className="functions">
                        <button>CE</button>
                        <button>C</button>
                        <button>DEL</button>
                    </div>
                    <div className="number">
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button className='last'>0</button>
                        <button>.</button>
                    </div>
                </div>
            <div className="math-operations">
                        <button>+</button>
                        <button>-</button>
                        <button>*</button>
                        <button>/</button>
                        <button>=</button>
                </div>
        </main>
    )
}

//export

export default App