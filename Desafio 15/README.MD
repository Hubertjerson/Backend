# Desafío 16

## Loggers, Gzip y análisis de performance.

### Consignas

Incorporar al proyecto de servidor de trabajo la compresión gzip.

Verificar sobre la ruta /info con y sin compresión, la diferencia de cantidad de bytes devueltos en un caso y otro.

Luego implementar loggueo (con alguna librería vista en clase) que registre lo siguiente:

   - Ruta y método de todas las peticiones recibidas por el servidor (info)
   - Ruta y método de las peticiones a rutas inexistentes en el servidor (warning)

Errores lanzados por las apis de mensajes y productos, únicamente (error)
Considerar el siguiente criterio:
  - Loggear todos los niveles a consola (info, warning y error)
  - Registrar sólo los logs de warning a un archivo llamada warn.log
  - Enviar sólo los logs de error a un archivo llamada error.log

----

Luego, realizar el análisis completo de performance del servidor con el que venimos trabajando.

Vamos a trabajar sobre la ruta '/info', en modo fork, agregando ó extrayendo un console.log de la información colectada antes de devolverla al cliente. Además desactivaremos el child_process de la ruta '/randoms'

Para ambas condiciones (con o sin console.log) en la ruta '/info' OBTENER:

  - El perfilamiento del servidor, realizando el test con --prof de node.js. Analizar los resultados obtenidos luego de procesarlos con --prof-process. 
  - Utilizaremos como test de carga Artillery en línea de comandos, emulando 50 conexiones concurrentes con 20 request por cada una. Extraer un reporte con los resultados en archivo de texto.

----

Luego utilizaremos Autocannon en línea de comandos, emulando 100 conexiones concurrentes realizadas en un tiempo de 20 segundos. Extraer un reporte con los resultados (puede ser un print screen de la consola)

  - El perfilamiento del servidor con el modo inspector de node.js --inspect. Revisar el tiempo de los procesos menos performantes sobre el archivo fuente de inspección.
  - El diagrama de flama con 0x, emulando la carga con Autocannon con los mismos parámetros anteriores.
  
Realizar un informe en formato pdf sobre las pruebas realizadas incluyendo los resultados de todos los test (texto e imágenes). 

### Conclusión

```Console

Benchmark con console Log

$ npm run test

> desafio-15@1.0.0 test
> node benchmark.js

Running 20s test @ http://localhost:8080/info
100 connections

┌─────────┬────────┬────────┬────────┬────────┬──────────┬─────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg      │ Stdev   │ Max    │
├─────────┼────────┼────────┼────────┼────────┼──────────┼─────────┼────────┤
│ Latency │ 283 ms │ 390 ms │ 673 ms │ 747 ms │ 406.1 ms │ 93.4 ms │ 852 ms │
└─────────┴────────┴────────┴────────┴────────┴──────────┴─────────┴────────┘
┌───────────┬─────────┬─────────┬────────┬────────┬────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%    │ 97.5%  │ Avg    │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼────────┼────────┼────────┼─────────┼─────────┤
│ Req/Sec   │ 139     │ 139     │ 246    │ 310    │ 244.25 │ 42.11   │ 139     │
├───────────┼─────────┼─────────┼────────┼────────┼────────┼─────────┼─────────┤
│ Bytes/Sec │ 66.3 kB │ 66.3 kB │ 117 kB │ 148 kB │ 117 kB │ 20.1 kB │ 66.3 kB │
└───────────┴─────────┴─────────┴────────┴────────┴────────┴─────────┴─────────┘
Req/Bytes counts sampled once per second.
# of samples: 20

5k requests in 20.13s, 2.33 MB read
```
El resultado de Artillery nos indica (ver archivo para resultados completos)

```console

http.response_time:
  min: ......................................................................... 3
  max: ......................................................................... 102
  median: ...................................................................... 44.3
  p95: ......................................................................... 70.1
  p99: ......................................................................... 85.6
```
Sin console log
```console

$ npm run test

> desafio-15@1.0.0 test
> node benchmark.js

Running 20s test @ http://localhost:8080/info
100 connections


┌─────────┬───────┬───────┬────────┬────────┬──────────┬──────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5%  │ 99%    │ Avg      │ Stdev    │ Max    │
├─────────┼───────┼───────┼────────┼────────┼──────────┼──────────┼────────┤
│ Latency │ 47 ms │ 55 ms │ 104 ms │ 120 ms │ 61.92 ms │ 21.49 ms │ 370 ms │
└─────────┴───────┴───────┴────────┴────────┴──────────┴──────────┴────────┘
┌───────────┬────────┬────────┬────────┬────────┬────────┬────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%  │ Avg    │ Stdev  │ Min    │
├───────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│ Req/Sec   │ 648    │ 648    │ 1719   │ 1988   │ 1601.8 │ 340.86 │ 648    │
├───────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│ Bytes/Sec │ 308 kB │ 308 kB │ 819 kB │ 947 kB │ 763 kB │ 163 kB │ 308 kB │
└───────────┴────────┴────────┴────────┴────────┴────────┴────────┴────────┘

Req/Bytes counts sampled once per second.
# of samples: 20

32k requests in 20.09s, 15.3 MB read
```
El resultado de Artillery nos indica (ver archivo para resultados completos)

```console

http.response_time:
  min: ......................................................................... 4
  max: ......................................................................... 146
  median: ...................................................................... 34.1
  p95: ......................................................................... 94.6
  p99: ......................................................................... 144
```
