var faker = require('faker')
var cpf = require ('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '21999999999',
            address:{
                postalcode: '22733500',
                street: 'Rua Capitanias',
                number: '1000',
                details: 'casa1',
                districts: 'Tanque',
                city_state: 'Rio de Janeiro/RJ'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }

}