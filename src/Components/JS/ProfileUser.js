import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import Button from '@mui/material/Button';
function ProfileUser() {
    return (
        <div>
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
                        <label for="validationServer02" class="form-label">Password</label>
                        <input type="password" class="form-control is-valid" id="validationServer02" value="nikhil1233" required />
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

                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" href="#contained-buttons">
                            Save Change
                        </Button>
                    </Stack>
                </form>
            </div>
        </div>
    )
}

export default ProfileUser