import clsx from 'clsx';


import {Container,TiltedCard} from '../Cards.js'

const FeatureList = [
  {
    title: 'Visibilidad en tiempo real',
    src: './img/inventory-management.png',
    srcDark: './img/inventory-management-dark.png',
    description:'G-WMS ofrece a sus clientes y operadores logísticos una vista clara y actualizada del inventario y el estado de las órdenes en cada etapa del proceso de fulfillment. Esto permite tomar decisiones informadas de forma rápida y precisa.'
  },
   {
    title: 'Gestión Integral de Almacenes',
    src: './img/fulfillment.png',
    srcDark: './img/fulfillment-dark.png',
    description:'Desde la recepción de mercancía hasta el envío final, G-WMS centraliza todos los flujos logísticos (recepción, put away, picking, packing y shipping), optimizando recursos, reduciendo errores operativos y automatizando procesos.'
  },
   {
    title: 'Doble entorno(cliente y internal)',
    src: './img/enviroment.png',
    srcDark: './img/enviroment-dark.png',
    description:'G-WMS se divide en dos entornos: uno para clientes y otro interno. El portal del cliente permite gestionar órdenes, monitorear inventario y consultar reportes. El entorno interno es usado por el equipo operativo para ejecutar los procesos logísticos.'
  }
];


export default function HomepageFeatures() {

  return(
    <Container>
      {FeatureList.map((props, idx) => (
             <TiltedCard  key={idx} srcDark={props.srcDark} src={props.src} title={props.title} description={props.description}/>
       ))}
    </Container>
  )
}
