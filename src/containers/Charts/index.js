import { Bar, Line } from 'react-chartjs-2'

export const BarChart = ({ chartData }) => {
  return (

    <Bar
      data={chartData}
      options={
        {
          plugins: {
            title: {
              display: true,
              text: 'Rate'
            },
            legend: {
              display: false
            },
            subtitle: {
              display: false
            }
          }

        }
        }
    />

  )
}

export const LineChart = ({ chartData }) => {
  return (

    <Line
      data={chartData}
      options={
        {
          plugins: {
            title: {
              display: true,
              text: 'Rate'
            },
            legend: {
              display: false
            },
            subtitle: {
              display: false
            }
          }

        }
        }
    />

  )
}
