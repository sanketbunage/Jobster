import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import SortIcon from '@material-ui/icons/Sort';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


const useStyles = makeStyles((theme) => ({
    toolbar: {
        padding: '5px'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },

}));


const SortFilter = ({ data }) => {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [company, setCompany] = React.useState('');
    const [jobtype, setJobType] = React.useState('');

    const handleChange = (event) => {
        setCompany((event.target.value) || '');
    };

    const handleJobChange = (event) => {
        setJobType((event.target.value) || '');
    };

    const handleReset = () => {
        setCompany('')
        setJobType('')
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    console.log("data", data)

    return (
        <>
            <Paper className={classes.toolbar}>
                <Button color="primary"
                    size="small"
                    startIcon={<SortIcon />}
                    endIcon={<ArrowDownwardIcon />}
                    onClick={handleClickOpen}
                >Filter</Button>
            </Paper>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Filter your search</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                                Companies
                            </InputLabel>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={company}
                                onChange={handleChange}
                                input={<Input />}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {data.map((x, i) => (
                                    <MenuItem value={x.company}>{x.company}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                                Job types
                            </InputLabel>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={jobtype}
                                onChange={handleJobChange}
                                input={<Input />}
                            >
                                <MenuItem value={'Full-time'}>Full-time</MenuItem>
                                <MenuItem value={'Part-time'}>Part-time</MenuItem>
                                <MenuItem value={'Internship'}>Internship</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleReset} size="small" color="primary">
                        Reset
                    </Button>
                    <Button variant="outlined" size="small" onClick={handleClose} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )



}


export default SortFilter;