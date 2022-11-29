import { Link } from "react-router-dom"

export const Home = ({ members }) =>{
    return(
        members.map((element) =>{
            if(element.type === "pj"){
                return(<Link key={element.id} to={`/company/${element.id}`}>{element.name}</Link>)
            }else{
                return(<Link key={element.id} to={`/customer/${element.id}`}>{element.name}</Link>)
            }
        })
    )
}