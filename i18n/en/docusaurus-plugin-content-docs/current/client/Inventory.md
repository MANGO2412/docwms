---
sidebar_position: 4
title: Inventory
---

The **Inventory** module in the G-WMS Client Portal allows you to view in real time the distribution and availability of stock for each item stored in the various warehouses managed by G Global.

This module serves as a visual monitoring tool that helps you keep control of your inventory, providing detailed information such as SKU, description, country of origin, available quantity, and more.

It also features powerful filtering and search options, enabling you to quickly locate products or segment information based on your specific needs. Whether you're checking availability, exporting data, or generating reports, this module offers multiple functionalities to explore throughout this section.

Below is an illustrative image to help you get familiar with the interface:

![](/img/upload/Cinventoryp1-2025-13-16.png)

## Understanding the Table Information

Upon accessing this section, you'll see a table showing a general overview of the inventory for all your items.

![](/img/upload/Cinventoryp7-2025-13-16.png)

The first four columns provide essential data for each item:

- **Type**: Indicates whether the item is a single product or a kit (a set of multiple components).
- **SKU**: The product’s unique internal identifier.
- **Description**: A short description for quick identification.
- **Country of Origin**: The product's country of origin (shown using codes).
- **Available Kits**: Number of available kits (only shown for kit-type items).

![](/img/upload/Cinventoryp8-2025-13-16.png)

The next set of columns breaks down the total quantity of each item according to its status in the system:

- **Available Quantity**: The number of units ready to be assigned to an order.
- **Existing Quantity**: The total physical inventory currently registered.
- **Committed Quantity**: The amount reserved for active sales orders.
- **On Put Away**: Items received in warehouses but not yet assigned to a storage location.

![](/img/upload/Cinventoryp10-2025-13-16.png)

- **In Process Quantity**: Items currently in movement.
- **Pickable Quantity**: Units ready and available to be picked.
- **Receiving Quantity**: Items received but pending verification or location assignment.
- **Over Storage Quantity**: Items temporarily stored in non-standard locations.

![](/img/upload/Cinventoryp11-2025-13-16.png)

- **Quarantine Quantity**: Items set aside for inspection or quality control.
- **Delayed Quantity**: Items that have exceeded expected arrival or processing time.
- **In Transit Quantity**: Items shipped or on the way but not yet received in the warehouse.

![](/img/upload/Cinventoryp12-2025-13-16.png)

:::info

- If a column shows an arrow icon next to the quantity, it means that amount is tied to one or more sales orders.

![](/img/upload/Cinventoryp13-2025-13-16.png)

- Clicking the arrow displays a list of related order references.

![](/img/upload/Cinventoryp14-2025-13-16.png)

- Clicking an order from the list will take you to the **Order Monitor** module with complete order details.

![](/img/upload/Cinventoryp15-2025-13-16.png)

:::

---

## How to Apply Filters

At the top of the Inventory module view, you'll find several fields designed to apply **quick filters** to refine the information shown in the table below.

### Available Filter Types

- **Type**:
  - **Single**: Items made of a single component.
  - **Kit**: Items made of multiple components.

- **SKU**: Enter a SKU to search for a specific item.

- **Description**: Enter full or partial product names to search by description.

These filters are especially useful for large catalogs or when looking for specific information quickly.

![](/img/upload/Cinventoryp2-2025-13-16.png)

Example using filters:

![](/img/upload/Cinventoryp3-2025-13-16.png)

:::tip
Using more than one filter will create a **nested filter**, combining all selected conditions.
:::

---

## FILTERS Option

If the quick filters are not sufficient, the system offers an advanced filter panel labeled **FILTERS**, located at the top of the results table.

This feature lets you:

- Apply additional filters not available in the quick filter panel.
- See a **numeric indicator** showing how many filters are active.

![](/img/upload/Cinventoryp4-2025-13-16.png)

Clicking the FILTERS button opens an advanced filter bar. Existing filters are shown in an editable list format.

![](/img/upload/Cinventoryp5-2025-13-16.png)

### Filter Fields

- **Columns**: Select the column you want to filter.
- **Operators**: Define the filter operation:
  - `Contains`
  - `Equals`
  - `Starts with`
  - `Ends with`
  - `Is empty`
  - `Is not empty`

- **Value**: Enter the value for filtering. This is **disabled** if the operator is `Is empty` or `Is not empty`.

To add a new filter, click **ADD FILTER**.

![](/img/upload/Cinventoryp6-2025-13-16.png)

To remove a filter, click the **✕** icon next to it.

---

## View Inventory Details of an Item

To view detailed inventory information for a specific item, click on its row in the main table.

The system will show a detailed view using cards and tables displaying availability, distribution, and related data.

![](/img/upload/Cinventoryp16-2025-13-16.png)

### General Item Information

At the top, you’ll see the **SKU**, **Description**, and **Type** of the item.

![](/img/upload/Cinventoryp17-2025-13-16.png)

### Inventory Summary Cards

Below that, summary cards show how the inventory is distributed. Hovering over the **(?)** icon will reveal additional explanations.

![](/img/upload/Cinventoryp18-2025-13-16.png)

### Inventory by Country of Origin (COO)

This section organizes total inventory by COO, with a dropdown to switch countries. Metrics update accordingly.

![](/img/upload/Cinventoryp19-2025-13-16.png)

### Inventory by Warehouse

Below the COO section, the **Warehouses** area shows how inventory is split by warehouse, including container quantities.

![](/img/upload/Cinventoryp20-2025-13-16.png)

### Inventory Movement History

This section logs inventory movements including:

- **Location** of the action
- **User responsible**
- **Date**
- **Color indicators**: Red = Outbound / Green = Inbound

![](/img/upload/Cinventoryp21-2025-13-16.png)

### Inventory by Lot

The **Lot** section shows inventory distribution by lot number, including:

- Lot number
- Available quantity
- Expiry date (if applicable)
- Country of origin
- Assigned PPL (if any)

![](/img/upload/Cinventoryp22-2025-13-16.png)
