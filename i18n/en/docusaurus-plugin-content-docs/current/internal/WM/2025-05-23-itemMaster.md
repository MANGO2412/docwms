---
title: Item Master
---

# Item Master

This module allows you to manage client items in the WMS, detailing the necessary actions to register a product, as well as to update or delete its information in the system. It's considered one of the most important modules, as the information generated here is relevant for other modules within the WMS.

***

## Create an Item Master

- **Click** the **CREATE ITEM** button:

![](/img/upload/ItemMasterp1-2025-13-16.png)

- A form will appear requesting the following data to carry out the registration process.

![](/img/upload/ItemMasterp2-2025-13-16.png)

- The required fields to complete the registration are as follows:

![](/img/upload/ItemMasterp3-2025-13-16.png)


| Field No. | Field Name | Description |
| :--- | :--- | :--- |
| 1 | SKU | Product reference number. |
| 2 | UPC Code (Universal Product Codes) | These are the barcodes used for retail and e-commerce. |
| 3 | HTS Code | 10-digit code to identify the import tariff rate in the United States. |
| 4 | Cost | The manufacturing cost of the product. |
| 5 | Sales Price | The price at which the product is sold to customers. |
| 6 | Weight in Grams | The weight of the product in grams. |
| 7 | Country of Manufacture | The two-digit code for the country of manufacture. |

- The optional fields can be left empty or used to provide more detailed product information. They are as follows:

![](/img/upload/ItemMasterp4-2025-13-16.png)

| Field No. | Field Name | Description |
| :--- | :--- | :--- |
| 1 | Type | Defines the product type, for example, footwear or textile. |
| 2 | Description | A brief description of the product. |
| 3 | Description A24 | A brief description of the product in Spanish. |
| 4 | Supplier | The name of the supplier. |
| 5 | Country Process | The location where the product is processed. If the order is processed in Tijuana, this field should be MEX. If the order is processed in San Diego, this field should be USA. |
| 6 | UM Tariff | Unit of Measure for tariffs. |
| 7 | Duty HTS | Duty Participation percentage, 2 integers and 2 decimals, e.g., 33.33. |
| 8 | Alternate Bar Code | An alternative barcode for a secondary means of data identification. |
| 9 | PGA | Essential condition. |
| 10 | Spanish description | Product description in Spanish. |
| 11 | SKU A24 | Internal product SKU code. |
| 12 | Harmonized Code | Mexican tariff code of 8 to 10 digits. |
| 13 | Cost Currency | Indicates the currency type (USD, MXN) in which the product cost is expressed. |
| 14 | UM COMMERCIAL | Commercial Unit of Measure. |
| 15 | DUTY COUNTRY ORIGIN | Country of origin percentage, 2 integers and 2 decimals, e.g., 22.22. |

- To provide more product characteristics like **color**, **size**, or **picking strategy**, you can fill in some of these fields as shown in the following image.

![](/img/upload/ItemMasterp5-2025-13-16.png)

- The registration form includes some optional settings in the form of checkboxes. These options are disabled by default, but if you want to activate any functionality related to the product, simply check the corresponding box. Below are the available options that can be configured for each product:

    - **Self Expeditable**: Allows the item to be entered directly and pass the initial validation without needing to scan the box first.
    - **Filling**: Prevents the item from being picked or automatically scanned in SLAM if it does not have a UPC code. In these cases, the code must be entered manually.
    - **Lot Validation**: Activates lot number validation within the SLAM application.
    - **Show Lot in SLAM**: Enables the display of the item's lot number during the SLAM process.
    - **Activable**: Adds an additional validation in SLAM. When this option is activated, the form will request a verification code. This validation is executed when the item's UPC is scanned.

![](/img/upload/ItemMasterp6-2025-13-16.png)

- Verify that the data is correct and click the **SAVE** button to save the product.

![](/img/upload/ItemMasterp7-2025-13-16.png)

- If everything is correct, a **green message** will appear indicating that the registration was successful.

![](/img/upload/ItemMasterp8-2025-13-16.png)

***

## Create Kits

- Click the **Bundle kit** option.

![](/img/upload/ItemMasterp9-2025-13-16.png)

- A form will open where you must select the parent SKU, which will represent the composite item or main kit. Then, select the child SKUs, which are the individual products that will make up the kit.

![](/img/upload/ItemMasterp10-2025-13-16.png)

- After selecting the child SKUs, additional fields will be enabled for you to indicate the required quantity of each to form the parent SKU.

![](/img/upload/ItemMasterp11-2025-13-16.png)

- Once the information is complete, click the **SAVE** option to save the changes.

![](/img/upload/ItemMasterp12-2025-13-16.png)

- The system will then display a green message confirming that the process was completed successfully.

![](/img/upload/ItemMasterp13-2025-13-16.png)

- To verify that the kit was created correctly, go to the **Stock** module, filter by the parent SKU, and by double-clicking on the record in the table, the system will display the child SKUs that are part of the composite item.

![](/img/upload/ItemMasterp14-2025-13-16.png)

![](/img/upload/ItemMasterp15-2025-13-16.png)

***

## Update an Item Master

- Click the pencil button to edit the product:

![](/img/upload/ItemMasterp16-2025-13-16.png)

- A form will be displayed with the data fields you wish to modify.

![](/img/upload/ItemMasterp17-2025-13-16.png)

![](/img/upload/ItemMasterp18-2025-13-16.png)

- Click the **SAVE** button to save the changes:

![](/img/upload/ItemMasterp19-2025-13-16.png)

- The table will be updated with a green message indicating the item that was updated, as shown in the following image.

![](/img/upload/ItemMasterp20-2025-13-16.png)

***

## Delete an Item Master

- Click the 🗑 button to delete the product:

![](/img/upload/ItemMasterp21-2025-13-16.png)

- A confirmation message will appear before deleting. To delete, click **OK**.

![](/img/upload/ItemMasterp22-2025-13-16.png)

- The table will update automatically, deleting the item and displaying a green message indicating that the operation was successful, as shown in the following image:

![](/img/upload/ItemMasterp23-2025-13-16.png)