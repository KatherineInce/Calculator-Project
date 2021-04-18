import React from 'react'
import PropType from 'prop-types'

const Result = ({propValue}) => (
    <div className="result">
        {propValue}
    </div>
)

//Valida Argumentos con la libreria prop-types
Result.propType = {
    propValue: PropType.string.isRequired
}
Result.defaultProps =  {
    propValue: "0"
}

export default Result