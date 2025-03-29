import { Box, Typography, Container } from '@mui/material';

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h2" component="h1">
          App Initialized
        </Typography>
      </Box>
    </Container>
  );
}