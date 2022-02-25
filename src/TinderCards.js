//Import Use Effect
import React, { useState } from 'react'
import TinderCard from "react-tinder-card";
import './TinderCards.css';


function TinderCards() {
// Data for the TinderCards (names, url, info, etc.)
  const [people] = useState([
    {
      name: 'Ryan Reynolds',
      url:'https://www.hollywoodreporter.com/wp-content/uploads/2021/05/GettyImages-1191359874-H-2021-1620057278.jpg?w=681&h=383&crop=1'
    },
    {
      name:'Blake Lively',
      url:'https://media1.popsugar-assets.com/files/thumbor/MaZZsTlfOLAziLQt42RlqeT6nE8/525x248:2248x1971/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2020/02/14/813/n/1922398/227d5ded5e46e787693d66.86238139_/i/Blake-Lively.jpg'
    },
    {
      name: 'Halsey',
      url: 'https://www.pinkvilla.com/imageresize/halsey_9.jpg?width=752&format=webp&t=pvorg'
    },
    {
      name: 'Hot Girl Meg',
      url: 'https://nypost.com/wp-content/uploads/sites/2/2020/10/megan-thee-stallion.jpg?quality=90&strip=all'
    },
    {
      name: 'Timothee Chalamet',
      url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2020%2F01%2F09%2F010920-timothee-chalamet-lead-2000.jpg'
    },
    {
      name: 'RDJ',
      url: 'https://www.cheatsheet.com/wp-content/uploads/2020/11/Marvel-star-Robert-Downey-Jr-1024x692.jpg'
    },
    {
      name:'JT',
      url: 'https://m.media-amazon.com/images/M/MV5BMTUwMjE1MjU2N15BMl5BanBnXkFtZTcwNjk0ODY1NA@@._V1_FMjpg_UY720_.jpg'
    },
    {
      name:'Megan Fox',
      url: 'https://i.insider.com/5ebb0b73cdfd4828f500b963?width=1000&format=jpeg&auto=webp'
    },
    {
      name:'Dua Lipa',
      url: '"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F07%2F08%2Fdua-lipa.jpg"'
    },
    {
      name:'Zac Efron',
      url: 'https://nypost.com/wp-content/uploads/sites/2/2021/12/Zac-Efron-UFC.jpg?quality=90&strip=all'
    },
    {
      name: 'Kirsten Bell',
      url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kristen-bell-hosts-a-lindt-chocolate-easter-luncheon-with-news-photo-1568667528.jpg?crop=1xw:0.66567xh;center,top&resize=980:*'
    },
    {
      name: 'Paul Rudd',
      url: 'https://media.cnn.com/api/v1/images/stellar/prod/211110001950-1b-paul-rudd-file-2019.jpg?q=x_3,y_6,h_1684,w_2993,c_crop/h_270,w_480'
    }
  ]);
  //Runs a condition
  //useEffect(() => {
    //condition code

    //runs once when component loads, and never again
    //const querySnapshot = getDocs(collection(db, 'people'));
    //querySnapshot.forEach((doc) => {
      //console.log(`${doc.name} => ${doc.data()}`);
    //}); 


  return (
// TinderCards Section 
    <div>

      <div className="tinderCards__cardContainer">
      {people.map(person => (
        <TinderCard
         className='swipe'
         key={person.name}
         preventSwipe={['up', 'down']}>

          <div 
          style={{ backgroundImage: `url(${person.url})` }} className="card">

            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
      </div>
    </div>
  )
}
//  )
//}
//Export so TinderCards are Components


export default TinderCards