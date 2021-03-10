# Estudantinder Mobile App <img src="https://img.shields.io/badge/Code-Expo-informational?style=flat&logo=expo&logoColor=white&color=4630eb" />

O Estudantinder lida com a procura e encontro de outros alunos, de forma a desenvolver cada vez mais sua autonomia nos estudos. Veja o [site oficial do Estudantinder](https://estudantinder.vercel.app) para mais informações

## Formas de usar

### Android

A forma mais fácil de usar o aplicativo é baixando o apk pelo [site oficial do Estudantinder](https://estudantinder.vercel.app)

Caso você tenha o aplicativo do Expo Go instalado no seu celular, você pode abrir ele pelo seguinte link:

**https://expo.io/@cauaspinheiro/projects/estudantinder-mobile**

### IOS

Por conta das politicas de desenvolimento da Apple, não há como usar o aplicativo do Estudantinder como um aplicativo sozinho no Iphone, ao invés disso, você pode baixar o aplicativo do Expo Go e rodar o projeto através desse link:

**https://expo.io/@cauaspinheiro/projects/estudantinder-mobile**

## Instalação

Você vai precisar de algumas ferramentas para rodar o projeto localmente, para só baixar o aplicativo, veja o tópico [Formas de Usar](#formas-de-usar)

### GIT

- Instale o git em sua máquina: [https://git-scm.com/downloads](https://git-scm.com/downloads)
- Com o git instalado na sua máquina, clone o repositório usando o botão **Code** em https://github.com/Cauaspinheiro/estudantinder-mobile

### NodeJS

- Baixe a versão LTS do node em <https://nodejs.org/en/>
- Para testar se o node está instalado na sua maquina, rode o seguinte comando `node -v`. Deverá aparecer a versão do NodeJS

### Yarn

- Baixe a versão mais nova do yarn em <https://classic.yarnpkg.com/pt-BR/docs/install/#windows-stable>
- Para testar se o yarn está instalado na sua maquina, rode o seguinte comando `yarn -v`. Deverá aparecer a versão do Yarn

### Instalação dos pacotes

- Dentro na pasta do projeto, rode o seguinte comando: `yarn`

### API do Estudantinder

Siga todos os tópicos necessários para instalar a API no [repositório oficial da API](https://github.com/AdamAugustinsky/estudantinder-api)

**Dica!** Guarde o host que a API usa (ex: `http://localhost:3000`), pois você vai precisar delas no próximo tópico

### Env

Dentro da pasta do projeto, você verá um arquivo chamado `.env.example.ts`, dentro dele, você deverá seguir todas as instruções que forem pedidas.

### Expo

Siga todas as instruções do [site oficial do Expo](https://docs.expo.io/get-started/installation/)

---

**Pronto!** Você já pode começar a testar o aplicativo, vá para a aba [Scripts](#scripts) para ver quais scripts estão disponíveis para uso

## Scripts

Todos esses scripts pode ser rodados na sua máquina usando o yarn

Os parâmetros dos scripts serão representados com um prefixo `$`

### ct

```shell script
yarn ct
```

Faz commits mais rápidos e eficientes usando o [Commitizen](https://github.com/commitizen/cz-cli)

**Antes de rodar o script:** Roda os testes automatizados dos arquivos em stage pelo git

### start

```shell script
yarn start
```

Roda o aplicativo localmente usando expo, para mais detalhes, veja a [documentação oficial do Expo](https://docs.expo.io/get-started/create-a-new-app/#starting-the-development-server)

### deploy

```shell script
yarn deploy $branch
```

Faz o [publish](https://docs.expo.io/workflow/publishing/) do projeto para o release channel especificado por `$branch`. Também faz push dos arquivos para o github

**Parâmetros necessários:**

- $branch: [Release channel](https://docs.expo.io/distribution/release-channels/) que será feito o deploy

### build:android

```shell script
yarn build:android $branch
```

Faz o [build](https://docs.expo.io/distribution/building-standalone-apps/) **android** do projeto para o release channel especificado por `$branch`. Também faz push dos arquivos para o github

Lembrete: Isso também faz com que o expo publique a versão para o OTA, ou seja, os antigos aplicativos serão atualizados automaticamente para essa nova versão quando abertos.

**Parâmetros necessários:**

- $branch: [Release channel](https://docs.expo.io/distribution/release-channels/) que será feito o build

### build:ios

```shell script
yarn build:ios $branch
```

Faz o [build](https://docs.expo.io/distribution/building-standalone-apps/) **ios** do projeto para o release channel especificado por `$branch`. Também faz push dos arquivos para o github

Lembrete: Isso também faz com que o expo publique a versão para o OTA, ou seja, os antigos aplicativos serão atualizados automaticamente para essa nova versão quando abertos.

**Parâmetros necessários:**

- $branch: [Release channel](https://docs.expo.io/distribution/release-channels/) que será feito o build

### verify

```shell script
yarn verify
```

Verifica se o Typescript (não o Expo) consegue compilar o projeto normalmente, use esse comando somente para verificar se não existe nenhum erro do Typescript no código

### test

```shell script
yarn test
```

Roda os testes localmente no ambiente de testes usando o [Jest](https://jestjs.io/docs/getting-started) no modo verboso, opcionalmente, você pode passar [qualquer parâmetro aceito pelo Jest](https://jestjs.io/docs/cli#options)

### TODO

jest:

test:quiet

test:ci

test:badges

repo:

### Husky

## Ferramentas utilizadas

## License

## API
