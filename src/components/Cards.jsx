import { Badge, Box, Button, Card, Grid, Group, Image, Paper, Stack, Text } from '@mantine/core';
import React, { useState } from 'react';
import Pills from './Pills';
import { FaDesktop, FaMobile, FaMobileAlt, FaRegClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import js from "../../public/tech-icons/javascript-color.svg"
import react from "../../public/tech-icons/react-color.svg"
import node from "../../public/tech-icons/nodedotjs-color.svg"
import mongo from "../../public/tech-icons/mongodb-color.svg"
import firebase from "../../public/tech-icons/firebase-color.svg"
import mysql from "../../public/tech-icons/mysql-color.svg"
import java from "../../public/tech-icons/java-color.svg"
import csh from "../../public/tech-icons/csharp.svg"
import expo from "../../public/tech-icons/expo-color.svg"

function Cards({ icon, title, text, text2, pills, projects, canView }) {
  const navigation = useNavigate();
  const [hoveredProject, setHoveredProject] = useState(null);

  const getTechIcon = (tech) => {
    const techMap = {
      'javascript': js,
      'react': react,
      'node': node,
      'mongodb': mongo,
      'firebase': firebase,
      'mysql': mysql,
      'java': java,
      'csharp': csh,
      'expo': expo
    };
    return techMap[tech.toLowerCase()];
  };

  return (
    <Paper
      style={{
        maxWidth: '100%',
        backgroundColor: 'transparent',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        padding: '20px', // Reduced padding for smaller screens
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box>
        <Group style={{ alignItems: 'center', flexWrap: 'wrap' }}>
          {icon && (
            <Box style={{ marginBottom: '16px' }}>
              {icon}
            </Box>
          )}

          {title && (
            <>
              <Text
                style={{
                  fontSize: '24px', // Smaller base font size
                  '@media (min-width: 768px)': {
                    fontSize: '32px'
                  },
                  fontWeight: 'bold',
                  marginBottom: '16px',
                  color: 'white',
                  fontFamily: 'Albert Sans',
                  letterSpacing: '0.5px',
                }}
              >
                {title}
              </Text>

              {canView && (
                <Group ml={'auto'}>
                  <Button
                    variant='subtle'
                    color='white'
                    onClick={() => navigation("/projects")}
                    style={{
                      fontSize: '14px', // Smaller base font size
                      '@media (min-width: 768px)': {
                        fontSize: '16px'
                      }
                    }}
                  >
                    View All
                  </Button>
                </Group>
              )}
            </>
          )}
        </Group>

        {text && (
          <Text
            style={{
              fontSize: '16px', // Smaller base font size
              '@media (min-width: 768px)': {
                fontSize: '20px'
              },
              lineHeight: '1.6',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.9)',
              fontFamily: 'Albert Sans',
            }}
          >
            {text}
          </Text>
        )}

        {text2 && (
          <Text
            style={{
              marginTop: '16px', // Reduced margin
              fontSize: '16px', // Smaller base font size
              '@media (min-width: 768px)': {
                fontSize: '20px'
              },
              lineHeight: '1.6',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.9)',
              fontFamily: 'Albert Sans',
            }}
          >
            {text2}
          </Text>
        )}

        {pills?.length > 0 && (
          <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '24px' }}>
            {pills.map((item, index) => (
              <Pills key={item.id} name={item.name} icon={item.icon} />
            ))}
          </Box>
        )}

        {projects?.length > 0 && (
          projects.map((project, index) => (
            <Grid mb={12} key={index}>
              <Grid.Col span={{ base: 12, sm: 12, md: 12, lg: 6 }}>
                <Box style={{ position: 'relative' }}>
                  <a
                    href={project?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'block', position: 'relative' }}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <Image
                      src={project.image}
                      w="100%"
                      style={{
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        transform: hoveredProject === index ? 'translateY(-2px)' : 'translateY(0)',
                        boxShadow: hoveredProject === index ? '0 4px 12px rgba(0, 0, 0, 0.3)' : 'none',
                        filter: hoveredProject === index ? 'blur(4px)' : 'none',
                      }}
                    />
                    {hoveredProject === index && project.technologies && (
                      <Box
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '1rem',
                          zIndex: 10,
                        }}
                      >
                        {project.technologies.map((tech, idx) => {
                          const iconSrc = getTechIcon(tech);
                          return iconSrc ? (
                            <Box
                              key={idx}
                              style={{
                                width: '48px',
                                height: '48px',
                                backgroundColor: 'white',
                                borderRadius: '50%',
                                padding: '8px',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer',
                                transform: 'scale(1)',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.1)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                              }}
                            >
                              <img
                                src={iconSrc}
                                alt={tech}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'contain',
                                }}
                              />
                            </Box>
                          ) : null;
                        })}
                      </Box>
                    )}

                  </a>
                </Box>
              </Grid.Col>

              <Grid.Col span={{ base: 12, sm: 12, md: 12, lg: 6 }}>
                <Text
                  style={{
                    fontFamily: "Albert Sans",
                    color: "white",
                    fontSize: '24px', // Smaller base font size
                    '@media (min-width: 768px)': {
                      fontSize: '34px'
                    },
                    fontWeight: 900
                  }}
                >
                  {project.name}
                </Text>
                <Box>
                  <Text
                    style={{
                      marginBottom: 12,
                      fontFamily: "Albert Sans",
                      color: "white",
                      fontWeight: 'bold',
                      fontSize: '16px', // Smaller base font size
                      '@media (min-width: 768px)': {
                        fontSize: '18px'
                      }
                    }}
                  >
                    Project Type: {project?.type}
                  </Text>
                  <Group>
                    <FaRegClock color='white' />
                    <Text
                      style={{
                        fontFamily: "Albert Sans",
                        color: "white",
                        fontSize: '14px', // Smaller base font size
                        '@media (min-width: 768px)': {
                          fontSize: '16px'
                        }
                      }}
                    >
                      {project.duration}
                    </Text>
                  </Group>
                  <Group mt={12}>
                    {project.isMobile && <FaMobileAlt size={24} color='white' />}
                    {project.isDesktop && <FaDesktop size={24} color='white' />}
                  </Group>
                </Box>
              </Grid.Col>
            </Grid>
          ))
        )}
      </Box>
    </Paper>
  );
}

export default Cards;