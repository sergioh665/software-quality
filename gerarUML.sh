PLANTUML_JAR="plantuml.jar"
OUTPUT_DIR="diagrams" #saída do diagrama

# Verifica se o plantuml.jar está presente
if [ ! -f "$PLANTUML_JAR" ]; then
    echo "Erro: Não foi encontrado o arquivo plantuml.jar!"
    exit 1
fi
java -jar "$PLANTUML_JAR" -tpng -o "$OUTPUT_DIR" uml/todos.puml #gerar o diagrama
