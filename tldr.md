# TLDR;

## Alias

```sh
alias d="docker"
alias dc="docker compose"
alias kup="KONG_DATABASE=postgres docker compose --profile database up -d"
alias kdown="KONG_DATABASE=postgres docker compose --profile database down"
alias cup="docker compose -f caddy.yaml up -d"
alias cdown="docker compose -f caddy.yaml down"
```

## docker compose file

<<< @/snippets/installation/compose-final.yaml
