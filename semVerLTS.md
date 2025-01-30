# Versionamento Semântico e LTS

## Usarei dois componentes do meu Sistema como exemplos: Node.js e Eslint. 

## Node.js

### Versionamento Semântico
Node.js segue o versionamento semântico (SemVer) que são mantidas por um período prolongado, geralmente 30 meses, garantindo estabilidade e suporte para aplicações. Isso significa que cada versão é numerada no formato *MAJOR MINOR PATCH*, onde:
- **MAJOR**: Mudanças incompatíveis na API.
- **MINOR**: Funcionalidades adicionadas de forma compatível.
- **PATCH**: Correções de bugs de forma compatível.

### Long Term Support (LTS)
Node.js oferece versões de Long Term Support (LTS). As versões LTS são mantidas por um período prolongado e recebem atualizações de segurança e correções de bugs. As versões LTS são identificadas por nomes de codinome, como "Dubnium" ou "Erbium".

Em meu Sistema, utilizo a versão LTS 18.20.4 "Gallium".

Fonte e Documentação: [documentação oficial do Node.js](https://nodejs.org/en/about/releases/).

## ESLint

### Versionamento Semântico
ESLint segue o versionamento semântico (SemVer). As versões são numeradas no formato *MAJOR MINOR PATCH*, onde:
- **MAJOR**: Mudanças incompatíveis na API.
- **MINOR**: Funcionalidades adicionadas de forma compatível.
- **PATCH**: Correções de bugs de forma compatível.

### Long Term Support (LTS)
ESLint não oferece versões LTS oficiais. No entanto, a equipe do ESLint mantém um ciclo de lançamentos estável e bem documentado, com foco em fornecer atualizações regulares.
- Cada versão major tem suporte por aproximadamente 1 ano.
- Depois que uma nova versão major é lançada, a anterior entra em modo de manutenção por mais 6 meses.

Em meu Sistema, utilizo a versão estável 9.18.0.

Fonte e Documentação: [documentação oficial do ESLint](https://eslint.org/version-support/).