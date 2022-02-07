const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
    paperRoot: {
      backgroundColor: '#cadee5',
      padding: '2px'
    },
    thickDivider: {
      height: 4,
      color: '#cadee5'
    }
}));

export default useStyles