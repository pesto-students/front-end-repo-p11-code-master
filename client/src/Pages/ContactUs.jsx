
import React, { useContext, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  IconButton,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WebIcon from '@mui/icons-material/Web';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import  Mapimage from '../Images/MAP.png'
import { Context } from '../index';
import toast from 'react-hot-toast';

const ContactUs = () => {
  const { loading, setLoading, user } = useContext(Context);

  const [contactInfo, setContactInfo] = useState({
    username: user.username || '',
    email:user.email || '',
    mobileNumber:user.mobileNumber || '',
    message:'',
  });
  const handleContactInfoChange = (event) => {
    setContactInfo({
      ...contactInfo,
      [event.target.name]: event.target.value,
    });
  };
  
const submitHandler = async (event) => {
  event.preventDefault();
  setLoading(true);
  try {
    const response = await axios.post(
      'http://localhost:4000/api/v1/contact',  
      contactInfo
    );
    console.log(response.data); 
  setLoading(false);
    toast.success(response.data.message);
  } catch (error) {
    console.log(error.response.data); 
    setLoading(false);
    toast.error(error.response.data.message);
 }
};
  
  return (
    <Container maxWidth="lg" style={{ marginTop: '1%', marginBottom: '1%' }}>
      <Grid container spacing={3}>
        {/* Left Section */}
        <Grid item xs={12} sm={6}>
          <form onSubmit={submitHandler}>
            <Typography variant="h5" style={{ fontWeight: 'bolder' }} gutterBottom>
              Contact Information
            </Typography>
            <TextField label="Full Name" fullWidth margin="normal" required name='username' value={contactInfo.username} onChange={handleContactInfoChange}/>
            <TextField label="Email" fullWidth margin="normal" name='email' value={contactInfo.email} onChange={handleContactInfoChange}/>
            <TextField label="Contact" fullWidth margin="normal" name='mobileNumber' required value={contactInfo.mobileNumber} onChange={handleContactInfoChange} />
            <TextField
              label="Message"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              name="message"
              required
              value={contactInfo.message}
              onChange={handleContactInfoChange}
              
            />
            <Button type="submit" variant="contained" disabled={loading} color="primary" style={{ color: '#fff', marginTop: '1rem' }}>
              Submit
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={6} style={{ position: 'relative' }}>
          <img
            src={Mapimage}
            alt="Map"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              color: '#000',
              backdropFilter: 'blur(5px)',
              padding: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton color="inherit" style={{ fontSize: 40, marginRight: 10 }}>
                <LocationOnIcon />
              </IconButton>
              <Typography variant="subtitle1" fontWeight="bold">
                Address: 198 West 21th Street, Suite 721 New York NY 10016
              </Typography>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
              <IconButton color="inherit" style={{ fontSize: 40, marginRight: 10 }}>
                <PhoneIcon />
              </IconButton>
              <Typography variant="subtitle1" fontWeight="bold">Phone: +1235 2355 98</Typography>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
              <IconButton color="inherit" style={{ fontSize: 40, marginRight: 10 }}>
                <EmailIcon />
              </IconButton>
              <Typography variant="subtitle1" fontWeight="bold">Email: info@yoursite.com</Typography>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
              <IconButton color="inherit" style={{ fontSize: 40, marginRight: 10 }}>
                <WebIcon />
              </IconButton>
              <Typography variant="subtitle1" fontWeight="bold">Website: yoursite.com</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
