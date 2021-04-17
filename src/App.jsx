//import
import React from 'react'
import Result from './components/Result'
import MathButton from './components/MathOperations/MathOperations'
import Functions from './components/Functions/Functions'
import Numbers from './components/Numbers/Numbers'
import './App.css'

//function
const App = () => {//function flecha
    console.log("Render of App.jsx")
    const result=text=>{
        console.log(text)
    }
    return (
        <main className="react-calculator">
            <div className="calc-name">CALCULATOR KAT</div>
            <Result propValue={"0"}/>  
            <div className="left">
                    <Functions 
                        onContentClear={clear => console.log(clear)}
                        onLastContentClear={lastClear => console.log(lastClear)}
                        onDelete={del => console.log(del)}
                    />
                    <Numbers onClickNumber={number=> {console.log(number)}}/>
                </div>
                <MathButton 
                    onClickOperation={operation => console.log(operation)} 
                    onClickEqual={equal => console.log(equal)}
                />
        </main>
    )
}

//export

export default App