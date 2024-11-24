import { Modal, Text, TextInput, Textarea, Button, Box } from '@mantine/core';
import React, { useState } from 'react';

function EmailModal({ opened, close }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto URL with form data
    const mailtoUrl = `mailto:angelestblnt.iii@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    
    // Open Gmail in new window
    window.location.href = mailtoUrl;
    // Or use window.open(mailtoUrl, '_blank'); to open in new tab
    
    close();
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Modal
      opened={opened}
      onClose={close}
      size="md"
      centered
      styles={{
        header: {
          backgroundColor: '#262626',
        },
        content: {
          backgroundColor: '#262626',
        },
        body: {
          padding: '24px',
        },
        close: {
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        },
      }}
    >
      <Box 
        component="form" 
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <Text
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '8px',
            fontFamily: 'Albert Sans',
          }}
        >
          Send me a message
        </Text>

        <TextInput
          label="Name"
          required
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          styles={{
            label: {
              color: '#737373',
              fontFamily: 'Albert Sans',
              marginBottom: '8px',
            },
            input: {
              backgroundColor: '#262626',
              borderColor: '#737373',
              color: 'white',
              '&:focus': {
                borderColor: 'white',
              },
            },
          }}
        />

        <TextInput
          label="Email"
          required
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          styles={{
            label: {
              color: '#737373',
              fontFamily: 'Albert Sans',
              marginBottom: '8px',
            },
            input: {
              backgroundColor: '#262626',
              borderColor: '#737373',
              color: 'white',
              '&:focus': {
                borderColor: 'white',
              },
            },
          }}
        />

        <TextInput
          label="Subject"
          required
          value={formData.subject}
          onChange={(e) => handleChange('subject', e.target.value)}
          styles={{
            label: {
              color: '#737373',
              fontFamily: 'Albert Sans',
              marginBottom: '8px',
            },
            input: {
              backgroundColor: '#262626',
              borderColor: '#737373',
              color: 'white',
              '&:focus': {
                borderColor: 'white',
              },
            },
          }}
        />

        <Textarea
          label="Message"
          required
          minRows={4}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          styles={{
            label: {
              color: '#737373',
              fontFamily: 'Albert Sans',
              marginBottom: '8px',
            },
            input: {
              backgroundColor: '#262626',
              borderColor: '#737373',
              color: 'white',
              '&:focus': {
                borderColor: 'white',
              },
            },
          }}
        />

        <Button
          type="submit"
          style={{
            backgroundColor: '#737373',
            color: 'white',
            marginTop: '12px',
            fontFamily: 'Albert Sans',
            '&:hover': {
              backgroundColor: '#262626',
              borderColor: 'white',
            },
          }}
        >
          Send Message
        </Button>
      </Box>
    </Modal>
  );
}

export default EmailModal;