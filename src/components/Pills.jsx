import { Box, Group, Image, Text } from '@mantine/core';
import React from 'react';

function Pills({ icon, name }) {
  return (
    <Box
      style={{
        display: 'inline-flex',
        margin: '6px',
      }}
    >
      <Group
        style={{
          backgroundColor: 'rgba(115, 115, 115, 0.15)',
          backdropFilter: 'blur(8px)',
          padding: '8px 16px',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(115, 115, 115, 0.25)';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(115, 115, 115, 0.15)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        spacing={8}
      >
        <Box style={{
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          opacity: 0.9
        }}>
          <Image
            src={icon}
            style={{ width: 32, height: 32 }}
          />
        </Box>
        <Text
          style={{
            color: 'white',
            fontSize: '16px',
            fontWeight: 500,
            fontFamily: 'Albert Sans',
            letterSpacing: '0.5px',
            opacity: 0.9
          }}
        >
          {name}
        </Text>


      </Group>
    </Box>
  );
}

export default Pills;