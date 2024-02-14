import React, { useState } from 'react';
import { Typography, Divider, Button, Box } from '@mui/material';
import {Navigate} from 'react-router-dom'
const DetailsRegardingBooking = () => {
  const sections = [
    {
      title: 'Cleaning',
      subsections: [
        {
          heading: 'Select House Size',
          subHeading: 'Select 1 out of 4 options',
          data: [
            { label: '1 bhk', onClick: () => alert('Button 1 clicked') },
            { label: '2 bhk', onClick: () => alert('Button 2 clicked') },
            { label: '3 bhk(less than 2000sqft)', onClick: () => alert('Button 3 clicked') },
            { label: '4 bhk(less than 4000sqft)', onClick: () => alert('Button 3 clicked') },
          ],
        },
        {
          heading: 'How many such Floors?',
          subHeading: 'Select 1 out of 4 options',
          data: [
            { label: '1 floor Only', onClick: () => alert('Button 1 clicked') },
            { label: '2 floor', onClick: () => alert('Button 2 clicked') },
            { label: '3 floor', onClick: () => alert('Button 3 clicked') },
            { label: '4 floor', onClick: () => alert('Button 3 clicked') },
          ],
        },
        {
          heading: 'Do you have Dogs?',
          subHeading: 'Select 1 out of 2 options',
          data: [
            { label: 'Yes', onClick: () => alert('Button 1 clicked') },
            { label: 'No', onClick: () => alert('Button 2 clicked') },
          ],
        },
      ],
    },
    
    {
      title: 'Cooking',
      subsections: [
        {
          heading: 'How many People?',
          subHeading: 'Select 1 out of 6 options',
          data: [
            { label: '1 person', onClick: () => alert('Button 1 clicked') },
            { label: '2 people', onClick: () => alert('Button 2 clicked') },
            { label: '3 people', onClick: () => alert('Button 3 clicked') },
            { label: '4 people', onClick: () => alert('Button 4 clicked') },
            { label: '5-6 people', onClick: () => alert('Button 5 clicked') },
            { label: '7-8 people', onClick: () => alert('Button 6 clicked') },
          ],
        },
        {
          heading: 'How many meals perday?',
          subHeading: 'Select 1 out of 3 options',
          data: [
            { label: 'BreakFast And Lunch', onClick: () => alert('Button 1 clicked') },
            { label: 'Dinner', onClick: () => alert('Button 2 clicked') },
            { label: 'All Three Meals', onClick: () => alert('Button 3 clicked') }
          ],
        },
        {
          heading: 'Veg/Non Veg',
          subHeading: 'Select 1 out of 2 options',
          data: [
            { label: 'Veg Food Only', onClick: () => alert('Button 1 clicked') },
            { label: 'Veg+Non Veg', onClick: () => alert('Button 2 clicked') }
          ],
        },
        {
          heading: 'Do you have Dogs?',
          subHeading: 'Select 1 out of 2 options',
          data: [
            { label: 'Yes', onClick: () => alert('Button 1 clicked') },
            { label: 'No', onClick: () => alert('Button 2 clicked') },
          ],
        },
        {
          headingBox: 'Inclusions',
          inBox: true,
          dataBox: [
            {
              subHeading: 'Breads',
              description: 'Roti, Poori, Plain Paratha, Aloo Paratha, Gobhi Paratha, Pyaaz Paratha, Paneer Paratha, Mixed veg Paratha',
            },
            {
              subHeading: 'Sabzi (Dry)',
              description: 'Lauki ki sabzi, Tindey ki sabzi, Kaddu ki sabzi, Bhindi ki sabzi, Aloo methi, Aloo palak, Aloo jeera, Aloo gobhi, Aloo matar, Mixed veg',
            },
          ],
        },
      ],
    },
    {
      title: 'Nanny',
      subsections: [
        {
          heading: 'How many Children?',
          subHeading: 'Select 1 out of 4 options',
          data: [
            { label: '1 child', onClick: () => alert('Button 1 clicked') },
            { label: '2 child', onClick: () => alert('Button 2 clicked') },
            { label: '3 child', onClick: () => alert('Button 3 clicked') },
            { label: '4 child', onClick: () => alert('Button 4 clicked') },
          
          ],
        },
        {
          heading: 'How many hours per day?',
          subHeading: 'Select 1 out of 3 options',
          data: [
            { label: '3-5', onClick: () => alert('Button 1 clicked') },
            { label: '5-12', onClick: () => alert('Button 2 clicked') },
            { label: '12-24', onClick: () => alert('Button 3 clicked') }
          ],
        },
        {
          heading: 'Do any of your child has any disability?',
          subHeading: 'Select 1 out of 2 options',
          data: [
            { label: 'Yes', onClick: () => alert('Button 1 clicked') },
            { label: 'No', onClick: () => alert('Button 2 clicked') }
          ],
        },
        {
          heading: 'Do you have Dogs?',
          subHeading: 'Select 1 out of 2 options',
          data: [
            { label: 'Yes', onClick: () => alert('Button 1 clicked') },
            { label: 'No', onClick: () => alert('Button 2 clicked') },
          ],
        },
        
      ],
    },
    {
      title: 'Nurse',
      subsections: [
        {
          heading: 'How many patients?',
          subHeading: 'Select 1 out of 3 options',
          data: [
            { label: '1 person', onClick: () => alert('Button 1 clicked') },
            { label: '2 people', onClick: () => alert('Button 2 clicked') },
            { label: '3 people', onClick: () => alert('Button 3 clicked') },
          ],
        },
        {
          heading: 'How many hours per day?',
          subHeading: 'Select 1 out of 7 options',
          data: [
            { label: '1-2', onClick: () => alert('Button 1 clicked') },
            { label: '2-3', onClick: () => alert('Button 2 clicked') },
            { label: '3-4', onClick: () => alert('Button 3 clicked') },
            { label: '4-6', onClick: () => alert('Button 4 clicked') },
            { label: '6-12', onClick: () => alert('Button 5 clicked') },
            { label: '12-16', onClick: () => alert('Button 6 clicked')},
            { label: '16-24', onClick: () => alert('Button 7 clicked') },
          ],
        },
        {
          heading: 'Are you open to admit when required?',
          subHeading: 'Select 1 out of 2 options',
          data: [
            { label: 'Yes', onClick: () => alert('Button 1 clicked') },
            { label: 'No', onClick: () => alert('Button 2 clicked') }
          ],
        },
      ],
    }
  ];
   
  const [serviceInfo,setServiceInfo]=useState(localStorage.getItem('serviceInfo'))
  
   const storedTitle = sessionStorage.getItem("selectedServiceTitle");
 const handleSubmit=()=>{
  return <Navigate to="/summary" />;
 }
const handleOptionClick = (title, heading, label) => {
  const storedServiceInfo = localStorage.getItem('serviceInfo');
  const parsedServiceInfo = storedServiceInfo ? JSON.parse(storedServiceInfo) : [];
  const existingHeading = parsedServiceInfo.find(info => info[heading] === label);
  if (!existingHeading) {
    
    const updatedServiceInfo = [...parsedServiceInfo, { [heading]: label }];
 
    localStorage.setItem('serviceInfo', JSON.stringify(updatedServiceInfo));
    setServiceInfo(updatedServiceInfo);
  } else {
    
    alert('This option is already selected!');
  }
};
  const renderData = (section) => {
    if (storedTitle.toLowerCase() === section.title.toLowerCase()) {
      return (
        <div key={section.title}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            {section.title}
          </Typography>
          {section.subsections.map((subsection, subIndex) => (
            <div key={subIndex}>
              <Typography variant="h6" gutterBottom>
                {subsection.heading}
              </Typography>
              {subsection.subHeading && (
                <Typography variant="body2" color="textSecondary">
                  {subsection.subHeading}
                </Typography>
              )}
              {subsection.data && (
                <div style={{ display: 'flex', marginTop: '20px' }}>
                  {subsection.data.map((button, buttonIndex) => (
                    <Button
                      key={buttonIndex}
                      variant="text"
                      color="primary"
                      onClick={() => handleOptionClick(section.title, subsection.heading, button.label)}
                      style={{
                        border: '2px solid black',
                        borderColor: '#e7e7e7',
                        marginBottom: '1rem',
                      }}
                      sx={{
                        marginRight: '10px',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.04)',
                          borderColor: '#454545',
                          color: '#454545',
                        },
                        borderColor: '#454545',
                        color: '#454545',
                      }}
                    >
                      {button.label}
                    </Button>
                  ))}
                </div>
              )}
              {subsection.inBox && (
                <Box
                  sx={{
                    border: '2px solid black',
                    borderRadius: '8px',
                    padding: '20px',
                    marginTop: '20px',
                    borderColor: '#e7e7e7',
                  }}
                >
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    {subsection.headingBox}
                  </Typography>
                  {subsection.dataBox.map((content, contentIndex) => (
                    <div key={contentIndex}>
                      {content.subHeading && (
                        <Typography variant="subtitle1" gutterBottom>
                          {content.subHeading}
                        </Typography>
                      )}
                      {content.description && (
                        <Typography variant="body2" color="textSecondary">
                          {content.description}
                        </Typography>
                      )}
                    </div>
                  ))}
                </Box>
              )}
              {subIndex < section.subsections.length - 1 && (
                <Divider sx={{ width: '100%', marginLeft: '0', marginBottom: '1', marginTop: '1' }} />
              )}
            </div>
          ))}
        </div>
      );
    }
    return null; // Return null if storedTitle doesn't match
  };

  //return <div style={{ padding: '20px' }}>{sections.map((section) => renderData(section))}</div>;
  return (
    <div style={{ padding: '20px' }}>
      {sections.map((section) => renderData(section))}
      <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '20px' }}>
        Proceed
      </Button>
    </div>
  );
};

export default DetailsRegardingBooking;
