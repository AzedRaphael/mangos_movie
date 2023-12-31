// eslint-disable-next-line
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { userSelector } from '../../features/auth';

const Profile = () => {
  // eslint-disable-next-line
  const { user } = useSelector(userSelector);

  const logOut = () => {
    localStorage.clear();

    window.location.href = '/';
  };

  const favoriteMovies = [];

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logOut}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.length ? (
        <Typography variant="h5">
          Add favorites or watchlist some movies to see them here!
        </Typography>
      ) : (
        <Box>
          Favorite Movies
        </Box>
      )}
    </Box>
  );
};

export default Profile;

