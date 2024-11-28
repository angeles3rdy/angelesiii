import { Badge, Box, Button, Center, Grid, Group, Image, Modal, Paper, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react';
import { FaPalette, FaRegClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function DesignProjectsCards({ icon, title, designProjects, canView }) {
  const navigation = useNavigate();
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [opened, { open, close }] = useDisclosure(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    open();
  };

  const handleNextImage = () => {
    if (selectedProject && selectedProject.image) {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % selectedProject.image.length
      );
    }
  };

  return (
    <>
      <Paper
        style={{
          maxWidth: '100%',
          backgroundColor: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '20px',
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
                    fontSize: '24px',
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
                      onClick={() => navigation("/design-projects")}
                      style={{
                        fontSize: '14px',
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

          <Grid gutter="md">
            {designProjects?.length > 0 && (
              designProjects.map((project, index) => (
                <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4, lg: 4 }}>
                  <Box
                    style={{
                      position: 'relative',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => handleProjectClick(project)}
                  >
                    <Image
                      src={project?.image[0]}
                      alt={project.name}
                      style={{
                        backgroundColor: "white",
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                        transform: hoveredProject === index ? 'scale(1.05)' : 'scale(1)',
                        filter: hoveredProject === index ? 'brightness(70%)' : 'brightness(100%)',
                      }}
                    />

                    {hoveredProject === index && (
                      <Box
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: 'rgba(0, 0, 0, 0.6)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: '16px',
                          textAlign: 'center',
                          color: 'white',
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: 'Albert Sans',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            marginBottom: '8px',
                          }}
                        >
                          {project.name}
                        </Text>
                        <Group>
                          <FaRegClock color='white' />
                          <Text
                            style={{
                              fontFamily: 'Albert Sans',
                              fontSize: '14px',
                            }}
                          >
                            {project.duration}
                          </Text>
                        </Group>
                        <Badge
                          variant="light"
                          color="grape"
                          style={{
                            fontFamily: "Albert Sans",
                            fontSize: '12px',
                            marginTop: '8px'
                          }}
                        >
                          {project.techUsed}
                        </Badge>
                        {project.image.length > 1 && (
                          <Text
                            style={{
                              fontFamily: 'Albert Sans',
                              fontSize: '10px',
                              marginTop: '8px',
                              opacity: 0.7
                            }}
                          >
                            Click to cycle through images
                          </Text>
                        )}
                      </Box>
                    )}
                  </Box>
                </Grid.Col>
              ))
            )}
          </Grid>
        </Box>
      </Paper>

      <Modal
        withCloseButton={false}
        opened={opened}
        onClose={close}
        styles={{
          root: {
            position: 'relative',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(10px)',
          },
          inner: {
            backgroundColor: 'transparent',
          },
          content: {
            backgroundColor: '#262626',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            color: 'white',
            padding: '20px',
          },
          body: {
            padding: 0,
          },

        }}
        centered
      >

        {selectedProject && (
          <Box>
            <Text
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '16px',
                color: 'white',
                fontFamily: 'Albert Sans',
                letterSpacing: '0.5px',
                textAlign: 'center'
              }}
            >
              {selectedProject.name}
            </Text>

            <Center>
              <Button onClick={() => navigation(-1)} variant='subtle' color='white' style={{ justifyContent: 'center' }}>
                <Text>Contact for more</Text>
              </Button>
            </Center>

            <Image
              src={selectedProject.image[currentImageIndex]}
              alt={`${selectedProject.name} - Image ${currentImageIndex + 1}`}
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                marginBottom: '4px',
                borderRadius: '12px',
              }}
            />

            {selectedProject.image.length > 1 && (
              <Group justify="center" mb="md">
                <Button
                  variant="outline"
                  color="white"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontFamily: 'Albert Sans',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    }
                  }}
                  onClick={handleNextImage}
                >
                  Next ({currentImageIndex + 1}/{selectedProject.image.length})
                </Button>
              </Group>
            )}

            <Group justify="center" mt="md">
              <Group align="center" gap="xs">
                <FaRegClock color="white" />
                <Text
                  style={{
                    fontFamily: 'Albert Sans',
                    color: 'white',
                    fontSize: '14px',
                  }}
                >
                  {selectedProject.duration}
                </Text>
              </Group>
            </Group>

            <Group justify="center" mt="sm">
              <Badge
                variant="light"
                color="grape"
                style={{
                  fontFamily: "Albert Sans",
                  fontSize: '12px',
                }}
              >
                {selectedProject.techUsed}
              </Badge>
            </Group>

            <Button onClick={close} mt={12} fullWidth variant='outline' color='white'>
              <Text>Close</Text>
            </Button>
          </Box>
        )}
      </Modal>
    </>
  );
}

export default DesignProjectsCards;