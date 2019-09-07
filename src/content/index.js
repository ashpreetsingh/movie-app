import img1 from "./images/spidey.jpg"
import img2 from "./images/lionking.jpg"
import img3 from "./images/super30.jpg"
import img4 from "./images/kabirsingh.jpg"
import img5 from "./images/article15.jpg"
import img6 from "./images/shadaa.jpg"
import pos1 from "./images/posters/spiderman.jpg"
import pos2 from "./images/posters/lionking.jpg"
import pos3 from "./images/posters/super30.jpg"
import pos4 from "./images/posters/kabirsingh.jpg"
import pos5 from "./images/posters/article15.jpg"
import pos6 from "./images/posters/shadaa.jpg"
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
            poster:pos1

        },
        {   id:"bmmv2",
            name : 'The Lion King',
            language : 'English',
            genre :'Adventure',
            certificate : 'U',
            bg:img2,
            description:"After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
            rating:4,
            poster:pos2
        },
        {   id:"bmmv3",
            name : 'Super 30',
            language : 'Hindi',
            genre :'Biography',
            certificate : 'U',
            bg:img3,
            description:"Based on life of Patna-based mathematician Anand Kumar who runs the famed Super 30 program for IIT aspirants in Patna.",
            rating:4,
            poster:pos3

        },
        {   id:"bmmv4",
            name : 'Kabir Singh',
            language : 'Hindi',
            genre :'Drama',
            certificate : 'A',
            bg:img4,
            description:"Kabir Singh is a remake of a Telugu movie Arjun Reddy (2017), where a short-tempered house surgeon gets used to drugs and drinks when his girlfriend is forced to marry another person.",
            rating:3.5,
            poster:pos4
        },
        {   id:"bmmv5",
            name : 'Article 15',
            language : 'Hindi',
            genre :'Drama',
            certificate : 'U/A',
            bg:img5,
            description:"Set against the backdrop of Badaun gangrape and murder case (2014), Anubhav Sinha's Article 15 is a thrilling investigative drama based on true events.",
            rating:2.5,
            poster:pos5
        },
        {   id:"bmmv6",
            name : 'Shadaa',
            language : 'Punjabi',
            genre :'Drama',
            certificate : 'U',
            bg:img6,
            description:"Amidst pressures from his parents to hurry up and wed, a young man seeks his perfect match. After many failed attempts with matchmakers, his parents are delighted when their son finally meets the woman of his dreams but things do not go as planned.",
            rating:2.5,
            poster:pos6
        },
    ]
}
export default content