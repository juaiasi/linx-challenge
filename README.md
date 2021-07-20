# Resposta ao desafio Frontend Developer | Linx Impulse
https://github.com/chaordic/frontend-developer-challenge

## Instruções

Para rodar o projeto, você precisa clonar a pasta com o *git bash* no seu local de trabalho com o seguinte comando:
> git clone https://github.com/juaiasi/linx-challenge

Caso você não tenha o git hub instalado, também é possível baixar a pasta pelo próprio navegador diretamente do repositório:
> https://github.com/juaiasi/linx-challenge

Depois disso, ao abrir o **index.html**, o site estará funcionando localmente, de forma que será possível interagir e testar seu funcionamento.

Todas as funções em javascript se encontram no arquivo **main.js**, que está na subpasta "scripts".

A estilização da página se encontra no arquivo **style.css**, dentro da subpasta "styles".

O email a ser enviado após o formulário é o próprio **email.html**.

O *live preview* do site pode ser acessado através desse link:
> https://linx-challenge-taupe.vercel.app/

O email também pode ser visualizado aqui:
> https://linx-challenge-taupe.vercel.app/email.html

## Processo

A primeira etapa do projeto foi criar a estrutura básica em html e a estilização com css da versão mobile, cujas especificações foi possível extrair do mockup. Iniciei pelo reset de algumas propriedades padrões e a criação das variáveis de cor.

Depois da construção de boa parte do layout para versão mobile, comecei a fazer a integração com a API por meio do fetch para chamar os dados dos primeiros oito produtos e inserir no html, utilizando a função innerHTML, dentro da tag com respectivo ID.  Feito isso, estilizei os cards com css (grid css) e terminei de fazer o layout responsivo utilizando @query. 

Em seguida, trabalhei na autenticação dos inputs dos formulários, mostrando mensagens de erro em algumas situações em que os dados enviados estavam errados ou incompletos. 

Depois fiz o layout do email utilizando as tags de tabelas com estilização no próprio html. 

Por último, fiz o carregamento de mais produtos ao clicar no botão "ainda mais produtos". Isso funcionou depois que inseri o fetch dentro de uma função assíncrona (loadProducts), dei o valor da próxima página à variável apiUrl (data.nextPage) e chamei a função em seguida. Depois disso, criei outra função assíncrona (moreProducts) para ser chamada ao clicar no botão, dentro da qual inseri um comando para esperar (await) o carregamento da função loadProducts, o que permitiu usar a URL da próxima página no fetch e a inserção dos produtos da página seguinte.

No final fiz alguns ajustes finos no layout que percebi ao subir o site no live preview.

## Dificuldades

A principal dificuldade foi que, apesar de eu ter certa experiência com Javascript, não tive muita experiência com o consumo de APIs (manipulei uma vez um código pronto, mas nunca tinha criado efetivamente que me lembre). Por isso precisei dar uma estudada sobre como isso era feito e relembrar alguns conceitos. Não consegui a tempo resolver a ausência de digitos "0" após a vírgula nos preços.

Outro problema foi que, para a criação do email, eu utilizei tags de tabela e estilização nas próprias tags, que é o modo tradicional de criar email marketing. Não tive tempo de estudar como são feitos os emails responsivos da forma adequada. Também não tive tempo de estudar como funciona a utilização de scripts para emails, por isso utilizei os textos do próprio mockup e uma imagem qualquer apenas para simular a aplicação.

Na parte de estilização, não consegui resolver a tempo o alinhamento lateral direito dos cards, a largura deles e espaçamento em algumas larguras intermediárias entre mobile e desktop.

Também não tive tempo de pesquisar como utilizar o SCSS para fazer o pré-processamento da folha de estilo.
