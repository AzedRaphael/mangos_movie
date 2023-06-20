import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Box, CircularProgress } from '@mui/material';
// import { useTheme } from '@mui/styles';
import useStyles from './styles';
import mangos from '../../assets/Mangos.png';
import { useGetGenresQuery } from '../../services/TMTD';
import genreIcons from '../../assets/genres';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

// const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';

// const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = () => {
  // eslint-disable-next-line
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
  const classes = useStyles();
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          // src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          src={mangos}
          alt="movie logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {
          categories.map(({ label, value }) => (
            <Link key={value} className={classes.links} to="/">
              <ListItem onClick={() => dispatch(selectGenreOrCategory(value))}>
                <ListItemIcon>
                  <img src={genreIcons[label.toLowerCase()]} className={classes.genreImages} height={20} />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            </Link>
          ))
        }
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        { isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : data.genres.map(({ name, id }) => (
          <Link key={id} className={classes.links} to="/">
            <ListItem onClick={() => dispatch(selectGenreOrCategory(id))}>
              <ListItemIcon>
                <img src={genreIcons[name.toLowerCase()]} className={classes.genreImages} height={20} />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
