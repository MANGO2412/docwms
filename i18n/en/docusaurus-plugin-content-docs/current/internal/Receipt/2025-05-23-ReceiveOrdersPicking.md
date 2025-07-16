---
sidebar_position: 4
title: Receive Orders Picking
---

# Receive Orders Picking

In this module, you scan the **PPLs (Packing List Labels)** previously generated in the [Receive Orders](./2025-05-23-ReceiveOrders.md#print-ppl-labels) module. Its main purpose is to validate the item information inside received packages, ensuring it matches what was recorded, and to facilitate accurate receiving control within the WMS system.

## Scan the PPLs

- After generating and printing the PPLs from the [Receive Orders](./2025-05-23-ReceiveOrders.md#print-ppl-labels) module, as shown in the image below, make sure you have all the documents ready for scanning.

![](/img/upload/receiveOrdersPickingp1-205-13-16.png)

- Use the scanner provided to you as a work tool and scan the QR code printed on each PPL. In this example, the package **PPL 1747166020003** associated with receipt **R-00000246** will be scanned.

![](/img/upload/receiveOrdersPickingp2-205-13-16.png)

- Next, the system will validate the existence of the PPL in the database. If the information is correct, the associated receipt details will be displayed, along with a form requesting the following data to continue the process.

![](/img/upload/receiveOrdersPickingp3-205-13-16.png)

![](/img/upload/receiveOrdersPickingp4-205-13-16.png)

- Before completing the process, you must select the SKU to indicate what is contained in the package. Click the **ADD** button located at the bottom of the Item Master Form.

![](/img/upload/receiveOrdersPickingp5-205-13-16.png)

- Several fields will then be displayed, which must be filled in with information related to the SKU.

![](/img/upload/receiveOrdersPickingp6-205-13-16.png)

- Finally, click the **SAVE** button to save the package information.

![](/img/upload/receiveOrdersPickingp7-205-13-16.png)

- Afterward, a QR code will be generated including the **Tracking Number** and other relevant package data. This code will be used to identify the package inside the warehouse. Print the label and attach it directly to the scanned package.

![](/img/upload/receiveOrdersPickingp8-205-13-16.png)

- To validate that the changes were successfully saved, go to the [Receive Orders](./2025-05-23-ReceiveOrders.md) module and select the corresponding receipt. Then, review the PPL section and make sure the scanned PPL contains the correct registered information, as shown below.

![](/img/upload/receiveOrdersPickingp9-205-13-16.png)

## Reprint QR Labels for Each Tracking Number

- Go to the [Receive Orders](./2025-05-23-ReceiveOrders.md) module from the system’s main menu.

![](/img/upload/receiveOrdersPickingp10-205-13-16.png)

- Double-click on the receipt that contains the previously scanned PPLs to display its details.

![](/img/upload/receiveOrdersPickingp11-205-13-16.png)

- In the receipt details, locate the table listing the scanned PPLs and look for the **Actions** column.

![](/img/upload/receiveOrdersPickingp12-205-13-16.png)

- Click on the **"Print Labels"** option of the PPL you want to reprint. This will open a browser pop-up window allowing you to send the QR label of the package to the printer.

![](/img/upload/receiveOrdersPickingp13-205-13-16.png)
