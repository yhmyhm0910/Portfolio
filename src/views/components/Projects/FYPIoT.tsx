// Chakra imports
import { Text, useColorModeValue, Flex, Box, Image } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import { useState, useRef } from 'react';
// Assets
import CommonHeader from './CommonHeader'
import system_architecture from 'assets/img/portfolio/projects/fyp/system_architecture.png'
import TechUsed from './TechUsed';
import python_logo from 'assets/img/portfolio/skills/python_logo.png'
import js_logo from 'assets/img/portfolio/skills/js_logo.png'
import css_logo from 'assets/img/portfolio/skills/css_logo.png'
import github_logo from 'assets/img/portfolio/skills/github_logo.png'
import chartjs_logo from 'assets/img/portfolio/skills/chartjs_logo.png'
import azuresql_logo from 'assets/img/portfolio/skills/azuresql_logo.png'
const fyp_demo = require('assets/img/portfolio/projects/fyp/fyp_demo.mp4')
const fyp_trend_case = require('assets/img/portfolio/projects/fyp/trendAnalysis_case.mp4')
const fyp_trend_attribute = require('assets/img/portfolio/projects/fyp/trendAnalysis_attribute.mp4')

export default function CanTone(props: { [x: string]: any }) {
	const { ...rest } = props;
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	/*const textColorSecondary = 'gray.400';
	const cardShadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'unset');
    const iconColor = useColorModeValue('brand.500', 'white');*/
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
			title='4. IoT Maintenance on Railway Point Machines' 
			smallTitle='Undergraduate Final-year Project' 
			isVisible={isVisible} 
			setIsVisible={setIsVisible}
			style={{position: 'sticky', top:'0', zIndex:1, marginTop:'2vh'}}
			id='project-IoT-Railway'
			handleClick={handleClick}/>
			<Box color={textColorPrimary} fontSize='l' paddingLeft='2vw' paddingRight='2vw' paddingTop='1vh' style={isVisible ?  {display: 'inline-block'} :  {display: 'none'}}>

				<Flex  flexDirection='column' gap='1vh'>
					<Box>
						<TechUsed logo={js_logo} name='JavaScript' bgColor='#F7E018' textColor='black'/>
						<TechUsed logo={chartjs_logo} name='ChartJS' bgColor='#E7E9ED' textColor='black'/>
						<TechUsed logo={azuresql_logo} name='Azure SQL' bgColor='#0279D6' textColor='white'/>
						<TechUsed logo={python_logo} name='Python' bgColor='#19225e' textColor='white'/>
						<TechUsed logo={github_logo} name='Python-Eel' bgColor='#3A3A3A' textColor='white'/>
						<TechUsed logo={css_logo} name='CSS' bgColor='#09729B' textColor='white'/>
					</Box>
				</Flex>

				<Text paddingTop='1vh'>
					This project implements IoT to the maintenance of railway point machines by Motor Current Signature Analysis (MCSA) with trend analysis function. <br/><br/>
				
					GitHub Repo (client side): <a style={{textDecoration: 'underline'}} href="https://github.com/yhmyhm0910/UG_FinalYearProject-client">https://github.com/yhmyhm0910/UG_FinalYearProject-client</a> <br/>
					GitHub Repo (Raspberry Pi side): <a  style={{textDecoration: 'underline'}} href="https://github.com/yhmyhm0910/UG_FinalYearProject-RaspberryPi">https://github.com/yhmyhm0910/UG_FinalYearProject-RaspberryPi</a>
				</Text>

				<Flex paddingTop='3vh' flexDirection='column' gap='1vh'>
					<Text fontSize='xl' fontWeight='bold'>
						Video Demos
					</Text>	
					<Box >
						<Text fontWeight='bold'>Normal operation.</Text>
						<video muted controls style={{width: '40vw'}}>
							<source src={fyp_demo} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</Box>
					<Box>
						<Text fontWeight='bold'>Point machine trend analysis by attributes.</Text>
						<video muted controls style={{width: '40vw'}}>
							<source src={fyp_trend_attribute} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</Box>
					<Box>
						<Text fontWeight='bold'>Point machine trend analysis by cases.</Text>
						<video muted controls style={{width: '40vw'}}>
							<source src={fyp_trend_case} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</Box>
				</Flex>
				<Flex paddingTop='3vh' flexDirection='column' gap='1vh'>
					<Text fontSize='xl' fontWeight='bold'>
						System Architecture
					</Text>	
					<Image src={system_architecture} height='35vh' width='45vw'/>
				</Flex>

			</Box>
				
		</Card>
	);
}
