import signupFactory from '../factories/SignupFactory'
import SignupPage from '../pages/SignupPage';

describe('Signup', () => {

    //beforeEach(function() {
    //    cy.fixture('deliver').then((d)=>{
    //        this.deliver = d
    //    })
    //});

    it('User should be deliver', function () {

        var deliver = signupFactory.deliver()

        SignupPage.go()
        SignupPage.fillForm(deliver)
        SignupPage.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        SignupPage.modalContentShouldBe(expectedMessage)

    })

    it('Incorrect document', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '000000141AA'

        SignupPage.go()
        SignupPage.fillForm(deliver)
        SignupPage.submit()

        SignupPage.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Incorrect email', function () {

        var deliver = signupFactory.deliver()

        deliver.email = 'user.com.br'

        SignupPage.go()
        SignupPage.fillForm(deliver)
        SignupPage.submit()

        SignupPage.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    // criou um array para validar toda a mensagem e caso der erro os próximos passos são executados
    context('Required fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function(){
            SignupPage.go()
            SignupPage.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                SignupPage.alertMessageShouldBe(msg.output)
            })
        })

    });

    //primeira validação dos campos obrigatorios
    //it('Required fields', function () {
     //   SignupPage.go()
    //    SignupPage.submit()
    //    SignupPage.alertMessageShouldBe('É necessário informar o nome')
    //    SignupPage.alertMessageShouldBe('É necessário informar o CPF')
    //    SignupPage.alertMessageShouldBe('É necessário informar o email')
    //    SignupPage.alertMessageShouldBe('É necessário informar o CEP')
    //    SignupPage.alertMessageShouldBe('É necessário informar o número do endereço')
    //   SignupPage.alertMessageShouldBe('Selecione o método de entrega')
    //    SignupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')
    //})

});