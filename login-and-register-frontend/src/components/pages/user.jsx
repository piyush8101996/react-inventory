import { TextField, Typography, Button } from "@mui/material"
import axios from "axios"
import {  useState, useEffect } from "react"
import style from "./user.module.css"
import { Outlet, useNavigate } from "react-router-dom";
const User = () => {
    let navigate = useNavigate();
    const[error,setError]=useState()
    const [user, setUser] = useState({
        fullname: '',
        email: "",
        address: "",
        mobileNo: "",
        phoneNo: "",
        //uploadedfile:null
        
    })

   /* const profileimageHandler=(e)=>{
       console.log(e.target.files[0])
         setUser({...user,uploadedfile:e.target.files[0]})
    }
*/

    console.log(user.phoneNo)
    const email= JSON.parse(localStorage.getItem("userInfo"))
    useEffect(()=>{
        const fetchdata=async()=>{
            await axios.get(`http://localhost:4000/updateprofile/${email}`)
            .then((res)=>{
                console.log(res.data)
               
                setUser({fullname:res.data.fullname,
                    email:res.data.email,
                    address:res.data.address,
                    mobileNo:res.data.mobileNo,
                    phoneNo:res.data.phoneNo})
            }).catch((err)=>{
                console.log(err)
            })
        }
        fetchdata();
    },[email]) 

    const updateHandler=()=>{
        if(user){
            console.log("...user",user)
            var formData= new FormData();
            // console.log("....",user.uploadedfile,"-------",user.uploadedfile.name)
            //formData.append('uploadfile',user.uploadedfile,user.uploadedfile.name)
            formData.append("fullname","abc")
            formData.append("email",user.email)
            formData.append("mobileNo",user.mobileNo)
            formData.append("phoneNo",user.phoneNo)
            formData.append("address",user.address)
           // var options = { content: formData };
           
             axios.post(`http://localhost:4000/updateprofile/${email}`,formData)
            .then((res)=>{
             localStorage.setItem('userInfo', JSON.stringify(res.data))
               console.log(res.data)
                 navigate("/user")
             }).catch((err)=>{
                 setError("User not found")
                 console.log("error msg",err)
             })
        }
        
 }
    
   

    const onchangeHandler = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    return (
        <div className={style.form}>
            <form  className={style.bodyform} >
                <Typography variant="h3">My Profile</Typography>
                <div className={style.img}>
                <img src=""></img>
                </div>
                <label>Full Name</label>
                <TextField id="outlined-fullname"
                    label="Full Name"
                    name="fullname"
                    value={user.fullname}
                    type="text"
                    color="secondary"
                    onChange={onchangeHandler}
                    required sx={{ marginBottom: "10px" }}
                    fullWidth placeholder="Enter your Full Name"
                    variant="outlined" />
                <label > PhoneNumber</label>
                <TextField id="outlined-fullname"
                    label="PhoneNumber"
                    name="phoneNo"
                    value={user.phoneNo}
                    type="text"
                    onChange={onchangeHandler}
                    color="secondary"
                    required sx={{ marginBottom: "10px" }}
                    fullWidth placeholder="Enter your phoneNo"
                    variant="outlined" />
                <label >MobileNo</label>
                <TextField id="outlined-fullname"
                    label="MobileNo"
                    name="mobileNo"
                    value={user.mobileNo}
                    onChange={onchangeHandler}
                    type="text"
                    color="secondary"
                    required sx={{ marginBottom: "10px" }}
                    fullWidth placeholder="Enter your MobileNo"
                    variant="outlined" />
                <label htmlFor="">Email</label>
                <TextField id="outlined-fullname"
                    label="Email"
                    name="email"
                    value={user.email}
                    onChange={onchangeHandler}
                    type="text"
                    color="secondary"
                    required sx={{ marginBottom: "10px" }}
                    fullWidth placeholder="Enter your Email"
                    variant="outlined" />
                <label>Address</label>
                <TextField id="outlined-fullname"
                    label="Address"
                    name="address"
                    value={user.address}
                    onChange={onchangeHandler}
                    type="text"
                    color="secondary"
                    required sx={{ marginBottom: "10px" }}
                    fullWidth placeholder="Enter your Address"
                    variant="outlined" />
                <label>Profile Image</label>
                <div>
                <input type="file"     name="uploadfile"/>
                </div>

                <Button size="large" sx={{ marginTop: "20px" }}  onClick={updateHandler} variant="contained">UpdateProfile</Button>
            </form>
        </div>


    )
}
export default User