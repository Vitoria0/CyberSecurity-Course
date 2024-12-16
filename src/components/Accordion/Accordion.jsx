// src/components/AccordionComponent.jsx
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionComponent = ({ arrayAccordionItems =[] }) => {
  return (
    <Box sx={{ width: '100%' }}>
      {arrayAccordionItems.map((accordion, index) => (
        <Accordion key={index} sx={{backgroundColor: '#1C152E80', color: '#FFF', borderRadius: '8px', border: '1px solid #AD61FF', }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#AD61FF' }} />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{accordion.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{accordion.text}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default AccordionComponent;
