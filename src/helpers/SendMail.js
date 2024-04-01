
const SendMail = async(nombre, correo, mensaje) => {

    const urlAPI = 'http://email-portfolio.duckdns.org:4000/email'

    const response = await fetch(urlAPI, {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            name: nombre,
            email: correo,
            msj: mensaje
        })

    });
    const data = await response.json();

    return(
        console.log(data)
    )
}

export default SendMail;
