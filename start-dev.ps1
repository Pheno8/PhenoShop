$ErrorActionPreference = "Stop"

Set-Location -Path $PSScriptRoot

Write-Host "==> PhenoShop: démarrage automatique" -ForegroundColor Cyan

# Ensure standard Node.js installation path is available in this session.
$nodeJsDir = "C:\Program Files\nodejs"
if (Test-Path $nodeJsDir) {
  if (-not ($env:Path -split ";" | Where-Object { $_ -eq $nodeJsDir })) {
    $env:Path = "$nodeJsDir;$env:Path"
  }
}

$nodeCmd = Get-Command node -ErrorAction SilentlyContinue
if (-not $nodeCmd) {
  Write-Host "Node.js est introuvable. Installe Node LTS puis relance ce script." -ForegroundColor Red
  Write-Host "Commande suggérée: winget install OpenJS.NodeJS.LTS" -ForegroundColor Yellow
  exit 1
}

$npmCmdPath = Join-Path $nodeJsDir "npm.cmd"
$npmCmd = Get-Command npm -ErrorAction SilentlyContinue
if ((-not $npmCmd) -and (Test-Path $npmCmdPath)) {
  $npmCmd = Get-Command $npmCmdPath -ErrorAction SilentlyContinue
}

if (-not $npmCmd) {
  Write-Host "npm est introuvable. Réinstalle Node LTS puis relance ce script." -ForegroundColor Red
  Write-Host "Commande suggérée: winget install OpenJS.NodeJS.LTS" -ForegroundColor Yellow
  exit 1
}

Write-Host "Node: $(node -v)"
Write-Host "npm : $(& $npmCmd.Source -v)"

if (-not (Test-Path "node_modules")) {
  Write-Host "==> Installation des dépendances..." -ForegroundColor Yellow
  & $npmCmd.Source install
} else {
  Write-Host "==> Dépendances déjà présentes (node_modules trouvé)." -ForegroundColor Green
}

Write-Host "==> Lancement du serveur de développement..." -ForegroundColor Yellow
& $npmCmd.Source run dev
