@echo off
setlocal enabledelayedexpansion

:: Inicializar contador de línea
set /a "lineCount=1"

:: Nombres de archivos originales
set "originalName1=event12.json"


:: Leer cada línea del archivo de texto y hacer copias con los nuevos nombres
for /f "tokens=*" %%a in (01nombres.txt) do (
    if !lineCount!==1 (
        copy "!originalName1!" "%%a.json"
    )
  
    set /a "lineCount+=1"
)

echo Archivos copiados y renombrados correctamente.
pause
