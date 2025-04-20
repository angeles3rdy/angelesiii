import { Box, Group, Image, Text } from '@mantine/core';
import React from 'react';
import '../styles/tech-pills.css'

function Pills({ icon, name }) {
  return (
    <Box className="pill-box">
      <Group className="pill-group">
        <Box className="pill-icon">
          <Image src={icon} alt="pill icon" />
        </Box>
        <Text className="pill-text">{name}</Text>
      </Group>
    </Box>
  );
}

export default Pills;
