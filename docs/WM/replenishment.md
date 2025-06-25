---
title: Replenishment
---
# Módulo de replenishment

El módulo de replenishment sirve para abastecer el stock de locaciones con artículos que hagan falta.
Este módulo crea una orden de replenishment, la cual puede ser posteriormente procesada en el propio de replenishment, en el cual se tendrán que insertar datos como el contenedor donde se encuentran los artículos, los artículos y la locación donde se hará el replenishment.
En este módulo también se pueden borrar y atender las órdenes de replenishment abiertas.


<hr/>


### Vista útil general del módulo

![](/img/upload/screenshot-2025-06-05-100808.png)

| No  | Nombre                                      | Descripción                                                              |
| --- | ------------------------------------------- | ------------------------------------------------------------------------ |
| 1   | Cuadro de total de órdenes de replenishment | Este cuadro muestra el total de órdenes de replenishment                 |
| 2   | Botón de importar CSV                       | Este botón sirve para importar replenishment como CSV                    |
| 3   | Botón para crear replenishment              | Este botón sirve para iniciar el proceso de crear un nuevo replenishment |


<hr/>



### Detalles del módulo

Las órdenes de replenishment cuentas con varios los estados o status los cuales reflejan el progreso actual de esa orden dichos estados se listan a continuación:


<ol>
  <li><mark style={{backgroundColor: 'blue', color: 'white'}}>(On Queue)</mark> - Este estado representa que la orden está en fila.</li>
  <li><mark style={{backgroundColor: 'yellow'}}>(In Progress)</mark> - Este estado representa que la orden está en progreso.</li>
  <li><mark style={{backgroundColor: 'green'}}>(Completed)</mark> - Este estado representa que la orden ha sido completada.</li>
  <li><mark style={{backgroundColor: 'red', color: 'white'}}>(Cancelled)</mark> - Este estado representa que la orden ha sido cancelada.</li>
</ol>


<hr/>


<table>
    <tr>
        <th><h3>Contexto</h3></th>
    </tr>

    <tr>
        <td>
            Lo primero que se agrega al usar replenishment es el container que es la caja donde se almacenan uno o varios artículos. y un container suele lucir de la siguiente manera.

            ![logo](/img/upload/screenshot-2025-06-24-122218.png)

            Los **artículos** suelen venir en diferentes presentaciones pero una de las comunes son cajas más pequeñas.

            ![](/img/upload/screenshot-2025-05-20-100053.png)

            La **ubicación** o **locación** es donde se pueden almacenar artículos para su uso en el proceso. Dicha locación es un espacio en un rack del almacén y se representa con una **etiqueta** con un **QR** la cual está colocada en dicho rack.

            ![](/img/upload/screenshot-2025-06-05-120545.png)

            ![](/img/upload/screenshot-2025-06-05-120624.png)
        </td>
    </tr>
    
</table>


### Crear replenishment


<table>
    <tr>
        <th><b>Pasos</b></th>
    </tr>

    <tr>
        <td>
            Selecciona el <b>3</b> de la interfaz principal para iniciar con el proceso de crear un nuevo replenishment. y aparecerá una interfaz en la cual se creará la orden.
            
             ![](/img/upload/Screenshot-2025-06-05-101708.png)

             En esta **interfaz** se presenta dos formas de crear un Replenishment al seleccionar el campo de **type**, como la más **común** seleccionaremos **Manual** por lo tanto planning queda **vacío** por default.

             ![](/img/upload/Screenshot-2025-06-05-102011.png)

             Después click en **ADD** y entonces la **orden** de replenishment estará **creada**. Lo cual se verá representado de la siguiente forma.
            
            <!-- ![](/img/upload/###) -->
            
            ![](/img/upload/Screenshot-2025-06-05-102231.png)

            Aquí se puede observar cómo se **creó** la **orden** y se **enlistó**. Estando creada la orden ya está lista para ser procesada.


        </td>
    </tr>
</table>



<hr/>


## Tips y trucos de este módulo

Si esto pasa intenta recargar la pagina presionando **F5** o el signo de recargar en tu navegador.

Si el problema persiste recarga utilizando la combinación de teclas **CTRL** + **R** esto reiniciará la caché del sitio, **cuidado** si dejas un formulario con datos sin enviar la información **podría borrarse.**


<hr/>



## Problemas frecuentes

### No detecta los ítems a mover

Cuando pasa esto normalmente es porque no se siguió el flujo del módulo el cual es: Asignar el tipo de replenishment el cual es por SKU o por BOX (Container) y este es asignado mediante un **botón** en la tabla del procesamiento de la orden se encuentra en el campo **tipo de movimiento** (Movement Type) , para cambiar de **sku** a **box** solo se necesita hacer un **click** sobre el **botón**.

![Replenishment table](/img/upload/screenshot-2025-06-05-103956.png "Tipo de movimiento")

**Box** es por si se quieren mover contenedores a esa ubicación.

![](/img/upload/screenshot-2025-06-05-104005.png)

Mientras que **Sku** es si se quieren mover los **items (artículos)** directamente a la ubicación.

### No detecta un ítem o artículo cuando lo inserto

Si esto pasa puede ser por las siguientes razones:

1. **No** has **escaneado** el contenedor de **origen** como **primer** paso
2. Estas **ingresando** un **sku** o código **incorrecto** de artículo, por favor **verifica** que el **número** esté correcto.
3. El **artículo** que ingresas ya tenga **stock completo** o ya **no existe**.


<hr/>


## Preguntas frecuentes

### Puedo borrar las órdenes de replenishment desde la tabla de ordenes?

La respuesta es no, las órdenes no se pueden borrar pero si se pueden **cancelar.** Para cancelar una orden se tiene que entrar a la orden y en la parte superior izquierda se encuentra un botón el cual dice **Cancelar orden.**

### Como puedo cancelar una orden de replenishment

Para cancelar una orden se tiene que entrar a la orden y en la parte superior izquierda se encuentra un botón el cual dice **Cancelar orden.**

![](/img/upload/screenshot-2025-06-05-105728.png)
