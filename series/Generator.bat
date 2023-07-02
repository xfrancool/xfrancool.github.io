@echo off
setlocal enabledelayedexpansion

set "sourceFolder=agentecarter"
set "suffixList= corea viajeros"

for %%a in (%suffixList%) do (
  mkdir "%%a"
  copy "%sourceFolder%\index.html" "%%a\index.html" > nul
)

endlocal
