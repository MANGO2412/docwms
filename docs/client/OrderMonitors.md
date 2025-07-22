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


## Cambiar entre pedidos y eventos: Uso de pestañas

Este módulo cuenta con una funcionalidad de **pestañas** que permite visualizar la información disponible de manera organizada. Además de mostrar las **órdenes de pedido generadas**, también es posible consultar los **eventos de fulfillment** asociados a cada orden.

Por defecto, al ingresar al módulo se muestran los **eventos de fulfillment**. Si deseas ver las órdenes de pedido, puedes hacer clic en la pestaña correspondiente, tal como se ilustra en las siguientes imágenes.


<figure>
  <img src="/img/upload/OMCp26-2025-13-16.png" alt="Pantalla de inicio del módulo" />
  <figcaption>Imagen 1: Vista de las pestañas disponibles.</figcaption>
</figure>

<figure>
  <img src="/img/upload/OMCp27-2025-13-16.png" alt="Pantalla de inicio del módulo" />
  <figcaption>Imagen 2: Información mostrada al seleccionar la pestaña "Orders".</figcaption>
</figure>

<figure>
  <img src="/img/upload/OMCp28-2025-13-16.png" alt="Pantalla de inicio del módulo" />
  <figcaption>Imagen 3: Información mostrada al seleccionar la pestaña "Events".</figcaption>
</figure>


## Aplicando filtros en Orders Monitor

El módulo **Orders Monitor** cuenta con diversas opciones de filtrado que te permiten buscar órdenes de pedido o eventos de fulfillment que cumplan con ciertos criterios específicos dentro del sistema.

Para aplicar los filtros, primero debes ubicar el panel de opciones de filtrado en la interfaz del módulo correspondiente. Este panel se encuentra en la parte inferior de la tabla donde se muestra la información de las órdenes de pedido o eventos de fulfillment.


El panel de filtrado mostrará diferentes opciones dependiendo del tipo de información que se esté visualizando en la tabla (órdenes de pedido o eventos de fulfillment).

<figure>
  <img src="/img/upload/OMCp34-2025-13-16.png" alt="Pantalla de inicio del módulo" />
  <figcaption>Imagen 4: Opciones de filtrado para ordenes de pedido.</figcaption>
</figure>

<figure>
  <img src="/img/upload/OMCp35-2025-13-16.png" alt="Pantalla de inicio del módulo" />
  <figcaption>Imagen 5: Opciones de filtrado para eventos fulfillment.</figcaption>
</figure>



### Opciones de filtrado para órdenes de pedido

- **Preset Filters**: Esta opción es un campo desplegable que permite filtrar las órdenes de pedido pendientes en un lapso de tiempo determinado: 24, 48 o 72 horas.

![](/img/upload/OMCp29-2025-13-16.png)


- **Order Number**: Permite buscar órdenes de pedido por su número identificador.

![](/img/upload/OMCp30-2025-13-16.png)

- **Status**: Campo desplegable que permite filtrar las órdenes por su estatus.

![](/img/upload/OMCp31-2025-13-16.png)

- **Campaign**: Permite filtrar órdenes de pedido según el nombre de la campaña.

![](/img/upload/OMCp32-2025-13-16.png)

- **Received At**: Campos de fecha donde puedes indicar un rango (inicio y fin) para filtrar las órdenes según la fecha de recepción.

![](/img/upload/OMCp33-2025-13-16.png)


### Opciones de filtrado para eventos fulfillment.

- **Preset filters** : Esta opción es un campo desplegable que permite filtrar los eventos fulfillment  pendientes en un lapso de tiempo determinado: 24, 48 o 72 horas.

![](/img/upload/OMCp29-2025-13-16.png)

- **Order Number**: Permite buscar eventos de fulfilment  por su número identificador.

![](/img/upload/OMCp36-2025-13-16.png)


- **Status**: Campo desplegable que permite filtrar los eventos por su estatus.

![](/img/upload/OMCp37-2025-13-16.png)

- **Carrier** : Campo desplegable que permite filtrar  por servicios de transporte de los eventos fulfillment.

![](/img/upload/OMCp40-2025-13-16.png)

- **Received At**: Campos de fecha donde puedes indicar un rango (inicio y fin) para filtrar los eventos según la fecha de recepción.

![](/img/upload/OMCp33-2025-13-16.png)


- **Shipped at**: Campos de fecha donde puedes indicar un rango (inicio y fin) para filtrar los eventos según la fecha de envio.

![](/img/upload/OMCp39-2025-13-16.png)

:::info
En caso de querer limpiar los filtros del panel de opciones, se habilita la opción **Clean Filters**. Al hacer clic en ella, se eliminan automáticamente todos los filtros aplicados y se muestra nuevamente toda la información sin ningún tipo de filtrado.

![](/img/upload/OMCp41-2025-13-16.png)
:::

## ¿Como visualizar el detalle de una Orden de pedido o evento fulfillment?

Si haces clic en la fila de una orden o evento dentro de la tabla donde se desglosa la información, el sistema te redireccionará automáticamente a una vista detallada que muestra información relevante de la orden junto con sus eventos de fulfillment correspondientes

![](/img/upload/OMCp42-2025-13-16.png)


## Acciones de la orden

Al acceder al detalle de una orden, se habilitan varias opciones esenciales para su gestión. Estas se encuentran ubicadas en la parte superior derecha de la vista, agrupadas en un menú desplegable al hacer clic en el ícono de **tres puntos** (⋮), como se muestra en la siguiente imagen:

![](/img/upload/OMCp43-2025-13-16.png)

A continuación, se describe la funcionalidad de cada una de las siguientes opciones:

### Editar dirección de envío

Para editar la dirección de envío de una orden, sigue estos pasos:

- Haz clic en el ícono de **tres puntos** y selecciona la opción **Edit shipping address**.

![](/img/upload/OMCp45-2025-13-16.png)

- Se mostrará una ventana emergente donde podrás modificar la información relacionada con la dirección de envío.

![](/img/upload/OMCp44-2025-13-16.png)

- Haz clic en **ACEPTAR** para guardar los cambios, o en **CANCELAR** si decides no continuar con la edición.

### Editar dirección de facturación

Si deseas editar la dirección de facturación de la orden, sigue estos pasos:

- Haz clic en el ícono de **tres puntos** y selecciona la opción **Edit billing address**.

![](/img/upload/OMCp45-2025-13-16.png)

- Se mostrará una ventana emergente con un formulario donde podrás modificar la información relacionada con la dirección de facturación.

![](/img/upload/OMCp46-2025-13-16.png)

- Haz clic en **ACEPTAR** para guardar los cambios, o en **CANCELAR** si decides no continuar con la edición.

### Cancelar orden

Para cancelar una orden, sigue estos pasos:

- Haz clic en el ícono de **tres puntos** y selecciona la opción **Cancel order**.

![](/img/upload/OMCp45-2025-13-16.png)

- Se mostrará una ventana emergente donde deberás ingresar una breve descripción indicando los motivos de la cancelación.

![](/img/upload/OMCp47-2025-13-16.png)

- Haz clic en la opción **CONFIRM** para confirmar la cancelación de la orden.

![](/img/upload/OMCp48-2025-13-16.png)

## Acción por evento

Al acceder al detalle de una orden, en el apartado **Fulfillment Events**, se habilitan varias opciones esenciales para la gestión de los eventos. Estas se encuentran ubicadas en la parte inferior derecha de la sección de eventos, agrupadas en un menú desplegable al hacer clic en el ícono de **tres puntos** (⋮), como se muestra en la siguiente imagen:

![](/img/upload/OMCp49-2025-13-16.png)

A continuación, se describe la funcionalidad de cada opción disponible en el panel:

- **Marcar como prioridad**: Permite establecer el evento como prioritario en el sistema para que sea atendido lo más pronto posible.

- **Fecha de inicio de proceso**: Permite definir la fecha en la que debe iniciar el procesamiento del evento. Al hacer clic, se habilita un formulario para ingresar la fecha correspondiente.

- **Agregar artículos**: Permite añadir más artículos al evento. Al seleccionarla, se abre un formulario en el que deberás ingresar el SKU del artículo y la cantidad deseada.

- **Ver más información del evento**: Muestra información detallada del evento.

- **Historial del evento**: Permite visualizar las acciones realizadas sobre el evento, incluyendo la fecha y el responsable de cada acción.

- **Editar opciones de envío**: Permite modificar el servicio y el método de transporte asignado, así como configurar la facturación a terceros si aplica.



