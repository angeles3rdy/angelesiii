import { Box, Button, Tabs, Text } from '@mantine/core'
import React, { useEffect } from 'react'
import Cards from './components/Cards';
import { FaGears, FaLaptopCode, FaPalette } from 'react-icons/fa6';
import pawstit from "../public/prj_pawstit.jpg"
import auction from "../public/auction.jpg"
import auction1 from "../public/auction1.jpg"
import ae from "../public/ae.jpg"
import phone from "../public/PHONES2.svg"
import phone2 from "../public/PHONES.svg"
import register from "../public/register.svg"
import '@mantine/carousel/styles.css';
import { useNavigate } from 'react-router-dom';
import DesignProjectsCards from './components/DesignProjectsCards';
import { FaPallet } from 'react-icons/fa';

const softwareProjects = [
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

const designProjects = [
  {
    id: 1,
    name: "Login / Register Template",
    duration: "November 2024",
    image: [phone2, phone, register],
    techUsed: "Figma",
    type: "Hobby",
  },
]

function Projects() {
  const navigation = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <Button
          onClick={() => navigation(-1)}
          variant='subtle'
          color='white'
          mb="md"
        >
          <Text style={{ fontFamily: "Albert Sans", fontWeight: "bold", textDecorationLine: 'underline' }}>
            Go Back
          </Text>
        </Button>

        <Tabs defaultValue="software" variant="outline">
          <Tabs.List>
            <Tabs.Tab
              style={{ color: "white" }}
              value="software"
              leftSection={<FaLaptopCode size={16} />}
            >
              Software Projects
            </Tabs.Tab>
            <Tabs.Tab
              style={{ color: "white" }}
              value="design"
              leftSection={<FaPalette size={16} />}
            >
              Design Projects
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="software" pt="xs">
            <Cards
              icon={<FaLaptopCode color='white' size={'24px'} />}
              title="Software Projects"
              projects={softwareProjects}
            />
          </Tabs.Panel>

          <Tabs.Panel value="design" pt="xs">
            <DesignProjectsCards
              canView={false}
              icon={<FaPalette color='white' size={'24px'}/>}
              title={"Design Projects"}
              designProjects={designProjects}
            />
          </Tabs.Panel>
        </Tabs>
      </Box>
    </div>
  )
}

export default Projects