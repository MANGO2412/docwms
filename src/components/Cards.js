import {useColorMode} from '@docusaurus/theme-common'
import Translate, {translate} from '@docusaurus/Translate';


export function TiltedCard({srcDark,src,title,description}){
    const {colorMode}=useColorMode()

    return(
    <div className="card-column">
      <div className={colorMode=="light"?"card-details":"card-details card-details_dark"}>
        <div className={colorMode=="light"?"card-icons":"card-icons card-icons_dark"}>
            <img className="light-icon" src={colorMode=="light"?src:srcDark} alt="icon"/>
        </div>
        <h3>{title}</h3>
        <p>{description} </p>
      </div>
    </div>
    )
}

export function BasicCard({title,description,link}){
  const {colorMode}=useColorMode()
  const commonGeneralClass="basic-card"

   return(
   <div className={colorMode=="light"?commonGeneralClass+ " basic-card-light":commonGeneralClass+ " basic-card-dark"}>
      <div className='card-content'>
        <span className='card-title'>{title}</span>
        <p>{description}</p>
      </div>
      <div class="card-link">
          <a href={link} ><span><Translate id='simpleCard.btn'>Aprende  Más</Translate> </span></a>
      </div>
   </div>
   )
}

export function Container({header=null,children}){
    const {colorMode}=useColorMode()
    return(
      <div className="creative-cards style-one">
        {header !=null && (
          <div className={colorMode=="light"?'creative-cards__header':'creative-cards__header creative-cards__header_dark'}>
            <h3>{header}</h3>
          </div>
        )}
        <div className="container">
            <div className="row">{children}</div>
        </div>
      </div>
    )
}
