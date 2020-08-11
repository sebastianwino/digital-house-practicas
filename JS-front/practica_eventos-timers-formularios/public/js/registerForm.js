// window.onload = () => {

    let data = {}

    let form = document.getElementById('register-form')

    let showError = (el, bool = false) => {
        if (bool) {
            el.classList.remove('is-invalid')
            el.classList.add('text-success')
            el.nextElementSibling.classList.replace('d-inline-block', 'd-none')
        } else {
            el.classList.remove('text-success')
            el.classList.add('is-invalid')
            el.nextElementSibling.classList.replace('d-none', 'd-inline-block')
        }
    }

    function save (k,v) {
        data[k] = v
    }


    form.fullName.addEventListener('blur', function (e) {
        save(e.target.name, e.target.value)
        showError(e.target, !validator.isEmpty(data.fullName))
    })

    form.email.addEventListener('blur', function (e) {
        save(e.target.name, e.target.value)
        showError(e.target, validator.isEmail(data.email))
    })

    form.phone.addEventListener('blur', function (e) {
        save(e.target.name, e.target.value)
        showError(e.target, validator.isNumeric(data.phone))
    })

    form.password.addEventListener('blur', function (e) {
        save(e.target.name, e.target.value)
        showError(e.target, validator.isLength(data.password, {min: 8, max: 99}))
    })

    form.rePassword.addEventListener('blur', function (e) {
        save(e.target.name, e.target.value)
        showError(e.target, validator.equals(e.target, data.password))
    })

    form.subscribe.addEventListener('change', function (e) {
        save(e.target.name, e.target.checked)
    })


    form.country.addEventListener('change', function (e) {
        save(e.target.name, e.target.value)
        showError(e.target, !validator.isEmpty(data.country))
    })
    
    form.submit.addEventListener('click', function (e) {
        e.preventDefault()
        console.log('se envía la siguiente información', data)

        let formContainer = document.getElementById('formContainer')

        formContainer.innerHTML = `
            <h1>Te has registrado correctamente</h1>
            <ul>
                <li>Nombre completo: ${data.fullName}</li>
                <li>Email: ${data.email}</li>
                <li>Teléfono: ${data.phone}</li>
                <li>País de nacimiento: ${data.country}</li>
            </ul>
        `
    })




// }