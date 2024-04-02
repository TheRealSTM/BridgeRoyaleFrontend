import React, { ChangeEvent, useState } from 'react';
import { Container, Grid, Paper, Typography, Avatar, Tabs, Tab, Box, Chip } from '@mui/material';

interface TabPanelProps {
    children?: React.ReactNode;
    value: number;
    index: number;
  }

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const profileData = {
    userName: "UserName",
    realName: "Real Name",
    cityStateCountry: "City, State, Country",
    dateJoined: "January 1, 2020",
    followers: 150,
    profileViews: 1200,
    status: "Online",
  };

  const handleTabChange = (event: ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Container>
      <Paper sx={{ p: 2, margin: 'auto', marginTop: 2, maxWidth: 500 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar sx={{ width: 56, height: 56 }} />
          </Grid>
          <Grid item xs={12} sm>
            <Typography variant="h6">{profileData.userName}</Typography>
            <Typography>{profileData.realName}</Typography>
            <Typography>{profileData.cityStateCountry}</Typography>
          </Grid>
          <Grid item container xs={12} spacing={1} justifyContent="space-evenly">
            <Grid item>
              <Typography>Date Joined: {profileData.dateJoined}</Typography>
            </Grid>
            <Grid item>
              <Typography>Followers: {profileData.followers}</Typography>
            </Grid>
            <Grid item>
              <Typography>Profile Views: {profileData.profileViews}</Typography>
            </Grid>
            <Grid item>
              <Chip label={profileData.status} color={profileData.status === "Online" ? "success" : "default"} />
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: 2 }}>
          <Tabs value={selectedTab} onChange={handleTabChange}>
            <Tab label="Bridge" />
            <Tab label="Hearts" />
            {/* Additional tabs as needed */}
          </Tabs>
        </Box>
        <TabPanel value={selectedTab} index={0}>Bridge History Content</TabPanel>
        <TabPanel value={selectedTab} index={1}>Hearts History Content</TabPanel>
        {/* Additional TabPanels as needed */}
      </Paper>
    </Container>
  );
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default Profile;
