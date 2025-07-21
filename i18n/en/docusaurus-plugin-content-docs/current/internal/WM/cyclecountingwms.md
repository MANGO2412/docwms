---
title: Cycle Counting
---

This module is used to perform stock counts or inventory of items in locations. These counts follow a 3-round cycle: if the first count doesn't match the system quantities, a second count is performed to verify the first one, and if it still doesn't match, a third and final count is conducted.

This cycle counting can be performed for both over storage locations and picking locations.

## General Useful View of the Module

![](/img/upload/Screenshot-2025-06-12-093305.png)

<table>
    <tr>
        <th>**No**</th>
        <th>**Name**</th>
        <th>**Description**</th>
    </tr>
    <tr>
        <th>**1**</th>
        <th>Create Cycle Count Button</th>
        <th>Clicking this button displays a form to enter data for a new cycle count</th>
    </tr>
    <tr>
        <th>**2**</th>
        <th>Groups Button</th>
        <th>Clicking this button shows the group configuration for performing cycle counts.</th>
    </tr>
    <tr>
        <th>**3**</th>
        <th>Cycle Count</th>
        <th>All cycle counts are represented by a square containing information about the count and its progress.</th>
    </tr>
    <tr>
        <th>**4**</th>
        <th>Count Status</th>
        <th>The count status represents the current state of the count.</th>
    </tr>
    <tr>
        <th>**5**</th>
        <th>Delete Count Button</th>
        <th>This button is used to delete a cycle count.</th>
    </tr>
    <tr>
        <th>**6**</th>
        <th>Cycle Count Details Button</th>
        <th>This button shows count details when used</th>
    </tr>
    <tr>
        <th>**7**</th>
        <th>Customer Count Filter</th>
        <th>This interface filters counts by customer.</th>
    </tr>
    <tr>
        <th>**8**</th>
        <th>Warehouse Count Filter</th>
        <th>This interface filters counts by warehouse.</th>
    </tr>
    <tr>
        <th>**9**</th>
        <th>Status Count Filter</th>
        <th>This interface filters counts by status.</th>
    </tr>
</table>

### Create a Cycle Count

<table>
    <tr>
        <th><h3>Steps</h3></th>
    </tr>

    <tr>
        <td>                        
            **Click** on **1** in the **general interface** and a page will **open** to create the count.

            The first thing to add for a cycle count is the warehouse where the action will take place.

            ![](/img/upload/Screenshot-2025-06-12-110906.png)

            Click on the arrow in the rectangle to display the warehouses.

            ![](/img/upload/Screenshot-2025-06-12-110929.png)

            Next, **add** the **end date** for completing the **count**, which must be at least one day **after** the **start date**.

            ![](/img/upload/Screenshot-2025-06-12-111547.png)

            Click on the **end date** box and select the count completion day.

            ![](/img/upload/Screenshot-2025-06-12-111732.png)

            After selecting the end date, you'll see the **number** of **days** allocated for the count.

            ![](/img/upload/Screenshot-2025-06-12-111953.png)

            The next step is to **add** the **locations** to be counted. Click on the blank space next to the **ADD** button.
            
            ![](/img/upload/Screenshot-2025-06-12-112411.png)

            **Enter** the **location name** as **accurately** as possible. After entering the name, **wait** a few **seconds** for the **search results** to appear.

            ![](/img/upload/Screenshot-2025-06-12-112740.png)

            **Select** the **location** by **clicking** on the **name** and then click **ADD**.

            ![](/img/upload/Screenshot-2025-06-12-112846.png)

            This will update the **total locations**, **picking locations**, and **over storage locations**, along with the **table** showing the **location counting tasks**.

            ![](/img/upload/Screenshot-2025-06-12-113059.png)

            Repeat these steps to add multiple locations to the count.

            To finish assigning locations, click **create cycle count**.

            ![](/img/upload/Screenshot-2025-06-12-113429.png)

            The new cycle count will then be displayed.

            ![](/img/upload/Screenshot-2025-06-12-113524.png)

        </td>
    </tr>
</table>


### Delete a Cycle Count

<table>
    <tr>
        <th><h3>Steps</h3></th>
    </tr>

    <tr>
        <td>                        
            To delete a cycle count, there must have been **no interaction** with the count (no counts performed in the assigned locations).

            To **delete** a cycle count, **click** on **5** in the **general interface**. This will launch a **confirmation window** - if you're **sure** about deleting, click **confirm.**

            ![](/img/upload/Screenshot-2025-06-12-130513.png)

            The count's deletion will be confirmed by its absence from the interface.

        </td>
    </tr>
</table>


### View Count Details

<table>
    <tr>
        <th><h3>Steps</h3></th>
    </tr>

    <tr>
        <td>                        
            To view count details, click on **6** in the general interface (the **cycle count details button**). This opens a window showing various count metrics.

            Data will be displayed for **1-3 counting cycles** performed in cycle count order.

            ![](/img/upload/Screenshot-2025-06-12-130936.png)

            Graphical data for IRA and ILA is then displayed.

            ![](/img/upload/Screenshot-2025-06-12-131141.png)

            Inventory adjustment tables are also shown.

            ![](/img/upload/Screenshot-2025-06-12-131215.png)

            You can view count history by clicking the **SEE COUNTING HISTORY** button located at the bottom right below the **adjustments by location** table.

            ![](/img/upload/Screenshot-2025-06-12-131323.png)

            Clicking this displays the count history with activity records.

            ![](/img/upload/Screenshot-2025-06-12-131533.png)

        </td>
    </tr>
</table>

### Add a User to a Counting Group

<table>
    <tr>
        <th><h3>Steps</h3></th>
    </tr>

    <tr>
        <td>                 
            To **add** a **user** to one of the 3 counting groups, **click** on **2** in the **general interface**. This takes you to the groups section, which looks like this:

            ![](/img/upload/Screenshot-2025-06-12-135445.png)

            Add users to any group by clicking the blue (+) sign in the upper right corner of each group rectangle.

            ![](/img/upload/Screenshot-2025-06-12-135837.png)

            After selecting a group, add a user:

            ![](/img/upload/Screenshot-2025-06-12-135942.png)

            **Click** in the **blank space** of the white box, **type** the user's **first name**, and **wait** a few **seconds** for options to **appear**.

            ![](/img/upload/Screenshot-2025-06-12-140147.png)

            Select the user by clicking on them, then click the **update counters** button.

            ![](/img/upload/Screenshot-2025-06-12-140338.png)

            The name will then appear in the lists.
            
            ![](/img/upload/Screenshot-2025-06-12-140404.png)

        </td>
    </tr>
</table>