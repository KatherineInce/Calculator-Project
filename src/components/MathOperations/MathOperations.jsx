import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './MathOperations.css'

const MathOperations = ({onClickOperation,onClickEqual}) => (
    <section className="math-operations">
        <Button type="mathSize" text="+" clickHandler={onClickOperation}/>
        <Button type="mathSize" text="-" clickHandler={onClickOperation}/>
        <Button type="mathSize" text="*" clickHandler={onClickOperation}/>
        <Button type="mathSize" text="/" clickHandler={onClickOperation}/>
        <Button type="mathSize" text="=" clickHandler={onClickEqual}/>
    </section>
)

MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

export default MathOperations