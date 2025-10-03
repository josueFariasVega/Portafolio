#!/bin/bash

echo " Verificando configuraci n para Vercel..."

# Verificar archivos cr ticos
echo " Verificando archivos de configuraci n..."
ls -la vercel.json .env* vite.config.ts index.html

# Probar instalaci n de dependencias
echo " Instalando dependencias..."
npm install

# Probar build local
echo " Probando build local..."
npm run build

if [ $? -eq 0 ]; then
    echo " Build exitoso!"

    # Verificar contenido del directorio build
    echo " Verificando contenido de build..."
    ls -la build/

    # Verificar archivos cr ticos en build
    if [ -f "build/index.html" ] && [ -f "build/assets/index-*.js" ]; then
        echo " Archivos cr ticos generados correctamente"
        echo "  Listo para deploy en Vercel!"
    else
        echo " Error: Archivos cr ticos no generados"
        exit 1
    fi
else
    echo " Error en build"
    exit 1
fi
