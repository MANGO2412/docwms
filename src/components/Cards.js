import {useColorMode} from '@docusaurus/theme-common'

export function TiltedCard({srcDark,src,title,description}){
    const {colorMode}=useColorMode()

    return(
    <div className="card-column">
      <div className={colorMode=="light"?"card-details":"card-details card-details_dark"}>
        <div className={colorMode=="light"?"card-icons":"card-icons card-icons_dark"}>
            <img className="light-icon" src={colorMode=="light"?src:srcDark} alt="icon"/>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
    )
}

export function Container({children}){
    return(
      <div className="creative-cards style-one">
        <div className="container">
            <div className="row">{children}</div>
        </div>
      </div>
    )
}