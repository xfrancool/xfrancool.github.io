@echo off
setlocal enabledelayedexpansion

set "sourceFile=agentecarter.js"
set "suffixList="

REM Lee la lista de nombres desde un archivo de texto llamado "nombres.txt"
for /f "usebackq delims=" %%a in ("nombres.txt") do (
  set "suffixList=!suffixList!%%a "
)

for %%a in (%suffixList%) do (
  copy "%sourceFile%" "%%a.js" > nul
)

endlocal
