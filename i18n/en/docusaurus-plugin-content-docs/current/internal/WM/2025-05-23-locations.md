---
sidebar_position: 2
title: Locations
---

# Locations

Este módulo permite gestionar las ubicaciones asignadas a los clientes dentro de cada almacén en el sistema WMS. Entre las acciones básicas que se pueden realizar se incluyen: registrar nuevas ubicaciones, visualizarlas y eliminarlas según sea necesario.


## Generar una locación.

- Haz clic en la opción **Create Location**.

![](/img/upload/Locationsp1-2025-13-16.png)

- Se desglosa un formulario solicitando los siguientes campos a llenar:

Primero debes asignar un nombre, seleccionar el tipo de locación e indicar si es un **hard location** o  **soft location** (Las casillas de verificación estarán disponibles únicamente para ubicaciones cuyo tipo sea diferente a Over Storage).

![](/img/upload/Locationsp2-2025-13-16.png)


:::note

**¿Qué son y en qué se diferencian entre hard location y soft location?**

- Una **Hard Location** representa una **ubicación real** y **constante** dentro del almacén, utilizada para el almacenamiento estructurado del inventario.

- Una **Soft Location** representa una **ubicación lógica** y **temporal**, utilizada durante operaciones dinámicas como preparación de pedidos o movimientos internos.

- Ambas son necesarias para mantener el control y trazabilidad del inventario, adaptándose a diferentes fases del flujo logístico.

:::


En esta sección debes realizar las siguientes configuraciones para la locación:

- Los campos **Minimum** y **Maximum** definen la cantidad mínima y máxima de SKUs que puede contener una locación.
- El campo **SKU Accepted** especifica la cantidad de SKUs distintos permitidos en la locación, siempre y cuando la opción Multiple SKU esté habilitada.
- La casilla de verificación **Multiple SKU** permite almacenar múltiples SKUs en una misma locación. Actívala si es necesario.
- La casilla de verificación **Block Location** bloquea la locación para evitar el ingreso de más artículos. Si esta opción está activada, aún se pueden retirar productos, pero no se permite ingresar nuevos.


![](/img/upload/Locationsp3-2025-13-16.png)

:::note
la opción Múltiple SKU está disponible  únicamente para ubicaciones de tipo **Pick Location**, **Quarantine** Y **TOTE**.
:::

A continuación, debes indicar el **almacén** al que estará asignada la ubicación. El campo **Order Picking** es opcional y puede dejarse vacío si no se aplica. También puedes seleccionar el **COO (Country of Origin)** que tendrá la ubicación, en caso de que se requiera llevar un control de inventario por país de origen. Esta opción es útil para ciertos clientes que solicitan separar físicamente el inventario según su país de procedencia. Este campo también es opcional y puede dejarse sin seleccionar si no es requerido. Finalmente, debes seleccionar la **razón social(Selected Registered Name)** y los clientes **(Companies)** al que se asignará la ubicación.

![](/img/upload/Locationsp4-2025-13-16.png)

:::note
El campo **Select Registered Name** está disponible únicamente para ubicaciones de tipo **Pick Location**, **Over Storage** y **Quarantine**. Por otro lado, el campo Select Country of Origin solo se habilita para ubicaciones de tipo **Pick Location** y **Over Storage**.
:::


Por último debe  configurar las dimensiones físicas y la estructura del layout de la ubicación en el almacén. En el apartado **Location Measurements**, debes ingresar los valores en los campos **Width**, **Length** y **Height**, los cuales representan el ancho, largo y alto de la ubicación en pulgadas. A continuación, selecciona un valor en el campo **Location Size**, que corresponde a una categoría de tamaño estandarizada según las políticas del sistema. En la sección **Layout**, se definen los elementos estructurales que ubican físicamente el espacio dentro del almacén. Aquí se deben completar los campos **Rack number, Bay number, Section number y Space Section number** (Estos campos son opcionales pero sirven para dar más detalle de la medida de la ubicación).

![](/img/upload/Locationsp5-2025-13-16.png)

- Luego de haber verificado los datos llenados del formulario, haz clic en la opción **CREATE LOCATION** para continuar con el proceso. 

![](/img/upload/Locationsp6-2025-13-16.png)

- A continuación, se muestra un mensaje en color verde con el nombre de la ubicación asignada previamente, junto con un modal que contiene nombre y código QR, el cual será utilizado durante el proceso de picking.

![](/img/upload/Locationsp7-2025-13-16.png)


## Crea una locación a travéz de un archivo .CSV. 

- Haz clic en la opción **Download Layout** para descargar una plantilla en formato CSV.

![](/img/upload/Locationsp8-2025-13-16.png)

- Se descargará un archivo llamado **locations-layout.csv**. Una vez completada la descarga, ábrelo con Excel.

<img src="/img/upload/Locationsp9-2025-13-16.png" alt="Descripción" width="400"  />


- Al abrir el archivo, se mostrará una plantilla que indica cómo deben completarse los datos para realizar correctamente el proceso de importación.
    - La **primera fila** contiene los nombres de los campos que representan los datos requeridos para registrar una ubicación; **no debes modificar esta fila**, ya que cualquier cambio impedirá que el sistema procese la importación correctamente. 

![](/img/upload/Locationsp10-2025-13-16.png)

- La **segunda fila** indica qué columnas son obligatorias y cuáles son opcionales. Esta fila **sí puede ser modificada o eliminada**, ya que solo sirve como guía visual y no afecta el proceso de carga.

![](/img/upload/Locationsp10-2025-13-16.png)


- Para comenzar, es necesario completar primero las columnas obligatorias (marcadas como "required"). Por ejemplo, debes agregar valores en los campos **name**, **type**, **minimum**, **maximum**, **warehouses** y **companies**, entre otros.

![](/img/upload/Locationsp11-2025-13-16.png)

:::note
 A continuación, se detalla cómo obtener los valores correctos para las siguientes columnas:

- **Columna companies**:Ingresa al módulo **Companies** y localiza la columna  **SAP Number** correspondiente a la compañía. Ese es el dato que deberás colocar en la plantilla, como se muestra en la siguiente imagen.

![](/img/upload/Locationsp12-2025-13-16.png)

- **Columna wareHouses**: Dirígete al módulo **Warehouses** y toma el valor de la columna Code. Este es el código que debe colocarse en la columna correspondiente del archivo.

![](/img/upload/Locationsp13-2025-13-16.png)

- Columna type: Debes escribir exactamente el mismo valor que aparece en el campo desplegable del formulario de registro de ubicaciones.

![](/img/upload/Locationsp14-2025-13-16.png)

:::


- **Las columnas opcionales** pueden completarse según el nivel de detalle que se requiera en la información de la ubicación. Por ejemplo, la columna COO permite agregar el país de origen de la  ubicación, y la columna blockInventoryEntry acepta el valor "True" para indicar que no se permitirá agregar inventario a esa ubicación.

![](/img/upload/Locationsp15-2025-13-16.png)

:::tip
Para completar correctamente la columna COO, debes utilizar las claves de país registradas en el sistema WMS, ya que el sistema solo reconoce esos valores. Para consultar las claves válidas, accede al formulario para crear una ubicación en el módulo Location y revisa el campo desplegable Select Country of Origin, donde las claves de los países se muestran entre paréntesis.
:::

:::note
Las columnas marcadas como opcionales (optional) pueden completarse con datos si se dispone de ellos. En caso contrario:
- Si el campo es numérico, puedes ingresar **0**.
- Si el campo es de texto, puedes colocar **N/A**.
- si están marcados como Boolean agrega **false**.
:::

- Haz clic  en la opción **Import csv**.

![](/img/upload/Locationsp16-2025-13-16.png)

- Selecciona el archivo modificado anteriormente para exportar y haz clic en open.  

![](/img/upload/Locationsp17-2025-13-16.png)

- A continuación el sistema  muestra un mensaje de color verde indicando que proceso de importacion fue existo.

![](/img/upload/Locationsp18-2025-13-16.png)

- Después se visualizarán los datos de nuestra ubicación previamente exportados.


![](/img/upload/Locationsp19-2025-13-16.png)


## Editar una locación en el portal.

- Haz clic en la opción **Editar** en la columna **Actions** de la ubicación que deseas modificar.
![](/img/upload/Locationsp20-2025-13-16.png)

- Luego se muestra un formulario con los datos actuales que contiene la  ubicación seleccionada.

![](/img/upload/Locationsp21-2025-13-16.png)

![](/img/upload/Locationsp22-2025-13-16.png)

:::note
El campo **Select Country of Origin** puede modificarse dependiendo de la configuración establecida para el cliente en el módulo **Companies**, como se muestra en la siguiente imagen.
![](/img/upload/Locationsp23-2025-13-16.png)

Por ejemplo, si la compañía a la que está asignada la ubicación tiene habilitada la opción **Always update COO**, esto significa que puedes actualizar el país de origen sin restricciones. En cambio, si está activada la opción **Only update if location has no COO**, solo podrás asignar el país de origen si la ubicación no tiene uno previamente registrado. Una vez asignado, ya no será posible modificarlo nuevamente, ya que se aplica la restricción de no permitir actualizaciones posteriores.
:::

:::warning
Antes de realizar el cambio de COO de una locación debes verificar que la locación a la que deseas cambiar el COO (país de origen) no contenga ningún SKU. En caso de que tenga artículos almacenados, deberás vaciar la locación, ya que el sistema no permitirá realizar el cambio mientras haya inventario presente.
:::

- Después de haber realizado los cambios necesarios haz clic en **EDIT LOCATION** para guardar la actualización.

![](/img/upload/Locationsp24-2025-13-16.png)

- Al finalizar, el sistema mostrará un mensaje en color verde confirmando que la ubicación fue actualizada correctamente. Además, se desplegará un **modal** con el nombre de la **ubicación** y su **código QR**.

![](/img/upload/Locationsp25-2025-13-16.png)

## Editar una locación  a través de un archivo .CSV

Otra opción que ofrece el sistema para editar una locación, es importando un archivo  .csv, lo cual representa una alternativa más simple y eficiente, especialmente útil en ciertos casos.
Por ejemplo, si previamente generaste locaciones mediante la importación de un archivo .csv, puedes reutilizar ese mismo archivo para modificar la información que necesites actualizar o generar uno para una locación, de acuerdo con los cambios requeridos.

A continuación se desglosan lo pasos requeridos para aplicar esta funcionalidad.
- Haz clic en la opción **Download Layout** para descargar una plantilla en formato CSV.

![](/img/upload/Locationsp8-2025-13-16.png).




- Se descargará un archivo llamado **locations-layout.csv**. Una vez completada la descarga, ábrelo con Excel.

<img src="/img/upload/Locationsp9-2025-13-16.png" alt="Descripción" width="400"  />

:::tip
 Si tienes alguna archivo .csv con datos  generados porque has importado para crear locaciones, utilizando la plantilla, puedes utilizarlo para agilizar mas el proceso.
:::

- Abre la plantilla previamente descargada y edita únicamente los datos que deseas modificar. Asegúrate también de ingrsar la informacion de los campos ya registrados en el sistema que no deseas cambiar, para evitar que se sobrescriba información al momento de importar. Si deseas entender cómo editar correctamente la plantilla, consulta el apartado [crea una locacion a travez de un archivo-csv](#crea-una-locación-a-travéz-de-un-archivo-csv) archivo CSV, donde se explica el proceso con mayor detalle.

- Despues editar, tu arhivo deberia  ser aglo semiliar como se observa en la imagen:

![](/img/upload/Locationsp33-2025-13-16.png)

![](/img/upload/Locationsp34-2025-13-16.png)

:::warning
En la columna **"Name"** de la plantilla, el nombre que ingreses debe coincidir exactamente con el de la locación ya registrada en el sistema que deseas editar.
En caso de ingresar un nombre distinto, el sistema lo interpretará como una **nueva locación**, ya que no existe ningún registro con ese nombre, y procederá a crearla como un nuevo registro.
:::

- Luego, en el sistema haz clic  en la opción **Import csv**.

![](/img/upload/Locationsp16-2025-13-16.png)

- Selecciona el archivo previamente modificado. A continuación, el sistema mostrará un mensaje en color verde indicando que el proceso de importación se realizó con éxito.

![](/img/upload/Locationsp36-2025-13-16.png)

A continuación, se muestra evidencia de la información que contenía la locación antes de ser modificada:

 - **Antes**

![](/img/upload/Locationsp35-2025-13-16.png)

 - **Despues**

![](/img/upload/Locationsp37-2025-13-16.png)


:::info
Al editar locaciones mediante un archivo **.CSV**, si la locación es de tipo Over Storage o Pick Location, es posible modificar su **COO (Country of Origin)**.
No obstante, deben cumplirse las siguientes condiciones para evitar errores durante la importación:

- La compañía debe tener habilitada la opción **Always update COO**, que permite cambiar el COO.

- O bien, la locación no debe tener un COO asignado y no debe contener artículos con un COO distinto al que se desea asignar.

Si no se cumple alguna de estas condiciones y la locación contiene inventario, el sistema mostrará un mensaje de error al intentar actualizar el COO.
:::



## Visualizar información de una locación. 

- Haz doble clic a la ubicación  de la información que deseas visualizar.

- El sistema nos redirecciona a una página donde nos desglosa la siguiente información.

![](/img/upload/Locationsp32-2025-13-16.png)

## Eliminar una locación 

- Haz clic en la opción **Eliminar** en la columna **Actions** de la ubicación que deseas eliminar.

![](/img/upload/Locationsp29-2025-13-16.png)

- A continuación, se mostrará un mensaje de confirmación preguntando si deseas continuar con el proceso. Haz clic en **OK** para confirmar.

![](/img/upload/Locationsp30-2025-13-16.png)


- Finalmente, el sistema mostrará un mensaje en color verde indicando que la ubicación ha sido eliminada exitosamente.

![](/img/upload/Locationsp31-2025-13-16.png)

:::warning
Si intentas eliminar una ubicación que contiene inventario, el sistema no permitirá continuar con el proceso. En su lugar, mostrará un mensaje en color rojo indicando que la ubicación no tiene contenedores vacíos.
:::

## Imprimir Etiquetas de una locación.

- Ubicado en el módulo **Location**, haz clic en la opción **View** dentro de la columna **Action** correspondiente a la ubicación que deseas consultar.

![](/img/upload/Locationsp26-2025-13-16.png)

- A continuación, se mostrará un **modal emergente** con el **nombre de la ubicación** y su respectivo **código QR**.

![](/img/upload/Locationsp27-2025-13-16.png)

- Para **imprimir la etiqueta QR**, haz clic en el botón **PRINT**. El sistema generará automáticamente un archivo PDF que podrás descargar y enviar a impresión.

![](/img/upload/Locationsp28-2025-13-16.png)