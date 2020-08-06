import React from 'react'

function TimeOfDay(){
    const date = new  Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = 'morning'
    } else if (hours >12 && hours <17){
        timeOfDay = 'afternoon'
    } else {
        timeOfDay = 'evening'
    }

    return (
        <div>
            <main style={{color: "#009999"}}>
                Good {timeOfDay}!
            </main>
        </div>
    )
}

export default TimeOfDay