
# Validação de Cadastro do site buger eats utilizando Cypress

Teste de cadastro do sistema utilizando o pluggin Chance para automatizar o cadastro e gerar um relatórios com as assertivas.
## Ferramentas utilizadas

- cypress
- Node
- Git
- Visual Studio Code
    
## :mag: Pluggins

- Faker v.5.5.3
- Cypress-file-upload
- Gerador-validador-cpf

## Instalação

Comando para instalação do Cypress e Pluggins

```bash
  npm install cypress -D
  npm install cypress-file-upload –save-dev
  npm install faker@5.5.3 --save-dev 
  npm install gerador-validador-cpf –save-dev
```

## Cenário de Testes

Comando para instalação do Cypress e Pluggins

```bash
  Validar se o site está online (home.spec.js)
  Validar se o cadastro foi realizado com sucesso, verificando a idade do usuário. (signup.spec.js)
  Validar se ao digitar o CPF incorreto o usuário não será cadastro e irá ser apresentado a mensagem que o CPF está invalido. (signup.spec.js)
  Validar se ao digitar o email com a formatação incorreto, o usuário não será cadastro e irá ser apresentado a mensagem que o email está com formato inválido. (signup.spec.js)
  Validar se a mensagem de alertas dos campos obrigátorios está sendo exibido. (signup.spec.js)
```

## Executando os testes.

Utilizar um dos comandos abaixo para executar os testes.

```bash
  npx cypress open
  npx cypress run
```
## 🚀 Autor
Jonathas Santos


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/jonathasbsantos)

