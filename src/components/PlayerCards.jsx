/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

function Card({ frontImg, bio, flipSound }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    flipSound.play();
    setFlipped(!flipped);
  };

  return (
    <Box w="300px" h="400px" perspective="1000px" mb="10px">
      <Box
        w="100%"
        h="100%"
        position="relative"
        style={{ transformStyle: 'preserve-3d' }}
        transition="transform 0.6s"
        transform={flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
        onClick={handleFlip}
      >
        <Box
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        >
          <Box
            bgImage={`url(${frontImg})`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="12px"
          borderColor="#972626"
          borderWidth="4px"
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          ></Box>
        </Box>
        <Box
          bgColor="#F8F8F8"
          bgImage="linear-gradient(-45deg, #ebebeb 25%, transparent 25%, transparent 50%, #ebebeb 50%, #000000 75%, transparent 75%, transparent)"
          bgSize="1px 1px;"
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          borderColor="#972626"
          borderWidth="4px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          transform="rotateY(180deg)"
          p={5}
        >
          {/* <Text fontSize="2xl" fontWeight="bold" color="#ebebeb" fontFamily="'Libre+Baskerville', system-ui">
            {name}
          </Text> */}
          <Text mt={4} color="#000000" fontFamily="'Libre+Baskerville', system-ui" fontSize="2xl" fontWeight="400" textAlign="center">
          {bio}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function PlayerCards() {
  const flipSound = new Audio('/card-flip.mp3');

  const players = [
    {
      frontImg: "../dancer-placeholder2.png",
      name: "Ava Castillo",
      bio: "Ava Castillo has been dancing competitively for 6 years."
    },
    {
      frontImg: "../dancer-placeholder2.png",
      name: "Ava Castillo",
      bio: "Ava Castillo is a skilled choreographer, choreographing multiple dance performances for her team."
    },
    {
      frontImg: "../dancer-placeholder2.png",
      name: "Ava Castillo",
      bio: "Ava Castillo has a strong foundation in ballet, contemporary, and jazz."
    },
    {
      frontImg: "../dancer-placeholder2.png",
      name: "Ava Castillo",
      bio: "Ava Castillo shows captivating stage presence and energy when she performs."
    },
    {
      frontImg: "../dancer-placeholder2.png",
      name: "Ava Castillo",
      bio: "Ava Castillo possesses exceptional flexibility and control."
    },
    {
      frontImg: "../dancer-placeholder2.png",
      name: "Ava Castillo",
      bio: "Ava Castillo is disciplined and focused at every rehearsal."
    },
    {
      frontImg: "../dancer-placeholder2.png",
      name: "Ava Castillo",
      bio: "Ava Castillo won Best Solo at the 2023 Regional Dance Competition."
    },
    {
      frontImg: "../dancer-placeholder2.png",
      name: "Ava Castillo",
      bio: "Ava Castillo has performed in multiple large theater productions and dance plays."
    },
  ];

  const columns = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3, xl: 4 });

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={{ base: 5, md: 10 }}
      bgImage="url('/basketball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={{ base: 12, md: 16 }} 
      mb={{ base: 12, md: 16 }} 
    >
      <Text fontSize="3xl" fontWeight="300" color="#ebebeb" fontFamily="'Libre+Baskerville', system-ui">
        Dance Cards    
      </Text>
      <Text fontSize="xl" fontWeight="400" color="#ebebeb" fontFamily="'Libre+Baskerville', system-ui">
        Click on a card to read more about Ava
        </Text>

      <SimpleGrid
        columns={columns}
        spacing={{ base: 3, sm: 5 }} 
        justifyItems="center"
      >
        {players.map((player, index) => (
          <Card 
            key={index} 
            frontImg={player.frontImg} 
            name={player.name} 
            bio={player.bio}
            flipSound={flipSound} 
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default PlayerCards;
