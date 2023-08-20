// Chakra imports
import { Text, useColorModeValue, Flex, Icon, Box } from '@chakra-ui/react';
// Custom components
import { useState } from 'react';
// Assets
import {
    MdKeyboardArrowUp
} from 'react-icons/md';

// Assets
import '../../../assets/css/Project.css'

interface Props {
    title: string;
    smallTitle?: string;
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
    style?: any;
    handleClick?: Function;
  }

const CommonHeader = (props: Props) => {

	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = 'gray.400';
    const iconColor = useColorModeValue('brand.500', 'white');
    const hoverColor = useColorModeValue('#c4c4c4', '#50588c');
    const bgColor = useColorModeValue("white", "#101C44")

    const [hovered, setHovered] = useState(false);

    
    const style = {
        backgroundColor: hovered ? hoverColor : bgColor,
        transition: 'background-color 0.5s',
        ...(props.style)
    };

    const handleClick = () => {
        props.setIsVisible(prev => !prev)
        if (props.handleClick) {
            props.handleClick()
        }
    }
	return (
        <Box
        cursor='pointer'      
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={style}
        paddingTop='1vh'
        borderRadius='1vw'
        onClick={handleClick}>
            <Flex mb="8px" justifyContent='space-between' align='center'>
                <Box paddingLeft='1vw'>
                    <Flex alignItems='baseline' gap='1vw'>
                        <Text color={textColorPrimary} fontSize='22px' fontWeight='700' lineHeight='100%'>
                            {props.title}
                        </Text>
                        <Text color={textColorSecondary} fontSize='16px'>
                            {props.smallTitle}
                        </Text>
                    </Flex>

                </Box>
                <Box paddingRight='1vw'>
                    <Icon as={MdKeyboardArrowUp} color={iconColor} bgColor='transparent' w='24px' h='24px' className={props.isVisible ?  'up' : 'down'}/> 
                </Box>
            </Flex>
        </Box>
	);
}

export default CommonHeader