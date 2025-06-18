---
sidebar_position: 2
title: Shipping Notice
---

# Shipping Notice

El módulo Shipping Notice permite gestionar los Avisos de Embarque (ASN) enviados por los clientes. En este módulo se detalla la información relacionada con los artículos que serán recibidos, incluyendo su descripción, cantidad, país de origen y etc.
Un ASN funciona como una validación y confirmación previa de los paquetes que se procesarán en el sistema, antes de generar una orden de recibo. Esta validación garantiza que la información del embarque esté completa y alineada con las ordenes de recibo  del WMS.



## Generar un ASN
- Haz clic en la opción **Create Shipping Notice** en la parte superior de la tabla.

![](/img/upload/SNp1-2025-13-16.png)

- Se desglosa un formulario, solicitando los siguientes datos para generar tu ASN. 

![](/img/upload/SNp2-2025-13-16.png)

:::note
Los datos para llenar el formulario son proporcionados por el cliente a través de un correo electrónico.
:::

- Posteriormente haz clic en  **ADD**.

![](/img/upload/SNp3-2025-13-16.png)

- Si el proceso es exitoso, se desglosa un mensaje  de color verde con el numero ASN interno que asigno el sistema y actualiza la tabla como se muestra en la siguiente imagen.

![](/img/upload/SNp4-2025-13-16.png)

- La información que se desglosa en la tabla sobre el ASN  es lo siguiente:

![](/img/upload/SNp5-2025-13-16.png)
![](/img/upload/SNp6-2025-13-16.png)


## Editar un ASN

- Para actualizar la información de un ASN  haz clic en icon del lapiz.

![](/img/upload/SNp7-2025-13-16.png)

- Se desglosa un formulario con los campos que se van a modificar.

![](/img/upload/SNp8-2025-13-16.png)

- Después de modificar algunos datos del ASN, haz clic en el botón **EDIT**.

![](/img/upload/SNp9-2025-13-16.png)

- Al finalizar este proceso,  el sistema actualizará los cambios y mostrara un mensaje de color verde con el numero **ASN interno** que se modifico.

![](/img/upload/SNp10-2025-13-16.png)

## Agregar Items al ASN.

- Posteriormente al crear un ASN, ahora para agregar un item al registro, haz doble clic en la fila del ASN deseado.

![](/img/upload/SNp11-2025-13-16.png)

- El sistema nos redireccionará a una vista principal más detallada sobre el ASN que creamos.


![](/img/upload/SNp12-2025-13-16.png)

- Para agregar un ítem haz clic en **Agregar Línea** en la parte inferior de la vista.


![](/img/upload/SNp13-2025-13-16.png)

- Se desglosa un  formulario, solicitando los siguientes campos.

![](/img/upload/SNp14-2025-13-16.png)

- Después de llenar los campos y verificar que la información es correcta, haz clic.

![](/img/upload/SNp15-2025-13-16.png)

- Si el proceso es exitoso, se desglosa un mensaje de color verde indicando el item Line se creo exitosamente como se muestra en la siguiente imagen.

![](/img/upload/SNp16-2025-13-16.png)

- Para verificar si el item Line ya existe, el sistema lo muestra en la tabla ubicada en la parte inferior de la sección de detalles del ASN, tal como se observa en la siguiente imagen:


![](/img/upload/SNp17-2025-13-16.png)

## Cargar archivos CSV para agregar varios  item line en  un ASN.
- Anteriormente, se explicaron los pasos para agregar un ítem de línea (item line) en un ASN. Sin embargo, existe una forma más práctica de realizar este proceso: mediante la carga de un archivo CSV que contenga la información más relevante con el ítem de línea(item line). A Continuación haz clic en **Descargar Plantilla** ubicado en parte  inferior del detalle del ASN.

![](/img/upload/SNp18-2025-13-16.png)

- Posteriormente se descargara un archivo csv con el nombre de asn-lines-layout.csv este archivo funciona como plantilla para indicarnos la estructura además de que  datos  se ocupan para  cargar el archivo csv. 

![](/img/upload/SNp19-2025-13-16.png)

- Al abrir  el archivo en excel, se observará lo siguiente.

![](/img/upload/SNp20-2025-13-16.png)

- Rellena el archivo con los ítem line que deseas agregar, como observa en la siguiente imagen.

![](/img/upload/SNp21-2025-13-16.png)

:::note
En los campos marcados como opcionales, puedes ingresar un dato o dejarlos en blanco. En cambio, los campos obligatorios deben ser completados necesariamente para continuar con el proceso.
:::

- Al finalizar, guarda los cambios, en WMS haz clic en **CARGAR CSV**.

![](/img/upload/SNp22-2025-13-16.png)

- Si el archivo contiene los datos y el formato correctos, se mostrará un mensaje en color verde indicando que la importación se ha realizado con éxito.

![](/img/upload/SNp23-2025-13-16.png)

- Por último verifica que los datos se hayan importado correctamente en la tabla de los item lines.

![](/img/upload/SNp24-2025-13-16.png)

## Editar y Eliminar un item del ASN

###  Editar
- **Para  editar** el item de un ASN, haz clic en el icono de editar     ubicado en la columna de **Actions**.

![](/img/upload/SNp25-2025-13-16.png)

- Se desglosa un formulario para editar,  la información que se puede cambiar son **Pieces Quantity**,**Purchase Order**, **Lot Number** y **Expiration Date**.

![](/img/upload/SNp26-2025-13-16.png)

- Posteriormente, haz clic en la opción **EDIT** para guardar los cambios.

![](/img/upload/SNp27-2025-13-16.png)


###  Eliminar

- **Para eliminar un item line**, haz clic en  el icono correspondiente ubicado en la columnas de acciones.

![](/img/upload/SNp28-2025-13-16.png)


- Posteriormente se desglosa un modal para confirmar si el elemento seleccionado, se desea eliminar, haz clic en **OK** para continuar.


![](/img/upload/SNp29-2025-13-16.png)

- Desglosa un mensaje de color verde y elimina el item en la tabla en la parte inferior.

![](/img/upload/SNp30-2025-13-16.png)


## Cambiar el estado de “In Transit”, “Receiving”  y “Received” en un ASN.

###  Pasar un ASN de “In Transit” a  “Receiving”.

- Posteriormente de haber creado  un ASN, Acceder al detalle  y agregar  sus correspondientes **Item Line** , notaremos que el estado por defecto es **In Transit**  como se observa en la siguiente imagen.

![](/img/upload/SNp31-2025-13-16.png)


- Para cambiar el estado a Receiving, debes primero  generar un recibo en  el módulo de [Receive Orders](./2025-05-23-ReceiveOrders.md), cuando se haya generado, automáticamente cambiará el estado a  **Receiving** del ASN  como se observa en la siguiente imagen.

![](/img/upload/SNp32-2025-13-16.png)

- Otro cambio que sufre, cuando se cambia el estado del ASN, son las  columnas **Difference(Expected Quantity vs Received Quantity) y Discrepancy** en la tabla de los Item Lines con estos valores por defecto.

![](/img/upload/SNp33-2025-13-16.png)


- Para actualizar los valores, primero es necesario crear los PPL en el módulo de Receive Orders. Luego, se deben escanear los PPL en el módulo Receive Orders Picking. Una vez completado este proceso, ambas columnas mencionadas en el paso anterior cambiarán a 0, lo que indica que la información del ASN coincide con el procesamiento de los paquetes y no existen discrepancias.

![](/img/upload/SNp34-2025-13-16.png)

- Después de escanear cada PPL en el módulo Receive Orders Picking, la columna Received Quantity se actualiza reflejando la cantidad de productos que han ingresado al almacén.

![](/img/upload/SNp35-2025-13-16.png)

### Pasar un ASN de “Receiving” a  “Received”

- Una vez que el ASN ha cambiado de estado de Receiving a Received, el paso final consiste en actualizar su estatus a Received para notificar al cliente que sus paquetes han sido recibidos en el almacén. Para completar este proceso, haz clic en el botón 'VALIDAR ASN' dentro del detalle del ASN correspondiente.

![](/img/upload/SNp36-2025-13-16.png)

- A continuación, se mostrará una ventana emergente (modal) indicando que no existe discrepancia entre la información del ASN y la orden de recibo. Haz clic en 'Validate' para continuar con el proceso.


![](/img/upload/SNp37-2025-13-16.png)

- Finalmente, el sistema actualiza automáticamente el estado del ASN de Receiving a Received, notificando al cliente que sus paquetes han sido recibidos sin discrepancias. Con este paso, se da por concluido el proceso de cambio de estatus. 

![](/img/upload/SNp38-2025-13-16.png)
