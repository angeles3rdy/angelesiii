import { Box, Text } from '@mantine/core'
import React from 'react'

function Recog({ text, name, position }) {
  return (
    <div>
      <Box style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Text
          style={{
            fontFamily: "Albert Sans",
            fontWeight: '400',
            color: "white",
            fontSize: '18.5px',
            lineHeight: '1.6'
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </Text>

        <Box style={{ marginTop: 'auto', paddingTop: '24px' }}>
          <Text
            style={{
              fontFamily: "Albert Sans",
              fontWeight: '800',
              color: "white",
            }}
          >
            Lorem Omsim
          </Text>
          <Text
            style={{
              fontFamily: "Albert Sans",
              fontWeight: '500',
              color: "white"
            }}
          >
            Someone who helped me somewhere
          </Text>
        </Box>
      </Box>
    </div>
  )
}

export default Recog