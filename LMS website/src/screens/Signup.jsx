import { Avatar, Button, Container, Box, Link, Paper, TextField, Typography, InputAdornment, IconButton } from '@mui/material';
import React, { useState } from 'react';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Checkboxes from '../components/Checkbox';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, database } from '../components/firebase';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import left from '../assets/left6.JPG'
import bgimg from '../assets/background.JPG';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Signup = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword , setShowpassword]=useState(false);
    const handleClickShowPassword = ()=>setShowpassword(!showPassword)

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            if (user) {
                await setDoc(doc(database, "users", user.uid), {
                    firstname: fname,
                    lastname: lname,
                    email: user.email,
                });
            }

            Swal.fire({
                position: "top",
                text: 'User is Signup successfully',
                icon: 'success',
                confirmButtonText: 'Continue',
                timer: 1000
            });

            navigate('/');
        } catch (error) {
            Swal.fire({
                position: "top",
                text: 'Please enter a valid data',
                icon: 'error',
                confirmButtonText: 'Try Again',
                timer: 1000
            });
        }
    };

    return (

        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",bgcolor:"rgb(80, 163, 153)" 
            ,
            backgroundImage: { xs: `url(${bgimg})`, sm: `url(${bgimg})`, md: 'none', lg: 'none' },
            backgroundSize: 'cover',
            backgroundPosition: 'center' ,
           
        }}>
              {/* Side Image */}
             
        <Box component="form" onSubmit={handleSignup} sx={{ width: { xs: "100%", sm: "70%", md: "50%", lg: "50%" }, }}>
            <Container sx={{ maxWidth: 600 }}>
              
                    <Paper elevation={5} sx={{ padding: { xs: "30px", sm: "30px", md: "35px",lg:"40px" },bgcolor:"rgb(245, 255, 250)", minHeight:{ xs: "500px", sm: "500px", md: "550px",lg:"550px" } }}>


                        <Box align="center">
                            <Avatar sx={{ bgcolor: 'rgb(40, 123, 113)' }}><HowToRegIcon /></Avatar>
                            <Typography variant='h2' sx={{ fontSize: { xs: '20px', md: '24px' }, my: 2 ,color:"rgb(20, 103, 93)"}}>
                                Sing Up
                            </Typography>
                        </Box>
                        <Box sx={{display:"flex" ,gap:1}}>
                        <TextField onChange={(e) => setFname(e.target.value)} label="First Name" fullWidth sx={{ mb: { xs: "12px", md: "18px" } }} />
                        <TextField onChange={(e) => setLname(e.target.value)} label="Last Name" fullWidth sx={{ mb: { xs: "12px", md: "18px" } }} />
                        </Box>
                        <TextField onChange={(e) => setEmail(e.target.value)} label="Email" fullWidth sx={{ mb: { xs: "12px", md: "18px" } }} />
                        <TextField onChange={(e) => setPassword(e.target.value)} label="Password" type={showPassword?"text":"password"} fullWidth sx={{ mb: { xs: "12px", md: "18px" } }}
                        slotProps={{
                            input:{
                                endAdornment:(
                                    <InputAdornment position='end'>
                                      <IconButton onClick={handleClickShowPassword}
                                      edge="end">
                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            
                                      </IconButton>
                                    </InputAdornment>
                              )
                            }}
                        } />

                        <Checkboxes checkline={"I accept all terms and condition"} />
                        <Button variant="contained"
                            type="submit"
                            sx={{
                                width: '100%',
                                height: '40px',
                                borderRadius: "50px",
                                mb: 1,
                                mt: 2,
                                fontSize: { xs: '14px', md: '16px' },bgcolor:"rgb(40, 123, 113)"
                            }}>
                            Signup
                        </Button>

                        <Box align='center'>
                            <Typography sx={{ fontSize: 14 }}>Already have an account?
                                <Link sx={{ fontWeight: "bold", fontSize: 15,color:"rgb(20, 103, 93)" }} href="/"> Login</Link>
                            </Typography>
                        </Box>
                    </Paper>
                {/* </Box> */}
            </Container>
        </Box>
        <Box
                component="img"
                src={left} 
                alt="Side Image"
                sx={{
                    display: { xs: 'none', sm: 'none', md: 'block' }, 
                    width: '45vw', 
                    height: '100vh',
                    
                }}
            />
        </Box>
    );
};

export default Signup;
