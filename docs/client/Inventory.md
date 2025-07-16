---
sidebar_position: 4
title: Inventory
---

# Inevtory(Portal cliente)

El módulo de Inventario del portal de clientes de G-WMS te permite visualizar en tiempo real la distribución y disponibilidad del stock de cada artículo almacenado en los distintos almacenes gestionados por G Global.

Este módulo funciona como una herramienta visual de monitoreo que facilita el control de tu inventario, brindando información detallada sobre el SKU, descripción, país de origen, cantidad disponible, entre otros datos relevantes.

Además, cuenta con potentes opciones de filtrado y búsqueda, lo que te permite localizar productos fácilmente o segmentar la información de acuerdo con tus necesidades específicas. Ya sea para consultar la disponibilidad, realizar exportaciones de datos o generar reportes, este módulo te ofrece múltiples funcionalidades que descubrirás a lo largo de este apartado.

A continuación, se presenta una imagen ilustrativa del módulo para familiarizarte con su interfaz:

![](/img/upload/Cinventoryp1-2025-13-16.png)

## Comprendiendo la informacion de la tabla

- Al acceder a este apartado, se puede encontrar con una tabla donde desglosa el inventario de forma  general de todo sus articulos.

![](/img/upload/Cinventoryp7-2025-13-16.png)


Las primeras cuatro columnas ofrecen información clave de cada artículo: 
- **Type (Tipo)**: Indica si el producto es un artículo individual (Single Item) o un conjunto de productos (Kit).
- **SKU**: Es el identificador único interno del producto. 
- **Descripción (Description)**: Proporciona una breve descripción del producto para su fácil reconocimiento.
- **Pais de origin**: es el pais de origin del producto(los nombres de los paises se muestra a travéz de claves)
- **Kits Disponibles**:  muestra la cantidad de kits en caso de que el articulo sea un kit.

![](/img/upload/Cinventoryp8-2025-13-16.png)


- Las siguientes columnas de la tabla muestran cómo se distribuye la cantidad total de cada artículo en distintos estados dentro del sistema:

    - **Cantidad disponible**: Indica la cantidad de unidades listas para ser asignadas a una orden, en caso de que se genere.
    - **Cantidad existente**: Representa el total del inventario físico registrado actualmente en el sistema.
    - **Cantidad comprometida**: Es la cantidad reservada para atender órdenes de pedido activas.
    - **Cantidad en Put Away**: Muestra la cantidad de artículos que han sido recibidos en los almacenes, pero que aún no han sido asignados a una locación específica.

    ![](/img/upload/Cinventoryp10-2025-13-16.png)



    - **Cantidad en proceso**: Muestra los artículos que actualmente se encuentran en una etapa de movimiento.
    - **Cantidad Seleccionable**: Indica el número de unidades que están listas y disponibles para ser asignadas a una orden.
    - **Cantidad en Recepcion**: Refleja los artículos que han sido ingresados al almacén pero que todavía están en proceso de verificación o esperando ser asignados a una ubicación definitiva.
    - **Cantidad en Sobre almacenamiento**:Señala artículos que han sido almacenados en ubicaciones temporales. 

    ![](/img/upload/Cinventoryp11-2025-13-16.png)


    - **Cantidad en  Cuarentena**: Esta columna indica la cantidad de unidades que han sido apartadas temporalmente por motivos de inspección, calidad o validación. 
    - **Cantidad en  Retraso**: Representa el número de artículos cuya llegada al almacén o procesamiento ha superado los tiempos establecidos.
    - **Cantidad en Transito**: Muestra la cantidad de unidades que han sido despachadas o están en proceso de ser recibidas, pero que aún no han sido registradas físicamente en el almacén. 

    ![](/img/upload/Cinventoryp12-2025-13-16.png)

:::info
- Si una columna muestra una flecha junto a la cantidad, significa que esa cantidad está vinculada a una o más órdenes de pedido.

![](/img/upload/Cinventoryp13-2025-13-16.png)

-  Al hacer clic en el ícono de la flecha, se desplegará un listado con las referencias de las órdenes que corresponden a esa cantidad.

![](/img/upload/Cinventoryp14-2025-13-16.png)

- Si haces clic en una orden dentro del listado desplegado, el sistema te redirigirá automáticamente al módulo Order Monitor, donde podrás consultar todos los detalles de dicha orden.

![](/img/upload/Cinventoryp15-2025-13-16.png)
:::



## ¿Cómo aplicar filtros?

En la parte superior de la vista principal del módulo de **Inventario**, se encuentran varios campos diseñados para aplicar **filtros rápidos**, que te permitirán refinar la información mostrada en la tabla inferior, donde se visualiza el inventario de tus artículos.

### Tipos de filtros disponibles

- **Tipo (Type)**: Permite filtrar los artículos según su tipo:
  - **Single**: Artículos compuestos por una sola pieza.
  - **Kit**: Artículos conformados por múltiples componentes.

- **SKU**: Permite buscar un artículo ingresando su identificador único (SKU).

- **Descripción (Description)**: Al escribir parte o el nombre completo del artículo, el sistema mostrará resultados que coincidan con esa descripción.

Estos filtros son especialmente útiles cuando se trabaja con un catálogo amplio o se necesita localizar información específica de forma ágil.

- A continuación, se muestra una imagen con los campos de filtro:

![](/img/upload/Cinventoryp2-2025-13-16.png)

- Ejemplo del uso de los filtros aplicados:

![](/img/upload/Cinventoryp3-2025-13-16.png)

:::tip
Si utilizas más de un filtro a la vez, el sistema aplicará un **filtro anidado**, considerando todas las condiciones seleccionadas.
:::

---

## Opción **FILTERS**

Si los filtros rápidos no se ajustan a tus necesidades o deseas realizar una búsqueda más avanzada, el sistema ofrece una opción adicional llamada **FILTERS**, ubicada en la parte superior de la tabla de resultados.

Esta opción te permite:

- Aplicar filtros adicionales no disponibles en el panel principal.
- Ver un **indicador numérico** con la cantidad de filtros actualmente activos.

![](/img/upload/Cinventoryp4-2025-13-16.png)

Al hacer clic en esta opción, se desplegará una barra de filtros avanzada. Si ya existen filtros activos, estos se mostrarán en forma de lista editable para que puedas modificarlos o agregar nuevos criterios.

![](/img/upload/Cinventoryp5-2025-13-16.png)

### Campos del filtro avanzado

- **Columns**: Especifica la columna de la tabla sobre la que deseas aplicar el filtro. Puedes elegir entre cualquiera de las columnas disponibles.

- **Operators**: Define el tipo de operación lógica que se aplicará. Las opciones disponibles son:

  - `Contains`: El valor ingresado coincide parcialmente con el contenido de la columna.
  - `Equals`: El valor ingresado debe coincidir exactamente con el contenido de la columna.
  - `Starts with`: El contenido de la columna debe comenzar con el valor ingresado.
  - `Ends with`: El contenido de la columna debe terminar con el valor ingresado.
  - `Is empty`: Filtra solo las filas donde el valor de la columna está vacío.
  - `Is not empty`: Filtra las filas donde el valor de la columna no está vacío.

- **Value**: En este campo debes ingresar el valor con el cual se aplicará el filtro, **siempre que el operador seleccionado no sea** `Is empty` o `Is not empty`.  
  En caso de utilizar uno de estos dos operadores, el campo **se deshabilitará automáticamente**, ya que no requiere un valor para funcionar.

Para agregar un nuevo filtro, haz clic en el botón **ADD FILTER**.

![](/img/upload/Cinventoryp6-2025-13-16.png)

Al hacerlo, se añadirá una nueva fila en la lista de filtros, con los campos **Column**, **Operator** y **Value**, listos para que los completes según tus necesidades.

Si deseas eliminar un filtro de la lista, simplemente haz clic en el ícono de la **equis (✕)** correspondiente a ese filtro.



## Consultar detalles del inventario de un artículo

Para consultar el inventario de un artículo específico, haz clic sobre la fila correspondiente dentro de la tabla principal del módulo de Inventario.

Al hacer clic, el sistema desplegará una vista detallada con información específica del artículo seleccionado. Esta vista incluye tarjetas y tablas que resumen los datos más relevantes, como la disponibilidad del artículo y su distribución en el almacén.

A continuación, se muestra una imagen que ejemplifica la interfaz del detalle de inventario por artículo:

![](/img/upload/Cinventoryp16-2025-13-16.png)

### Información general del artículo

En la parte superior de la vista, se presentan los datos principales del artículo, tales como **SKU**, **Descripción** y **Tipo de artículo**

![](/img/upload/Cinventoryp17-2025-13-16.png)

### Tarjetas resumen de inventario

Justo debajo de la información general, se encuentra una serie de tarjetas que indican cómo está distribuido el inventario del artículo. Esta información también se detalla en la tabla inferior de la vista.

Cada tarjeta incluye un icono de ayuda (?), y al pasar el cursor sobre él se despliega una breve explicación sobre el significado o función de cada cantidad mostrada.

![](/img/upload/Cinventoryp18-2025-13-16.png)

### Inventario por país de origen (COO)

Más abajo se encuentra una sección que organiza el inventario total del artículo según su país de origen (COO) en una tabla. Esta vista te permite identificar cómo se distribuye el inventario según el país desde el cual proviene.

Justo debajo de la tabla, se muestran tarjetas con métricas específicas por país. Para consultar los datos de un país en particular, utiliza el campo desplegable y selecciona el país deseado. Al hacerlo, el sistema actualizará automáticamente las métricas correspondientes.

![](/img/upload/Cinventoryp19-2025-13-16.png)


### Inventario por Almacén

Justo debajo del apartado de inventario por país, se encuentra la sección **Almacén (Warehouses)**. Aquí se despliegan métricas que muestran cómo está distribuido el inventario del artículo por cada almacén. Además, se indica la cantidad correspondiente de los contenedores en los que se encuentra almacenado el inventario.

![](/img/upload/Cinventoryp20-2025-13-16.png)


### Historial de movimientos

En esta sección se presenta una tabla con el historial de movimientos realizados sobre el inventario del artículo. La información más relevante incluye:

- El nombre de la **ubicación (location)** donde se realizó el movimiento.  
- El **responsable** que ejecutó la acción.  
- La **fecha** en que fue realizado el movimiento.  
- Un **indicador de color**:  
  - **Rojo** para salidas de inventario.  
  - **Verde** para entradas de inventario.

![](/img/upload/Cinventoryp21-2025-13-16.png)

### Inventario por Lote

Finalmente, se encuentra la sección **Inventario por Lote (Lot)**, que muestra cómo está distribuido el inventario en función de los números de lote registrados en el sistema. La información esencial en esta vista incluye:

- Número de lote  
- Cantidad disponible  
- Fecha de expiración (en caso de aplicar)  
- País de origen  
- Etiqueta **PPL** asignada (si existe)

![](/img/upload/Cinventoryp22-2025-13-16.png)





