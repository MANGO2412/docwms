---
sidebar_position: 3
title: Order Monitors
---

# Order Monitors(portal del cliente)

El **módulo Order Monitor** es una sección clave dentro del sistema WMS, que permite visualizar, gestionar y supervisar el estado de las órdenes de pedido que deben ser atendidas en el almacén. Su principal función es ofrecer un control en tiempo real sobre cada fase del proceso logístico, desde la creación de la orden hasta su finalización.

En esta sección, se proporcionan descripciones detalladas de los pasos necesarios para aprovechar al máximo las opciones que ofrece este módulo en el portal de clientes.


## ¿Como acceder al modulo desde el portal del cliente?

Una vez que inicies sesión en el portal del cliente, dirígete al menú lateral izquierdo y haz clic en la opción **Order Monitor**.

![](/img/upload/OMCp1-2025-13-16.png)

A continuación, se mostrará la vista principal del módulo, donde podrás ver las órdenes generadas organizadas en una tabla. Esta vista incluye filtros que te permiten personalizar la información mostrada según tus necesidades, así como botones para crear nuevas órdenes.

![](/img/upload/OMCp2-2025-13-16.png)



## ¿Como generar una orden en el portal del cliente?

El portal del cliente ofrece dos formas para generar órdenes: la primera es mediante un formulario proporcionado por el sistema, donde se ingresan manualmente los datos necesarios; la segunda es a través de la carga de un archivo en formato .csv, utilizando una plantilla disponible en el portal que permite agilizar el proceso de creación de órdenes de manera masiva.


![](/img/upload/OMCp2-2025-13-16.png)

### Atravez del portal.

Si deseas crear atravez del portal, haz clic en el boton **CREATE** ubicado en la parte superior de lado izquierdo.

![](/img/upload/OMCp3-2025-13-16.png)

Luego se deslgosa un formulario, donde se ingresa los siguientes datos

![](/img/upload/OMCp4-2025-13-16.png)



En la **primera sección del formulario**, se deben completar los siguientes campos:
- **Number**: Es el identificador único de la orden. No debe repetirse ni estar previamente registrado en el sistema.
- **Task ID**: Funciona también como un identificador. Puede dejarse vacío si no se requiere.
- **Purchase Order**: Corresponde al número de la orden de compra. Este campo es obligatorio.
- **Order Value**: Indica el costo total de la orden.
- **Order Note**: Permite agregar una descripción adicional que será útil para el equipo de operaciones, este campo no es obligatorio.
- **Transportation Method**: Define el proceso de transporte de la orden.

![](/img/upload/OMCp5-2025-13-16.png)

En la **segunda seccion del formulario** (Shipping Address), se deben completar los siguientes campos para la direccion de envio:
- **Name**: Nombre de la empresa responsable del envio o del destinatario comercial, Se utiliza para indentificar al receptor cuando la entrega es una identidad empresarial.
- **Address 1**:Dirección principal de envío incluyendo calle, número y otros datos relevantes para la localización exacta del destino.
- **Address 2**:Campo opcional para complementar la dirección principal, como piso, departamento, edificio o referencias adicionales.
- **Zip Code**: Código postal asociado a la dirección de envío.
- **Country**: Clave o nombre del país al que se destina el envío.
- **Phone number**: Número de teléfono de contacto del destinatario.
- **City**: Nombre de la ciudad donde se realizará la entrega del envío.
- **State**:  Estado, provincia o región correspondiente a la ciudad de destino. Es necesario para validar y completar la dirección.
- **Email**: correo electrónico del destinatario o contacto del envío.

![](/img/upload/OMCp8-2025-13-16.png)

En la **tercera  seccion del formulario** (Billing Address), se deben completar los siguientes campos para la facturacion  del envio:

- **Name**: Nombre completo del responsable de la facturación o del contacto administrativo autorizado.
- **Address 1**: Dirección principal donde se registrará la facturación. Debe incluir calle, número exterior/interior, colonia o parque industrial si aplica.
- **Address 2**: Campo adicional para completar la dirección de facturación. Puede incluir piso, edificio, suite, o instrucciones específicas
- **City**: Ciudad en la que se encuentra la dirección de facturación.
- **State**: Estado o provincia correspondiente a la ciudad registrada en la dirección de facturación.
- **Zip code**: Código postal de la dirección de facturación. 
- **Phone**: Número telefónico de contacto del área contable o administrativa.
- **Email**:  Correo electrónico de contacto para el envío de facturas electrónicas.
- **Country**:  Clave del país donde se ubica la dirección de facturación.

![](/img/upload/OMCp6-2025-13-16.png)

Para finalizar, haz clic en la opción **ADD** dentro de la sección **Order Lines**.

![](/img/upload/OMCp7-2025-13-16.png)

Luego, se habilitan varios campos que permiten registrar la información del artículo que será incluido en la orden. Los datos solicitados son los siguientes:

- **SKU**: Código único del producto para su identificación en el inventario.
- **Package Quantity**: Cantidad de unidades o paquetes del producto que se agregan a la orden.
- **Sales Price**: Precio unitario de venta correspondiente al producto.

![](/img/upload/OMCp10-2025-13-16.png)


:::tip
- En caso de  eliminar un artículo agregado, haz clic en el ícono de eliminar (🗑️) ubicado junto al campo Sales price. 
- Para añadir más artículos a la orden, simplemente haz clic nuevamente en el botón ADD.
:::

Despues de validar la informacion ingresada de forma manual, haz clic en el boton **SAVE** para continuar con el registro.

![](/img/upload/OMCp11-2025-13-16.png)

Luego el sistmea mostrara un mensaje de color verde indicando que el registro fue existosamente.

![](/img/upload/OMCp12-2025-13-16.png)

### Atravez del archivo .cvs

Si deseas generar órdenes de forma masiva, puedes hacerlo mediante la carga de un archivo **.csv**. Para ello, haz clic en la opción **Download Layout**, ubicada en la tabla de órdenes de pedido.

![](/img/upload/OMCp13-2025-13-16.png)

Se descargará un archivo **.csv** que podrás completar con la información de las órdenes que deseas generar.

![](/img/upload/OMCp14-2025-13-16.png)

Al abrir el archivo en Excel, encontrarás información clave que debes seguir cuidadosamente para que el proceso sea exitoso.
- **En la primera columna** se listan los nombres de los campos requeridos; estos **no deben ser eliminados**, ya que sirven como guía tanto para el usuario como para el sistema, el cual reconoce los datos en función de esos nombres.
- **En la segunda columna** se indica si cada campo es **required** (obligatorio) o **optional** (opcional), lo que determina si debe ser llenado o si puede dejarse vacío o con el valor **"N/A"**.

![](/img/upload/OMCp15-2025-13-16.png)


Luego, debes llenar el archivo **.csv** con los datos correspondientes. El proceso es similar al que se realiza en la sección **A través del portal**, como se muestra en las siguientes imágenes:

![](/img/upload/OMCp16-2025-13-16.png)

![](/img/upload/OMCp17-2025-13-16.png)

![](/img/upload/OMCp18-2025-13-16.png)

![](/img/upload/OMCp19-2025-13-16.png)


:::note
Si alguna columna contiene el valor clave **optional default()**, esto indica que puedes dejar el valor por defecto que aparece entre paréntesis. A continuación se muestra un ejemplo:

- **Antes**

![](/img/upload/OMCp20-2025-13-16.png)

- **Después**

![](/img/upload/OMCp21-2025-13-16.png)

Si los valores por defecto no se ajustan a tu necesidad, puedes reemplazarlos por otros reconocidos por el sistema. Por ejemplo:
- **Service Type**: Debe coincidir con uno de los tipos de servicio de envío disponibles en el sistema.
- **3rd Party Billing**: Si la facturación no es realizada por un tercero, el valor debe ser false; si es facturada por un tercero, debe cambiarse a true.
- **Business Model**: Por defecto es B2C (venta al consumidor final), pero si la orden está dirigida a una empresa, puedes modificarlo a B2B.
:::

A continuación, valida y guarda los cambios realizados en el archivo .csv. Luego, en el sistema, haz clic en la opción Import CSV.



![](/img/upload/OMCp22-2025-13-16.png)

![](/img/upload/OMCp23-2025-13-16.png)

Si la estructura y los datos del archivo son correctos, el sistema mostrará un mensaje de confirmación en color verde.

![](/img/upload/OMCp24-2025-13-16.png)

Después, actualiza la página para refrescar la tabla y visualizar las nuevas órdenes registradas.

![](/img/upload/OMCp25-2025-13-16.png)


## Aplicando filtros


