import React from 'react'
import styles from '../styles/Champ.scss'
const ChampContainer = ({data, setShowList, setChampSelected}) => {
    const handleClick =() =>{
        console.log("clicked",data);
        setShowList(false)
        setChampSelected(data)
    }
    return (
        <div className={styles.Main}>
            <div className={styles.Card} onClick={handleClick}>
            <img src={"http://ddragon.leagueoflegends.com/cdn/10.21.1/img/champion/" + data.image.full}/>
            <h4>
                    {data.id}
            </h4>
            <p>
            {data.title.charAt(0).toUpperCase()+data.title.slice(1).toLowerCase()}
            </p>                        
            </div>                                 
        </div>
    )
}

export default ChampContainer
