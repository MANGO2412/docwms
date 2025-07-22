---
sidebar_position: 3
title: Order Monitors
---

# Order Monitors (Customer Portal)

The **Order Monitor module** is a key section within the WMS system, designed to visualize, manage, and monitor the status of purchase orders that must be fulfilled in the warehouse. Its main function is to provide real-time control over each stage of the logistics process, from order creation to completion.

This section provides detailed descriptions of the steps required to take full advantage of the options offered by this module in the customer portal.

## How to access the module from the customer portal?

Once you log into the customer portal, go to the left sidebar menu and click on the **Order Monitor** option.

![](/img/upload/OMCp1-2025-13-16.png)

Next, the main view of the module will appear, where you can see the generated orders organized in a table. This view includes filters to customize the displayed information according to your needs, as well as buttons to create new orders.

![](/img/upload/OMCp2-2025-13-16.png)

## How to generate an order in the customer portal?

The customer portal offers two ways to create orders: the first is through a form provided by the system, where required data is entered manually; the second is by uploading a **.csv** file using a downloadable template available in the portal, allowing for mass order creation.

![](/img/upload/OMCp2-2025-13-16.png)

### Through the portal

To create an order through the portal, click the **CREATE** button located at the top left.

![](/img/upload/OMCp3-2025-13-16.png)

A form will be displayed where you must enter the following information:

![](/img/upload/OMCp4-2025-13-16.png)

In the **first section of the form**, fill in the following fields:
- **Number**: Unique identifier of the order. It must not be repeated or previously registered.
- **Task ID**: Also works as an identifier. It can be left empty if not required.
- **Purchase Order**: Purchase order number. This field is mandatory.
- **Order Value**: Total cost of the order.
- **Order Note**: Additional description for the operations team. Optional.
- **Transportation Method**: Defines the order’s transportation process.

![](/img/upload/OMCp5-2025-13-16.png)

In the **second section of the form** (Shipping Address), complete the following fields:
- **Name**: Name of the responsible company or recipient.
- **Address 1**: Main shipping address including street, number, and other relevant details.
- **Address 2**: Optional field for address complements like floor, apartment, or reference.
- **Zip Code**: Postal code of the shipping address.
- **Country**: Country code or name.
- **Phone number**: Recipient’s contact phone number.
- **City**: Destination city name.
- **State**: State, province, or region.
- **Email**: Email of the recipient or contact person.

![](/img/upload/OMCp8-2025-13-16.png)

In the **third section of the form** (Billing Address), complete the following fields for billing purposes:

- **Name**: Name of the person responsible for billing or authorized contact.
- **Address 1**: Main billing address including street, number, and neighborhood.
- **Address 2**: Additional field for detailed billing address.
- **City**: Billing address city.
- **State**: Province or region.
- **Zip code**: Billing postal code.
- **Phone**: Accounting or administrative contact number.
- **Email**: Email for invoice delivery.
- **Country**: Billing country code.

![](/img/upload/OMCp6-2025-13-16.png)

To finish, click the **ADD** button in the **Order Lines** section.

![](/img/upload/OMCp7-2025-13-16.png)

Several fields will appear where you can register item details:
- **SKU**: Unique product code.
- **Package Quantity**: Number of units or packages to be added.
- **Sales Price**: Unit sale price of the product.

![](/img/upload/OMCp10-2025-13-16.png)

:::tip
- To remove an added item, click the delete icon (🗑️) next to the Sales Price field.
- To add more items, simply click **ADD** again.
:::

After validating the entered information, click **SAVE** to complete the process.

![](/img/upload/OMCp11-2025-13-16.png)

The system will display a green success message once the order is registered.

![](/img/upload/OMCp12-2025-13-16.png)

### Through a .csv file

To create orders in bulk, use the **.csv** upload method. First, click the **Download Layout** option in the orders table.

![](/img/upload/OMCp13-2025-13-16.png)

This will download a **.csv** file where you can fill in the order data.

![](/img/upload/OMCp14-2025-13-16.png)

When opened in Excel:
- **First column** lists required field names. Do not remove them.
- **Second column** indicates whether each field is **required** or **optional**. Use `"N/A"` if optional and not used.

![](/img/upload/OMCp15-2025-13-16.png)

Then, fill in the **.csv** file with your order data, similar to the form method:

![](/img/upload/OMCp16-2025-13-16.png)
![](/img/upload/OMCp17-2025-13-16.png)
![](/img/upload/OMCp18-2025-13-16.png)
![](/img/upload/OMCp19-2025-13-16.png)

:::note
If any column includes **optional default()**, you may leave the default value in parentheses.

**Example:**
- **Before**

![](/img/upload/OMCp20-2025-13-16.png)

- **After**

![](/img/upload/OMCp21-2025-13-16.png)

You may also replace defaults with system-accepted values:
- **Service Type**: Must match available service types.
- **3rd Party Billing**: Use `true` or `false`.
- **Business Model**: Default is `B2C`. Use `B2B` if selling to a business.
:::

After completing and saving the file, click **Import CSV** in the portal.

![](/img/upload/OMCp22-2025-13-16.png)
![](/img/upload/OMCp23-2025-13-16.png)

If everything is correct, the system will display a green success message.

![](/img/upload/OMCp24-2025-13-16.png)

Then refresh the page to see the new orders.

![](/img/upload/OMCp25-2025-13-16.png)


## Switching between Orders and Events: Using Tabs

This module includes a **tab view** functionality that allows users to visualize available information in an organized manner. In addition to displaying the **generated purchase orders**, you can also view the **fulfillment events** associated with each order.

By default, the module displays the **fulfillment events** tab. To switch and view purchase orders, simply click the corresponding tab, as shown in the following images:

<figure>
  <img src="/img/upload/OMCp26-2025-13-16.png" alt="Module start screen" />
  <figcaption>Image 1: View of the available tabs.</figcaption>
</figure>

<figure>
  <img src="/img/upload/OMCp27-2025-13-16.png" alt="Orders tab selected" />
  <figcaption>Image 2: Information displayed when selecting the "Orders" tab.</figcaption>
</figure>

<figure>
  <img src="/img/upload/OMCp28-2025-13-16.png" alt="Events tab selected" />
  <figcaption>Image 3: Information displayed when selecting the "Events" tab.</figcaption>
</figure>

## Applying Filters in Order Monitor

The **Order Monitor** module provides various filter options to help you search for purchase orders or fulfillment events that meet specific criteria within the system.

To apply filters, locate the filtering panel at the bottom of the table that displays either purchase orders or fulfillment events.

The available filters will vary depending on the type of information currently displayed (orders or events).

<figure>
  <img src="/img/upload/OMCp34-2025-13-16.png" alt="Filters for orders" />
  <figcaption>Image 4: Filtering options for purchase orders.</figcaption>
</figure>

<figure>
  <img src="/img/upload/OMCp35-2025-13-16.png" alt="Filters for events" />
  <figcaption>Image 5: Filtering options for fulfillment events.</figcaption>
</figure>

### Filtering Options for Purchase Orders

- **Preset Filters**: Dropdown menu to filter pending orders by time range: 24, 48, or 72 hours.

![](/img/upload/OMCp29-2025-13-16.png)

- **Order Number**: Search for orders by their unique identifier.

![](/img/upload/OMCp30-2025-13-16.png)

- **Status**: Dropdown to filter orders by their current status.

![](/img/upload/OMCp31-2025-13-16.png)

- **Campaign**: Filter orders by campaign name.

![](/img/upload/OMCp32-2025-13-16.png)

- **Received At**: Date range filter for order reception.

![](/img/upload/OMCp33-2025-13-16.png)

### Filtering Options for Fulfillment Events

- **Preset Filters**: Dropdown menu to filter pending fulfillment events by time range: 24, 48, or 72 hours.

![](/img/upload/OMCp29-2025-13-16.png)

- **Order Number**: Search events by the related order number.

![](/img/upload/OMCp36-2025-13-16.png)

- **Status**: Dropdown to filter events by their current status.

![](/img/upload/OMCp37-2025-13-16.png)

- **Carrier**: Filter fulfillment events by the assigned transportation carrier.

![](/img/upload/OMCp40-2025-13-16.png)

- **Received At**: Filter events by reception date range.

![](/img/upload/OMCp33-2025-13-16.png)

- **Shipped At**: Filter events by shipping date range.

![](/img/upload/OMCp39-2025-13-16.png)

:::info
To clear all applied filters, click the **Clean Filters** button. This will remove all filters and restore the full dataset.

![](/img/upload/OMCp41-2025-13-16.png)
:::

## How to View Order or Event Details

By clicking on a row within the table (either an order or an event), the system will automatically redirect you to a detailed view showing relevant information about the order along with its associated fulfillment events.

![](/img/upload/OMCp42-2025-13-16.png)

## Order Actions

In the order detail view, several essential management options are available. These are located in the upper right corner and grouped in a dropdown menu accessible by clicking the **three dots** icon (⋮), as shown below:

![](/img/upload/OMCp43-2025-13-16.png)

The following options are available:

### Edit Shipping Address

To edit the shipping address for an order:

- Click the **three dots** icon and select **Edit shipping address**.

![](/img/upload/OMCp45-2025-13-16.png)

- A popup will appear where you can update the shipping address details.

![](/img/upload/OMCp44-2025-13-16.png)

- Click **ACCEPT** to save changes or **CANCEL** to exit without saving.

### Edit Billing Address

To modify the billing address:

- Click the **three dots** icon and select **Edit billing address**.

![](/img/upload/OMCp45-2025-13-16.png)

- A popup form will be displayed to update billing details.

![](/img/upload/OMCp46-2025-13-16.png)

- Click **ACCEPT** to save changes or **CANCEL** to exit without saving.

### Cancel Order

To cancel an order:

- Click the **three dots** icon and select **Cancel order**.

![](/img/upload/OMCp45-2025-13-16.png)

- A popup will ask you to enter a short reason for the cancellation.

![](/img/upload/OMCp47-2025-13-16.png)

- Click **CONFIRM** to proceed with the cancellation.

![](/img/upload/OMCp48-2025-13-16.png)

## Event Actions

Within the **Fulfillment Events** section of the order detail, several event-specific management options are available. These are found at the bottom right of each event and are accessible by clicking the **three dots** icon (⋮), as shown below:

![](/img/upload/OMCp49-2025-13-16.png)

Available actions include:

- **Mark as Priority**: Flags the event as a high priority to ensure it is processed as soon as possible.

- **Set Start Date**: Allows you to set the date when the event should begin processing. A form will appear when clicked.

- **Add Items**: Lets you add more items to the event. You will need to enter the item’s SKU and quantity in the form.

- **View Event Details**: Displays detailed information about the event.

- **View Event History**: Shows all recorded actions performed on the event, including timestamps and responsible users.

- **Edit Shipping Options**: Allows changes to the shipping service, method of transport, and third-party billing assignment if applicable.
