---
sidebar_position: 4
title: Receive orders Picking.
---
# Receive orders Picking.

En este módulo se realiza el escaneo de los **PLL (Packing List Labels)** generados previamente en el módulo [Receive Orders](./2025-05-23-ReceiveOrders.md). Su objetivo es validar la información de los artículos recibidos dentro de los paquetes, asegurando que coincidan con los datos registrados y facilitando el control de recepción en el sistema WMS.

## Escanear los PPL.

- Después de generar e imprimir los PPL en el módulo [Receive Orders](./2025-05-23-ReceiveOrders.md), como se muestra en la siguiente imagen, asegúrate de tener todos los documentos listos para el escaneo.

![](/img/upload/receiveOrdersPickingp1-205-13-16.png)

- Utiliza el escáner que te fue proporcionado como herramienta de trabajo y escanea el código QR impreso en cada PPL. En este caso, se escaneará el paquete **PPL 1747166020003** correspondiente al recibo **R-00000246**.

![](/img/upload/receiveOrdersPickingp2-205-13-16.png)

- A continuación, el sistema validará la existencia del PPL en la base de datos. Si la información es correcta, se desplegará el detalle del recibo asociado, junto con un formulario que solicitará la siguiente información para continuar con el proceso.

![](/img/upload/receiveOrdersPickingp3-205-13-16.png)

![](/img/upload/receiveOrdersPickingp4-205-13-16.png)

- Antes de finalizar el proceso, debes seleccionar el SKU  para indicar lo que contiene el paquete, haz clic  en la opción **ADD** ubicado  en la parte inferior del item Master Form.

![](/img/upload/receiveOrdersPickingp5-205-13-16.png)

- A Continuación  se desglosan varios campos que se deben llenar relacionado con el SKU.


![](/img/upload/receiveOrdersPickingp6-205-13-16.png)

- Por último haz  clic en la opción **SAVE**  para guardar la información del paquete.


![](/img/upload/receiveOrdersPickingp7-205-13-16.png)

- Posteriormente, genera un código QR que incluya el número de rastreo (Tracking Number) junto con otra información relevante del paquete. Este código servirá para identificar el paquete dentro del almacén. Imprímelo y pégalo directamente en el paquete fue escaneado.


![](/img/upload/receiveOrdersPickingp8-205-13-16.png)

- Para validar que los cambios se han guardado correctamente, accede al módulo de [Receive Orders](./2025-05-23-ReceiveOrders.md) y selecciona la orden de recibo correspondiente. Luego, revisa la sección de los PPL y asegúrate de que el PPL escaneado contenga la información registrada correctamente, como se muestra en la siguiente imagen.

![](/img/upload/receiveOrdersPickingp9-205-13-16.png)


## Reimprimir QR de cada Tracking Number.

- Dirígete al módulo [Receive Orders](./2025-05-23-ReceiveOrders.md) desde el menú principal del sistema.

![](/img/upload/receiveOrdersPickingp10-205-13-16.png)

- Haz doble clic sobre el recibo que contiene los PPL previamente escaneados para desplegar su detalle.

![](/img/upload/receiveOrdersPickingp11-205-13-16.png)

- En el detalle del recibo, dirígete a la tabla donde se listan los PPL escaneados y observa la columna actions.


![](/img/upload/receiveOrdersPickingp12-205-13-16.png)

-  Haz clic en la opción "Print Labels" del PPL que deseas reimprimir. Esto abrirá una ventana emergente del navegador que te permitirá enviar a impresión la etiqueta QR del paquete.

![](/img/upload/receiveOrdersPickingp13-205-13-16.png)
