import { v4 as uuidv4 } from "uuid";

const dummyData =[{
    id:uuidv4(),
    title:"今からやること",
    tasks:[
        {
            id:uuidv4(),
            title:"Reactの勉強"
        },
        {
            id:uuidv4(),
            title:"勉強"
        }
    ]
},{
    id:uuidv4(),
    title:"今後やること",
    tasks:[
        {
            id:uuidv4(),
            title:"ごはんつくる"
        }
    ]
},{
    id:uuidv4(),
    title:"終わったこと",
    tasks:[
        {
            id:uuidv4(),
            title:"韓国語"
        }
    ]

}];

export default dummyData