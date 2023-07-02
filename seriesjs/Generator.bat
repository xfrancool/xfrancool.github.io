@echo off
setlocal enabledelayedexpansion

set "sourceFile=agentecarter.js"
set "suffixList=corea viajeros"

for %%a in (%suffixList%) do (
  copy "%sourceFile%" "%%a.js" > nul
)

endlocal
