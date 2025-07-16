---
sidebar_position: 2
title: Shipping Notice
---

# Shipping Notice

The **Shipping Notice** module allows the management of Advance Shipping Notices (ASNs) sent by clients. This module details the information related to items that will be received, including description, quantity, country of origin, and more.  
An ASN serves as a prior validation and confirmation of the packages that will be processed in the system before a receiving order is generated. This validation ensures that the shipping data is complete and aligned with the WMS receiving orders.

## Create an ASN

- Click the **Create Shipping Notice** button at the top of the table.

![](/img/upload/SNp1-2025-13-16.png)

- A form will open, prompting the following information to generate your ASN.

![](/img/upload/SNp2-2025-13-16.png)

:::note
The information to fill out the form is provided by the client via email.
:::

- Then click on **ADD**.

![](/img/upload/SNp3-2025-13-16.png)

- If the process is successful, a green message will be displayed with the internal ASN number assigned by the system and the table will update as shown.

![](/img/upload/SNp4-2025-13-16.png)

- The table displays the following ASN information:

![](/img/upload/SNp5-2025-13-16.png)  
![](/img/upload/SNp6-2025-13-16.png)

## Edit an ASN

- To update an ASN, click the pencil icon.

![](/img/upload/SNp7-2025-13-16.png)

- A form will appear with the editable fields.

![](/img/upload/SNp8-2025-13-16.png)

- After editing the data, click the **EDIT** button.

![](/img/upload/SNp9-2025-13-16.png)

- The system will update the ASN and display a green message with the updated internal ASN number.

![](/img/upload/SNp10-2025-13-16.png)

## Add Items to the ASN

- After creating an ASN, double-click on the desired ASN row to add items.

![](/img/upload/SNp11-2025-13-16.png)

- The system will redirect to a detailed view of the ASN.

![](/img/upload/SNp12-2025-13-16.png)

- To add an item, click on **Add Line** at the bottom of the view.

![](/img/upload/SNp13-2025-13-16.png)

- A form will open requesting the following fields.

![](/img/upload/SNp14-2025-13-16.png)

- After filling in the fields and confirming the information, click to continue.

![](/img/upload/SNp15-2025-13-16.png)

- If successful, a green message will indicate that the item line was created.

![](/img/upload/SNp16-2025-13-16.png)

- To verify that the item line was added, check the table at the bottom of the ASN detail section.

![](/img/upload/SNp17-2025-13-16.png)

## Upload CSV File to Add Multiple Item Lines to an ASN

- Instead of adding item lines manually, you can upload a CSV file with the relevant information. Click on **Download Template** at the bottom of the ASN detail view.

![](/img/upload/SNp18-2025-13-16.png)

- A CSV file named `asn-lines-layout.csv` will be downloaded. This file serves as a template indicating the structure and required data for uploading item lines.

![](/img/upload/SNp19-2025-13-16.png)

- When opened in Excel, the template will look like this:

![](/img/upload/SNp20-2025-13-16.png)

- Fill in the file with the item lines you want to add, as shown in the following image:

![](/img/upload/SNp21-2025-13-16.png)

:::note
Optional fields can be left blank. Required fields must be filled to proceed.
:::

- Once completed, save the file and in WMS, click **UPLOAD CSV**.

![](/img/upload/SNp22-2025-13-16.png)

- If the file is valid, a green message will confirm successful import.

![](/img/upload/SNp23-2025-13-16.png)

- Finally, verify that the data was imported correctly in the item lines table.

![](/img/upload/SNp24-2025-13-16.png)

## Edit or Delete an Item from the ASN

### Edit

- To **edit** an item line, click the edit icon in the **Actions** column.

![](/img/upload/SNp25-2025-13-16.png)

- A form will appear. Editable fields include **Pieces Quantity**, **Purchase Order**, **Lot Number**, and **Expiration Date**.

![](/img/upload/SNp26-2025-13-16.png)

- Click **EDIT** to save the changes.

![](/img/upload/SNp27-2025-13-16.png)

### Delete

- To **delete** an item line, click the corresponding icon in the actions column.

![](/img/upload/SNp28-2025-13-16.png)

- A confirmation modal will appear. Click **OK** to proceed.

![](/img/upload/SNp29-2025-13-16.png)

- A green message will confirm deletion and the item will be removed from the table.

![](/img/upload/SNp30-2025-13-16.png)

## Change ASN Status: "In Transit", "Receiving", and "Received"

### Change from "In Transit" to "Receiving"

- After creating an ASN and adding the **Item Lines**, you'll notice the default status is **In Transit**.

![](/img/upload/SNp31-2025-13-16.png)

- To change the status to **Receiving**, a receipt must be created in the [Receive Orders](./2025-05-23-ReceiveOrders.md) module. Once the receipt is created, the ASN status automatically changes to **Receiving**.

![](/img/upload/SNp32-2025-13-16.png)

- The **Difference (Expected vs Received Quantity)** and **Discrepancy** columns in the item line table will also appear, with default values.

![](/img/upload/SNp33-2025-13-16.png)

- To update these values, create PPLs in the Receive Orders module, and scan them in the Receive Orders Picking module. Once done, both columns should update to 0, indicating no discrepancies.

![](/img/upload/SNp34-2025-13-16.png)

- As each PPL is scanned in Receive Orders Picking, the **Received Quantity** column updates with the quantity entered into the warehouse.

![](/img/upload/SNp35-2025-13-16.png)

### Change from "Receiving" to "Received"

- Once scanning is complete and there are no discrepancies, click **VALIDATE ASN** in the ASN detail view to change the status to **Received**.

![](/img/upload/SNp36-2025-13-16.png)

- A modal will appear confirming that no discrepancies exist between the ASN and the receiving order. Click **Validate** to proceed.

![](/img/upload/SNp37-2025-13-16.png)

- The system will update the status to **Received**, notifying the client that the shipment was received without issues, completing the process.

![](/img/upload/SNp38-2025-13-16.png)
