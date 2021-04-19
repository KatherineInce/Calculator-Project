import React from 'react'
import PropType from 'prop-types'
import './Result/Result.css'

const Result = ({propValue, propHistory}) => (
    <div>
        <div className="result">
            <div className="history">
                {propHistory}
            </div>
            <div className="total">
                {propValue}
            </div>
        </div>
    </div>
)

//Valida Argumentos con la libreria prop-types
Result.propType = {
    propValue: PropType.string.isRequired,
    propHistory: PropType.string
}
Result.defaultProps =  {
    propValue: "0"
}

export default Result