// src/components/BookingForm.js
import React, { useState } from 'react';
import { Typography, Slider, Card, CardContent, Grid, TextField, Button, ButtonGroup } from '@mui/material';

function WorkShiftAndDate() {
  const [selectedTime, setSelectedTime] = useState([7, 11]); // Initial selected time from 7:00 AM to 11:00 AM
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [count, setCount] = useState(1);
  const [notes, setNotes] = useState('');

  const marks = [
    { value: 7, label: '7:00 AM' },
    { value: 11, label: '11:00 AM' },
    { value: 15, label: '3:00 PM' },
    { value: 19, label: '7:00 PM' },
  ];

  const handleTimeChange = (event, newValue) => {
    const diff = newValue[1] - newValue[0];
    if (diff === 4 || diff === -4) {
      setSelectedTime(newValue);
    } else {
      const updatedLeft = newValue[1] - 4;
      const updatedRight = newValue[0] + 4;
      setSelectedTime([updatedLeft, updatedRight]);
    }
  };

  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value));
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  return (
    <Grid container spacing={2} style={{ width: '80%', margin: 'auto', marginTop: '50px' }}>
      <Grid item xs={6}>
        <Card style={{ height: '100%' }}>
          <CardContent>
            <Typography variant="h6" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Work Shifts
              <ButtonGroup size="small" style={{ marginLeft: '1rem' }}>
                <Button variant="outlined" onClick={handleDecrement}>-</Button>
                <Typography>{count}</Typography>
                <Button variant="outlined" onClick={handleIncrement}>+</Button>
              </ButtonGroup>
            </Typography>
            <Typography variant="subtitle1">Select your work shift duration:</Typography>
            <Slider
              value={selectedTime}
              onChange={handleTimeChange}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `${value % 12 || 12}:00 ${value < 12 ? 'AM' : 'PM'}`}
              min={7}
              max={19}
              step={1}
              marks={marks}
              margin={20}
            />
            <Typography margin={4}>
              Selected Time: {selectedTime[0] % 12 || 12}:00 {selectedTime[0] < 12 ? 'AM' : 'PM'} -{' '}
              {selectedTime[1] % 12 || 12}:00 {selectedTime[1] < 12 ? 'AM' : 'PM'}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={6}>
        <Card style={{ height: '100%' }}>
          <CardContent>
            <Typography variant="h6">Date Selection</Typography>
            <Typography variant="subtitle1" margin={2}>Select your preferred date:</Typography>
            <TextField
              id="dateSelector"
              label="Select Date"
              type="date"
              defaultValue={selectedDate.toISOString().split('T')[0]}
              onChange={handleDateChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Typography margin={2}>Selected Date: {selectedDate.toDateString()}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} style={{ margin: '2rem' }}>
        <Card>
          <CardContent>
            <Typography variant="h6">Notes</Typography>
            <TextField
              multiline
              rows={4}
              variant="outlined"
              placeholder="Additional notes (if any)"
              value={notes}
              onChange={handleNotesChange}
              style={{ width: '100%', margin: '10px 0' }}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default WorkShiftAndDate;
