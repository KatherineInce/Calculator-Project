/*eslint no-eval: 0*/

//import
import React, {useState} from 'react'
import words from 'lodash.words'
import Result from './components/Result'
import MathButton from './components/MathOperations/MathOperations'
import Functions from './components/Functions/Functions'
import Numbers from './components/Numbers/Numbers'
import './App.css'

//function
const App = () => {
    //first element the value of the state, second the function who chance the value of the state
    const [stack,setStack] = useState("");

    const items = words(stack, /[^-^+^*^/]+/g)

    return (
        <main className="react-calculator">
            <div className="calc-name">CALCULATOR KAT</div>
            <Result propValue={items[items.length-1]}/>  
            <div className="left">
                    <Functions 
                        onContentClear={clear => {setStack("")}}
                        onDelete={del => {
                            if(stack !== "")
                            {    
                                const newStack = stack.substring(0,stack.length -1)
                                setStack(newStack)
                            }
                        }}
                    />
                    <Numbers onClickNumber={
                        number=> {
                            //template literals
                            if(number === '.' && stack === "")
                                setStack(`${0}${number}`)
                            else
                                setStack(`${stack}${number}`)
                        }
                    }/>
                </div>
                <MathButton 
                    onClickOperation={operation => {
                        const newStack = stack.substring(stack.length -1,stack.length)
                        if (newStack !== '.' && newStack !== '+' && newStack !== '-' && newStack !== '/' && newStack !== '*' && newStack !== '=' && stack !== "")
                        setStack(`${stack}${operation}`)
                        
                    }} 
                    onClickEqual={equal => {
                        
                        const newStack = stack.substring(stack.length -1,stack.length)
                        if (newStack !== '+' && newStack !== '-' && newStack !== '/' && newStack !== '*' && newStack !== '=' && stack !== "" && newStack !== '.')
                            {
                                if (stack.search('\\+') > -1 || stack.search('\\-') > -1 || stack.search('\\/') > -1 || stack.search('\\*') > -1)
                                    {
                                        setStack(eval(stack).toString())
                                    }
                            }
                        
                    }}
                />
        </main>
    )
}

//export

export default App