import image from "../../assets/user.png"
import image1 from "../../assets/user5.png"
import image2 from "../../assets/user2.png"
import image3 from "../../assets/user3.png"
import image4 from "../../assets/user4.png"
import image5 from "../../assets/user5.png"
import { TiPin } from "react-icons/ti";
import { RiCheckDoubleFill } from "react-icons/ri";

const data ={
   cardData:[
    {
        id:1,
        icon: TiPin,
        img: image5,
        title:'Design Chat',
        desc: 'Jessie Rolina',
        time: '4m',
        numb:'10',
      },
      {
        id:2,
        numb:'3',
        icon: TiPin,
        img: image,
        title:'Osman Compos',
        desc: 'You: Hey! We are Rea..',
        time: '20m',
        numb:'1',
      },
      {
        id:3,
        icon: TiPin,
        img: image4,
        title:'Jayden Church',
        desc: 'I prepared some Varia..',
        time: '1h',
        numb:'5',
      },
      {
        id:4,
        icon: TiPin,
        img: image3,
        title:'Jacob Mclead',
        desc: 'And send me the proto..',
        time: '3m',
        slug:'Jacob Mclead'
      },
      {
        id:5,
        icon:RiCheckDoubleFill ,
        img: image2,
        title:'Jasmin Lowery',
        desc: 'You: Ok! lets discuss it on th..',
        time: '20m',
      },
      {
        id:6,
        icon:RiCheckDoubleFill ,
        img: image4,
        title:'Zaid Myers',
        desc: 'You: Hey! We are ready to in',
        time: '45m',
      },
      {
        id:7,
        icon:RiCheckDoubleFill ,
        img: image3,
        title:'Anthony Cordones',
        desc: 'What do you think ?',
        time: '1d',
      },
      {
        id:8,
        icon:RiCheckDoubleFill ,
        img: image,
        title:'Coner Garcia',
        desc: 'Hey! i think it would be perfe..',
        time: '4d',
      },
      {
        id:9,
        icon:RiCheckDoubleFill ,
        img: image2,
        title:'Vanessa Cox',
        desc: 'Voice Message..',
        time: '4d',
      }
   ]
}
export default data;