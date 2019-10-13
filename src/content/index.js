import img1 from "./images/spidey.jpg"
import img2 from "./images/lionking.jpg"
import img3 from "./images/onceupon.jpg"
import img4 from "./images/kabirsingh.jpg"
import img5 from "./images/article15.jpg"
import img6 from "./images/hobbsnshaw.jpg"
import pos1 from "./images/posters/spiderman.jpg"
import pos2 from "./images/posters/lionking.jpg"
import pos3 from "./images/posters/onceupon.jpg"
import pos4 from "./images/posters/kabirsingh.jpg"
import pos5 from "./images/posters/article15.jpg"
import pos6 from "./images/posters/hobbsnshaw.jpg"
const content= {
    movie : [
        {   id:"bmmv1",
            name : 'Spiderman : Far From Home',
            language : 'English',
            genre :'Action',
            certificate : 'U/A',
            bg:img1,
            description :"Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
            rating:4.5,
            poster:pos1,

            trailer:"https://www.youtube.com/embed/Nt9L1jCKGnE"
        },
        {   id:"bmmv2",
            name : 'The Lion King',
            language : 'English',
            genre :'Adventure',
            certificate : 'U',
            bg:img2,
            description:"After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
            rating:4,
            poster:pos2,
            trailer:"https://www.youtube.com/embed/7TavVZMewpY"
        },
        {   id:"bmmv3",
            name : 'Once Upon a Time in Hollywood',
            language : 'English',
            genre :'Comedy/Drama',
            certificate : 'A',
            bg:img3,
            description:"A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
            rating:4.5,
            poster:pos3,
            trailer:"https://www.youtube.com/embed/ELeMaP8EPAA"
        },
        {   id:"bmmv4",
            name : 'Kabir Singh',
            language : 'Hindi',
            genre :'Drama',
            certificate : 'A',
            bg:img4,
            description:"Kabir Singh is a remake of a Telugu movie Arjun Reddy (2017), where a short-tempered house surgeon gets used to drugs and drinks when his girlfriend is forced to marry another person.",
            rating:3.5,
            poster:pos4,
            trailer:"https://www.youtube.com/embed/RiANSSgCuJk"
        },
        {   id:"bmmv5",
            name : 'Article 15',
            language : 'Hindi',
            genre :'Drama',
            certificate : 'U/A',
            bg:img5,
            description:"Set against the backdrop of Badaun gangrape and murder case (2014), Anubhav Sinha's Article 15 is a thrilling investigative drama based on true events.",
            rating:2.5,
            poster:pos5,
            trailer:"https://www.youtube.com/embed/HKOJY0cU63E"
        },
        {   id:"bmmv6",
            name : 'Hobbs & Shaw',
            language : 'English',
            genre :'Action/Adventure',
            certificate : 'U/A',
            bg:img6,
            description:"Lawman Luke Hobbs and outcast Deckard Shaw form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.",
            rating:3,
            poster:pos6,
            trailer:"https://www.youtube.com/embed/HZ7PAyCDwEg"
        },
    ]
}
export default content