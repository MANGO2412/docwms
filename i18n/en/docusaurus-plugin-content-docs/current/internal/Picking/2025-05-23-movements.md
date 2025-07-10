---
title: Movements
---
# Movements(Movimientos)

El módulo de Movimientos en la aplicación móvil del WMS permite realizar de forma eficiente y controlada la reubicación de artículos dentro del almacén, ya sea por caja, por pieza o mediante consolidaciones.ste módulo está diseñado para facilitar las tareas operativas del personal, permitiéndoles ejecutar movimientos de inventario con trazabilidad, validación por escaneo y control de origen/destino.

En esta sección  describe el funcionamiento general de la vista del módulo y se detallan las tres principales funcionalidades disponibles:

- **Movimiento por caja**: permite trasladar cajas completas a ubicaciones de tipo Over Storage o Picking.

- **Movimiento por pieza**: facilita la reubicación de artículos individuales hacia locaciones multi-SKU.

- **Consolidaciones**: permite reagrupar productos desde ubicaciones de picking hacia cajas o locaciones multi-SKU.

Cada flujo está acompañado de capturas de pantalla y recomendaciones prácticas para garantizar que el proceso se realice de forma correcta, cumpliendo con las validaciones del sistema y evitando errores comunes como el cruce de COO.

## Vista util general del módulo

![](/img/upload/Movep1-2025-13-16.png)

| No  | Nombre                        | Descripción                                                                                              |
| :-- | :---------------------------- | :------------------------------------------------------------------------------------------------------- |
| 1   | Botón de menú de movimientos  | Botón que al presionarlo se permite ver las funciones de movimientos.                                    |
| 2   | Botón de movimiento por caja. | Botón que al presionarlo se permite mover una caja a una locación de over storage o picking.             |
| 3   | Botón de movimiento por pieza | Botón que al presionarlo se permite mover artículos a una locación multi SKU                             |
| 4   | Botón de consolidación        | Botón que al presionarlo se permite mover artículos de pick location hacia cajas o locaciones multi SKU. |

## Movimiento por caja.

Permite realizar movimientos de Caja de una almacén  a una ubicación de Over Storage o Picking  de un cliente.


- Accede al menú de la app móvil y toca la opción **"Movimientos"**.

![](/img/upload/Movep2-2025-13-16.png)

- Entre las opciones que se despliega, selecciona **"Movimiento por Caja"**.

![](/img/upload/Movep3-2025-13-16.png)

- A continuación, se mostrará una vista donde deberás **escanear primero la caja**.

![](/img/upload/Movep4-2025-13-16.png)

- **Identifica el código QR de la caja** para escanearlo; apóyate en el ejemplo de la imagen siguiente. 

![](/img/upload/Movep5-2025-13-16.png)

:::tip

De la etiqueta mostrada, **solo debes escanear el código QR grande ubicado en el lado derecho**.

:::

Una vez escaneada la caja, el sistema desplegará información relevante como el **número de PPL**, **número de recibo** y **el COO (país de origen)**.

![](/img/upload/Movep6-2025-13-16.png)

:::tip
Antes de escanear la ubicación, puedes seguir escaneando más cajas si es necesario.
:::

- **Toca "Escanear locación"** para continuar con el proceso de movimiento.

![](/img/upload/Movep7-2025-13-16.png)

- Al escanear la ubicación, se mostrará el **nombre de la ubicación** (ya sea de tipo Over Storage o Pick Location) y se activará el indicador que marca que ya se ha escaneado  la **locación final**.

![](/img/upload/Movep8-2025-13-16.png)

-  A continuación, **toca el botón "Movimiento Finalizado"** para completar el proceso.

![](/img/upload/Movep9-2025-13-16.png)

- Se abrirá una pantalla de confirmación; **toca "Realizar Movimiento"** para continuar.

![](/img/upload/Movep10-2025-13-16.png)

- Finalmente, se mostrará un mensaje indicando que el proceso fue exitoso. **Toca "Siguiente Movimiento"** si deseas realizar otro movimiento.

![](/img/upload/Movep11-2025-13-16.png)

:::warning

En caso de realizar un movimiento de una caja  a una ubicación con COO diferentes, el sistema de arrojará un error  y no se podrá finalizar el proceso:

![](/img/upload/Movep12-2025-13-16.png)


O si la caja contiene COO Mixed(Mezclado) porque contiene artículos de más de un país de origen como se observa en la siguiente imagen.

![](/img/upload/Movep13-2025-13-16.png)
:::

## Movimiento por pieza.

Esta opción permite  realizar movimientos de pieza a una ubicación multi sku.

- Accede al menú de la app móvil y toca la opción **"Movimientos"**.

![](/img/upload/Movep2-2025-13-16.png)

- Entre las opciones que se despliega, selecciona **"Movimiento por pieza"**.

![](/img/upload/Movep3-2025-13-16.png)


- A continuación, se mostrará una vista donde deberás escanear primero el **PPL de la caja**.

![](/img/upload/Movep14-2025-13-16.png)

- Identifica la etiqueta con el **código QR** que debe ser escaneado, como se muestra en la imagen de ejemplo.

![](/img/upload/Movep5-2025-13-16.png)

- Una vez escaneado el PPL, si el sistema lo reconoce, se mostrará el **nombre** y el **tipo de ubicación** donde se encuentra la caja en la sección de origen.

![](/img/upload/Movep15-2025-13-16.png)


- Ahora escanea cada artículo a través de su **SKU**. Al escanearlo, se desplegará información como: SKU, UPC, Descripción, Cantidad escaneada, Número de lote y COO.

![](/img/upload/Movep16-2025-13-16.png)

![](/img/upload/Movep17-2025-13-16.png)

:::note
La cantidad de piezas a escanear dependerá de la necesidad de moverlas a una **ubicación de tipo multi-SKU**.
:::

- Escanea la **ubicación final** para continuar con el proceso. Una vez escaneada, se mostrará el **nombre** y el **tipo de ubicación destino** al que se moverán las piezas del artículo.

![](/img/upload/Movep18-2025-13-16.png)

- Por último,  toca la opción Finalizar.

![](/img/upload/Movep19-2025-13-16.png)

- Se mostrará un mensaje de **confirmación**. Si estás de acuerdo con el movimiento, toca el botón **"Realizar Movimiento"** para continuar.

![](/img/upload/Movep20-2025-13-16.png)

- Finalmente, se visualizará un mensaje indicando que el proceso fue exitoso, junto con la opción de **realizar otro movimiento**.

![](/img/upload/Movep21-2025-13-16.png)

:::warning
En caso de realizar un movimiento de piezas  a una ubicación con COO diferentes, el sistema de arrojará un error  y no se podrá finalizar el proceso:

![](/img/upload/Movep22-2025-13-16.png)
:::

:::danger
### Error por mezcla de lotes al mover artículos

Al realizar un movimiento por caja, si se despliega el siguiente error:

<img src="/img/upload/Movep32-2025-13-16.png" width="550px"/>

Esto ocurre porque algunos clientes, como Tumble, prefieren organizar su inventario en locaciones separadas por número de lote.
Por esa razón, no se permite mezclar artículos con diferentes lotes mediante movimientos por caja desde el módulo de picking en la aplicación.

⚠️ Esta validación aplica únicamente en los módulos de Consolidaciones y Movimiento por pieza.
En esos casos, el sistema sí verifica que los artículos coincidan por lote antes de permitir el movimiento.

<h2>Recomendación</h2>

Antes de realizar el escaneo de una locación destino, asegúrate de que:

- La locación esté vacía
- Todos los artículos en ella tengan el mismo lote que los que estás moviendo.

Esto evitará interrupciones en el flujo de picking o consolidación y mantendrá la integridad del inventario.
:::


## Consolidaciones

Permite  realizar Movimientos  articulos de pick location hacia una caja o ubicaciones de tipo multi sku.

- Accede al menú de la app móvil y **toca la opción "Movimientos"**.

![](/img/upload/Movep2-2025-13-16.png)

- Entre las opciones que se despliega, selecciona **"Consolidaciones"**.

![](/img/upload/Movep23-2025-13-16.png)

- A continuación, se mostrará una vista donde deberás escanear primero el **Código QR** de la locación.

![](/img/upload/Movep24-2025-13-16.png)

:::warning
si Escaneas una locación que no sea de tipo pick location, el sistema no dejará continuar con el proceso.
:::

- Una vez escaneado te muestra el nombre y el tipo de locación del  origen.

![](/img/upload/Movep25-2025-13-16.png)

- Luego escanea los SKU de los artículos que desea  mover. Al escanearlo, se desplegará información como: SKU, UPC, Descripción, Cantidad escaneada, Número de lote y COO.

![](/img/upload/Movep26-2025-13-16.png)

- Ahora  toca la opción **Escanear destin**o  y después escanea una caja o una locación de tipo multi sku para continuar. 

![](/img/upload/Movep27-2025-13-16.png)

- Para este ejemplo se va a escanear  una  PPL de una caja  como se muestra en la siguiente imagen.

![](/img/upload/Movep5-2025-13-16.png)

- Una vez escaneado la caja, se muestra la locación de la caja como su nombre y tipo  como destino.

![](/img/upload/Movep28-2025-13-16.png)

- Luego toca en **Movimiento Finalizado** para continuar.

![](/img/upload/Movep29-2025-13-16.png)

- Se mostrará un mensaje de **confirmación**. Si estás de acuerdo con el movimiento, toca el botón **"Realizar Movimiento"** para continuar.

![](/img/upload/Movep30-2025-13-16.png)

- Finalmente, se visualizará un mensaje indicando que el proceso fue exitoso, junto con la opción de **realizar otro movimiento**.

![](/img/upload/Movep31-2025-13-16.png)

:::danger
 Si se presenta el siguiente error:
 <img src="/img/upload/Movep32-2025-13-16.png" width="550px"/>

Consulta el apartado [Error por mezcla de lotes al mover artículos](#error-por-mezcla-de-lotes-al-mover-artículos) para conocer las causas y condiciones que pueden generarlo.

Este error suele estar relacionado con restricciones configuradas por la compañía sobre el manejo de lotes en los movimientos de inventario.

:::