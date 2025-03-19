const getCellinoWeather = function () {
  const weatherURL =
    'https://api.open-meteo.com/v1/forecast?latitude=40.4713&longitude=17.9643&daily=temperature_2m_min,temperature_2m_max&current=temperature_2m&timezone=Europe%2FBerlin&forecast_days=1'

  fetch(weatherURL)
    .then((response) => {
      if (response.ok) {
        // ottimo!
        return response.json()
      } else {
        // abbiamo ottenuto una risposta es. 400, 404, 401 etc.
        throw new Error('Errore nel recupero del meteo di Cellino')
      }
    })
    .then((data) => {
      // data è un oggetto con dentro i dati del meteo!
      console.log('DATA', data)
      const currentTemp = data.current.temperature_2m
      const maxTemp = data.daily.temperature_2m_max[0]
      const minTemp = data.daily.temperature_2m_min[0]
      console.log('CURRENT', currentTemp)
      console.log('MIN', minTemp)
      console.log('MAX', maxTemp)
      const currentSpan = document.getElementById('current-temp')
      const minSpan = document.getElementById('min-temp')
      const maxSpan = document.getElementById('max-temp')
      currentSpan.innerText = currentTemp
      minSpan.innerText = minTemp
      maxSpan.innerText = maxTemp
    })
    .catch((err) => {
      console.log('si è verificato un errore', err)
    })
}

getCellinoWeather()
