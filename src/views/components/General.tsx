// Chakra imports
import { Link, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card'

// Assets
export default function GeneralInformation(props: { [x: string]: any }) {
	const { ...rest } = props;
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	//const textColorSecondary = 'gray.400';
	const cardShadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'unset');

	const scrollToProjects = () => {
		const element = document.getElementById('Projects');
		if (element) {
		  element.scrollIntoView({ behavior: 'smooth' });
		}
	  };

	return (
		<Card marginTop='1vh' boxShadow={cardShadow} {...rest}>
			<Text color={textColorPrimary} fontWeight='bold' fontSize='3xl' mt='10px' mb='4px' >
				About Me
			</Text>
			<Text color={textColorPrimary} fontSize='l' mb='2vh' marginRight='2vw'>
				Innovative and detail-oriented M.Eng Computer Engineering student at the University of Guelph, I bring a solid foundation in software development, strong problem-solving skills, and a dedication to continuous learning. Proven ability to work collaboratively in fast-paced environments and deliver high-quality code within project deadlines.
				<br/><br/>
				You can find my software projects details and video demostrations down&nbsp;
				<span  style={{textDecoration: 'underline', fontWeight: 'bold', cursor: 'pointer'}} onClick={scrollToProjects}>
					here
				</span>
				!
			</Text>
		</Card>
	);
}
