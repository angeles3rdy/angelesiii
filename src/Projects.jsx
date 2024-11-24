import { Box, Button, Center, Divider, Grid, Group, Image, Paper, Stack, Text, Timeline } from '@mantine/core'
import React from 'react'
import Cards from './components/Cards';
import { FaGears, FaLaptopCode } from 'react-icons/fa6';
import pawstit from "../public/prj_pawstit.jpg"
import auction from "../public/auction.jpg"
import auction1 from "../public/auction1.jpg"
import ae from "../public/ae.jpg"
import '@mantine/carousel/styles.css';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    name: "Pawst IT: A Micro Social Media Pet Application with Integration of Gemini AI",
    duration: "March 2024 - November 2024",
    isMobile: true,
    isDesktop: true,
    image: pawstit,
    url: "https://pawst-it-web-2.vercel.app",
    techUsed: "ReactJS, React Native, Firebase, Gemini AI, Expo, RNMapbox (Mobile), Leaflet (Web)",
    type: "Academic",
    technologies: ["react", "javascript", "firebase", "expo"]

  },
  {
    id: 2,
    name: "Windows Form Auction System v2",
    duration: "June 2024",
    isDesktop: true,
    image: auction,
    techUsed: "C#, MySQL",
    type: "Academic",
    technologies: ["csharp", "mysql"]

  },
  {
    id: 3,
    name: "Windows Form Auction System v1",
    duration: "January 2024",
    isDesktop: true,
    image: auction1,
    techUsed: "C#, MySQL",
    type: "Academic",
    technologies: ["csharp", "mysql"]

  },
  {
    id: 4,
    name: "AE System: A Console Based Inventory Control System with Expiration Date Calculator and Critical Level Indicator",
    duration: "January 2022",
    isDesktop: true,
    image: ae,
    techUsed: "Java, MySQL",
    type: "Academic",
    technologies: ["java", "mysql"]

  },

]

function Projects() {

  const navigation = useNavigate();

  return (
    <div style={{
      padding: '48px 24px',
      minHeight: '100vh',
    }}>
      <Box style={{
        maxWidth: '1200px',
        margin: '0 auto',
        height: '100%'
      }}>
        <Button onClick={() => navigation(-1)} variant='subtle' color='white'>
          <Text style={{ fontFamily: "Albert Sans", fontWeight: "bold", textDecorationLine: 'underline' }}>Go Back</Text>
        </Button>
        <Cards
          icon={<FaLaptopCode color='white' size={'24px'} />}
          title="Projects"
          projects={projects}
        />
      </Box>
    </div>
  )
}

export default Projects