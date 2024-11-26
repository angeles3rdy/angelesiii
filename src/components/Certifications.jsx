import React from 'react';
import { Paper, Text, Box, Group, ScrollArea } from '@mantine/core';
import { IoSparkles } from 'react-icons/io5';

const certificatesData = [
  {
    id: 0,
    title: "Certificate of Achievement",
    issuer: "S2S Academy - Accenture",
    date: "2025",
    description: "Successfully completed the Skills to Succeed Academy program, showcasing dedication to enhancing job-seeking skills and career readiness",
  },
  {
    id: 1,
    title: "Codefest: Tagisan ng Talino",
    issuer: "STI College - Caloocan",
    date: "2023",
    description: "is an exciting competition that challenges participants to showcase their coding skills, problem-solving abilities, and teamwork in a battle of intellect and innovation",
  },
  {
    id: 2,
    title: "Outstanding Achievement Award",
    issuer: "STI College - Caloocan",
    date: "2023",
    description: "Recognized as the Top 1 Awardee in Object-Oriented Programming for exemplary performance, outstanding dedication, and mastery of advanced programming concepts."
  },
  {
    id: 3,
    title: "Course Completion: Java Foundations",
    issuer: "STI College - Caloocan",
    date: "2022",
    description: "Awarded for successfully completing the Java Foundations course, demonstrating a solid understanding of core programming concepts and practices."
  },
  {
    id: 3,
    title: "Course Completion: System Administration",
    issuer: "STI College - Caloocan",
    date: "2022",
    description: "Awarded for successfully completing the System Administration course, showcasing proficiency in managing and maintaining system operations."
  }
];

const Certifications = () => {
  return (
    <ScrollArea
      type="always"
      offsetScrollbars
      scrollbarSize={8}
      style={{
        width: '100%',
      }}
    >
      <div style={{
        display: 'flex',
        gap: '16px',
        padding: '16px',
      }}>
        {certificatesData.map((cert) => (
          <Paper
            key={cert.id}
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              width: '300px', // Fixed width for each card
              minWidth: '300px', // Prevent shrinking
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.125)'
            }}
            shadow="md"
          >
            <Box
              style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                opacity: 0.2,
                zIndex: 1
              }}
            >
              <IoSparkles size={80} color="white" />
            </Box>

            <Text
              style={{
                fontFamily: 'Albert Sans',
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '12px'
              }}
            >
              {cert.title}
            </Text>

            <Group justify="space-between" style={{ marginBottom: '12px' }}>
              <Text
                style={{
                  fontFamily: 'Albert Sans',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '14px'
                }}
              >
                {cert.issuer}
              </Text>
              <Text
                style={{
                  fontFamily: 'Albert Sans',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '12px'
                }}
              >
                {cert.date}
              </Text>
            </Group>

            <Text
              style={{
                fontFamily: 'Albert Sans',
                color: 'rgba(255,255,255,0.8)',
                fontSize: '14px',
                lineHeight: 1.5,
                flexGrow: 1
              }}
            >
              {cert.description}
            </Text>
          </Paper>
        ))}
      </div>
    </ScrollArea>
  );
};

export default Certifications;