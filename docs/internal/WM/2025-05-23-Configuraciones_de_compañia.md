---
title: Configuraciones de compañia
---
# Configuraciones de la compañia

En este apartado se detallan las opciones de configuración disponibles para los clientes registrados en el WMS. Estas configuraciones permiten definir el comportamiento del sistema en los flujos de cumplimiento (como las operaciones de picking y packing), así como habilitar o deshabilitar validaciones específicas para movimientos de inventario o procesos del picker, entre otros ajustes clave.

<details >
  <summary>Configuración del perfil</summary>
</details>


<details >
  <summary>Configuración del Tema</summary>
</details>

<details >

  <summary>Configuración del Inventario</summary>

  En esta sección podrás establecer configuraciones clave para el comportamiento del inventario, específicamente relacionadas con el manejo de **múltiples SKUs por ubicación**, **reglas de cambio de país de origen (COO, por sus siglas en inglés)** y **prioridades de reabastecimiento(Replenishment)**.

 🔍 **¿Cómo acceder?**
1. Ingresa al portal web de WMS.
2. Asegúrate de tener acceso al módulo **Companies**.
3. Una vez dentro del módulo, selecciona un cliente haciendo doble clic sobre su registro en la tabla.
4. Haz clic en la pestaña Inventory para desplegar las opciones disponibles.

  ![](/img/upload/Clientsp2-2025-13-16.png)

A continuación, se describen las configuraciones que puedes ajustar:


🔹 **Enable Location with Multiple SKU**
Esta opcion permite que una ubicación contenga multiples SKUs distintos.
Esto es util cuando se usan locaciones de tipo multi-SKU o consolidaciones(se deseas esta configuracion activalo).

🔹 **Multiple lots in containers**
Esta Permite almacenar más de un número de lote por contenedor. Si trabajas con productos que llegan en diferentes lotes, esta opción te ayudará a gestionarlos desde una misma ubicación.


🔸 **COO Location Change Rule**

Define el comportamiento del sistema cuando se actualiza el país de origen (COO - Country of Origin) de una ubicación:
- **Always update COO**: Siempre actualiza el COO de la locación, sin importar si ya tenía uno definido.
- **Only update if location has no COO** : Solo se asigna un COO si la locación aún no tiene uno.



🔸 **Replenishment COO Prioritization**

Permite establecer un orden de prioridad para el reabastecimiento de inventario basado en el país de origen.
- **Configuration: Yes / No**
    Activa esta opción para habilitar la priorización.

    ![](/img/upload/Clientsp3-2025-13-16.png)

- **Select a country**
    Usa el buscador para agregar países por nombre o código (ej. China (CN), Thailand (TH)).

    ![](/img/upload/Clientsp4-2025-13-16.png)

    :::warning
    Si seleccionas la opción **"Any Country"**, le indicas al sistema que, en caso de que no haya suficiente inventario disponible en los países definidos en la lista de **Priority Order**, puede tomar productos de cualquier otro país disponible en el almacén. Esto también aplica si se reciben paquetes de un país que no está incluido en dicha lista.
    :::


- **Priority Order**
    Ordena los países según el nivel de prioridad deseado para la reposición de stock. El sistema intentará primero con el país que esté más arriba en la lista.

    ![](/img/upload/Clientsp5-2025-13-16.png)
  :::tip
   Puedes ordenar la lista con solo arrastrar y soltar los elementos de la lista, esto dependera de las necesidades del cliente.
  :::

- **One COO at a time at Pick Locations**
    Si se activa esta opción, cada ubicación de picking podrá contener productos de un solo COO a la vez, evitando combinaciones no permitidas que puedan afectar la trazabilidad o cumplimiento.

    ![](/img/upload/Clientsp6-2025-13-16.png)
</details>

<details >
  <summary>Configuración del Picker</summary>

  En este apartado permite personalizar la visibilidad y el comportamiento de la aplicación móvil **Picker App** para un cliente específico. Aquí puedes definir que información mostrar al picker, qué tipos de totes se pueden asignar, qué validciones aplicar y el porcentaje de muestreo AQL(Acceptable Quality Limit).

  
<h2>🔍 ¿Cómo acceder?</h2> 
1. Ingresa al portal web de WMS.
2. Asegúrate de tener acceso al módulo **Companies**.
3. Una vez dentro del módulo, selecciona un cliente haciendo doble clic sobre su registro en la tabla.
4. Haz clic en la pestaña **picker** para desplegar las opciones disponibles.

  ![](/img/upload/Clientsp7-2025-13-16.png)

<h2>🔸Show in Picker APP</h2>

Define qué informacion  serán visibles para el operador en la aplicación móvil del picker. Puedes activar o desactivar los siguientes elementos según las necesidades del cliente:

- **SKU**: Muestra el código de identificación del articulo.
- **UPC**: Muestra el código universal de producto.
- **Código de barras alternativo**: Activa la visualización de un código adicional si aplica.
- **Descripción**: Muestra la descripción del artículo.
- **Imagen**: Muestra la imagen asociada al producto.
- **Country of Origin**: Muestra el país de origen del artículo.
- **Lot number**: Muestra el número de lote, útil para trazabilidad y control.

![](/img/upload/Clientsp8-2025-13-16.png)

<h2>🔸Totes</h2>

Selecciona los tipos de totes (contenedores) que el picker puede utilizar durante la operación:

- **Normal**: Totes regulares disponibles para picking.
- **Preconfigured**: Totes con configuraciones predefinidas.

![](/img/upload/Clientsp9-2025-13-16.png)

<h2>🔸Configurations</h2> 

Aquí defines reglas adicionales para controlar el comportamiento de la app:

- **By UPC**: Habilita la validación o búsqueda por código UPC.
- **Show Locations**: Muestra las ubicaciones disponibles en el almacén.
- **By COO**: Permite asignar ubicaciones de picking según el país de origen (COO) del producto, siguiendo el orden de prioridad configurado previamente en la sección **Configuración de Inventario**.
- **Verificación de Lote**: Obliga a verificar el número de lote durante el proceso de picking.

![](/img/upload/Clientsp10-2025-13-16.png)

🔸 **AQL Sampling**

Este control deslizante permite configurar el porcentaje de artículos que deben ser validados mediante muestreo AQL (Acceptable Quality Limit).

![](/img/upload/Clientsp11-2025-13-16.png)

:::note
Por ejemplo, si se define un valor del 50%, el sistema solicitará validar la mitad de los artículos escaneados por el picker.
:::
</details>





