/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';

function VideoCard({ videoSrc, title, description }) {
  return (
    <Box w="300px" h="400px">
      <Box
        w="100%"
        h="100%"
        borderRadius="12px"
        borderWidth="4px"
        borderColor="#972626"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        overflow="hidden"
        bgColor="#000000"
        bgImage="linear-gradient(-45deg, #000000 25%, transparent 25%, transparent 50%, #000000 50%, #000000 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        display="flex"
        flexDirection="column"
      >
        <Box w="100%" h="70%">
          <video
            src={videoSrc}
            controls
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '12px 12px 0 0',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box p={3} textAlign="center" bgColor="#F8F8F8" h="30%">
          <Text fontSize="xl" fontWeight="semibold" color="#000000" fontFamily="'Roboto', system-ui">
            {title}
          </Text>
          <Text mt={2} fontSize="lg" fontWeight="800" color="#38393d" fontFamily="'Roboto', system-ui">
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function HoopsFilm() {
  const videos = [
    {
      videoSrc: "../video1.mp4",
      title: "Dance Highlights",
      description: "Ava's dance performance highlights",
    },
    {
      videoSrc: "../video8.mp4",
      title: "Theater Highlights",
      description: "Ava's highlights from her theater performances",
    },
    {
      videoSrc: "../video2.mp4",
      title: "Dance Practice Vidoes",
      description: "Ava practicing ballet dance techniques",
    },
    {
      videoSrc: "../video2.mp4",
      title: "Dance Practice Videos 2",
      description: "Ava practicing contemporary/jazz dance techniques ",
    }
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
      <Text fontSize="3xl" fontWeight="light" color="#ebebeb" fontFamily="'Libre+Baskerville', system-ui">
        Dance Videos
      </Text>
      <SimpleGrid columns={columns} spacing={{ base: 3, sm: 5 }} justifyItems="center">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            videoSrc={video.videoSrc}
            title={video.title}
            description={video.description}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default HoopsFilm;
