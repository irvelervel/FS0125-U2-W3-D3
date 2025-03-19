// CODICE ASINCRONO IN JS
// Per gestire operazioni asincrone, in JS da sempre esiste la funzionalità delle CALLBACKS

const later = function () {
  console.log('questo messaggio dovrebbe apparire DOPO now')
}

const now = function (createFeed) {
  // immaginate di eseguire un'operazione asincrona
  // una chiamata di rete che ci mette dai 500 ai 1000 ms
  console.log('eseguo operazione asincrona...')
  setTimeout(() => {
    // quello che faccio qui dentro viene eseguito 2s dopo
    console.log('I DATI SONO STATI RECUPERATI!')
    createFeed()
  }, 2000)
}

now(later) // richiede i dati a francoforte
// cerca di creare il feed
