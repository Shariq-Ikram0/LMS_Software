import { Avatar, Box, Button, Container, IconButton, InputAdornment, Link, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import LoginIcon from '@mui/icons-material/Login';
import Checkboxes from '../components/Checkbox';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/firebase';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import left from '../assets/left6.JPG'
import bgimg from '../assets/background.JPG'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword ,setShowpassword]=useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Swal.fire({
                position: "top",
                text: 'User is Login successfully',
                icon: 'success',
                confirmButtonText: 'Continue',
                timer: 1000
            });
            navigate("/student/student-list");
        } catch (error) {
            Swal.fire({
                position: "top",
                text: 'Invalid Password or Email',
                icon: 'error',
                timer: 1000
            });
        }
    }

    const handleClickShowPassword =()=>setShowpassword(!showPassword)

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",bgcolor:"rgb(80, 163, 153)" 
            ,
            backgroundImage: { xs: `url(${bgimg})`, sm: `url(${bgimg})`, md: 'none', lg: 'none' },
            backgroundSize: 'cover',
            backgroundPosition: 'center' ,
           
        }}>
            
            {/* Side Image */}
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

            <Box component="form" onSubmit={handleSubmit} sx={{ width: { xs: "100%", sm: "70%", md: "50%", lg: "50%" }, }}>

                <Container sx={{ maxWidth: 600 }}  >

                    <Paper elevation={5} sx={{ padding: { xs: "40px", sm: "60px", md: "50px",lg:"70px" },bgcolor:"rgb(245, 255, 250)",height:{ xs: "500px", sm: "500px", md: "550px",lg:"550px" } }}>

                        <Box align="center">
                            <Avatar sx={{ bgcolor: 'rgb(40, 123, 113)' }}><LoginIcon /></Avatar>
                            <Typography variant='h2' sx={{ fontSize: { xs: '20px', md: '24px' }, my: 2 ,color:"rgb(20, 103, 93)"}}>
                                Login
                            </Typography>
                        </Box>

                        <TextField
                            onChange={(e) => { setEmail(e.target.value) }}
                            value={email}
                            label="Email"
                            fullWidth
                            sx={{ mb: { xs: "12px", md: "18px" } }}
                        />
                        <TextField
                            onChange={(e) => { setPassword(e.target.value) }}
                            value={password}
                            label="Password"
                            type={showPassword?"text":"password"}
                            fullWidth
                            sx={{ mb: { xs: "10px", md: "5px" } }}
                            slotProps={{
                                input: {
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                      >
                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                },
                              }}
                           
                        />
                        <Checkboxes checkline={"Remember me"} />
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{
                                width: '100%',
                                height: '40px',
                                borderRadius: "50px",
                                mb: 1,
                                mt: 2,
                                fontSize: { xs: '14px', md: '16px' },bgcolor:"rgb(40, 123, 113)"
                            }}
                        >
                            Login
                        </Button>

                        <Typography sx={{ fontSize: 14, mb: 2, }}>
                            <Link sx={{color:"rgb(20, 103, 93)"}} href="#">Forget password</Link>
                        </Typography>
                        <Box align='center'>
                            <Typography sx={{ fontSize: 14 }}>
                                Don't have an account?
                                <Link sx={{ fontWeight: "bold", fontSize: 15,color:"rgb(20, 103, 93)" }} href="/signup"> SignUp</Link>
                            </Typography>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </Box>
    )
}

export default Login;
