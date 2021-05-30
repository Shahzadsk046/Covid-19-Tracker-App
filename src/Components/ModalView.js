import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';

import { Modal, Backdrop, Fade, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({

  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    width: 1000,
    textTransform: 'uppercase',
    fontSize: '300%',
    textAlign:'center',
    margin: '0 auto',
  },

  paper: {
    backgroundColor: 'rgb(168, 211, 203)',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "90%",
    margin: '0 auto',
    paddingLeft: 50,
    fontWeight: 700,
  },

  blue: {
    color: 'rgb(13, 71, 161)', // blue
  },

  red: {
    color: 'rgb(144, 12, 63)', //red
  },

  green: {
    color: 'rgb(0, 77, 64)', //green
  },

  table: {
    textAlign: 'center',
    minWidth: 700,
  }

}));

export default function ModalView(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const country = props.country.Country;
  const countryCode = props.country.CountryCode;
  const totalConfirmed = props.country.TotalConfirmed;
  const totalRecovered = props.country.TotalRecovered;
  const totalDeath = props.country.TotalDeaths;
  const newConfirmed = props.country.NewConfirmed;
  const newRecovered = props.country.NewRecovered;
  const newDeath = props.country.NewDeaths;
  const slug = props.country.Slug;
  const date = new Date(props.country.Date).toDateString();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  function createData(codes, NewConfirmed, TotalConfirmed, NewRecovered, TotalRecovered, NewDeaths, TotalDeaths, Slugs, Dates) {
    return { codes, NewConfirmed, TotalConfirmed, NewRecovered, TotalRecovered, NewDeaths, TotalDeaths, Slugs, Dates };
  }

  const rows = [
    createData(countryCode, newConfirmed, totalConfirmed, newRecovered, totalRecovered, newDeath, totalDeath, slug, date),
  ];

  function CustomizedTables() {
    // const classes = useStyles();

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Country Code</StyledTableCell>
              <StyledTableCell align="right">New Confirmed</StyledTableCell>
              <StyledTableCell align="right">Total Confirmed</StyledTableCell>
              <StyledTableCell align="right">New Recovered</StyledTableCell>
              <StyledTableCell align="right">Total Recovered</StyledTableCell>
              <StyledTableCell align="right">New Deaths</StyledTableCell>
              <StyledTableCell align="right">Total Deaths</StyledTableCell>
              <StyledTableCell align="right">Slug</StyledTableCell>
              <StyledTableCell align="right">Updated On</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.codes}>
                <StyledTableCell component="th" scope="row">
                  {row.codes}
                </StyledTableCell>
                {/* codes, NewConfirmed, TotalConfirmed, NewRecovered, TotalRecovered, NewDeaths, TotalDeaths, Slugs, Dates */}
                <StyledTableCell align="right">{row.NewConfirmed}</StyledTableCell>
                <StyledTableCell align="right">{row.TotalConfirmed}</StyledTableCell>
                <StyledTableCell align="right">{row.NewRecovered}</StyledTableCell>
                <StyledTableCell align="right">{row.TotalRecovered}</StyledTableCell>
                <StyledTableCell align="right">{row.NewDeaths}</StyledTableCell>
                <StyledTableCell align="right">{row.TotalDeaths}</StyledTableCell>
                <StyledTableCell align="right">{row.Slugs}</StyledTableCell>
                <StyledTableCell align="right">{row.Dates}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <div>
    {/*    <button type="button" onClick={handleOpen}>
         {`Show ${country} Complete Data`}
       </button> */}

      <Button variant="contained" color="primary"  onClick={handleOpen}>
        {`Show ${slug} Complete Data`}
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.title}>
              <img width="150px" src={`https://www.countryflags.io/${countryCode}/flat/64.png`} alt={country} />
              <span id="transition-modal-title">{country}
              </span>

            </div>
            <CustomizedTables />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
