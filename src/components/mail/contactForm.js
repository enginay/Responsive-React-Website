import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
function contactForm() {
    return (
        <>
            <FormControl fullWidth={true}>
                <TextField required label="Full name" variant="filled" id="full-name" name="name" className="form-field" />
            </FormControl>
            <FormControl fullWidth={true}>
                <TextField required label="Email" id="email" name="email" variant="filled" className="form-field" onChange />
            </FormControl>
            <FormControl fullWidth={true}>
                <TextField required label="Nachricht" variant="filled" name="nachricht" multiline={true} rows="10" />
            </FormControl>
            <FormControl>
                <div style={{ padding: 20 }}>
                    <Grid container spacing={2}>
                        <div className="form-submit">
                            <Button variant="contained" color="primary">Submit</Button>
                        </div>
                    </Grid>
                </div>
        </FormControl>
        </>
        
    )
}

export default contactForm
