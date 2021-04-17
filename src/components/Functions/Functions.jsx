import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import '../Button/Button.css'

const Functions = ({onContentClear,onLastContentClear,onDelete}) => 
(
    <section className="functions">
        <Button text="CLEAR" type="long-text" clickHandler={onContentClear}/>
        <Button text="C" type="long-text" clickHandler={onLastContentClear}/>
        <Button text="DELETE" type="long-text" clickHandler={onDelete}/>
    </section>
)
Functions.propTypes = {
    onContentClear:PropTypes.func.isRequired,
    onLastContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Functions