// Chakra imports
import { Icon, Flex, Button, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import { AiFillFilePdf } from 'react-icons/ai';
const resume_pdf = require('assets/pdf/FinalPoster_19060016d.pdf')

// Assets
export default function GeneralInformation(props: { [x: string]: any }) {
	const { ...rest } = props;
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	//const textColorSecondary = 'gray.400';
	const cardShadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'unset');

	const handleOpenLocalPdf = () => {
		// Open the local PDF in a new tab
		window.open(resume_pdf, '_blank');
	  };

	return (
		<Card marginTop='1vh' boxShadow={cardShadow} {...rest}>
			<Text color={textColorPrimary} fontWeight='bold' fontSize='3xl' mt='10px' mb='4px' >
				About Me
			</Text>
			<Text color={textColorPrimary} fontSize='l' mb='2vh' marginRight='2vw'>
				I am a M.Eng Computer Engineering student from the University of Guelph. Finished my undergraduate EE degree back in Hong Kong, I come to Canada for a new start of my software engineering career. 
				<br/><br/>
				In Hong Kong, Electrical Engineering graduates mostly work in constructions where I am not interested after experiencing a construction-related internship. Interested in coding, I started self-learning different computer languages and technologies for my new career. You can view what I have learnt and done here!
				<br/><br/>
			</Text>
			<Button height='5vh' alignSelf='end' marginRight='1vw' onClick={handleOpenLocalPdf}>
				<Flex gap='0.5vw' justifyItems='center' alignItems='center'>
					<Icon as={AiFillFilePdf} boxSize={6}/>
					VIEW MY RESUME
				</Flex>
			</Button>
		</Card>
	);
}
