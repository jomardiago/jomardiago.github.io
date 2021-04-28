class Weather {
    constructor() {};

    async getWeather() {
        const response = await fetch(`https://api.wunderground.com/api/26542c3b423df29e/conditions/q/zmw:00000.68.98531.json`);
        const weatherData = await response.json();

        return weatherData.current_observation;
    };
}