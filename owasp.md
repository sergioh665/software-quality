# OWASP (Open Web Application Security Project)

## Prováveis riscos de segurança em meu Projeto baseados no OWASP - Top 10 Web Application Security Risks, do ano de 2021 e passos para mitigação ou controle de danos:

### A01:2021 - Broken Access Control (Controle de Acesso Quebrado)

- Verificar se há endpoints que permitem acesso não autorizado a dados ou funcionalidades, como usuários normais podendo acessar dados administrativos.

- **Prevenção**: Implementar verificações de controle de acesso em todos os endpoints.

### A02:2021 - Cryptographic Failures (Falhas Criptográficas)

- Verificar se dados sensíveis são transmitidos ou armazenados sem criptografia adequada, como por exemplo, subir ao _Github_ um arquivo com **senhas**.

- **Prevenção**: Armazar dados sensíveis utilizando algoritmos de criptografia.

### A04:2021 - Insecure Design (Design Inseguro)

- Falhas no design da aplicação que comprometem a segurança.

- **Prevenção**: Adotar práticas de design seguro e verificações.
