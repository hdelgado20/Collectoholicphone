# Mi museo — app para Android e iOS

Muestra https://collectoholic.neocities.org/ dentro de una app nativa. Los cambios publicados en Neocities aparecen en la app sin reinstalarla.

## Preparar (en tu ordenador)
    npm init -y
    npm i @capacitor/core @capacitor/cli
    npx cap init "Mi museo" org.collectoholic.museo --web-dir www
    # Sustituye el capacitor.config generado por el de esta carpeta
    npx cap add android
    npx cap add ios
    npx cap sync

## Compilar
- Android: abre `android/` con Android Studio y genera el APK o el AAB. Google Play cobra una cuota única.
- iOS: necesitas un Mac con Xcode. Abre `ios/App` en Xcode. Para instalarla en tu iPhone o publicarla en App Store hace falta una cuenta de desarrollador de Apple (de pago).

Apple puede rechazar apps que solo muestran una web. Si ocurre, usa la PWA desde Safari (ver abajo).

## Alternativa sin compilar (iPhone y Android)
Abre https://collectoholic.neocities.org/ en Safari o Chrome y elige «Añadir a pantalla de inicio» o «Instalar aplicación». Funciona igual que una app.
