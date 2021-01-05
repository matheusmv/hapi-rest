# API RESTful

Conjunto de padrões que devem seguidos para obter uma API RESTful (Padrão de arquitetura).

- Utiliza o protocolo HTTP.
- Aplicações WEB.
- Uma aplicação pode utilizar várias API's RESTful (Ex: Correios, Twitter, Google Translate, Gateway de Pagamento, etc.).
- Exemplos de endpoint (URI):

        - /api/v1/products
        - /api/v1/products/{id}

- Verbo HTTP + Endpoint:

        - GET       /api/v1/products
        - GET       /api/v1/products/{id}
        - POST      /api/v1/products
        - PUT       /api/v1/products/{id}
        - DELETE    /api/v1/products/{id}
        - PATCH     /api/v1/products/{id}

- Resposta da requisição em JSON | XML.
- Formato das respostas JSON - jsonapi.org

- [Documentação](https://documenter.getpostman.com/view/9922970/TVsyf5qS)
