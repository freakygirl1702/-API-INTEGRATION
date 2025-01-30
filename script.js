document.getElementById('getWeather').addEventListener('click',function() {
    const city = document.getElementById('city').value;
    const apiKey = '307ef27a7dce0bb021c06d2cd26c8608';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok'+ response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp} &deg;C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            document.getElementById('weatherInfo').innerHTML = weatherInfo;
        })
        .catch(error => {
            document.getElementById('weatherInfo').innerHTML = `<p>Error fetching data: ${error.message}</p>`;
            console.error('Error:', error);
        });
});
