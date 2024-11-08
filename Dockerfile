FROM openjdk:11-jre-slim

# Instala wget para baixar o PMD
RUN apt-get update && apt-get install -y wget unzip

# Baixa e extrai o PMD
RUN wget https://github.com/pmd/pmd/releases/download/pmd_releases/6.39.0/pmd-bin-6.39.0.zip && \
   unzip pmd-bin-6.39.0.zip && \
   rm pmd-bin-6.39.0.zip

# Define o diretório de trabalho
WORKDIR /app

# Copia o código do projeto para o container
COPY . /app

# Define o comando padrão para executar o CPD
CMD ["/pmd-bin-6.39.0/bin/run.sh", "cpd", "--minimum-tokens", "100", "--files", ".", "--language", "javascript"]