---
sidebar_position: 3
title: Order Monitors
---



# Order Monitors

En este módulo se generan las órdenes de pedido, además  se visualiza el flujo fulfillment que contiene cada una de las  órdenes, así como un historial de movimientos realizados a cada evento de la orden.

## Visualización de la vista  principal.

- Al acceder al módulo, se despliega información relacionada con las órdenes de pedido  en el sistema.

![](/img/upload/OMp1-2025-13-16.png)

- En la parte superior, se encuentra una sección de indicadores que presenta métricas clave sobre el estado de las órdenes. Esta sección muestra:
    - La cantidad de órdenes activas compuestas por un solo artículo y por múltiples artículos.
    - Las órdenes que tienen prioridad para ser procesadas, lo que permite enfocar los recursos en aquellas más urgentes.
    - El número de totes actualmente en uso, diferenciando entre los totes de tipo **normal** y los de tipo **preconfigurado**.

![](/img/upload/OMp2-2025-13-16.png)

- En la parte inferior del módulo se despliega una tabla que contiene la información  de las órdenes de pedido generadas. Las columnas muestran información clave para su identificación y seguimiento. 
    - **La columna Order ID** corresponde a una clave única que identifica de forma específica cada orden dentro del sistema. 
    - **La columna Status** refleja el estado actual de la orden, el cual puede ser Open si está abierta, Cancelled si ha sido cancelada, Processing si está en proceso, o Fulfilled si ya ha sido procesada y está lista para pasar al proceso de envío. 
    - **En la columna Campaign** se indica la empresa o cliente al que pertenece la orden. 
    - **La columna  Business Model** especifica el modelo de negocio bajo el cual se está gestionando esa orden. 
    - **La columna Value** muestra el valor económico asociado a la orden.
    - **La columna Customer Purchase Order** representa el número  de compra  proporcionado por el cliente.
    - **Shipping Address** contiene la dirección a la cual se debe enviar el pedido.
    - **# of Fulfillment Events** indica la cantidad de eventos que contiene la orden.

![](/img/upload/OMp3-2025-13-16.png)

- En la parte superior de la tabla, hay una sección  de opciones para filtrar por  **ORDERS** (despliega las órdenes de pedido mencionadas anteriormente) o la opción **EVENTS**(visualizar todo los eventos fulfillment  de cada orden).

    - Al hacer clic en **Events**.

    ![](/img/upload/OMp4-2025-13-16.png)

    - la información que desglosa es lo siguiente:

    ![](/img/upload/OMp5-2025-13-16.png)
    ![](/img/upload/OMp6-2025-13-16.png)
    ![](/img/upload/OMp7-2025-13-16.png)
    ![](/img/upload/OMp8-2025-13-16.png)

## Generar una orden.

- Haz clic en la opción **CREATE**.
  
  ![](/img/upload/OMp9-2025-13-16.png)

- Se desglosa un formulario con varias secciones.
 
  ![](/img/upload/OMp10-2025-13-16.png)

    - En la sección **create shipping order** se llenan los siguientes dados
        - En esta sección se deben completar los datos principales relacionados con la creación de una orden de envío. Aquí se definen los identificadores de la orden, el valor total, el canal de origen y el método de transporte que se utilizará para procesarla.

         ![](/img/upload/OMp11-2025-13-16.png)

        - Esta sección del formulario solicita la información completa de la dirección de envío. Incluye los datos del destinatario, la ubicación exacta para la entrega, medios de contacto y el país de destino.

         ![](/img/upload/OMp12-2025-13-16.png)

        - En esta sección se deben ingresar los datos de facturación. Se solicita la información del responsable o empresa que recibirá la factura, junto con la dirección fiscal, información de contacto y país de residencia fiscal.

         ![](/img/upload/OMp13-2025-13-16.png)
        
        - En esta sección se deben ingresar los datos relacionados con el servicio de transporte seleccionado, el modelo de negocio bajo el cual se procesa la orden y, en caso de aplicar, especificar si el costo del envío será asumido por un tercero.

          ![](/img/upload/OMp14-2025-13-16.png)
        
        - Para finalizar, haz clic en la opción **ADD** dentro de la sección Order Lines.

          ![](/img/upload/OMp15-2025-13-16.png)

        - Al hacerlo, se habilitan varios campos que permiten registrar la información del artículo que será incluido en la orden. Los datos solicitados son los siguientes:
          - **SKU**: Código único del producto para su identificación en el inventario.
          - **Package Quantity**: Cantidad de unidades o paquetes del producto que se agregan a la orden.
          - **Sales Price**: Precio unitario de venta correspondiente al producto.

          ![](/img/upload/OMp16-2025-13-16.png)

:::note
Si necesitas eliminar un artículo agregado, haz clic en el ícono de eliminar (🗑️) ubicado junto al campo Package Quantity.
Para añadir más artículos a la orden, simplemente haz clic nuevamente en el botón ADD. 
:::

- Una vez completado el formulario, haz clic en el botón **SAVE** para guardar los datos de la orden de pedido.
![](/img/upload/OMp17-2025-13-16.png)

- Al guardar exitosamente, se mostrará un mensaje de confirmación en color verde indicando que el proceso se ha realizado correctamente. Además, se visualizará el **estado actual de la orden**, lo cual permite verificar en qué etapa del flujo de procesamiento se encuentra.

![](/img/upload/OMp18-2025-13-16.png)

## Visualizando detalle de la orden

* Para visualizar el detalle completo de una orden de pedido, haz doble clic sobre la fila correspondiente en la tabla. 

![](/img/upload/OMp19-2025-13-16.png)

- Esto abrirá la vista detallada de la orden seleccionada.

![](/img/upload/OMp20-2025-13-16.png)

- La vista se divide en varias opciones y secciones de  la información  que   desglosa en relación con la orden:
  - En la parte superior se muestra el número de identificación, estado en cual se encuentre, la campaña, modelo de negocio, PO, valor de la orden y cantidad de eventos.
![](/img/upload/OMp21-2025-13-16.png)
  - En la parte inferior izquierda se muestra el historial de eventos vinculados a la orden de pedido, permitiendo consultar el estado y evolución del proceso logístico.
![](/img/upload/OMp22-2025-13-16.png)
  - En la parte inferior central de la pantalla se despliega el detalle del evento asociado a la orden. Esta sección incluye información clave como el número de identificación del evento, almacén asignado, método y tipo de servicio de envío, fecha de inicio del procesamiento (si aplica), valor relacionado con la orden, cantidad de paquetes (visible cuando el evento se encuentra en estado Packed), regla de importación aplicada y el número de Tray asignado (disponible cuando el evento está en estado Picked). También se desglosa detalles del artículo como su **sku**, **upc**, **precio(price)** y **descripción(description)**.
  ![](/img/upload/OMp23-2025-13-16.png)
  - En la parte inferior derecha de la pantalla se presenta información complementaria de la orden, incluyendo los datos de envío, información de facturación, notas asociadas, **servicios VAS (Servicios de Valor Agregado)** incluidos, así como las fechas de recepción correspondientes.
  ![](/img/upload/OMp24-2025-13-16.png)

## Acciones por evento.
- Haz clic en la opción de los tres puntos ubicado en la parte inferior del lado derecho del evento.

 ![](/img/upload/OMp25-2025-13-16.png)

- Desglosa una barra de opciones.

 ![](/img/upload/OMp26-2025-13-16.png)

### Mover Articulos 

Permite mover el artículo del evento actual a otro existente o nuevo en la orden.

- Haz clic en la opción **Mover Artículos**.

 ![](/img/upload/OMp27-2025-13-16.png)

- A Continuación se muestra una casilla de verificación y haz clic en la casilla para seleccionar el artículo a mover.

![](/img/upload/OMp28-2025-13-16.png)

- Posteriormente indica cuántos artículos deseas mover, para este ejemplo se deja el valor  por defecto  por que  solamente se desea mover un artículo.

![](/img/upload/OMp30-2025-13-16.png)

- Luego haz clic en la opción Move.

![](/img/upload/OMp31-2025-13-16.png)

- A continuación, se muestra un formulario que permite elegir si se desea mover el artículo a un evento existente o a uno nuevo. Para moverlo a un evento existente, selecciona el evento correspondiente desde el campo desplegable.Si prefieres moverlo a  un nuevo evento, marca la casilla **New Event** y deja vacío el campo de selección anterior.

![](/img/upload/OMp32-2025-13-16.png)

- Para este ejemplo, se marcará en la casilla  de new event para realizar un movimiento a  un nuevo evento.

![](/img/upload/OMp33-2025-13-16.png)

- seguido haz clic en la opción **Confirm**.


![](/img/upload/OMp34-2025-13-16.png)

- Aparecerá un mensaje solicitando confirmación para continuar con el proceso. Haz clic en **Save** para proseguir.

![](/img/upload/OMp35-2025-13-16.png)

- Una vez completado el proceso, se mostrará un mensaje en color verde indicando que la operación fue exitosa, junto con el número de identificación del evento creado.

![](/img/upload/OMp36-2025-13-16.png)

### See more event information

Esta opción permite  desglosar información del evento como la fecha de creación.

- Haz clic en la opción correspondiente.

![](/img/upload/OMp37-2025-13-16.png)

- Luego se muestra un modal lateral  con la fecha de creación del evento.

![](/img/upload/OMp38-2025-13-16.png)


### Divide event.

Permite dividir el evento de una orden de pedido en varios eventos, con el objetivo de gestionar artículos que generan los estatus **Replenishment** o **Queue**, como se muestra en la siguiente imagen.

![](/img/upload/OMp39-2025-13-16.png)

- Haz clic en la opción correspondiente.

![](/img/upload/OMp40-2025-13-16.png)

- Se habilitan casillas de verificación para seleccionar los artículos que formarán parte del nuevo evento.

![](/img/upload/OMp41-2025-13-16.png)

- A continuación, indica la cantidad de eventos que se crearán para los artículos seleccionados, en el campo ubicado en la parte inferior de la lista de artículos.

![](/img/upload/OMp42-2025-13-16.png)

- Después, haz clic en el botón Divide para finalizar el proceso.

![](/img/upload/OMp43-2025-13-16.png)

- A continuación, se mostrará un mensaje de confirmación; para continuar con el proceso, haz clic en **Save**.

![](/img/upload/OMp44-2025-13-16.png)

- Posteriormente, se mostrará un mensaje en color verde indicando que el proceso fue exitoso, seguido del código del evento creado. Al nuevo evento se le asignará automáticamente el estatus correspondiente.


![](/img/upload/OMp45-2025-13-16.png)

### Send to queue.

Permite cambiar el estado del evento a **Queue** (cola) para que pueda ser procesado.

- Haz clic en la opción correspondiente.

![](/img/upload/OMp46-2025-13-16.png)

- Si el artículo tiene stock disponible en la **Pick Location**, el estatus del evento se actualizará correctamente a **Queue**. El sistema mostrará un mensaje en color verde indicando que la actualización del estado fue exitosa.

![](/img/upload/OMp47-2025-13-16.png)

- Si no hay suficiente stock del artículo, el estatus no se actualizará a **Queue**,  se mantendrá en **Backorder**. Además, se mostrará un mensaje en color rojo indicando que no es posible cambiar a **Queue** debido a stock insuficiente.

![](/img/upload/OMp48-2025-13-16.png)

- Si hay suficiente stock, pero no está ubicado en la **Pick Location**, el estatus tampoco se cambiará a **Queue**. En este caso, el sistema mostrará un mensaje en color rojo indicando que no existen artículos disponibles en la **Pick Location**.

![](/img/upload/OMp49-2025-13-16.png)

### Marcar como prioridad.

Permite establecer el evento como **prioritario** para su procesamiento en el sistema.

- Haz clic en la opción correspondiente.

![](/img/upload/OMp50-2025-13-16.png)

- A continuación, el sistema mostrará un mensaje en color verde indicando que el evento ha sido marcado como prioritario para ser procesado.

![](/img/upload/OMp51-2025-13-16.png)

- También muestra un icono de color rojo indicando que ahora esta como priorida el evento.

![](/img/upload/OMp52-2025-13-16.png)

### Mark as Hold.

permite cambiar el estatus de un evento a Hold.

- Haz clic en la opción correspondiente.

![](/img/upload/OMp53-2025-13-16.png)

- A continuación, se mostrará un formulario en el que se debe ingresar una breve descripción del motivo por el cual se desea cambiar el evento a **Hold**.

![](/img/upload/OMp54-2025-13-16.png)

- Para continuar con el proceso, haz clic en la opción **Confirm**.

![](/img/upload/OMp55-2025-13-16.png)

- El sistema mostrará un mensaje en color verde indicando que el proceso se ha completado exitosamente, y el evento cambiará su estatus a **Hold**.

![](/img/upload/OMp56-2025-13-16.png)

### Release fullfilment.
Permite restablecer un evento en estado **Hold** a su estado anterior o enviarlo a **Queue** para ser procesado, según la disponibilidad de inventario.

- Haz clic en la opción correspondiente.

![](/img/upload/OMp57-2025-13-16.png)

- El sistema intentará actualizar el estado del evento.
  - Si hay stock disponible en la ubicación de picking, el evento se moverá automáticamente a **Queue**.
  - Si no hay stock suficiente en esa ubicación, el evento volverá a su estado anterior y se mostrará un mensaje en color rojo explicando el motivo por el cual no fue posible enviarlo a **Queue**.

![](/img/upload/OMp58-2025-13-16.png)

### Agregar más artículos.

Permite agregar artículos al evento.

- Haz clic en la opción correspondiente.

![](/img/upload/OMp59-2025-13-16.png)

- A continuación, se muestra un formulario donde se debe ingresar el **SKU** (al escribir, se desplegarán los SKU que coinciden con el texto ingresado), así como la **cantidad**. Luego, haz clic en el botón **Add items** para guardar la información.

![](/img/upload/OMp60-2025-13-16.png)

:::note
dependiendo del estatus del stock del artículo que se agregue, el evento puede cambiar a **Backorder**, **Replenishment** o **Queue**.
:::

- Por último, se muestra un mensaje de confirmación. Si deseas continuar con el proceso, haz clic en **Save** para confirmar.

![](/img/upload/OMp61-2025-13-16.png)

- El sistema mostrará un mensaje en color verde indicando que el proceso fue exitoso. A continuación, el nuevo artículo agregado se mostrará dentro del evento, y su estatus se actualizará automáticamente.

![](/img/upload/OMp62-2025-13-16.png)

### Historial por  evento.

Permite visualizar la lista de movimientos realizados en el evento.

- Haz clic en la opción correspondiente.

![](/img/upload/OMp63-2025-13-16.png)

- A continuación, se muestra un historial  que contiene los movimientos realizados, incluyendo: el nombre del usuario, el tipo de movimiento, una descripción asociada y la fecha en que se registró el movimiento.

![](/img/upload/OMp64-2025-13-16.png)

- Además, es posible filtrar los movimientos por eventos dentro de la orden de pedido.

![](/img/upload/OMp65-2025-13-16.png)

- La opción **ADD** permite añadir filtros adicionales. Haz clic en la opción correspondiente.

![](/img/upload/OMp68-2025-13-16.png)

- Luego, se desplegarán opciones donde podrás seleccionar el tipo de filtro que deseas aplicar: por **STATUS** o por **UPDATED**.

![](/img/upload/OMp67-2025-13-16.png)

- Si seleccionas el filtro por **STATUS**, deberás indicar sobre qué estatus del evento deseas filtrar. Es posible seleccionar más de un estatus.

![](/img/upload/OMp69-2025-13-16.png)

- Si seleccionas el filtro por UPDATED, en un campo desplegable deberás indicar qué tipo de actualización deseas visualizar en los movimientos.

![](/img/upload/OMp70-2025-13-16.png)

- Para limpiar los filtros establecidos, haz clic en la opción correspondiente, como se muestra en la imagen siguiente.

![](/img/upload/OMp71-2025-13-16.png)

### Start Shipping Date.

Permite establecer o modificar la fecha de envío de la orden de pedido.

- Haz clic en la opción correspondiente.

![](/img/upload/OMp72-2025-13-16.png)

- Se mostrará un formulario en el que se debe ingresar la fecha de envío.

![](/img/upload/OMp73-2025-13-16.png)

- Luego, haz clic en la opción **Accept** para confirmar.

![](/img/upload/OMp74-2025-13-16.png)

- A continuación, el sistema mostrará un mensaje en color verde indicando que el proceso se completó exitosamente.

![](/img/upload/OMp75-2025-13-16.png)

:::tip
Si la orden ya tiene una fecha de envío asignada, puedes seguir este mismo proceso para modificarla.
:::

### Editar opciones de envío

Permite modificar las opciones de envío de una orden de pedido.

- Haz clic en la opción correspondiente.

![](/img/upload/OMp76-2025-13-16.png)

- Se mostrará un formulario en el que se deben completar los siguientes campos: **método de transportación**, **servicios disponibles (Services Available)**, **facturación a terceros (Third Party Billing)** y **almacén (Warehouse)**.

![](/img/upload/OMp77-2025-13-16.png)

- Luego, haz clic en la opción Save Changes para continuar con el proceso.

![](/img/upload/OMp78-2025-13-16.png)

- Al finalizar, el sistema mostrará un mensaje en color verde indicando que el proceso se completó exitosamente.

![](/img/upload/OMp79-2025-13-16.png)


### Cancelar evento

Permite cancelar el evento.

- Haz clic en la opción correspondiente.

![](/img/upload/OMp80-2025-13-16.png)

- Se mostrará un formulario en el que se debe ingresar una breve descripción del motivo por el cual se va a cancelar el evento.

![](/img/upload/OMp81-2025-13-16.png)

- Luego, haz clic en la opción **CONFIRMAR**.

![](/img/upload/OMp82-2025-13-16.png)

- Al finalizar, el sistema mostrará un mensaje en color verde indicando que el evento ha sido cancelado, junto con el número de identificación del evento. El evento quedará registrado como cancelado.

![](/img/upload/OMp83-2025-13-16.png)

### Reactivar evento.
Permite reactivar un evento que ha sido previamente cancelado.

- Haz clic en la opción correspondiente.

![](/img/upload/OMp84-2025-13-16.png)

- El sistema actualizará el estatus del evento, restaurando al estado que tenía antes de ser cancelado.

![](/img/upload/OMp85-2025-13-16.png)

## Acciones de la orden

- Haz clic en el ícono de los tres puntos ubicado en la parte superior derecha del detalle de la orden.

![](/img/upload/OMp87-2025-13-16.png)

- Se desplegará un panel con distintas opciones, las cuales se describen a continuación junto con su funcionalidad.

![](/img/upload/OMp88-2025-13-16.png)

### Edit shipping address.
Permite modificar la dirección de envío de una orden de pedido.

- Haz clic en la opción correspondiente.

![](/img/upload/OMp89-2025-13-16.png)

- Se mostrará un formulario donde podrás editar los siguientes campos: **Nombre**, **Compañía**, **Dirección 1**, **Dirección 2**, **Ciudad**, **Estado**, **País**, **Código Postal** y **Número de Teléfono**.

![](/img/upload/OMp90-2025-13-16.png)

-  Una vez realizados los cambios, haz clic en **SAVE** para guardarlos.

![](/img/upload/OMp91-2025-13-16.png)

- El sistema mostrará un mensaje en color verde confirmando que el proceso fue exitoso.

![](/img/upload/OMp92-2025-13-16.png)

### Edit billing  address.
Permite modificar la dirección de factura de la orden de envío.
- Haz clic en la opción correspondiente.

![](/img/upload/OMp93-2025-13-16.png)

- Se mostrará un formulario donde podrás editar los siguientes campos: **Nombre**, **Compañía**, **Dirección 1**, **Dirección 2**, **Ciudad**, **Estado**, **País**, **Código Postal** y **Número de Teléfono**.

![](/img/upload/OMp94-2025-13-16.png)

-  Una vez realizados los cambios, haz clic en **SAVE** para guardarlos.

![](/img/upload/OMp95-2025-13-16.png)

- El sistema mostrará un mensaje en color verde confirmando que el proceso fue exitoso.

![](/img/upload/OMp97-2025-13-16.png)

### View lots by order.

Permite visualizar  los eventos por el número de lote.
- Haz clic en la opción  correspondiente.

![](/img/upload/OMp98-2025-13-16.png)

- El sistema  desglosa una tabla de los eventos por lote , SKU, Fecha de vencimiento  y cantidad de artículos.

![](/img/upload/OMp99-2025-13-16.png)

### Cancel order.

Esta opción permite cancelar una orden de pedido en el sistema.

- Haz clic en la opción **Cancel Order**.

![](/img/upload/OMp100-2025-13-16.png)

- A continuación, se mostrará un formulario donde deberás ingresar una breve descripción con el motivo de la cancelación.

![](/img/upload/OMp102-2025-13-16.png)

- Haz clic en CONFIRMAR para continuar con el proceso.

- Una vez confirmada, la orden cambiará su estatus a **Cancelled**, como se muestra en la imagen siguiente.

![](/img/upload/OMp103-2025-13-16.png)

:::note
Los eventos que estén en estado Packed o Picked cambiarán automáticamente a Restock.

Los eventos en estado Queue se actualizarán a Cancelled.
:::

### See packages.

Esta opción permite visualizar el número de rastreo (Tracking Number) del evento que ha sido empaquetado.

- Haz clic en la opción **See Packages**.

![](/img/upload/OMp104-2025-13-16.png)

- El sistema redirige automáticamente al módulo **Package Monitor**, donde podrás consultar el **Tracking Number** asociado al evento con estatus **Packed**.

![](/img/upload/OMp105-2025-13-16.png)

## Lista de empaque.

Son un conjunto de opciones relacionado  con el empaque del evento, estas opciones se habilitan cuando el evento está en estado  de Packed. 

- Haz clic en las opciones  de los tres puntos ubicados a un lado derecho del nombre de la orden de pedido.

![](/img/upload/OMp106-2025-13-16.png)


- El sistema desglosa un panel de opciones, en la sección de Lista de empaque.

![](/img/upload/OMp107-2025-13-16.png)

### Packing Slip.

Esta opción permite descargar la ficha de embalaje (Packing Slip) del evento. 

  - Haz clic en la opción Packing Slip.

![](/img/upload/OMp108-2025-13-16.png)

  - El sistema generará y descargará automáticamente un archivo en formato PDF.

![](/img/upload/OMp109-2025-13-16.png)

  - Una vez descargado, podrás visualizar el detalle del embalaje correspondiente al evento.


![](/img/upload/OMp110-2025-13-16.png)

### Etiqueta de contenido.

Genera un código QR del paquete del evento

- Haz clic en la opción de Etiqueta de contenido.

![](/img/upload/OMp112-2025-13-16.png)

- El sistema generará y descargará automáticamente un archivo en formato **PDF**.

![](/img/upload/OMp113-2025-13-16.png)

- Una vez descargado, podrás visualizar el detalle de la etiqueta correspondiente al evento.

![](/img/upload/OMp114-2025-13-16.png)


### Reporte de cajas PL.

Esta opción permite descargar el **reporte de cajas PL** del evento. 
- Haz clic en la opción de **Reporte de cajas PL**.

![](/img/upload/OMp115-2025-13-16.png)

- El sistema generará y descargará automáticamente un archivo en excel.

![](/img/upload/OMp116-2025-13-16.png)

- Una vez descargado, podrás visualizar el Reporte de cajas PL correspondiente al evento en un excel.

![](/img/upload/OMp117-2025-13-16.png)

### Cancelar lista de empaque.

Esta acción permite revertir el estado de un evento de **Packed** a **Picked**.

- Haz clic en la opción **Cancelar lista de empaque**.

![](/img/upload/OMp118-2025-13-16.png)

- Se mostrará un modal para asignar un **Tray**. Escanea el tray correspondiente para continuar con el proceso.

![](/img/upload/OMp120-2025-13-16.png)

- Una vez escaneado, el sistema mostrará un mensaje en color verde indicando que el **tracking del evento ha sido cancelado exitosamente**.

![](/img/upload/OMp122-2025-13-16.png)

- El evento cambiará automáticamente su estado de Packed a Picked.

![](/img/upload/OMp123-2025-13-16.png)

## Problem solving

Cuando un evento de una orden se encuentra en estado **Problem Solving**, significa que el picker ha reportado un problema relacionado con el artículo escaneado. Para resolver este tipo de eventos, es necesario que el usuario tenga el rol de **Problem Solving**.

### Resolviendo una orden en estatus de  problem solving.

- Accede al módulo **Orders Monitor** y utiliza los filtros para localizar los eventos en estado **Problem Solving**.

![](/img/upload/OMp124-2025-13-16.png)

- Al acceder al evento haciendo doble clic, el sistema nos redirecciona al detalle de la orden con el evento que se encuentra en **problem solving**.

![](/img/upload/OMp125-2025-13-16.png)

- En vista de detalle, identifica el artículo afectado. En su sección se mostrará el campo **Hold Reason**, que contiene una breve descripción del motivo por el cual el evento fue trasladado a estado **Problem Solving**.

![](/img/upload/OMp126-2025-13-16.png)

- Para resolver el evento haz clic en  los tres puntos ubicado en el detalle del evento.

![](/img/upload/OMp127-2025-13-16.png)

- Se desglosa un panel de opciones, localiza y haz clic en la opción **Marcar como Resultó**.

![](/img/upload/OMp128-2025-13-16.png)

- Automáticamente el evento pasa en cola(**On Queue**) para ser procesado nuevamente en el evento de fullfilment.

### Opciones extras del  Problem solving.

#### Asignar picker.

- Esta opción permite asignar un nuevo picker al evento antes de marcarlo como resuelto.

:::note
Si el evento no se encuentra en estado Problem Solving, esta opción aparecerá deshabilitada.
:::

- Haz clic en el ícono de los **tres puntos** para desplegar el panel de opciones y Selecciona la opción **Asignar picker**.

![](/img/upload/OMp129-2025-13-16.png)

- El sistema mostrará un formulario con un campo desplegable donde podrás seleccionar al nuevo picker responsable de escanear el artículo relacionado con el evento.

![](/img/upload/OMp130-2025-13-16.png)

- Una vez seleccionado el picker, haz clic en OK para continuar. Si la asignación es exitosa, el sistema mostrará un mensaje en color verde confirmando que el proceso se completó correctamente.


![](/img/upload/OMp131-2025-13-16.png)

#### Asignar packer

Esta opción permite asignar un nuevo packer al evento.

- Haz clic en el ícono de los **tres puntos** para desplegar el panel de opciones y Selecciona la opción **Asignar packer**.

![](/img/upload/OMp129-2025-13-16.png)

- El sistema mostrará un formulario con un campo desplegable donde podrás seleccionar al nuevo packer responsable de escanear el artículo relacionado con el evento.

![](/img/upload/OMp132-2025-13-16.png)

- Una vez seleccionado el packer, haz clic en OK para continuar.Si la asignación es exitosa, el sistema mostrará un mensaje en color verde confirmando que el proceso se completó correctamente.

![](/img/upload/OMp133-2025-13-16.png)

#### Pickeo por caja

Esta opción permite escanear artículos por caja.

- Haz clic en el ícono de los **tres puntos** para desplegar el panel de opciones y Selecciona la opción **Pickeo por caja**.

![](/img/upload/OMp134-2025-13-16.png)

- Después el sistema muestra un mensaje de color verde  y un   icono de una caja en e detalle l evento indicando que el  packeo del evento debe ser por caja.

![](/img/upload/OMp135-2025-13-16.png)

#### Pickeo por pieza

Esta opción permite realizar el **pickeo individual de cada unidad del artículo** asociado al evento.

:::note
Esta función se habilita cuando el evento tiene  activado el pickeo por caja.
:::

- Haz clic en el ícono de los **tres puntos** para desplegar el panel de opciones y Selecciona la opción **Pickeo por pieza**.

![](/img/upload/OMp136-2025-13-16.png)

- El sistema mostrará un **mensaje en color verde** indicando que el evento ahora debe ser gestionado mediante pickeo por pieza.


![](/img/upload/OMp137-2025-13-16.png)

:::note
  Las opciones **Pickeo por pieza** y **Pickeo por caja** solo están disponibles antes de que el evento cambie al estado **Picked**.
:::