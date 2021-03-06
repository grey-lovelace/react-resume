const { makeStyles } = require("@material-ui/core");

const paperBase = {
  backgroundColor: '#cadee5',
  padding: '2px',
  margin: "auto",
  transition: "0.3s",
  borderRadius: '15px',
  boxShadow: "0 2px 40px -12px rgba(0,0,0,0.3)",
  "&:hover": {
    boxShadow: "0 4px 70px -12.125px rgba(0,0,0,0.3)"
  }
}

const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: '#F3F3F3'
    },
    paperRoot: paperBase,
    paperRootWithPadding: {
      ...paperBase,
      padding: '35px',
    },
    paperRootGray: {
      ...paperBase,
      backgroundColor: '#a5a5a5',
    },
    thickDivider: {
      height: 4,
      color: '#cadee5'
    },
    card: {
      maxWidth: 200,
      height: 300,
      margin: "auto",
      transition: "0.3s",
      borderRadius: '15px',
      boxShadow: "0 4px 30px -12px rgba(0,0,0,0.5)",
      "&:hover": {
        boxShadow: "0 8px 50px -12.125px rgba(0,0,0,0.5)"
      }
    },
    media: {
      paddingTop: "56.25%"
    },
    content: {
      textAlign: "left",
      padding: theme.spacing.unit * 3
    },
    divider: {
      margin: `${theme.spacing.unit * 1}px 0`
    },
    heading: {
      fontWeight: "bold"
    },
    subheading: {
      lineHeight: 1.8
    },
    avatar: {
      display: "inline-block",
      border: "2px solid white",
      "&:not(:first-of-type)": {
        marginLeft: -theme.spacing.unit
      }
    },
}));

export default useStyles