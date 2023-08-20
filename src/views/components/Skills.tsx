import { forwardRef } from 'react';
// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import ComplexTable from 'views/default/components/ComplexTable';
import { Language, Library, Tools } from 'views/default/variables/Skill';

type Props = any
// Assets
const Skills = forwardRef<HTMLDivElement, Props>((props, ref) => {
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	const bgColor = useColorModeValue("white", "#101C44")
	const cardShadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'unset');
	return (
		<Card paddingTop='0' marginTop='1vh' boxShadow={cardShadow} ref={ref ? ref : null}>

        <Text color={textColorPrimary}
        fontWeight='bold' 
        fontSize='3xl' 
        marginTop='2vh'
        mb='4px' 
        position='sticky' 
        top='0'
        zIndex={1}
        bgColor={bgColor}>
            Skills
        </Text>
			<ComplexTable tableData={Language} title='Programming, Scripting, and Markup Languages'/>
			<ComplexTable tableData={Library} title='Libraries and Frameworks'/>
			<ComplexTable tableData={Tools} title='Other Tools'/>
		</Card>
	);
}) 

export default Skills