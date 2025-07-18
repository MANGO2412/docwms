---
title: Container information
---

# Container information

This module is used to obtain basic information about the contents of a container. It retrieves data on the items inside the container (Number, Description, Quantity, Available, Location) by scanning its PPL.

---

## General Module Overview

![](/img/upload/ContainInfop1-2025-13-16.png)

| No  | Name          | Description                                                                                                                              |
| :-- | :------------ | :--------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Scanner       | This scanner element receives data from QR codes scanned by a physical laser scanner.                                                    |
| 2   | Data Table    | This table displays basic container information.                                                                                       |

---

## Context

The first thing added when using replenishment is the **container**, which is the **box** where one or more items are stored. A **container usually looks like this:**

![](/img/upload/ContainInfop2-2025-13-16.png)

This is the laser scanner commonly used in modules that require scanning QR codes.

![](/img/upload/ContainInfop3-2025-13-16.png)

---

## Get Container Information

* Click on **Scanner input** in the **general interface** and scan with a physical laser **scanner** connected to the computer. Scan a **PPL** belonging to an **existing container** in the system.

![](/img/upload/ContainInfop4-2025-13-16.png)

* This is how you obtain the data for the items within the container.