# Configurações que uso no Visual Studio Code

### NÃO É IMPORTANTE!!

```
{
  //workbench
  "workbench.statusBar.visible": false, //esconder a barra de status la em baixo
  "workbench.colorTheme": "Min Dark", //tema escolhido
  "workbench.layoutControl.enabled": false, //mostrar os controles em cima
  "workbench.activityBar.location": "default", //menu lateral
  "workbench.editor.labelFormat": "short", //mostrar informacoes da pasta la em cima

  //terminal
  "terminal.integrated.fontSize": 12, //tamanho da fonte no terminal
  "terminal.integrated.defaultProfile.windows": "Command Prompt", //CMD como default

  //window
  "window.commandCenter": false, //tira o menu de pesquisa em cima
  "window.titleBarStyle": "custom", //remover o todo menu de cima
  "window.menuBarVisibility": "compact", //menu de opcoes "file" "edit" etc

  //explorer
  "explorer.compactFolders": false, //descompactar pastas
  "explorer.fileNesting.enabled": true,
  "explorer.fileNesting.patterns": {
    "*.ts": "${capture}.js",
    "*.js": "${capture}.js.map, ${capture}.min.js, ${capture}.d.ts",
    "*.jsx": "${capture}.js",
    "*.tsx": "${capture}.ts",
    "tsconfig.json": "tsconfig.*.json",
    "package.json": "package-lock.json, yarn.lock, pnpm-lock.yaml, bun.lockb"
  },

  //breadcrumbs
  "breadcrumbs.enabled": false, //remover caminho de rato dos arquivos

  //editor
  "editor.scrollbar.vertical": "hidden", //esconder barra vertical
  "editor.cursorBlinking": "expand", //tamanho da fonte do terminal
  "editor.formatOnSave": true,
  "editor.tabSize": 3, //tamanho do tab
  "window.zoomLevel": 0, //zoom do app
  "editor.fontFamily": "JetBrains Mono", //fonte diferente
  "editor.fontSize": 14, //tamanho da fonte
  "editor.lineHeight": 0, //zoom da fonte
  /* "editor.rulers": [80,120] */ //testa esse
  "editor.renderLineHighlight": "gutter",
  "glassit.alpha": 220,
  "codesnap.backgroundColor": "#FFFFFF",
  "codesnap.shutterAction": "copy",
  "workbench.startupEditor": "none" //o que aparece quando abre o vsc
}
```
