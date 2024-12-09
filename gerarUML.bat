@echo off
REM Gerar um único diagrama UML a partir do arquivo all_diagrams.puml
java -jar plantuml.jar -tpng -o diagrams uml\todos.puml