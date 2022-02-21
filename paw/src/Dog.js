import React from 'react'

const Dog = (props) => {

    return (
        <div className="child">/
            <img styles={{width: 300, height: 300}} src={props.url}/>
        </div>
        )
}

export default Dog;