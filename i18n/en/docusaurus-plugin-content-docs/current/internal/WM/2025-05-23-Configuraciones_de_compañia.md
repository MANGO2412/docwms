---
title: Company Settings
---

# Company Settings

This section outlines the configuration settings available for clients registered in the WMS. These settings allow you to define system behavior for fulfillment workflows (including picking and packing operations), as well as enable or disable specific validations for inventory movements or picker processes, among other key adjustments.



<details>
  <summary>Profile Configuration</summary>
</details>

<details>
  <summary>Theme Configuration</summary>
</details>

<details>
  <summary>Inventory Configuration</summary>

  In this section, you can set key configurations for inventory behavior, specifically related to:
  - **Multiple SKUs per location**
  - **Country of Origin (COO) change rules**
  - **Replenishment priorities**

 🔍 **How to access?**
1. Log in to the WMS web portal
2. Ensure you have access to the **Companies** module
3. Once in the module, select a customer by double-clicking their record in the table
4. Click the Inventory tab to display available options

  ![](/img/upload/Clientsp2-2025-13-16.png)

Available configurations:

🔹 **Enable Location with Multiple SKU**
Allows a location to contain multiple distinct SKUs.
Useful for multi-SKU locations or consolidations (enable if needed).

🔹 **Multiple lots in containers**
Allows storing more than one lot number per container. Helpful when working with products arriving in different lots that need management from the same location.

🔸 **COO Location Change Rule**

Defines system behavior when updating a location's Country of Origin:
- **Always update COO**: Always updates the location's COO, regardless of any existing value
- **Only update if location has no COO**: Only assigns a COO if the location doesn't have one already

🔸 **Replenishment COO Prioritization**

Sets priority order for inventory replenishment based on Country of Origin:
- **Configuration: Yes / No**
    Enable this option to activate prioritization

    ![](/img/upload/Clientsp3-2025-13-16.png)

- **Select a country**
    Use search to add countries by name or code (e.g. China (CN), Thailand (TH))

    ![](/img/upload/Clientsp4-2025-13-16.png)

    :::warning
    Selecting **"Any Country"** tells the system that when inventory isn't available in countries defined in the **Priority Order** list, it can take products from any other available country in the warehouse. This also applies if packages are received from a country not included in the list.
    :::

- **Priority Order**
    Arrange countries according to desired stock replenishment priority. The system will try the highest priority country first.

    ![](/img/upload/Clientsp5-2025-13-16.png)
  :::tip
   You can reorder the list by simply dragging and dropping elements, depending on customer needs.
  :::

- **One COO at a time at Pick Locations**
    When enabled, each picking location can only contain products from one COO at a time, preventing non-compliant combinations that might affect traceability.

    ![](/img/upload/Clientsp6-2025-13-16.png)
</details>

<details>
  <summary>Picker Configuration</summary>

  This section allows customization of the **Picker App** mobile application's visibility and behavior for specific customers. You can define:
  - Information displayed to pickers
  - Tote types available for assignment
  - Validations to apply
  - AQL (Acceptable Quality Limit) sampling percentage

  
<h2>🔍 How to access?</h2> 
1. Log in to the WMS web portal
2. Ensure you have access to the **Companies** module
3. Select a customer by double-clicking their record in the table
4. Click the **Picker** tab to display available options

  ![](/img/upload/Clientsp7-2025-13-16.png)

<h2>🔸Show in Picker APP</h2>

Defines what information is visible to operators in the mobile picker app. You can enable/disable these elements per customer needs:

- **SKU**: Displays item identification code
- **UPC**: Shows universal product code
- **Alternative barcode**: Shows additional barcode if applicable
- **Description**: Shows item description
- **Image**: Displays product image
- **Country of Origin**: Shows product's origin country
- **Lot number**: Displays lot number (useful for traceability)

![](/img/upload/Clientsp8-2025-13-16.png)

<h2>🔸Totes</h2>

Select the types of totes (containers) pickers can use during operations:

- **Normal**: Regular totes available for picking
- **Preconfigured**: Totes with predefined configurations

![](/img/upload/Clientsp9-2025-13-16.png)

<h2>🔸Configurations</h2> 

Defines additional rules to control app behavior:

- **By UPC**: Enables UPC code validation/search
- **Show Locations**: Displays available warehouse locations
- **By COO**: Allows assigning picking locations based on product COO, following priority order set in **Inventory Configuration**
- **Lot Verification**: Requires lot number verification during picking

![](/img/upload/Clientsp10-2025-13-16.png)

🔸 **AQL Sampling**

This slider configures the percentage of items to be validated via AQL (Acceptable Quality Limit) sampling.

![](/img/upload/Clientsp11-2025-13-16.png)

:::note
For example, setting 50% means the system will require validation for half of items scanned by the picker.
:::
</details>