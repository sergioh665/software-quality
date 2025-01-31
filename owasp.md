# OWASP (Open Web Application Security Project)

## Prováveis riscos de segurança em meu Projeto baseados no OWASP - Top 10 Web Application Security Risks, do ano de 2021 e passos para mitigação ou controle de danos: 

### A01:2021 - Broken Access Control (Controle de Acesso Quebrado)

- Verificar se há endpoints que permitem acesso não autorizado a dados ou funcionalidades, como usuários normais podendo acessar dados administrativos.

- **Prevenção**: Implementar verificações de controle de acesso em todos os endpoints.

### A02:2021 - Cryptographic Failures (Falhas Criptográficas)

- Verificar se dados sensíveis são transmitidos ou armazenados sem criptografia adequada, como por exemplo, subir ao *Github* um arquivo com **senhas**. 

- **Prevenção**: Armazar dados sensíveis utilizando algoritmos de criptografia.

### A03:2021 - Injection (Injeção)

- Verificar vulnerabilidade a ataques de injeção, como SQL Injection, Command Injection, etc.

- **Prevenção**: Utilizar consultas parametrizadas ou ORM (Object-Relational Mapping - Mapeamento Objeto-Relacional) para interações com o banco de dados; Validar as entradas de dados.