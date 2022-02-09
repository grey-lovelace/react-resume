import React from 'react';
import { Box, Typography } from '@mui/material';

function TabPanel(props) {    
    const { children, currentTab, tabName, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={currentTab !== tabName}
            id={`full-width-tabpanel-${tabName}`}
            aria-labelledby={`full-width-tab-${tabName}`}
            {...other}
        >
        {currentTab === tabName && (
            <Box p={3}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   tabName: PropTypes.any.isRequired,
//   currentTab: PropTypes.any.isRequired,
// };

export default TabPanel;