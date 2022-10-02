import React from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

function ProfileService() {

    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };

    const value = 3.5;

    return (
        <div style={{ padding: "20px" }}>
            <form class="row g-3">
                <Stack direction="row" spacing={2}>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>NA</Avatar>
                </Stack>
                <h3>Nikhil Adhare</h3>
                <div class="col-md-4">
                    <label for="validationServer02" class="form-label">Phone Number</label>
                    <input type="text" class="form-control is-valid" id="validationServer02" value="+919370587779" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div class="col-md-4">
                    <label for="validationServer02" class="form-label">City</label>
                    <input type="text" class="form-control is-valid" id="validationServer02" value="Kalyan" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div class="col-md-4">
                    <label for="validationServer02" class="form-label">Service</label>
                    <input type="text" class="form-control is-valid" id="validationServer02" value="Raddiwala" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationServer02" class="form-label">Address</label>
                    <input type="text" class="form-control is-valid" id="validationServer02" value="Kalyan West" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationServer02" class="form-label">Pin Code</label>
                    <input type="text" class="form-control is-valid" id="validationServer02" value="421001" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <h5>4.5/5</h5>
                <Box
                    sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    <Box sx={{ ml: 2 }}>{labels[value]}</Box>
                </Box>
            </form>
        </div>
    )
}

export default ProfileService