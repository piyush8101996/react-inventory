import { TextField, Typography, Button } from "@mui/material"
import { useRef, useState,useEffect } from "react"
import style from "./user.module.css"
const User = () => {
    const [user, setUser] = useState({
        fullname: '',
        email: "",
        address: "",
        mobileNo: "",
        phoneNo: "",
        address: ""
    })
    const fileInputRef = useRef()
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result.toLocaleString());
            };
            reader.readAsDataURL(image);
        } else {
            setPreview(null);
        }
    }, [image]);
    const onchangeHandler = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    return (
        <div>
            <Typography variant="h2">My Profile</Typography>
            {preview ? (
                <img className={style.img}
                    src={preview}
                    style={{ objectFit: "cover" }}
                    onClick={() => {
                        setImage(null);
                    }}
                />
            ) : (
                <button
                className={style.button}
                    onClick={(event) => {
                        event.preventDefault();
                        fileInputRef.current.click();
                    }}
                >
                    Add Image
                </button>
            )}
            <input
                type="file"
                style={{ display: "none" }}
                ref={fileInputRef}
                accept="image/*"
                onChange={(event) => {
                    const file = event.target.files[0];
                    if (file ) {
                        setImage(file);
                    } else {
                        setImage(null);
                    }
                }}
                />
        <input type="file" style={{ display: "none" }} ref={fileInputRef} />
            <label>Full Name</label>
            <TextField id="outlined-fullname"
                label="Full Name"
                name="fullname"
                value={user.fullname}
                type="text"
                color="secondary"
                required sx={{ marginBottom: "10px" }}
                fullWidth placeholder="Enter your Full Name"
                variant="outlined" />
            <label > PhoneNumber</label>
            <TextField id="outlined-fullname"
                label="PhoneNumber"
                name="phonenumber"
                value={user.phoneNo}
                type="text"
                color="secondary"
                required sx={{ marginBottom: "10px" }}
                fullWidth placeholder="Enter your phoneNo"
                variant="outlined" />
            <label >MobileNo</label>
            <TextField id="outlined-fullname"
                label="MobileNo"
                name="MobileNo"
                value={user.mobileNo}
                type="text"
                color="secondary"
                required sx={{ marginBottom: "10px" }}
                fullWidth placeholder="Enter your MobileNo"
                variant="outlined" />
            <label htmlFor="">Email</label>
            <TextField id="outlined-fullname"
                label="Email"
                name="Email"
                value={user.email}
                type="text"
                color="secondary"
                required sx={{ marginBottom: "10px" }}
                fullWidth placeholder="Enter your Email"
                variant="outlined" />
            <label>Address</label>
            <TextField id="outlined-fullname"
                label="Address"
                name="Address"
                value={user.address}
                type="text"
                color="secondary"
                required sx={{ marginBottom: "10px" }}
                fullWidth placeholder="Enter your Address"
                variant="outlined" />
            <Button size="large" sx={{ marginTop: "20px" }} variant="contained">UpdateProfile</Button>
        </div>


    )
}
export default User