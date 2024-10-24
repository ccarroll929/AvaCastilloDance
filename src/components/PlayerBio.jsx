import { Box, Text, VStack, Heading, Grid , Flex} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box); 

function PlayerProfile() {
  const player = {
    frontImg: "avaphoto.png",
    name: "", 
    paragraph: "Ava Castillo is a passionate and dedicated high school dancer with a dream of gracing the Broadway stage. With over [X years] of intensive dance training in ballet, jazz, tap, contemporary, and musical theater, Ava Castillo has developed a well-rounded skill set that complements a deep love for storytelling through movement. Currently a senior at [School Name], Ava Castillo has earned recognition for standout performances in productions such as [Insert Notable Performance] and [Insert Notable Performance]. With a strong work ethic and a desire to constantly push creative boundaries, Ava Castillo regularly trains with top-tier choreographers and attends masterclasses with industry professionals to refine technique and expand versatility.",
    bioCategories: [
      { title: "Class", description: "YYYY" },
      { title: "Height", description: "X'X\"" },
      { title: "Weight", description: "X lbs" },
      { title: "Date of Birth", description: "M DD, YYYY" },
      { title: "Place of Birth", description: "City, State" },
      { title: "High School", description: "High School Name" },
      { title: "Dance Team", description: "Team Name" },
      { title: "GPA", description: "Enter GPA"}
    ],
  };

  return (
    <VStack
      spacing={8}
      p={6}
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={12} 
    >
      <Heading fontSize="3xl" fontWeight="light" color="#ebebeb" fontFamily="'Libre+Baskerville', system-ui">
        {player.name}
      </Heading>  
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="center">
      {/* <Box
        w={{ base: '90%', md: '400px' }}
        h="500px" 
        minW="350px"
        borderRadius="12px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        overflow="hidden"
      > */}
        <MotionBox
          w={{ base: '90%', md: '450px' }}
          minH="700px"
          minW="370px"
          m="5"
          p={6}
          bgImage={`url(${player.frontImg})`} 
          bgSize="cover"
          bgPosition="center"
          borderRadius="12px"
          borderColor="#972626"
          borderWidth="4px" 
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }} 
        >
      </MotionBox>
      <MotionBox
        w={{ base: '90%', md: '450px' }}
        minH="700px"
        minW="370px"
        m="5"
        bgColor="#ebebeb"
        bgImage="linear-gradient(-45deg, #ebebeb 25%, transparent 25%, transparent 50%, #ebebeb 50%, #ebebeb 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        borderRadius="12px"
        borderWidth="5px"
        borderColor="#972626"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.9, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }} 
      >
        <Grid gap={2}>
          {player.bioCategories.map((category, index) => (
            <Box key={index} p={3} bgColor="transparent" borderRadius="8px">
              <Text color="#000000" fontFamily="'Libre+Baskerville', system-ui" fontSize="xl" fontWeight="bold">
                {category.title}
              </Text>
              <Text color="#000000" fontFamily="'Libre+Baskerville+Condensed', system-ui" fontSize="lg" mt={1}>
                {category.description}
              </Text>
            </Box>
          ))}
        </Grid>
      </MotionBox>
      </Flex>
      <Box bgColor="#ebebeb" padding="50px" borderRadius="12px" borderColor="#972626" borderWidth="5px" minW="380px" maxW="950px">
        <Text fontSize="lg" color="#000000" fontWeight="semibold" fontFamily="'Libre+Baskerville', system-ui" lineHeight="2.5">
          {player.paragraph}
        </Text>
      </Box>
    </VStack>
    
  );
}

export default PlayerProfile;
