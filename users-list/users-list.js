// oggi, per la prima volta, utilizzeremo nel nostro codice dei dati provenienti dall'esterno per generare delle parti di HTML
// per recuperare i dati dall'esterno serve instaurare una REQUEST / RESPONSE http
// questa è un'operazione ASINCRONA! potrebbe richiedere del tempo... (ms)

// un metodo moderno integrato nei browser per effettuare una HTTP REQUEST si chiama
// fetch()

// fetch() è un metodo che esegue una chiamata asincrona verso un server, e che ritorna
// una Promise di JS!

const getRemoteUsers = function () {
  fetch('https://jsonplaceholder.typicode.com/users', {
    // method: 'GET' // <-- è il default in ogni caso!
    // headers: {
    //   authorization: '',
    //   'content-type': 'application/json'
    // }
    // body: {}
  })
    .then((response) => {
      // finale buono della Promise, cosa fare se la Promise finisce bene!
      // per come funziona fetch(), purtroppo i dati (l'array di utenti nel nostro caso)
      // NON sono già disponibili nella Response
      // nell'oggetto response la proprietà più importante si chiama "ok"
      // la proprietà "ok" identifica con un booleano se la risposta del server
      // è valida (per quello che richiedevamo) oppure no
      //   ---
      // di solito, quando la proprietà "ok" della response NON È TRUE, significa che
      // anche se è arrivata una risposta, non era quella che volevamo (non contiene i dati)
      if (response.ok) {
        console.log('evviva!', response)
        // benissimo, proseguiamo
        //
      } else {
        // vuol dire che ho ottenuto un 400, 404, 403, 401 -> il server ci ha risposto
        // ma ci ha risposto negativamente
        // in questo caso di solito ci si auto-lancia nel blocco .catch()
        // sacrificio estremo!
        throw new Error('Il server non ha risposto correttamente')
      }
    })
    .catch((err) => {
      // finale cattivo della Promise, cosa fare se la Promise finisce male!
      console.log('uffa!', err)
    })

  //   dove stanno gli utenti??
}

getRemoteUsers()
