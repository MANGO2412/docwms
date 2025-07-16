---
sidebar_position: 1
title: Introduccion sobre Receipt
---

# Introduccion sobre Receipt

La sección **Receipt** es una parte fundamental del sistema WMS, ya que concentra todo el proceso de recepción de paquetes enviados por los clientes hacia el almacén. En esta sección se encuentran los módulos clave que permiten gestionar cada etapa del recibo, desde la notificación previa hasta la validación final de los artículos.

Los módulos que la componen son:
- **Shipping Notice**: permite generar y gestionar los ASN (Avisos de Embarque Avanzado), donde se detalla la información de los artículos que serán recibidos.

- **Receive Orders**: permite crear las órdenes de recibo, que representan los registros iniciales del proceso. En este módulo se generan los PPL (Packing List Labels) asociados a los paquetes.

- **Receive Orders Picking**: en este módulo se escanean los PPL generados previamente, se validan los paquetes recibidos y se verifica su estado dentro del sistema.
