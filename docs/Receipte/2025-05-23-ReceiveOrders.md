---
sidebar_position: 3
title: Receive orders
---
# Receive orders

Este módulo permite generar y gestionar las órdenes de recibo correspondientes a los paquetes enviados por el cliente. Su función principal es registrar en el sistema WMS cada recepción de mercancía, asegurando un control preciso de los productos entrantes. A través de este módulo, se administra todo el proceso de ingreso de los paquetes al almacén, desde su recepción física hasta su validación y registro en la plataforma.

## Generar Recibo

- Haz clic en la opcion **Create**

![](/img/upload/receiveOrdersp1-2025-13-16.png)

- Se desglosa un formulario, donde se solcita los siguientes datos.


![](/img/upload/receiveOrdersp2-2025-13-16.png)

| No  de campo | Nombre del campo  | Descripcion del campo                                                      |
| :----------- | :---------------- | :------------------------------------------------------------------------- |
| 1            | Reference         | Número de referencia del recibo, que se obtiene en  el correo.             |
| 2            | ASN Number        | ASN(Notificación de envío Avanzado).                                       |
| 3            | Type              | El tipo se refiere a que  tipo de recibo se va a procesar.                 |
| 4            | Quantity          | Es la cantidad de paquetes que se va procesar en el recibo.                |
| 5            | Package Type      | Es el tipo de paquete en cómo se procesa el recibo                         |
| 6            | Type of maneuver  | Se indica en cómo se va mover los paquetes para ubicarlos en una locación. |
| 7            | Warehouse         | Es el almacén donde se  está recibiendo los paquetes                       |
| 8            | Location          | El lugar físico donde se va almacenar el  paquete                          |
| 9            | Registered  Names | Se selecciona el formato  o responsable que emite la orden.                |
| 10           | Notes             | Nota sobre algo específico                                                 |

- Haz clic en **SAVE** para generar la orden de recibo.

![](/img/upload/receiveOrdersp3-2025-13-16.png)

- Si el proceso es exitoso, se desglosa un mensaje  de color verde indicando con el numero de recibo que se asigno a ese recibo virtual.

![](/img/upload/receiveOrdersp4-2025-13-16.png)


:::note

Al generar la orden, el estado por defecto es **created** significa que aún no se finaliza el proceso de recibo porque aún no se procesa en la entrada y verificación de los paquete como se muestra  en la siguiente imagen:

![](/img/upload/receiveOrdersp5-2025-13-16.png)

Para finalizar el proceso, primero debes Generar PPL generar los PPL. Luego, escanea los PPL en el módulo **Receive Orders Picking** para validar los paquetes que han ingresado. Al completar estos pasos, la orden de recibo cambiará de estado, pasando de **Created** a **Completed**, concluyendo así el proceso.

:::


## Actualizar o eliminar un recibo 

- **Para actualizar** la información de un recibo haz clic en el icono de editar.

![](/img/upload/receiveOrdersp6-2025-13-16.png)

- Se desglosa un formulario con los campos que se van a modificar,en este caso, únicamente se puede modificar la locación.

![](/img/upload/receiveOrdersp7-2025-13-16.png)

 Al finalizar este proceso,  el sistema actualizará los cambios que se modificaron en el recibo.

- **Para eliminar** un recibo haz clic en el icon de eliminar del recibo que deseas remover.


![](/img/upload/receiveOrdersp6-2025-13-16.png)

- Mostrar un mensaje para confirmación, haz clic en **OK** para continuar.


![](/img/upload/receiveOrdersp8-2025-13-16.png)

:::warning
Si el recibo tiene algunos PPL, el sistema  no lo elimina, solo desplegará un mensaje en color rojo notificando que no se puede eliminar el registro.

![](/img/upload/receiveOrdersp9-2025-13-16.png)
:::

## Generar PPL

- Para generar **PPL**, haz doble clic en el recibo.

![](/img/upload/receiveOrdersp10-2025-13-16.png)

- El sistema redireccionará a  una  vista  con información detallada, una tabla de los **PPL** y algunas opciones relacionadas con el recibo.

![](/img/upload/receiveOrdersp11-2025-13-16.png)

- Para generar algunos **PPL**, haz clic en **CREATE pre entry labels**.

![](/img/upload/receiveOrdersp12-2025-13-16.png)

- Después se desglosa una ventana emergente con un campo solicitando la cantidad de cuantos PPL van a ser generados en el sistema, **llena el campo indicando la cantidad deseada**.

![](/img/upload/receiveOrdersp13-2025-13-16.png)

- Haz clic en **CREATE** para  continuar.

![](/img/upload/receiveOrdersp14-2025-13-16.png)

- Se abrirá una ventana emergente para imprimir los **PPL**.

![](/img/upload/receiveOrdersp15-2025-13-16.png)

- Posteriormente, se mostrará la información de los PPL en la tabla de  la sección inferior del detalle del recibo.

![](/img/upload/receiveOrdersp16-2025-13-16.png)

## Eliminar PPL

- Para eliminar un PPL, haz clic  en la opcion  editar ubicado en la columna de **Actions**   en la tabla de la sección inferior.

![](/img/upload/receiveOrdersp17-2025-13-16.png)

- Posteriormente, se actualizará la tabla con el dato eliminado, desglosando un mensaje de color verder para notificar que el proceso es exitoso.

![](/img/upload/receiveOrdersp18-2025-13-16.png)
## Imprimir etiquetas PPL

- Para volver a imprimir las etiquetas PPL, haz clic **Print pre entry labels**  en la sección superior del detalle del recibo.

![](/img/upload/receiveOrdersp19-2025-13-16.png)

- Se abrirá una ventana emergente para imprimir las etiquetas PPL en el navegador.

![](/img/upload/receiveOrdersp20-2025-13-16.png)
