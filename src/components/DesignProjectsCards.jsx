import { Badge, Box, Grid, Group, Image, Paper, Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import React, { useState, useEffect } from 'react';
import { FaRegClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';
import '../styles/design-projects.css';

function DesignProjectsCards({ icon, title, designProjects, canView }) {
  const navigation = useNavigate();
  const [hoveredProject, setHoveredProject] = useState(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [carouselRefs, setCarouselRefs] = useState([]);

  useEffect(() => {
    if (designProjects?.length > 0) {
      setCarouselRefs(Array(designProjects.length).fill(null));
    }
  }, [designProjects]);

  return (
    <Paper className="paper-container">
      <Box>
        <Group className="group-container">
          {icon && <Box className="icon-container">{icon}</Box>}
          {title && (
            <Text className="title-text">{title}</Text>
          )}
        </Group>

        <Grid gutter="md">
          {designProjects?.length > 0 &&
            designProjects.map((project, index) => (
              <Grid.Col key={index} span={{ base: 12 }}>
                <Box className="project-card">
                  <Group position="apart" mb="md">
                    <Text className="project-header">{project.name}</Text>

                    <Group spacing="xs">
                      <Group>
                        <FaRegClock color="white" />
                        <Text className="project-duration">{project.duration}</Text>
                      </Group>
                      <Badge
                        variant="light"
                        color="grape"
                        className="project-badge"
                      >
                        {project.techUsed}
                      </Badge>
                    </Group>
                  </Group>

                  {isMobile && project.image?.length > 0 && (
                    <Carousel
                      getEmblaApi={(embla) => {
                        const newRefs = [...carouselRefs];
                        newRefs[index] = embla;
                        setCarouselRefs(newRefs);
                      }}
                      withControls
                      loop
                      slideSize="100%"
                      slideGap="md"
                      align="start"
                      styles={{
                        control: {
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          border: 'none',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                          },
                        },
                        indicators: {
                          bottom: -20,
                        },
                        indicator: {
                          width: 8,
                          height: 8,
                          backgroundColor: 'rgba(255, 255, 255, 0.5)',
                          '&[data-active]': {
                            backgroundColor: 'white',
                          },
                        },
                      }}
                    >
                      {project.image.map((img, imgIndex) => (
                        <Carousel.Slide key={imgIndex}>
                          <Box
                            className="image-container"
                            onMouseEnter={() =>
                              setHoveredProject(`${index}-${imgIndex}`)
                            }
                            onMouseLeave={() => setHoveredProject(null)}
                          >
                            <Image
                              src={img}
                              alt={`${project.name} - Image ${imgIndex + 1}`}
                              className="image"
                              style={{
                                transform:
                                  hoveredProject === `${index}-${imgIndex}`
                                    ? 'scale(1.05)'
                                    : 'scale(1)',
                                filter:
                                  hoveredProject === `${index}-${imgIndex}`
                                    ? 'brightness(70%)'
                                    : 'brightness(100%)',
                              }}
                            />
                          </Box>
                        </Carousel.Slide>
                      ))}
                    </Carousel>
                  )}

                  {!isMobile && (
                    <Grid gutter="md">
                      {project.image?.map((img, imgIndex) => (
                        <Grid.Col key={imgIndex} span={{ sm: 6, md: 4, lg: 4 }}>
                          <Box
                            className="image-container"
                            onMouseEnter={() =>
                              setHoveredProject(`${index}-${imgIndex}`)
                            }
                            onMouseLeave={() => setHoveredProject(null)}
                          >
                            <Image
                              src={img}
                              alt={`${project.name} - Image ${imgIndex + 1}`}
                              className="image"
                              style={{
                                transform:
                                  hoveredProject === `${index}-${imgIndex}`
                                    ? 'scale(1.05)'
                                    : 'scale(1)',
                                filter:
                                  hoveredProject === `${index}-${imgIndex}`
                                    ? 'brightness(70%)'
                                    : 'brightness(100%)',
                              }}
                            />
                          </Box>
                        </Grid.Col>
                      ))}
                    </Grid>
                  )}
                </Box>
              </Grid.Col>
            ))}
        </Grid>
      </Box>
    </Paper>
  );
}

export default DesignProjectsCards;
