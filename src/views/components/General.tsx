// Chakra imports
import { Link, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card'
import { useState } from 'react';

// Assets
export default function GeneralInformation(props: { [x: string]: any }) {
	const { ...rest } = props;
	const [isHovered, setIsHovered] = useState(true)

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

	const scrollToSkills = () => {
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
			Recent M.Eng Computer Engineering graduate at the University of Guelph with a 3.97 GPA. Proficient in&nbsp; 				
				<span  style={{textDecoration: 'underline', fontWeight: 'bold', cursor: isHovered ? 'pointer' : 'default'}} 
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					onClick={scrollToSkills}>
					these skills
				</span>
			, with experience in developing scalable and maintainable applications. Strong attention to detail, effective communication skills, and a commitment to continuous learning. Eager to contribute to a dynamic team in a junior role.
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
