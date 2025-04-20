import { Box, Button, Tabs, Text } from '@mantine/core'
import React, { useEffect } from 'react'
import Cards from './components/Cards';
import { FaGears, FaLaptopCode, FaPalette } from 'react-icons/fa6';
import pawstit from "../src/assets/displays/PROJECT_PAWSTIT.jpg"
import auction from "../src/assets/displays/PROJECT_AUCTION.jpg"
import auction1 from "../src/assets/displays/PROJECT_AUCTION1.jpg"
import portobooth from "../src/assets/displays/PROJECT_PORTOBOOTH.jpg"
import ae from "../src/assets/displays/PROJECT_AE.jpg"
import phone2 from "../src/assets/displays/DESIGN_PHONE_1.png"
import phone from "../src/assets/displays/DESIGN_PHONE_2.png"
import register from "../src/assets/displays/DESIGN_PHONE_3.png"
import buildResume1 from "../src/assets/displays/DESIGN_RESUME_1.png"
import buildResume2 from "../src/assets/displays/DESIGN_RESUME_2.png"
import buildResume3 from "../src/assets/displays/DESIGN_RESUME_3.png"
import cookBook1 from "../src/assets/displays/DESIGN_COOKBOOK_1.png"
import cookBook2 from "../src/assets/displays/DESIGN_COOKBOOK_2.png"
import cookBook3 from "../src/assets/displays/DESIGN_COOKBOOK_3.png"

import '@mantine/carousel/styles.css';
import { useNavigate } from 'react-router-dom';
import DesignProjectsCards from './components/DesignProjectsCards';
import { FaPallet } from 'react-icons/fa';

const softwareProjects = [
  {
    name: "Porto-Booth: A Web-Based Photo Booth Application",
    duration: "February 2025",
    isDesktop: true,
    image: portobooth,
    techUsed: "ReactJS",
    type: "Hobby",
    technologies: ["react", "javascript"],
    url: "https://porto-booth.vercel.app/",

  },
  {
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
    name: "Windows Form Auction System v2",
    duration: "June 2024",
    isDesktop: true,
    image: auction,
    techUsed: "C#, MySQL",
    type: "Academic",
    technologies: ["csharp", "mysql"]
  },
  {
    name: "Windows Form Auction System v1",
    duration: "January 2024",
    isDesktop: true,
    image: auction1,
    techUsed: "C#, MySQL",
    type: "Academic",
    technologies: ["csharp", "mysql"]
  },
  {
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
    name: "Sample App",
    duration: "November 2024",
    image: [phone2, phone, register],
    techUsed: "Figma",
    type: "Hobby",
  },
  {
    name: "Recipe Generator",
    duration: "December 2024",
    image: [cookBook1, cookBook2, cookBook3],
    techUsed: "Figma",
    type: "Hobby",
  },
  {
    name: "Resume Builder",
    duration: "December 2024",
    image: [buildResume1, buildResume2, buildResume3],
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