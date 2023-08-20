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
import python_logo from 'assets/img/portfolio/skills/python_logo.png'
import huggingface_logo from 'assets/img/portfolio/skills/huggingface_logo.png'
import github_logo from 'assets/img/portfolio/skills/github_logo.png'
import flask_logo from 'assets/img/portfolio/skills/flask_logo.png'
import TechUsed from './TechUsed';

export default function IcloudToDropbox(props: { [x: string]: any }) {
	const { ...rest } = props;
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	//const textColorSecondary = 'gray.400';
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
			title='iCloud Photo to Dropbox (Developing)' 
			smallTitle='Side project for my convenience' 
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
                    <TechUsed logo={huggingface_logo} name='DETR (Object Detection)' bgColor='#FFD21E' textColor='black'/>
					<TechUsed logo={github_logo} name='PyiCloud' bgColor='#3A3A3A' textColor='white'/>
					<TechUsed logo={flask_logo} name='Flask' bgColor='black' textColor='white'/>
                    <TechUsed logo={python_logo} name='Python' bgColor='#19225e' textColor='white'/>
					<TechUsed logo={aws_logo} name='AWS S3' bgColor='#ebebeb' textColor='black'/>
					<TechUsed logo={chakra_logo} name='Chakra-UI' bgColor='#62C9CB' textColor='white'/>
				</Box>

				<Text>
					Since iCloud storage is much expensive than Dropbox storage, I am developing this project to transfer 'desired' photots from times ago to my Dropbox account and delete 'unwanted' photos from my iCloud utilizing object detection AI. 
				</Text>
                <Text>
					GitHub Repo (front-end): [to be uploaded]
                    <br/>
                    GitHub Repo (back-end): [to be uploaded]
				</Text>
			</Flex>	

            
			</Box>

				
		</Card>
	);
}
