import { Affix, Anchor, Box, Button, Center, Divider, Grid, Group, Image, Paper, Stack, Text, Timeline, Transition } from '@mantine/core'
import React, { useEffect, useRef, useState } from 'react'
import { IoMdMail, IoMdPerson, IoMdPin } from "react-icons/io";
import Cards from './components/Cards';
import { FaGears, FaLaptopCode } from 'react-icons/fa6';
import Pills from './components/Pills';
import js from "../public/tech-icons/javascript-color.svg"
import react from "../public/tech-icons/react-color.svg"
import node from "../public/tech-icons/nodedotjs-color.svg"
import mongo from "../public/tech-icons/mongodb-color.svg"
import firebase from "../public/tech-icons/firebase-color.svg"
import mysql from "../public/tech-icons/mysql-color.svg"
import java from "../public/tech-icons/java-color.svg"
import csh from "../public/tech-icons/csharp.svg"
import expo from "../public/tech-icons/expo-color.svg"
import fb from "../public/tech-icons/facebook.svg"
import linkedin from "../public/tech-icons/linkedin.svg"
import github from "../public/tech-icons/github.svg"
import pawstit from "../public/prj_pawstit.jpg"
import { FaBook } from 'react-icons/fa';
import { IoCodeSlash, IoSparkles } from 'react-icons/io5';
import Recog from './components/Recog';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import classes from "./App.module.css"
import me1 from "../public/me1.jpg";
import sittingme from "../public/me_sitting1.jpg";
import { useNavigate } from 'react-router-dom';
import EmailModal from './components/EmailModal';
import { useWindowScroll } from '@mantine/hooks';
import Certifications from './components/Certifications';

const techStack = [
  { id: 2, name: "React & React Native", icon: react },
  { id: 1, name: "Javascript", icon: js },
  { id: 3, name: "NodeJS", icon: node },
  { id: 4, name: "MongoDB", icon: mongo },
  { id: 5, name: "Firebase", icon: firebase },
  { id: 6, name: "MySQL", icon: mysql },
  { id: 7, name: "C-Sharp", icon: csh },
  { id: 8, name: "Java", icon: java },
  { id: 9, name: "Expo", icon: expo }
]

const projects = [
  {
    id: 1,
    name: "Pawst IT: A Micro Social Media Pet Application with Integration of Gemini AI",
    duration: "March 2024 - November 2024",
    isMobile: true,
    isDesktop: true,
    image: pawstit,
    type: "Academic",
    technologies: ["react", "javascript", "firebase", "expo"]
  }
]

const BackgroundParticles = () => {
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Generate initial particles
    const generateParticles = () => {
      const particleCount = 100;
      return Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`,
        opacity: Math.random() * 0.3 + 0.1
      }));
    };

    let animationParticles = generateParticles();

    // Animate particles with more fluid movement
    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      animationParticles.forEach((particle, index) => {
        // Add slight oscillation
        particle.x += particle.speedX + Math.sin(particle.y * 0.01) * 0.2;
        particle.y += particle.speedY + Math.cos(particle.x * 0.01) * 0.2;

        // Wrap around screen edges
        particle.x = (particle.x + canvas.width) % canvas.width;
        particle.y = (particle.y + canvas.height) % canvas.height;

        // Draw particle with subtle glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);

        // Create radial gradient for glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 3
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity})`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fill();
      });

      requestAnimationFrame(animateParticles);
    };

    // Start animation
    const animationFrame = requestAnimationFrame(animateParticles);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};



function App() {

  const navigation = useNavigate();
  const [scroll, scrollTo] = useWindowScroll();
  const [emailMe, setEmailMe] = useState(false);

  return (
    <div style={{
      padding: '48px 24px',
      minHeight: '100vh',
    }}>

      <BackgroundParticles />

      <Box style={{
        maxWidth: '1200px',
        margin: '0 auto',
        height: '100%'
      }}>
        <Grid justify='space-between' align="center" gutter={48}>
          <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 6, lg: 5 }}>
            <Center>
              <Image
                src={me1}
                radius={'lg'}
                style={{
                  width: '400px',
                  maxWidth: '400px',
                  height: '400px',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
              />
            </Center>
          </Grid.Col>

          <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 6, lg: 7 }}>
            <Box>
              <Text style={{
                fontFamily: "Albert Sans",
                fontWeight: '900',
                fontSize: '3.5rem',
                lineHeight: '1.2',
                textAlign: 'center',
                color: "white",
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>
                Angeles III C. Tablante
              </Text>
            </Box>

            <Center mt={16} style={{ alignItems: 'center' }}>
              <IoMdPin color='white' size={24} style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' }} />
              <Text style={{
                marginLeft: 12,
                color: 'white',
                fontFamily: "Albert Sans",
                fontWeight: 500,
                fontSize: "22px",
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>
                Manila, Philippines
              </Text>
            </Center>

            <Divider
              my={32}
              style={{
                opacity: 0.5,
                width: '80%',
                margin: '32px auto'
              }}
            />

            <Text style={{
              textAlign: 'center',
              fontFamily: "Albert Sans",
              fontWeight: '400',
              color: 'white',
              fontStyle: 'italic',
              fontSize: '24px',
              letterSpacing: '1px'
            }}>
              Mobile / Backend / Database / Design
            </Text>

            <Center mt={32}>
              <Button
                onClick={() => { setEmailMe(true) }}
                variant='outline'
                size='xl'
                radius={'md'}
                leftSection={<IoMdMail size={24} style={{ color: 'white' }} />}
                style={{
                  backgroundColor: 'rgba(115, 115, 115, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  padding: '20px 32px',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(115, 115, 115, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(115, 115, 115, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Text style={{
                  fontFamily: 'Albert Sans',
                  color: "white",
                  fontSize: '18px',
                  fontWeight: 500
                }}>
                  Send an Email
                </Text>
              </Button>
            </Center>
          </Grid.Col>
        </Grid>

        <Stack mt={48}>
          <Cards
            icon={<IoMdPerson color='white' size={'24px'} />}
            title="About"
            text="I'm a mobile developer based in the Philippines. I have experience on building cross-platform applications, websites, and have interest on managing databases, designing UI, and also have skills on backend development."
            text2="During my academic years, I have started from assisting in development and grew to being the lead developer, effectively leading to us to succeed our various academe projects."
          />

          <Cards
            icon={<FaGears color='white' size={'24px'} />}
            title="Tech Stack"
            text={"The tech stack I use when I'm building projects."}
            pills={techStack}
          />

          <Cards
            icon={<FaLaptopCode color='white' size={'24px'} />}
            title="Projects"
            canView={true}
            projects={projects}
          />

          <Grid
            ml={2}
            style={{
              minHeight: '100%',
              display: 'flex',
              alignItems: 'stretch'
            }}
          >
            <Grid.Col
              span={{ base: 12, sm: 6, md: 4, lg: 4 }}
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Paper
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '40px',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Group>
                  <Box style={{ marginBottom: '24px' }}>
                    <FaBook color="white" size={20} />
                  </Box>

                  <Text
                    style={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      marginBottom: '24px',
                      color: 'white',
                      fontFamily: 'Albert Sans',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Education
                  </Text>
                </Group>

                <Timeline
                  bulletSize={16}
                  lineWidth={2}
                  active={0}
                  style={{
                    flex: 1
                  }}
                >
                  <Timeline.Item
                    color="yellow"
                    title="STI College Caloocan"
                    style={{ color: "white", fontFamily: "Albert Sans" }}
                  >
                    <Text c="dimmed" size="md" style={{ fontFamily: "Albert Sans" }}>
                      Bachelor of Science in Information Technology (BSIT)
                    </Text>
                    <Text size="sm" mt={4} style={{ fontFamily: "Albert Sans" }}>
                      2021 - Present
                    </Text>
                  </Timeline.Item>

                  <Timeline.Item
                    color="gray"
                    title="Arellano University Jose Rizal"
                    style={{ color: "white", fontFamily: "Albert Sans" }}
                  >
                    <Text c="dimmed" size="md" style={{ fontFamily: "Albert Sans" }}>
                      Science, Technology, Engineering, and Mathematics (STEM)
                    </Text>
                    <Text size="sm" mt={4} style={{ fontFamily: "Albert Sans" }}>
                      2019 - 2021
                    </Text>
                  </Timeline.Item>

                  <Timeline.Item
                    color="gray"
                    title="Arellano University Jose Rizal"
                    style={{ color: "white", fontFamily: "Albert Sans" }}
                  >
                    <Text c="dimmed" size="md" style={{ fontFamily: "Albert Sans" }}>
                      Junior High School
                    </Text>
                    <Text size="sm" mt={4} style={{ fontFamily: "Albert Sans" }}>
                      2015 - 2019
                    </Text>
                  </Timeline.Item>

                  <Timeline.Item
                    color="gray"
                    title="Concepcion Elementary School"
                    style={{ color: "white", fontFamily: "Albert Sans" }}
                  >
                    <Text c="dimmed" size="md" style={{ fontFamily: "Albert Sans" }}>
                      Primary Education
                    </Text>
                    <Text size="sm" mt={4} style={{ fontFamily: "Albert Sans" }}>
                      2009 - 2015
                    </Text>
                  </Timeline.Item>
                </Timeline>
              </Paper>
            </Grid.Col>

            <Grid.Col
              span={{ base: 12, sm: 6, md: 8, lg: 8 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px' // Add space between stacked boxes
              }}
            >
              <Paper
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '24px', // Reduced padding
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  flex: 0.3, // Reduced flex to make it smaller
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Group>
                  <Box style={{ marginBottom: '16px' }}>
                    <IoSparkles color="white" size={20} />
                  </Box>

                  <Text
                    style={{
                      fontSize: '28px', // Slightly smaller title
                      fontWeight: 'bold',
                      marginBottom: '16px',
                      color: 'white',
                      fontFamily: 'Albert Sans',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Certificates/Awards
                  </Text>
                </Group>

                <Certifications height={300} /> {/* Reduced height prop */}
              </Paper>

              <Paper
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '40px',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  flex: 0.7, 
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Group>
                  <Box style={{ marginBottom: '24px' }}>
                    <IoCodeSlash color="white" size={20} />
                  </Box>

                  <Text
                    style={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      marginBottom: '24px',
                      color: 'white',
                      fontFamily: 'Albert Sans',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Other things
                  </Text>
                </Group>

              </Paper>
            </Grid.Col>
          </Grid>
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '32px',
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid rgba(115, 115, 115, 0.3)',
              // backgroundColor: 'rgba(115, 115, 115, 0.1)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }}
          >
            <Stack align="center" gap="lg">
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: "Albert Sans",
                  color: "white",
                  fontSize: '24px',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                }}
              >
                Connect With Me
              </Text>

              <Group gap="xl">
                <Anchor
                  href="https://www.facebook.com/terdiiiii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    borderRadius: '50%',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(59, 89, 152, 0.5)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Image
                    style={{
                      width: 55,
                      height: 55,
                      cursor: 'pointer',
                      filter: 'brightness(0.9) contrast(1.2)'
                    }}
                    src={fb}
                  />
                </Anchor>

                <Anchor
                  href="https://github.com/angeles3rdy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    borderRadius: '50%',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.5)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Image
                    style={{
                      width: 55,
                      height: 55,
                      cursor: 'pointer',
                      filter: 'brightness(0.9) contrast(1.2)'
                    }}
                    src={github}
                  />
                </Anchor>

                <Anchor
                  href="https://www.linkedin.com/in/angeles-iii-tablante-4b31b8276/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    borderRadius: '50%',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 119, 181, 0.5)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Image
                    style={{
                      width: 55,
                      height: 55,
                      cursor: 'pointer',
                      filter: 'brightness(0.9) contrast(1.2)'
                    }}
                    src={linkedin}
                  />
                </Anchor>
              </Group>
            </Stack>
          </Box>

          <Affix position={{ bottom: 20, right: 20 }}>
            <Transition transition="slide-up" mounted={scroll.y > 0}>
              {(transitionStyles) => (
                <Button
                  variant='outline'
                  color='white'
                  style={transitionStyles}
                  onClick={() => scrollTo({ y: 0 })}
                >
                  Scroll to top
                </Button>
              )}
            </Transition>
          </Affix>
        </Stack>

      </Box>
      {emailMe &&
        <EmailModal opened={emailMe} close={() => setEmailMe(false)} />
      }

      <Divider mt={12} color='#737373' />
      <Text style={{ fontFamily: "Albert Sans", color: "white" }}>© 2024 Angeles III | All rights reserved</Text>
    </div>
  )
}

export default App