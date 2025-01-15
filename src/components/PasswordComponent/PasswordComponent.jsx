import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function PasswordComponent({callback}) {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState('');


  const evaluatePassword = (password) => {
    let score = 0;
    const feedbackMessages = [];

    // Verificação de comprimento
    if (password.length >= 12) {
      score += 1;
    } else {
      feedbackMessages.push('Use pelo menos 12 caracteres.');
    }

    // Letras maiúsculas
    if (/[A-Z]/.test(password)) {
      score += 1;
    } else {
      feedbackMessages.push('Inclua letras maiúsculas.');
    }

    // Letras minúsculas
    if (/[a-z]/.test(password)) {
      score += 1;
    } else {
      feedbackMessages.push('Inclua letras minúsculas.');
    }

    // Números
    if (/[0-9]/.test(password)) {
      score += 1;
    } else {
      feedbackMessages.push('Inclua números.');
    }

    // Caracteres especiais
    if (/[@$!%*?&#]/.test(password)) {
      score += 1;
    } else {
      feedbackMessages.push('Inclua caracteres especiais (ex.: @$!%*?&#).');
    }

    setStrength(score);
    if(score === 5){
      callback();
    }
    setFeedback(feedbackMessages.join(' '));
  };

  const handleChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    evaluatePassword(newPassword);
  };

  const getStrengthColor = (score) => {
    switch (score) {
      case 0:
      case 1:
        return 'red';
      case 2:
        return 'orange';
      case 3:
        return 'yellow';
      case 4:
        return 'lightgreen';
      case 5:
        return 'green';
      default:
        return 'gray';
    }
  };

  return (
    <Box sx={{ maxWidth: 800, width: '100%', margin: 'auto', textAlign: 'center', padding: 2 }}>
      <TextField
        label="Crie uma senha"
        type="text"
        variant="outlined"
        fullWidth
        value={password}
        onChange={handleChange}
        sx={{ marginBottom: 2, borderRadius: 10  }}
      />
      <LinearProgress
        variant="determinate"
        value={(strength / 5) * 100}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: '#e0e0e0',
          '& .MuiLinearProgress-bar': {
            backgroundColor: getStrengthColor(strength),
          },
        }}
      />
      <Typography variant="body1" color={getStrengthColor(strength)} sx={{ marginTop: 2 }}>
        {strength === 5 ? 'Senha forte!' : 'Senha fraca'}
      </Typography>
      {feedback && (
        <Typography variant="body2" color="primary" sx={{ marginTop: 1 }}>
          {feedback}
        </Typography>
      )}
    </Box>
  );
}

export default PasswordComponent;
