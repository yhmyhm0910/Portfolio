import { Box, Flex, Image, Progress, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable
} from '@tanstack/react-table';
import { useRef, useState } from 'react';

// Custom components
import Card from 'components/card/Card';

// Assets
import '../../../assets/css/ComplexTable.css'
import CommonHeader from 'views/components/Projects/CommonHeader';

type RowObj = {
	name: string;
	progress: number;
};

type Props = {
	tableData: object;
	title: string;
}

const columnHelper = createColumnHelper<RowObj>();

// const columns = columnsDataCheck;
export default function ComplexTable(props: Props) {
	const tableData: any = props.tableData;
	const [ sorting, setSorting ] = useState<SortingState>([]);
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
	let defaultData = tableData;

	const progress_ref = useRef<HTMLDivElement[]>([])
	const tech_ref = useRef<HTMLDivElement[]>([])
    const [isVisible, setIsVisible] = useState<boolean>(true)

	const columns = [
		columnHelper.accessor('name', {
			id: 'name',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					TECHNOLOGY
				</Text>
			),
			cell: (info) => (
				<Flex align='center' gap='1vw'>
					<Image src={info.getValue()[0]} height='3vh'/>
					<Text color={textColor} fontSize='sm' fontWeight='700'>
						{info.getValue()[1]}
					</Text>
				</Flex>
			)
		}),

		columnHelper.accessor('progress', {
			id: 'progress',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					PROFICIENCY
				</Text>
			),
			cell: (info) => (
				<Flex alignItems='center' flexDirection='column' position='relative'>

					<Progress 
					variant='table' 
					colorScheme='brandScheme' 
					alignSelf='center'
					h='8px' 
					w='100%'
					value={info.getValue()} />
					
				</Flex>
			)
		})
	];

	const show_percentage = (div: any) => {
		for (let i = 0; i < tableData.length; i++) {
		  if (`${i}_progress` === div) {
			return <Text color={textColor}>{tableData[i].progress}%</Text>;
		  }
		}
	  
		return <p>Invalid content type.</p>;
	  };

	const [ data, setData ] = useState(() => [ ...defaultData ]);
	const table = useReactTable({
		data,
		columns,
		state: {
			sorting
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		debugTable: true
	});
	return (
		<Card flexDirection='column' w='100%' px='0px' overflowX={{ sm: 'scroll', lg: 'hidden' }}>
					
			<CommonHeader title={props.title} isVisible={isVisible} setIsVisible={setIsVisible}/>

			<Box style={{ display: isVisible ? 'inline-block' : 'none' }}>
				<Table variant='simple' color='gray.500' mb='24px' mt="12px">
					<Thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<Tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<Th
											key={header.id}
											colSpan={header.colSpan}
											pe='10px' 
											borderColor={borderColor}
											cursor='pointer'
											onClick={header.column.getToggleSortingHandler()}>
											<Flex
												justifyContent='space-between'
												align='center'
												fontSize={{ sm: '10px', lg: '12px' }}
												color='gray.400'>
												{flexRender(header.column.columnDef.header, header.getContext())}{{
													asc: '',
													desc: '',
												}[header.column.getIsSorted() as string] ?? null}
											</Flex>
										</Th>
									);
								})}
							</Tr>
						))}
					</Thead>
					<Tbody>
						{table.getRowModel().rows.slice(0, tableData.length).map((row) => {
							return (
								<Tr key={row.id} >
									{row.getVisibleCells().map((cell, index) => {
										return (
											<Td
												className={index%2 === 0 ? 'tech' : 'proficiency'}
												key={cell.id}
												position='relative'
												fontSize={{ sm: '14px' }}
												minW={{ sm: '150px', md: '200px', lg: 'auto' }}
												ref= {index%2 === 0 ? (el) => (tech_ref.current.push(el)) : (el) => (progress_ref.current.push(el))}
												borderColor='transparent'>
												{index=== 1 ? (
													<Box
													style={{
														position: 'absolute',
														top: '0.5vh',
														right: '2vw',
														display: 'inline-block',
														color: textColor,
														backgroundColor:'transparent'
													  }}
													>
													  {show_percentage(cell.id)}
													</Box>
												  ): <></>}
												{flexRender(cell.column.columnDef.cell, cell.getContext())}
											</Td>
										);
									})}
								</Tr>
							);
						})}
					</Tbody>
				</Table>
				
			</Box>
		</Card>
	);
}
 