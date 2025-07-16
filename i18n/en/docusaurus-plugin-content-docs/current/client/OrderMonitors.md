---
sidebar_position: 3
title: Order Monitors
---

# Order Monitors (Client Portal)

The **Order Monitor module** is a key section within the WMS system that allows you to view, manage, and monitor the status of purchase orders that need to be fulfilled in the warehouse. Its main function is to provide real-time control over every stage of the logistics process, from order creation to completion.

This section provides a detailed guide to help you take full advantage of the features offered by this module within the client portal.

## How to access the module from the client portal?

Once you log in to the client portal, go to the left-hand side menu and click on the **Order Monitor** option.

![](/img/upload/OMCp1-2025-13-16.png)

The main view of the module will be displayed, showing the generated orders organized in a table. This view includes filters to customize the displayed information based on your needs, as well as buttons to create new orders.

![](/img/upload/OMCp2-2025-13-16.png)

## How to generate an order from the client portal?

The client portal offers two ways to create orders:  
1. Using a built-in form where data is entered manually.  
2. Uploading a .csv file using a downloadable template that speeds up bulk order creation.

![](/img/upload/OMCp2-2025-13-16.png)

### Via the portal form

To create an order through the portal, click the **CREATE** button located at the top left.

![](/img/upload/OMCp3-2025-13-16.png)

A form will be displayed where you must enter the following information:

![](/img/upload/OMCp4-2025-13-16.png)

In the **first section of the form**, complete the following fields:
- **Number**: Unique identifier of the order. Must not be duplicated or previously registered.
- **Task ID**: Another optional identifier. Leave blank if not needed.
- **Purchase Order**: Purchase order number. This field is required.
- **Order Value**: Total cost of the order.
- **Order Note**: Optional note useful for the operations team.
- **Transportation Method**: Defines the transportation method.

![](/img/upload/OMCp5-2025-13-16.png)

In the **second section of the form** (Shipping Address), provide the following shipping details:
- **Name**: Company name or recipient's business name.
- **Address 1**: Main shipping address (street, number, etc.).
- **Address 2**: Optional field for additional address details.
- **Zip Code**: Postal code for the shipping address.
- **Country**: Country of destination.
- **Phone number**: Recipient’s phone number.
- **City**: City for the delivery.
- **State**: State, province, or region of the city.
- **Email**: Contact email for the recipient.

![](/img/upload/OMCp8-2025-13-16.png)

In the **third section of the form** (Billing Address), complete the billing details:
- **Name**: Billing contact or responsible party.
- **Address 1**: Main billing address.
- **Address 2**: Additional billing info (floor, suite, etc.).
- **City**: Billing city.
- **State**: Billing state or province.
- **Zip Code**: Billing postal code.
- **Phone**: Billing contact phone number.
- **Email**: Billing contact email.
- **Country**: Billing country.

![](/img/upload/OMCp6-2025-13-16.png)

To add order lines, click the **ADD** button within the **Order Lines** section.

![](/img/upload/OMCp7-2025-13-16.png)

Several fields will appear to enter the product information:
- **SKU**: Unique product code.
- **Package Quantity**: Quantity of units/packages to include.
- **Sales Price**: Unit sales price of the product.

![](/img/upload/OMCp10-2025-13-16.png)

:::tip
- To remove a product, click the delete icon (🗑️) next to the Sales Price field.  
- To add more products, simply click the ADD button again.
:::

After verifying the entered information, click the **SAVE** button to proceed.

![](/img/upload/OMCp11-2025-13-16.png)

The system will show a green confirmation message if the registration is successful.

![](/img/upload/OMCp12-2025-13-16.png)

### Via .csv upload

To generate bulk orders, you can upload a **.csv** file. First, click **Download Layout** from the order table.

![](/img/upload/OMCp13-2025-13-16.png)

A **.csv** template will be downloaded for you to fill out.

![](/img/upload/OMCp14-2025-13-16.png)

When opening the file in Excel:
- **First column** lists the field names; **do not delete** them, as they are recognized by the system.
- **Second column** indicates whether the field is **required** or **optional**. Use "N/A" if optional.

![](/img/upload/OMCp15-2025-13-16.png)

Fill in the .csv file with the order data. This step mirrors the portal form process, as shown below:

![](/img/upload/OMCp16-2025-13-16.png)

![](/img/upload/OMCp17-2025-13-16.png)

![](/img/upload/OMCp18-2025-13-16.png)

![](/img/upload/OMCp19-2025-13-16.png)

:::note
If any column contains the value **optional default()**, you may leave the default value shown. Example:

- **Before:**

![](/img/upload/OMCp20-2025-13-16.png)

- **After:**

![](/img/upload/OMCp21-2025-13-16.png)

You may also replace default values with system-recognized alternatives:
- **Service Type**: Must match a valid shipping service.
- **3rd Party Billing**: Use `true` if invoiced by a third party, `false` otherwise.
- **Business Model**: Defaults to B2C, change to B2B for business clients.
:::

After editing the file, save it and return to the portal. Click **Import CSV** to upload it.

![](/img/upload/OMCp22-2025-13-16.png)

![](/img/upload/OMCp23-2025-13-16.png)

If everything is correct, a green confirmation message will appear.

![](/img/upload/OMCp24-2025-13-16.png)

Then refresh the page to see the newly registered orders in the table.

![](/img/upload/OMCp25-2025-13-16.png)

## Applying Filters
*Coming soon in the next section...*
