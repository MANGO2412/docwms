---
title: Cycle Counting
---

Este módulo sirve para hacer conteos o inventario del stock de artículos en locaciones, estos conteos están en un ciclo de 3 vueltas, si el primer conteo no cuadra con las cantidades en el sistema se realiza un segundo conteo para verificar el primero y si no cuadra se realiza en tercer y  último conteo.

Este conteo cíclico se pueda realizar a locaciones de over storage como para ubicaciones de picking.

### Vista util general del modulo

![](/img/upload/Screenshot-2025-06-12-093305.png)

<table>
    <tr>
        <th>**No**</th>
        <th>**Nombre**</th>
        <th>**Descripcion**</th>
    </tr>
    <tr>
        <th>**1**</th>
        <th>Botón para crear un conteo cíclico</th>---
title: Conteo Cíclico
---

Este módulo sirve para realizar conteos o inventario del stock de artículos en ubicaciones. Estos conteos se realizan en un ciclo de 3 vueltas: si el primer conteo no coincide con las cantidades en el sistema, se lleva a cabo un segundo conteo para verificar el primero; y si aún no coincide, se realiza un tercer y último conteo.

Este conteo cíclico se puede realizar tanto para ubicaciones de **over storage** como para ubicaciones de **picking**.

### Vista general del módulo

![](/img/upload/Screenshot-2025-06-12-093305.png)

<table>
  <tr>
    <th>**No**</th>
    <th>**Nombre**</th>
    <th>**Descripción**</th>
  </tr>
  <tr>
    <th>**1**</th>
    <th>Botón para crear un conteo cíclico</th>
    <th>Este botón, al hacer clic, despliega un formulario en el cual se ingresan los datos para un nuevo conteo cíclico.</th>
  </tr>
  <tr>
    <th>**2**</th>
    <th>Botón de Grupos</th>
    <th>Este botón, al hacer clic, muestra la conformación de los grupos para realizar los conteos cíclicos.</th>
  </tr>
  <tr>
    <th>**3**</th>
    <th>Conteo Cíclico</th>
    <th>Todos los conteos cíclicos están representados con un cuadrado el cual contiene información acerca del conteo cíclico, como el progreso del mismo.</th>
  </tr>
  <tr>
    <th>**4**</th>
    <th>Estatus del conteo</th>
    <th>El estatus del conteo representa el estado actual en el que se encuentra el conteo.</th>
  </tr>
  <tr>
    <th>**5**</th>
    <th>Botón para borrar conteo</th>
    <th>Este botón sirve para borrar un conteo cíclico.</th>
  </tr>
  <tr>
    <th>**6**</th>
    <th>Botón detalles de conteo cíclico</th>
    <th>Este botón, al usarlo, muestra los detalles de los conteos.</th>
  </tr>
  <tr>
    <th>**7**</th>
    <th>Filtro de conteos por clientes</th>
    <th>Esta interfaz sirve para filtrar los conteos según el cliente.</th>
  </tr>
  <tr>
    <th>**8**</th>
    <th>Filtro de conteos por almacenes</th>
    <th>Esta interfaz sirve para filtrar los conteos según el almacén.</th>
  </tr>
  <tr>
    <th>**9**</th>
    <th>Filtro de conteos por estatus</th>
    <th>Esta interfaz sirve para filtrar los conteos según el estatus.</th>
  </tr>
</table>

---

### Crear un conteo cíclico

<table>
  <tr>
    <th><h3>Pasos</h3></th>
  </tr>

  <tr>
    <td>
      Haz **clic** en el **1** de la **interfaz general** y se **abrirá** una página para crear el conteo.

      Lo primero que se debe agregar para hacer un conteo cíclico es el almacén en el cual se llevará a cabo dicha acción.

      ![](/img/upload/Screenshot-2025-06-12-110906.png)

      En este recuadro, haz clic en la flechita del rectángulo para que se muestren los almacenes.

      ![](/img/upload/Screenshot-2025-06-12-110929.png)

      Posteriormente, se tiene que **agregar** la **fecha** en la que se **terminará** de hacer el **conteo**. La **fecha** tiene que ser al menos un día **posterior** a la fecha de **inicio**.

      ![](/img/upload/Screenshot-2025-06-12-111547.png)

      Haz clic en el cuadro de fecha de **End Date** o fecha final y selecciona el día en el que termina el conteo.

      ![](/img/upload/Screenshot-2025-06-12-111732.png)

      Al elegir la fecha final, se **podrá** observar el **número** de **días** para realizar el conteo.

      ![](/img/upload/Screenshot-2025-06-12-111953.png)

      El siguiente paso es **añadir** las **ubicaciones** a las cuales se les **realizarán** los **conteos**. Haz clic en el espacio en blanco al lado del botón de **ADD** o agregar.

      ![](/img/upload/Screenshot-2025-06-12-112411.png)

      **Inserta** lo más **exacto** posible el **nombre** de la **ubicación** a la cual hacer el **conteo**. Al ingresar el nombre, **espera** unos **segundos** para que se **refleje** la **búsqueda**.

      ![](/img/upload/Screenshot-2025-06-12-112740.png)

      **Selecciona** la **ubicación** haciendo **clic** en el **nombre** y posteriormente haz **clic** en **ADD** o agregar.

      ![](/img/upload/Screenshot-2025-06-12-112846.png)

      Posteriormente, **cambiarán** el **total de ubicaciones**, **ubicaciones de picking** y **ubicaciones de over storage**, y la **tabla** en la cual se puede ver la **tarea de conteo de las ubicaciones**.

      ![](/img/upload/Screenshot-2025-06-12-113059.png)

      Para agregar varias ubicaciones al conteo, repite los mismos pasos para agregar una ubicación.

      Para terminar la asignación de ubicaciones para conteos, haz clic en **Create Cycle Count** o crear conteo cíclico.

      ![](/img/upload/Screenshot-2025-06-12-113429.png)

      Entonces, el nuevo conteo cíclico se verá reflejado.

      ![](/img/upload/Screenshot-2025-06-12-113524.png)

    </td>
  </tr>
</table>

---

### Eliminar un conteo cíclico

<table>
  <tr>
    <th><h3>Pasos</h3></th>
  </tr>

  <tr>
    <td>
      Para borrar un conteo cíclico, es necesario **no haber interactuado** con el conteo, es decir, que no se haya realizado **ningún conteo en las ubicaciones previamente**.

      Para **borrar** un conteo cíclico, haz **clic** en **5** de la **interfaz general**. Al intentar borrar, se **lanzará** una **ventana** en la cual se **confirmará** la **eliminación** del conteo. Si **estás seguro** de borrar el conteo, haz clic en **Confirmar**.

      ![](/img/upload/Screenshot-2025-06-12-130513.png)

      La eliminación del conteo se confirmará al ver la ausencia del conteo en la interfaz.

    </td>
  </tr>
</table>

---

### Ver detalles de un conteo cíclico

<table>
  <tr>
    <th><h3>Pasos</h3></th>
  </tr>

  <tr>
    <td>
      Para ver los detalles de un conteo cíclico, haz clic en **6** de la interfaz general, que es el botón de **detalles de conteo cíclico**. Posteriormente, se abrirá una ventana en la cual se observarán las distintas métricas de los conteos cíclicos.

      Se **mostrarán** los datos de **1-3 ciclos** de conteos que se realizarán por orden de conteo cíclico.

      ![](/img/upload/Screenshot-2025-06-12-130936.png)

      Posteriormente, se muestran los datos graficados de IRA e ILA.

      ![](/img/upload/Screenshot-2025-06-12-131141.png)

      También se muestran las tablas de ajustes en el inventario.

      ![](/img/upload/Screenshot-2025-06-12-131215.png)

      También se puede ver el historial de conteo haciendo clic en el botón de **SEE COUNTING HISTORY** o ver historial de conteo. Este botón se ubica en la parte inferior derecha, debajo de la tabla de **adjustments by location** o ajustes por ubicación.

      ![](/img/upload/Screenshot-2025-06-12-131323.png)

      Al hacer **clic**, se puede observar el historial de conteo, el cual contiene el historial de actividades.

      ![](/img/upload/Screenshot-2025-06-12-131533.png)

    </td>
  </tr>
</table>

---

### Cómo agregar un usuario a un grupo para hacer conteo

<table>
  <tr>
    <th><h3>Pasos</h3></th>
  </tr>

  <tr>
    <td>
      Para **agregar** un **usuario** a un grupo de los 3 conteos, haz **clic** en **2** de la **interfaz general**. Esto llevará a donde están los grupos, los cuales se ven de la siguiente manera:

      ![](/img/upload/Screenshot-2025-06-12-135445.png)

      Para agregar cualquier usuario a cualquiera de los 3 grupos, haz clic en el signo de (+) azul en la esquina superior derecha de los rectángulos de los grupos.

      ![](/img/upload/Screenshot-2025-06-12-135837.png)

      Una vez escogido un grupo, es hora de agregar un usuario.

      ![](/img/upload/Screenshot-2025-06-12-135942.png)

      Haz **clic** en el **espacio** en **blanco** del **recuadro** blanco y **escribe** el **primer nombre** del **usuario** a agregar y **espera** unos **segundos** a que las opciones **aparezcan**.

      ![](/img/upload/Screenshot-2025-06-12-140147.png)

      Escoge el usuario haciendo clic sobre él y posteriormente haz **clic** en el botón de **Update Counters** o actualizar contadores.

      ![](/img/upload/Screenshot-2025-06-12-140338.png)

      Y el nombre se verá reflejado en las listas.

      ![](/img/upload/Screenshot-2025-06-12-140404.png)

    </td>
  </tr>
</table>
        <th>Este botón al hacer clic despliega un formulario en el cual se ingresan los datos para un  nuevo cycle counting</th>
    </tr>
    <tr>
        <th>**2**</th>
        <th>Boton de Grupos</th>
        <th>Este botón al hacer clic muestra la conformación de los grupos para hacer los conteos cíclicos.</th>
    </tr>
    <tr>
        <th>**3**</th>
        <th>Conteo cíclico</th>
        <th>Todos los conteos cíclicos están representados con un cuadrado el cual contiene información acerca del conteo cíclico como el progreso que se lleva del mismo.</th>
    </tr>
    <tr>
        <th>**4**</th>
        <th>Estatus del conteo</th>
        <th>El estatus del conteo representa el estado actual en el que se encuentra el conteo.</th>
    </tr>
    <tr>
        <th>**5**</th>
        <th>Botón de borrar conteo</th>
        <th>Este botón sirve para borrar un conteo cíclico.</th>
    </tr>
    <tr>
        <th>**6**</th>
        <th>Botón detalles de conteo cíclico</th>
        <th>Este botón al usarlo muestra los detalles de los conteos</th>
    </tr>
    <tr>
        <th>**7**</th>
        <th>Filtro de conteos por clientes</th>
        <th>Esta interfaz sirve para filtrar los conteos según el cliente.</th>
    </tr>
    <tr>
        <th>**8**</th>
        <th>Filtro de conteos por almacenes</th>
        <th>Esta interfaz sirve para filtrar los conteos según el almacén.</th>
    </tr>
    <tr>
        <th>**9**</th>
        <th>Filtro de conteos por estatus</th>
        <th>Esta interfaz sirve para filtrar los conteos según el estatus.</th>
    </tr>
</table>

### Crear un conteo ciclico

<table>
    <tr>
        <th><h3>Pasos</h3></th>
    </tr>

    <tr>
        <td>                        
            **Click** en el **1** de la **interfaz general** y se **abrirá** una página para crear el conteo.

            Lo primero que se debe de agregar para hacer una conteo ciclico es el almacén en el cual se va llevar a cabo dicha acción

            ![](/img/upload/Screenshot-2025-06-12-110906.png)

            En este recuadro dar click en la flechita del rectángulo para que se muestran los almacenes.

            ![](/img/upload/Screenshot-2025-06-12-110929.png)

            Posteriormente se tiene que **agregar** la **fecha** en la que se **terminará** de hacer el **conteo**, la **fecha** tiene que ser al menos un día **mayor** a la fecha de **inicio**.

            ![](/img/upload/Screenshot-2025-06-12-111547.png)

            Click en cuadro de fecha de **end date** o fecha final y selecciona el dia en el que termina el conteo.

            ![](/img/upload/Screenshot-2025-06-12-111732.png)

            Al elegir la fecha final se **podrá** observar el **número** de **días** para hacer el conteo.

            ![](/img/upload/Screenshot-2025-06-12-111953.png)

            El siguiente paso es **añadir** las **locaciones** a las cuales se les **realizaron** los **conteos**. Click en espacio en blanco a un lado del botón de **ADD** o agregar.
            
            ![](/img/upload/Screenshot-2025-06-12-112411.png)

            **Insertar** lo más **exacto** posible el **nombre** de la **locación** a la cual hacer **conteo**. Al ingresar el nombre **esperar** unos **segundos** para que se **refleje** la **búsqueda**

            ![](/img/upload/Screenshot-2025-06-12-112740.png)

            **Seleccionar** la **locación** haciendo **clic** en arriba del **nombre** y posteriormente **click** en **ADD** o agregar.

            ![](/img/upload/Screenshot-2025-06-12-112846.png)

            Posteriormente **cambiarán** el **total de locaciones**, **locaciones de pickeo** y **locaciones de over storage** y la **tabla** en la cual se puede ver la **tarea de conteo de las locaciones**.

            ![](/img/upload/Screenshot-2025-06-12-113059.png)

            Para agregar varias locaciones al conteo se repiten los mismos pasos para agregar una locación.

            Para terminar la asignación de locaciones para conteos dar click en **create cycle count** o crear conteo cíclico.

            ![](/img/upload/Screenshot-2025-06-12-113429.png)

            Entonces el nuevo conteo cíclico se verá reflejado.

            ![](/img/upload/Screenshot-2025-06-12-113524.png)

        </td>
    </tr>
</table>


### Eliminar un conteo ciclico

<table>
    <tr>
        <th><h3>Pasos</h3></th>
    </tr>

    <tr>
        <td>                        
            Para borrar un conteo cíclico se ocupa **no haber interactuado** con el conteo es decir que no hayan hecho **ningún conteo en las locaciones previamente**.

            Para **borrar** un conteo cíclico, **click** en **5** de la i**nterfaz general** lo cual al intentar borrar se **lanzará** una **ventana** en la cual se **confirmara** la **eliminación** del conteo, **si** esta **seguro** de borrar el conteo click en **confirmar.**

            ![](/img/upload/Screenshot-2025-06-12-130513.png)

            La eliminación del conteo se confirmara al ver la ausencia del conteo en la interfaz.

        </td>
    </tr>
</table>


### Ver detalles de un conteo ciclico

<table>
    <tr>
        <th><h3>Pasos</h3></th>
    </tr>

    <tr>
        <td>                        
            Para ver los detalles de un conteo cíclico click en **6** de la interfaz general el cual es el botón de **detalles de conteo cíclico.** Posteriormente se abrirá una ventana en la cual se observarán las distintas métricas de los conteos cíclicos.

            Se **mostrarán** los datos de **1-3 ciclos** de conteos que se realizará por orden de conteo cíclico.

            ![](/img/upload/Screenshot-2025-06-12-130936.png)

            Posteriormente se muestran los datos graficados de IRA y ILA

            ![](/img/upload/Screenshot-2025-06-12-131141.png)

            También se muestran las tablas de ajustes en el inventario

            ![](/img/upload/Screenshot-2025-06-12-131215.png)

            También se puede ver el historial de conteo dando click en el botón de **SEE COUNTING HISTORY** o ver historial de conteo. Este botón se ubica en la parte inferior derecha debajo de la tabla de **adjustments by location o** ajustes por locación**.**

            ![](/img/upload/Screenshot-2025-06-12-131323.png)

            Al dar **click** se puede observar el historial de conteo, el cual contiene el historial de actividades.

            ![](/img/upload/Screenshot-2025-06-12-131533.png)

        </td>
    </tr>
</table>

### Como agregar un usuario a un grupo para hacer conteo

<table>
    <tr>
        <th><h3>Pasos</h3></th>
    </tr>

    <tr>
        <td>                 
            Para **agregar** un **usuario** a un grupo de los 3 conteo **click** en **2**  de la i**nterfaz general**. Esto llevará a donde están los grupos. Los cuales se ven de la siguiente manera.

            ![](/img/upload/Screenshot-2025-06-12-135445.png)

            Para agregar cualquier usuario a cualquiera de los 3 grupos se hace dando click en el signo de (+) azul en la esquina superior derecha de los rectángulos de los grupos.

            ![](/img/upload/Screenshot-2025-06-12-135837.png)

            Una vez escogido un grupo es hora de agregar un usuario

            ![](/img/upload/Screenshot-2025-06-12-135942.png)

            **Click** en el **espacio** en **blanco** del **recuadro** blanco y **escribir** el **primer nombre** del  **usuario** a agregar y **esperar** unos **segundos** a que las opciones **aparezcan**.

            ![](/img/upload/Screenshot-2025-06-12-140147.png)

            Escoger el usuario dando clic sobre él y posteriormente **click** en el botón de **update counters** o actualizar contadores.

            ![](/img/upload/Screenshot-2025-06-12-140338.png)

            y el nombre se verá reflejado en las listas.
            
            ![](/img/upload/Screenshot-2025-06-12-140404.png)

        </td>
    </tr>
</table>


