import TheContent from "./content"
import cardimg from "../img/work.png"
const Authenticate="user";

const StudentDetails={
    S_name:"abs",
    S_address:"chennai",
    S_mark:100,
    Eligible:true
}
const backgroundcolorRed="red";
const textColor="white";


const Login=()=>{
    return(
        <>
      
        <div className=""> {
            }
            <h1>{Authenticate} Login page</h1>
            <img src={cardimg}alt="image load fail" width={280}/>
            <table style={{backgroundColor:backgroundcolorRed,color:textColor}}>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Marks</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{StudentDetails.S_name}</td>
                        <td>{StudentDetails.S_address}</td>
                        <td>{StudentDetails.S_mark}</td>
                        <td>{StudentDetails.Eligible}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div style={{backgroundColor:backgroundcolorRed,color:textColor}}>
            <h1>
                Head2
            </h1>
            <ul>
                <li>content 1</li>
                <li>content 2</li>
                <li>content 3</li>
            </ul>
        </div>
        <TheContent/>
        </>
    )
}
export default Login
//every comp fun it should return the value, in above const is optional but default is must