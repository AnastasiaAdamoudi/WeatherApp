
export default function Results() {
    //get data for london from api.openweathermap.org
    async function getLondonWeather() {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=68102d64e560bd2680f7ef8afcd13886')
        const data = await response.json()
        console.log(data)

        //get date from data
        const date = new Date(data.dt * 1000)
        console.log("date", date)
    }
    getLondonWeather()

    return (
        <div className="Results">results goes here</div>
    )
}