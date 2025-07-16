---
sidebar_position: 4
title: Shipping Notices
---

# Shipping Notice (Portal del cliente)

Este módulo te permite gestionar tus **ASN (Advanced Shipping Notices)** de manera eficiente. El portal del cliente proporciona esta herramienta para que puedas notificar con anticipación a los almacenes de **G Global** sobre los paquetes que serán recibidos.

El propósito principal de esta notificación es que el equipo de G Global pueda **prepararse adecuadamente para la recepción de la carga**, planificar su almacenamiento y gestionar el inventario de forma más eficiente. 

Además, el módulo ofrece múltiples beneficios para ti como cliente, entre ellos:

- Garantizar la **precisión e integridad** de las entregas.
- Anticipar y resolver **discrepancias** o problemas logísticos de manera oportuna.
- Llevar un **monitoreo completo** de los envíos desde el portal.

Si deseas aprender cómo gestionar correctamente tus ASN desde el portal, continúa leyendo este apartado. A continuación, se muestra una imagen de la interfaz principal de este módulo:

![](/img/upload/SNCp1-2025-13-16.png)

## ¿Cómo generar un ASN en el portal del cliente?

Para generar un ASN (Advanced Shipping Notice) desde el portal, sigue los siguientes pasos:

- Haz clic en el botón **Create Shipping Notice**.

  ![](/img/upload/SNCp2-2025-13-16.png)

- A continuación, se desplegará un formulario donde deberás completar los siguientes campos:

  - **Número de ASN**: Identificador único que diferencia cada aviso de envío. Este valor no puede repetirse, ya que debe ser exclusivo por cada registro.

  - **País de Origen**: Ingresa el país desde donde se origina la carga.

  - **Documento de Transporte**: Número o código del documento de transporte. Este campo es opcional.

  - **Fecha de Envío**: Fecha en que la carga fue enviada. Este campo es opcional y puede dejarse vacío si aún no se conoce.

  - **Fecha Estimada de Llegada**: Indica la fecha en que se espera que la carga llegue al almacén. Este campo también es opcional.

  - **Contenedor**: Número de identificación del contenedor que transporta la carga.

  - **Referencia**: Campo adicional para ingresar información útil que facilite el rastreo o identificación del ASN. Puedes registrar aquí datos como el número de orden de compra (PO), código interno, referencia cruzada u otro identificador relevante. Este campo puede dejarse vacío si no aplica.

  ![](/img/upload/SNCp3-2025-13-16.png)

- Una vez completado el formulario, revisa que toda la información sea correcta y haz clic en el botón **Agregar**.

- Si el proceso se realiza correctamente, el sistema mostrará un mensaje en color verde indicando que el ASN fue creado exitosamente. El nuevo registro aparecerá automáticamente en la tabla principal del módulo.

  ![](/img/upload/SNCp4-2025-13-16.png)

## ¿Qué datos de tu ASN se muestran en Shipping Notice?

Cada vez que registras un ASN (Advanced Shipping Notice) en el portal, este se visualiza en una tabla que desglosa la siguiente información:

- **#ASN Interno**: Identificador numérico interno del sistema. Es relevante para la gestión y seguimiento dentro de la operación de G Global.

- **#ASN Cliente**: Identificador numérico asignado por ti como cliente para identificar tu ASN en el portal.

- **Estatus**: Estado actual del ASN. Puede ser:
  - **In Transit**: El envío está en tránsito.
  - **Receiving**: El envío está en proceso de recepción.

- **Fecha de creación**: Fecha en que fue registrado el ASN en el sistema.

- **Fecha estimada de llegada**: Fecha estimada en la que la carga debe arribar al almacén.

- **Fecha de arribo del envío**: Fecha real en que la carga llegó al almacén.

 ![](/img/upload/SNCp5-2025-13-16.png)

- **Fecha de recibo**: Fecha en que el envío fue procesado como recibido en el sistema.

- **Piezas totales ASN**: Cantidad total de artículos declarados en el ASN.

- **Contenedor**: Número del contenedor que transporta la carga.

- **Piezas totales recibidas**: Número de piezas que fueron efectivamente recibidas.

- **Total de discrepancias**: Diferencia entre la cantidad declarada en el ASN y lo que realmente fue recibido. Este valor refleja posibles errores o inconsistencias en la entrega.

![](/img/upload/SNCp6-2025-13-16.png)


## ¿Cómo agregar información de tus paquetes en un ASN desde el portal?

Una vez que has creado un ASN, el siguiente paso es registrar los paquetes que lo componen. A continuación, se describen los pasos para realizar este proceso:

- Haz clic en la fila del ASN al cual deseas agregar los paquetes.

- El portal te redireccionará a una vista detallada del ASN seleccionado.

![](/img/upload/SNCp9-2025-13-16.png)

- Luego, haz clic en la opción **Agregar Línea**.

![](/img/upload/SNCp10-2025-13-16.png)

- Se mostrará un formulario donde deberás ingresar los siguientes datos:

  - **Caja ID**: Código identificador que diferencia el paquete dentro del ASN.
  - **SKU**: Clave del artículo que será incluido en el paquete.
  - **Descripción**: Descripción del artículo. Se autocompleta al ingresar el SKU.
  - **Cantidad de piezas**: Número de unidades que contiene el paquete.
  - **Orden de compra (PO)**: Número de la orden de compra asociada al paquete.
  - **Número de lote**: Código del lote correspondiente a los productos del paquete.
  - **País de origen**: País desde donde se envía el paquete.
  - **Precio unitario**: Costo por unidad del artículo.
  - **Fecha de expiración**: Fecha de caducidad del producto, si aplica. Puedes dejarlo vacío si no es necesario.

![](/img/upload/SNCp7-2025-13-16.png)

- Una vez completado el formulario, haz clic en **Agregar**.

- Si el proceso es exitoso, el sistema mostrará un mensaje en color verde confirmando el registro. El paquete se visualizará en una tabla como se muestra a continuación:

![](/img/upload/SNCp8-2025-13-16.png)

:::info
Si deseas **editar** o **eliminar** la información de un paquete, dirígete a la tabla donde se muestra el listado de paquetes registrados.

Ubica la columna **Actions**, donde encontrarás dos íconos:

- El **ícono de lápiz** te permite editar los datos del paquete.
- El **ícono de bote de basura** te permite eliminar el paquete del ASN.

Haz clic en el ícono correspondiente según la acción que desees realizar.

![](/img/upload/SNCp11-2025-13-16.png)
:::

:::info 
### ¿Cómo registrar tus paquetes en una ASN usando un archivo .csv?

El portal también ofrece una alternativa para **agregar paquetes de forma masiva** utilizando un archivo **CSV**.

A continuación, se describen los pasos para llevar a cabo este proceso:

- Haz clic en la opción **Descargar plantilla**. Esta acción descargará un archivo `.csv` que define la estructura que deben seguir los datos para que el sistema pueda procesarlos correctamente.

![](/img/upload/SNCp12-2025-13-16.png)


- Abre el archivo en Excel. Notarás que:
  - La **primera fila** contiene los **nombres de las columnas** que el sistema utilizará para registrar los datos del paquete.
  - La **segunda fila** incluye etiquetas que indican qué campos son **requeridos** y cuáles son **opcionales**. Esto significa que puedes dejar vacías las celdas correspondientes a campos opcionales si no necesitas llenarlos.

  ![](/img/upload/SNCp13-2025-13-16.png)

- Completa el archivo con la siguiente información:
  - **SKU** (obligatorio)
  - **Quantity** (Cantidad) (obligatorio)
  - **COO** (País de origen, usando **claves de país**) (obligatorio).  
    Si no conoces la clave correspondiente, puedes consultarla en el formulario de registro de paquetes del portal, donde se muestran las claves válidas.
  - **poNumber** (Orden de compra) *(opcional)*
  - **lotNumber** (Número de lote) *(opcional)*
  - **expirationDate** (Fecha de expiración) *(opcional)*
  - **lineId** (Código del paquete) *(opcional)*

  ![](/img/upload/SNCp14-2025-13-16.png)

- Una vez que completes el archivo y guardes los cambios, **carga el archivo CSV** en el sistema utilizando la opción correspondiente, como se muestra en la siguiente imagen. Luego haz clic en **Proceder** para continuar con el proceso.

![](/img/upload/SNCp12-2025-13-16.png)

- Si el archivo no contien discrepancia, el sistema debe mustrar un mensaje de color verde indicando que el proceso fue exitoso.


![](/img/upload/SNCp15-2025-13-16.png)

:::