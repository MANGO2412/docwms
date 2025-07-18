---
title: Movements
---

# Picking Movements

The **Movements** module in the WMS mobile app allows efficient and controlled relocation of items within the warehouse, whether by box, piece, or through consolidations. This module is designed to facilitate the operational tasks of warehouse staff, enabling inventory movements with traceability, scan-based validation, and source/destination control.

This section describes the general interface of the module and details the three main available functionalities:

- **Box Movement**: Allows full boxes to be moved to Over Storage or Picking locations.
- **Piece Movement**: Facilitates the relocation of individual items to multi-SKU locations.
- **Consolidations**: Allows regrouping of products from picking locations into boxes or multi-SKU locations.

Each flow is supported by screenshots and practical recommendations to ensure the process is carried out correctly, complying with system validations and avoiding common errors like COO (Country of Origin) mismatches.

## Movemnets Module View

![](/img/upload/Movep1-2025-13-16.png)

| No  | Name                        | Description                                                                                              |
| :-- | :-------------------------- | :------------------------------------------------------------------------------------------------------- |
| 1   | Movement menu button        | Displays the movement functions when tapped.                                                             |
| 2   | Box movement button         | Allows you to move a box to an Over Storage or Picking location.                                         |
| 3   | Piece movement button       | Allows you to move individual items to a multi-SKU location.                                             |
| 4   | Consolidation button        | Allows you to move items from a picking location into boxes or multi-SKU locations.                      |

## Box Movement

This function allows boxes to be moved from the warehouse to a client's Over Storage or Picking location.

- Open the mobile app menu and tap on **"Movements"**.

![](/img/upload/Movep2-2025-13-16.png)

- From the options displayed, select **"Box Movement"**.

![](/img/upload/Movep3-2025-13-16.png)

- A screen will appear prompting you to **scan the box first**.

![](/img/upload/Movep4-2025-13-16.png)

- **Locate and scan the QR code** on the box as shown in the example image below.

![](/img/upload/Movep5-2025-13-16.png)

:::tip
Only scan the **large QR code on the right side** of the label.
:::

Once the box is scanned, the system will display relevant information such as the **PPL number**, **receipt number**, and **COO (Country of Origin)**.

![](/img/upload/Movep6-2025-13-16.png)

:::tip
You can continue scanning more boxes before scanning the destination location.
:::

- Tap **"Scan Location"** to continue the movement process.

![](/img/upload/Movep7-2025-13-16.png)

- Once the location is scanned, the system will show its name (either Over Storage or Pick Location), and the **final destination indicator** will activate.

![](/img/upload/Movep8-2025-13-16.png)

- Tap **"Movement Completed"** to finish the process.

![](/img/upload/Movep9-2025-13-16.png)

- A confirmation screen will appear; tap **"Execute Movement"** to proceed.

![](/img/upload/Movep10-2025-13-16.png)

- A success message will appear. Tap **"Next Movement"** if you want to perform another.

![](/img/upload/Movep11-2025-13-16.png)

:::warning
If you attempt to move a box to a location with a **different COO**, the system will trigger an error and prevent the process:

![](/img/upload/Movep12-2025-13-16.png)

Or if the box contains **Mixed COO** (items from more than one country of origin):

![](/img/upload/Movep13-2025-13-16.png)
:::

## Piece Movement

This option allows moving individual pieces to a **multi-SKU** location.

- Open the app menu and tap **"Movements"**.

![](/img/upload/Movep2-2025-13-16.png)

- Select **"Piece Movement"** from the available options.

![](/img/upload/Movep3-2025-13-16.png)

- A screen will appear prompting you to first scan the **PPL code from the box**.

![](/img/upload/Movep14-2025-13-16.png)

- Locate and scan the **QR code** from the box, as shown:

![](/img/upload/Movep5-2025-13-16.png)

- Once scanned, the system will show the **location name** and **type** where the box currently is.

![](/img/upload/Movep15-2025-13-16.png)

- Now scan each item using its **SKU**. The app will show details such as SKU, UPC, Description, Scanned Quantity, Lot Number, and COO.

![](/img/upload/Movep16-2025-13-16.png)

![](/img/upload/Movep17-2025-13-16.png)

:::note
The number of pieces to scan depends on how many are being moved to a **multi-SKU** location.
:::

- Scan the **destination location**. Once scanned, its **name** and **type** will be displayed.

![](/img/upload/Movep18-2025-13-16.png)

- Tap **"Finish"** to proceed.

![](/img/upload/Movep19-2025-13-16.png)

- A **confirmation** message will appear. If correct, tap **"Execute Movement"** to continue.

![](/img/upload/Movep20-2025-13-16.png)

- A success message will appear with the option to **perform another movement**.

![](/img/upload/Movep21-2025-13-16.png)

:::warning
If you attempt to move pieces to a location with a **different COO**, an error will occur and the process will be blocked:

![](/img/upload/Movep22-2025-13-16.png)
:::

:::danger
### Error: Lot Mixing During Item Movement

If the following error appears during box movement:

<img src="/img/upload/Movep32-2025-13-16.png" width="550px"/>

This happens because some clients, like **Tumble**, prefer to organize inventory in locations separated by **lot number**.

Therefore, items with **different lots** cannot be mixed during **box movements** in the picking module.

⚠️ This validation only applies to the **Consolidation** and **Piece Movement** modules.
In those, the system checks that lot numbers match before allowing the move.

### Recommendation

Before scanning a destination location, make sure that:

- The location is **empty**  
- All items in the location have the **same lot** as those you're moving  

This will help prevent interruptions in the picking/consolidation flow and ensure inventory integrity.
:::

## Consolidations

Allows item movements from **pick locations** to a **box** or **multi-SKU** location.

- Open the app menu and tap **"Movements"**.

![](/img/upload/Movep2-2025-13-16.png)

- Select **"Consolidations"** from the available options.

![](/img/upload/Movep23-2025-13-16.png)

- A view will appear prompting you to first scan the **QR code of the location**.

![](/img/upload/Movep24-2025-13-16.png)

:::warning
If you scan a location that is not of type **Pick Location**, the system will block the process.
:::

- Once scanned, the origin location name and type will be displayed.

![](/img/upload/Movep25-2025-13-16.png)

- Next, scan the SKUs of the items to be moved. You will see info like SKU, UPC, Description, Scanned Quantity, Lot Number, and COO.

![](/img/upload/Movep26-2025-13-16.png)

- Tap **"Scan Destination"**, then scan a box or a multi-SKU location.

![](/img/upload/Movep27-2025-13-16.png)

- For this example, a box PPL will be scanned:

![](/img/upload/Movep5-2025-13-16.png)

- Once scanned, the box location's name and type will be shown as the **destination**.

![](/img/upload/Movep28-2025-13-16.png)

- Tap **"Movement Completed"** to proceed.

![](/img/upload/Movep29-2025-13-16.png)

- A **confirmation** message will appear. Tap **"Execute Movement"** if everything is correct.

![](/img/upload/Movep30-2025-13-16.png)

- A success message will appear, with the option to **perform another movement**.

![](/img/upload/Movep31-2025-13-16.png)

:::danger
If the following error appears:

<img src="/img/upload/Movep32-2025-13-16.png" width="550px"/>

Refer to the section [Error: Lot Mixing During Item Movement](#error-lot-mixing-during-item-movement) to understand the cause and conditions that may trigger it.

This error is usually related to company-specific restrictions on **lot handling** during inventory movements.
:::
