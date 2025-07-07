---
title: Configuraciones de compañia
---
# Configuraciones de la compañia


<details >
  <summary>Configuracion del perfil</summary>

  En WMS, 3rd Party Billing significa que la factura se genera para una tercera entidad, diferente al cliente o proveedor logístico.
</details>


<details >
  <summary>Configuracion del Tema</summary>

  En WMS, 3rd Party Billing significa que la factura se genera para una tercera entidad, diferente al cliente o proveedor logístico.
</details>

<details >
  <summary>Configuracion del Inventario</summary>

  En esta sección podrás establecer configuraciones clave para el comportamiento del inventario, específicamente relacionadas con el manejo de **múltiples SKUs por ubicación**, **reglas de cambio de país de origen (COO, por sus siglas en inglés)** y **prioridades de reabastecimiento(Replenishment)**.

 🔍 **¿Cómo acceder?**
1. Ingresa al portal web de WMS.
2. Asegúrate de tener acceso al módulo Companies.
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

- **One COO at a time at Pick Locations**
    Si se activa esta opción, cada ubicación de picking podrá contener productos de un solo COO a la vez, evitando combinaciones no permitidas que puedan afectar la trazabilidad o cumplimiento.

    ![](/img/upload/Clientsp6-2025-13-16.png)
</details>

<details >
  <summary>Configuracion del Picker</summary>

  En WMS, 3rd Party Billing significa que la factura se genera para una tercera entidad, diferente al cliente o proveedor logístico.
</details>





