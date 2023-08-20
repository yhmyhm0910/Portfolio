// Chakra imports
import { Text, useColorModeValue, Flex, Box } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import { useState, useRef } from 'react';
// Assets
import CommonHeader from './CommonHeader'
import react_logo from 'assets/img/portfolio/skills/react_logo.png'
import typescript_logo from 'assets/img/portfolio/skills/typescript_logo.png'
import chakra_logo from 'assets/img/portfolio/skills/chakra_logo.png'
import aws_logo from 'assets/img/portfolio/skills/aws_logo.png'
import css_logo from 'assets/img/portfolio/skills/css_logo.png'
import TechUsed from './TechUsed';

export default function Portfolio(props: { [x: string]: any }) {
	const { ...rest } = props;
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white')
    const [isVisible, setIsVisible] = useState<boolean>(true)

	const headerRef = useRef<HTMLDivElement>(null);

	const handleClick = () => {
		if (headerRef.current) {
			headerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	return (
		<Card paddingTop='0' {...rest}>
			<div ref={headerRef}/>
            <CommonHeader 
			title='Portfolio Website' 
			smallTitle='Now you are watching it! 👻' 
			isVisible={isVisible} 
			setIsVisible={setIsVisible}
			style={{position: 'sticky', top:'0', zIndex:1, marginTop:'2vh'}}
			handleClick={handleClick}/>
			<Box 
			color={textColorPrimary} 
			fontSize='l' 
			paddingLeft='2vw' 
			paddingRight='2vw' 
			paddingTop='1vh' 
			style={isVisible ?  {display: 'inline-block'} :  {display: 'none'}}>
				
			<Flex paddingTop='1vh' flexDirection='column' gap='2vh'>
				<Box>
					<TechUsed logo={react_logo} name='ReactJS' bgColor='#222222' textColor='white'/>
					<TechUsed logo={typescript_logo} name='TypeScript' bgColor='#2D79C7' textColor='white'/>
					<TechUsed logo={aws_logo} name='AWS S3' bgColor='#ebebeb' textColor='black'/>
					<TechUsed logo={chakra_logo} name='Chakra-UI' bgColor='#62C9CB' textColor='white'/>
					<TechUsed logo={css_logo} name='CSS' bgColor='#09729B' textColor='white'/>
				</Box>

				<Text>
					Github Repo: [to be uploaded]
				</Text>
			</Flex>	

            
			</Box>

				
		</Card>
	);
}
