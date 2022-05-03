import React from 'react'

const lista = (props) => {
    console.log("[Lista.js] elementos: ",props.elementos);

    return (
    <div>
            <ul>
                {
            props.elementos.map((item, index)=>{
            return <li key={'lista-item-'+item+'-'+index}>{item}</li>
            })
                }
            </ul>
        </div>
      )
}

export default lista