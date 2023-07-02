@echo off
setlocal enabledelayedexpansion

set "sourceFile=agentecarter.js"
set "suffixList=manana empire
academy
corea
viajeros"

for %%a in (%suffixList%) do (
  copy "%sourceFile%" "%%a.js" > nul
)

endlocal
