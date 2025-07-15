import clsx from 'clsx';


import {Container,TiltedCard,BasicCard} from '../Cards.js'
import { translate } from '@docusaurus/Translate';



const InternalArticle=[
  {
    title:"Receipt",
    description:translate({
      message:"La sección Receipt es una parte fundamental del sistema WMS, ya que concentra todo el proceso de recepción de paquetes enviados por los clientes hacia el almacén. En esta sección se encuentran los módulos clave que permiten gestionar cada etapa del recibo, desde la notificación previa hasta la validación final de los artículos.",
      id:"InternalArticle.description.receipt"
    }),
    link:"./docs/category/receipt",
  },
  {
    title:"Orders Monitor",
    description:translate({
      message:"En este módulo se generan las órdenes de pedido, además se visualiza el flujo fulfillment que contiene cada una de las órdenes, así como un historial de movimientos realizados a cada evento de la orden.",
      id:"InternalArticle.description.OM"
    }),
    link:"./docs/internal/OrderMonitor"
  },
  {
    title:"Shipping",
    description:translate({
      message:"La sección de Shipping representa la última fase dentro del sistema WMS. En esta etapa se preparan los paquetes, agrupados en pallets, que provienen de las órdenes de pedido generadas en el módulo Order Monitor, con el objetivo de ser despachados y entregados a los clientes.",
      id:"InternalArticle.description.Shipping"
    }),
    link:"./docs/category/shipping"
  }
]


const ClientArticle=[
  {
    title:"Dashboard",
    description:translate({
      message:"Si deseas obtener una vista resumida y en tiempo real del estado de tus órdenes dentro del proceso de fulfillment, este dashboard es ideal para ti. Aquí se desglosan métricas que indican la cantidad de órdenes en cada etapa del flujo de fulfillment, acompañadas de gráficas que ofrecen una representación visual del progreso de procesamiento, entre otros datos relevantes.",
      id:"ClientArticle.description.Dashboard"
    }),
    link:"./docs/client/Dashboard"
  },
  {
    title:"Orders Monitor",
    description:translate({
      message:"El módulo Order Monitor es una sección clave dentro del sistema WMS, que permite visualizar, gestionar y supervisar el estado de las órdenes de pedido que deben ser atendidas en el almacén. Su principal función es ofrecer un control en tiempo real sobre cada fase del proceso logístico, desde la creación de la orden hasta su finalización.",
      id:"ClientArticle.description.OM"
    }),
    link:"./docs/client/OrderMonitors"
  },
  {
    title:"Shipping Notice",
    description:translate({
      message:"Este módulo te permite gestionar tus ASN (Advanced Shipping Notices) de manera eficiente. El portal del cliente proporciona esta herramienta para que puedas notificar con anticipación a los almacenes de G Global sobre los paquetes que serán recibidos.",
      id:"ClientArticle.description.SN"
    }),
    link:"./docs/client/ShippingNotices"
  }
]

const FeatureList = [
  {
    title: translate({
      message:'Visibilidad en tiempo real',
      id:"FeatureList.card1.title"
    }),
    src: './img/inventory-management.png',
    srcDark: './img/inventory-management-dark.png',
    description:translate({
      message:"G-WMS ofrece a sus clientes y operadores logísticos una vista clara y actualizada del inventario y el estado de las órdenes en cada etapa del proceso de fulfillment. Esto permite tomar decisiones informadas de forma rápida y precisa.",
      id:"FeatureList.card1,description"
    })
  },
   {
    title: translate({
      message:'Gestión Integral de Almacenes',
      id:"FeatureList.card2.title"
    }),
    src: './img/fulfillment.png',
    srcDark: './img/fulfillment-dark.png',
    description:translate({
      message:'Desde la recepción de mercancía hasta el envío final, G-WMS centraliza todos los flujos logísticos (recepción, put away, picking, packing y shipping), optimizando recursos, reduciendo errores operativos y automatizando procesos.',
      id:"FeatureList.card2,description"
    })
  },
   {
    title: translate({
      message:'Doble entorno(cliente y internal)',
      id:"FeatureList.card3.title"
    }),
    src: './img/enviroment.png',
    srcDark: './img/enviroment-dark.png',
    description:translate({
      message:"G-WMS se divide en dos entornos: uno para clientes y otro interno. El portal del cliente permite gestionar órdenes, monitorear inventario y consultar reportes. El entorno interno es usado por el equipo operativo para ejecutar los procesos logísticos.",
      id:"FeatureList.card3,description"
    })
  }
];


export default function HomepageFeatures() {

  return(
    <div>
      <Container header={translate({message:"Portal Internal",id:"Internal.header"})}>
        {InternalArticle.map((props,idx)=>(
           <BasicCard key={idx} title={props.title} description={props.description} link={props.link}/>
        ))}
      </Container>
      <Container header={translate({message:"Portal del cliente",id:"Client.header"})}>
        {ClientArticle.map((props,idx)=>(
           <BasicCard key={idx} title={props.title} description={props.description} link={props.link}/>
        ))}
      </Container>
     <Container>
      {FeatureList.map((props, idx) => (
             <TiltedCard  key={idx} srcDark={props.srcDark} src={props.src} title={props.title} description={props.description}/>
       ))}
      </Container>
    </div>
  )
}
