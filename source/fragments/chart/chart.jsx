import React from 'react'
import { Doughnut } from 'react-chartjs-2' 
import { Chart as ChartJS } from 'chart.js/auto'

const Chart = () => {
    return (
        <Doughnut 
        data={{
            labels : ['meh', 'ehm', 'hem'],
            datasets : [
                {
                    label : ['Total'],
                    data  : [1, 1, 2],
                    borderWidth : 0
                }
            ]
        }}
        />
    )
}

export default Chart