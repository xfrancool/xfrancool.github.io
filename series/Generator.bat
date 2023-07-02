@echo off
setlocal enabledelayedexpansion

set "sourceFolder=agentecarter"
set "suffixList= manana empire academy
corea viajeros"

for %%a in (%suffixList%) do (
  mkdir "%%a"
  copy "%sourceFolder%\index.html" "%%a\index.html" > nul
)

endlocal
