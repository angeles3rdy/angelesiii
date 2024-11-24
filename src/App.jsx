import { Affix, Anchor, Box, Button, Center, Divider, Grid, Group, Image, Paper, Stack, Text, Timeline, Transition } from '@mantine/core'
import React, { useState } from 'react'
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
import { IoSparkles } from 'react-icons/io5';
import Recog from './components/Recog';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import classes from "./App.module.css"
import me1 from "../public/me1.jpg";
import sittingme from "../public/me_sitting1.jpg";
import { useNavigate } from 'react-router-dom';
import EmailModal from './components/EmailModal';
import { useWindowScroll } from '@mantine/hooks';

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
    technologies: ["react", "javascript", "node", "mongodb"]
  }
]

function App() {

  const navigation = useNavigate();
  const [scroll, scrollTo] = useWindowScroll();
  const [emailMe, setEmailMe] = useState(false);

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
              minHeight: '100%'
            }}
          >
            <Grid.Col span={{ base: 12, sm: 6, md: 6, lg: 6 }}>
              <Paper
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '40px',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  height: '100%',
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

            <Grid.Col span={{ base: 12, sm: 6, md: 6, lg: 6 }}>
              <Paper
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '40px',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Group>
                  <Box style={{ marginBottom: '24px' }}>
                    <IoSparkles color="white" size={20} />
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
                    Pending Section
                  </Text>
                </Group>

                {/* <Carousel
                  height={450}
                  withIndicators
                  slideSize="100%"
                  slideGap="lg"
                  loop
                  align="start" withControls classNames={classes}>
                  <Carousel.Slide>
                    <Recog name={"Zeze Pastolero"} position={"Capstone Adviser & Professor, STI College Caloocan"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"} />
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <Recog name={"Zeze Pastolero"} position={"Capstone Adviser & Professor, STI College Caloocan"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"} />
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <Recog name={"Zeze Pastolero"} position={"Capstone Adviser & Professor, STI College Caloocan"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"} />
                  </Carousel.Slide>
                </Carousel> */}

              </Paper>
            </Grid.Col>
          </Grid>
          <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Stack>
              <Text style={{ textAlign: 'center', fontFamily: "Albert Sans", color: "white", fontSize: '20px', fontWeight: 'bold' }}>Socials</Text>

              <Group>
                <Anchor href="https://www.facebook.com/terdiiiii/" target="_blank" rel="noopener noreferrer">
                  <Image style={{ width: 45, height: 45, cursor: 'pointer' }} src={fb} />
                </Anchor>
                <Anchor href="https://github.com/angeles3rdy" target="_blank" rel="noopener noreferrer">
                  <Image style={{ width: 45, height: 45, cursor: 'pointer' }} src={github} />
                </Anchor>
                <Anchor href="https://www.linkedin.com/in/angeles-iii-tablante-4b31b8276/" target="_blank" rel="noopener noreferrer">
                  <Image style={{ width: 45, height: 45, cursor: 'pointer' }} src={linkedin} />
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
    </div>
  )
}

export default App