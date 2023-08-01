# Comandos de Git

## Comandos Básicos

- cd
- dir
- mkdir
- del / rmdir

## Comandos Avançados

- git init
- git add *
- git commit -m *"Descrição da atualização"*
- git remote add *link do repositório no Github*
- git remote -v
- git status
- git push origin master
- git clone *link do conflito*
- git pull origin  master

## Editando Repositório no GitHub através do Git

1. git add .
2. git commit -m *"Descrição da atualização"*
3. git push origin main

## Vendo todas as modificações realizadas no arquivo

1. git diff *"Link do arquivo modificado"*
2. Q (quit)

## Ver histórico de comits

1. git log
2. Q (quit)

## Ver e gerir ramificações

1. git checkout -b *"Nome da nova ramificação"* <!--Cria nova branch e a inicia imediatamente-->
2. git branch <!-- Mostra a branch em que se está -->
3. git branch *"Nome da ramificação"* <!-- Cria uma nova branch -->
4. git checkout *"Nome da ramificação"* <!-- Permite navegar entre as branch, fazeno você entrar na branch declarada -->

## Deletando ramificações

1. git branch --delete *"Nome da ramificação"* 

## Mergindo ramificações

1. git merge *"Nome da ramificação que você deseja mergir com o ramo principal"* 
