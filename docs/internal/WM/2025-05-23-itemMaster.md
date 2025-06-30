---
title: Item master
---

# Item master

Este módulo permite gestionar los artículos de los clientes en el WMS, detallando las acciones necesarias para registrar un producto, así como para actualizar o eliminar su información en el sistema. Se considera uno de los módulos más importantes, ya que la información que se genera es relevante para otros módulos dentro del WMS.

## Crear un Item Master.

- **Click** en el botón **CREATE ITEM**:

![](/img/upload/ItemMasterp1-2025-13-16.png)

- Se desglosa un formulario solicitando los siguientes  datos  para llevar a cabo el proceso del registro.

![](/img/upload/ItemMasterp2-2025-13-16.png)

- Los campos requeridos para  realizar el registro, son los siguientes:

![](/img/upload/ItemMasterp3-2025-13-16.png)


| No del campo | Nombre del campo                          | Descripción                                                                                     |
| :----------- | :---------------------------------------- | :---------------------------------------------------------------------------------------------- |
| 1            | SKU                                       | Número de referencia del producto.                                                              |
| 2            | UPC Code(códigos de producto universales) | Son los códigos de barras que se utilizan para el comercio minorista y el comercio electrónico. |
| 3            | Hts Code                                  | Código de 10 dígitos para identificar la tarifa  arancelaria de importación en Estados Unidos.  |
| 4            | Cost                                      | Costo de fabricación del producto.                                                              |
| 5            | Sales price                               | El precio en el que se vende el producto a los clientes.                                        |
| 6            | Weight in Grams                           | Es el peso del producto en unidades gramos                                                      |
| 7            | Country of Manufacture                    | El país de fabricación en dos dígitos                                                           |

- Los campos opcionales se pueden dejar vacío o  son para proporcionar más información detallada del productos y son los siguientes:

![](/img/upload/ItemMasterp4-2025-13-16.png)

| No del campo | Nombre del campo    | Descripción                                                                                                                                                                                   |
| :----------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1            | Type                | Se define el tipo de producto por ejemplo calzado o textil                                                                                                                                    |
| 2            | Description         | Descripción breve del producto                                                                                                                                                                |
| 3            | Description A24     | Descripción breve del producto  en es español.                                                                                                                                                |
| 4            | Supplier            | Nombre del proveedor                                                                                                                                                                          |
| 5            | Country Process     | Lugar donde se procesa el producto. Si el pedido se procesa en Tijuana, este campo debe tener el valor de  MEX. Si el pedido se procesa en San Diego, este campo debe tener el valor de  USA. |
| 6            | UM Tariff           | Unidad de Medida                                                                                                                                                                              |
| 7            | Duty HTS            | Porcentaje de Duty Participation, 2 enteros y 2 decimales e.g. 33.33.                                                                                                                         |
| 8            | Alternate Bar Code  | Código de barras alternativo para un medio secundario de referencia de identificación del dato                                                                                                |
| 9            | PGA                 | Condición esencial                                                                                                                                                                            |
| 10           | Spanish description | Descripción del producto en español                                                                                                                                                           |
| 11           | SKU A24             | código interno SKU del producto                                                                                                                                                               |
| 12           | Harmonized Code     | Fracción arancelaria mexicana de 8 a 10 dígitos.                                                                                                                                              |
| 13           | Cost Currency       | Indica el tipo de moneda USD, MXN. en que se expresa el costo del producto.                                                                                                                   |
| 14           | UM COMMERCIAL       | Unidad de Medida comercial                                                                                                                                                                    |
| 15           | DUTY COUNTRY ORIGIN | porcentaje de País de origen, 2 enteros y 2 decimales e.g. 22.22.                                                                                                                             |

- Para proporcionar más características del producto como **color**, **tamaño** o **la estrategia del picking**, se pueden llenar algunos de estos campos como se muestra en la siguiente imagen.

![](/img/upload/ItemMasterp5-2025-13-16.png)

- El formulario de registro cuenta con **casillas de verificación**, por defecto se puede dejar deshabilitado pero si deseamos activar alguna opción relacionado al producto , simplemente haz clic algunas de las casillas para habilitar. 

![](/img/upload/ItemMasterp6-2025-13-16.png)

- Verifica que los datos sean correctos, haz clic en el botón **SAVE** para guardar el producto.

![](/img/upload/ItemMasterp7-2025-13-16.png)

- Si todo es correcto, se desglosa un **mensaje color verde** indicando que el registro es exitoso.

![](/img/upload/ItemMasterp8-2025-13-16.png)


## Crear kits

- Haz clic en la opción Bundle kit.


![](/img/upload/ItemMasterp9-2025-13-16.png)

- Se abrirá un formulario donde deberás seleccionar el SKU padre, que representará el artículo compuesto o kit principal. Luego, selecciona los SKU hijos, que son los productos individuales que conformarán dicho kit.


![](/img/upload/ItemMasterp10-2025-13-16.png)

- Después de seleccionar los SKU hijos, se habilitarán campos adicionales para que indiques la cantidad requerida de cada uno para conformar el SKU padre.

![](/img/upload/ItemMasterp11-2025-13-16.png)

- Una vez completada la información, haz clic en la opción **SAVE** para guardar los cambios.

![](/img/upload/ItemMasterp12-2025-13-16.png)

- A continuación, el sistema mostrará un mensaje en color verde confirmando que el proceso se realizó con éxito.

![](/img/upload/ItemMasterp13-2025-13-16.png)


- Para verificar que el kit fue creado correctamente, accede al módulo Stock, filtra por el SKU padre y, al hacer doble clic sobre el registro en la tabla, el sistema desplegará los SKU hijos que forman parte del artículo compuesto.

![](/img/upload/ItemMasterp14-2025-13-16.png)

![](/img/upload/ItemMasterp15-2025-13-16.png)

## Actualizar un Item Master

- Click en el botón de lapiz para editar el producto:

![](/img/upload/ItemMasterp16-2025-13-16.png)

- Se desplegará un formulario con campos de  datos que se desea modificar.

![](/img/upload/ItemMasterp17-2025-13-16.png)

![](/img/upload/ItemMasterp18-2025-13-16.png)

- haz clic en el botón **SAVE** para guardar los cambios:

![](/img/upload/ItemMasterp19-2025-13-16.png)


- Se actualizará la tabla  con un mensaje de color verde indicando el item que se actualizo, como se muestra en la siguiente imagen.

![](/img/upload/ItemMasterp20-2025-13-16.png)

## Eliminar Item Master

- Click en el botón 🗑 para eliminar el producto:

![](/img/upload/ItemMasterp21-2025-13-16.png)

- Se desplegará un mensaje de confirmación antes de eliminar, para eliminar haz clic **OK**.

![](/img/upload/ItemMasterp22-2025-13-16.png)


- Se actualizará la  tabla automáticamente, eliminando el ítem desplegando un mensaje de color verder indicando que la operacion ha sido exitosamente, como se muestra en la siguiente imagen: 

![](/img/upload/ItemMasterp23-2025-13-16.png)