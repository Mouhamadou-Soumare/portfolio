import React from "react"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code';
import TungstenIcon from '@mui/icons-material/Tungsten';
import './portfolio.css';

const Portfolio = () => {
    return (
     <section className="portfolio">
            <h5>Apprendre à me connaitre </h5>
            <h2>A propos de moi !</h2>
       <Timeline position="alternate">
            <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
                    10:00 am

        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Alternant Développeur Full Stack
          </Typography>
          <Typography>Alliantech  - Genevilliers, France - 2021 2023</Typography>
        </TimelineContent>
      </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
                    10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <TungstenIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Bachelor Développeur web
          </Typography>
          <Typography>HETIC  - Montreuil, France - 2023</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
         10:00 am

        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Stage Développeur Web Wordrpess & Symfony
          </Typography>
          <Typography>Escapade francaise - Paris, France - Avril Juin 2021 (1 mois) </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <TungstenIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Diplôme universitaire de technologie en informatique 
          </Typography>
          <Typography>IUT Paris Descartes  - Paris, France - 2021</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" >
            <TungstenIcon />
          </TimelineDot>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Baccalauréat scientifique
          </Typography>
          <Typography>Lycée Henri Wallon - Aubervilliers, France - 2019</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector  />
          <TimelineDot color="primary" >
            <TungstenIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Diplôme national du brevet
          </Typography>
          <Typography>Lycée Français Théodore Monod - Nouakchott, Mauritanie - 2014</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
     </section>
   
       
    )
}

export default Portfolio