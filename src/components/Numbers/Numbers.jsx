import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

//DRY DONT REPEAT YOURSELF
const renderButtons= onClickNumber =>{
    //var number = 7-9, 4-5,1-3
    //<Button text="1" clickHandler={onClickNumber}/>
    var numbers = ['7','8','9','4','5','6','1','2','3','0','.']
    var buttonCreated = numbers.map(x => x === '0' ? <Button key={x} text= {x} type="last" clickHandler={onClickNumber}/> :<Button key={x} text= {x} clickHandler={onClickNumber}/>)
    return buttonCreated
}
const Numbers = ({onClickNumber})=>(

    <section className="numbers">
        {renderButtons(onClickNumber)}
    </section>
)

Numbers.propTypes ={
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers