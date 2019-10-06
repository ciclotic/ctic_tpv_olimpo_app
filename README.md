*NOTA Esta documentación está en castellano por motivos de productividad dada la comunidad que la desarrolla. En cuanto salga una versión beta toda documentación va a estar también en Inglés.

# Requisitos

Si se quiere compilar para iOS se requiere un mac junto a un licencia de desarrollador de Apple.
Si se quiere compilar para Android es necesario installar Android Studio

# Instalación

```
npm install
react-native link
cd ios
pod install
cd ..
```

Añadir las siguientes lineas a las "dependencies" de la sección "android/app/build.gradle":

```
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
```

