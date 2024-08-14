import React from 'react';
import { IconButton, Typography, Breadcrumbs, Link } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <IconButton onClick={handleBackClick} style={{ padding: 0 }}>
        <ArrowBackIcon color="primary" />
      </IconButton>
      <Breadcrumbs aria-label="breadcrumb" style={{ marginLeft: 8 }}>
        <Link color="inherit" href="/" onClick={handleBackClick} style={{ textDecoration: 'none' }}>
          <Typography color="textSecondary">Flashcard Page</Typography>
        </Link>
        <Typography color="textPrimary">Admin Dashboard</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default BackButton;
