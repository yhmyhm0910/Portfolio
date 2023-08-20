import js_logo from 'assets/img/portfolio/skills/js_logo.png'
import html_logo from 'assets/img/portfolio/skills/html_logo.png'
import typescript_logo from 'assets/img/portfolio/skills/typescript_logo.png'
import react_logo from 'assets/img/portfolio/skills/react_logo.png'
import nodejs_logo from 'assets/img/portfolio/skills/nodejs_logo.png'
import bash_logo from 'assets/img/portfolio/skills/bash_logo.png'
import sql_logo from 'assets/img/portfolio/skills/sql_logo.png'
import python_logo from 'assets/img/portfolio/skills/python_logo.png'
import flask_logo from 'assets/img/portfolio/skills/flask_logo.png'
import aws_logo from 'assets/img/portfolio/skills/aws_logo.png'
import azuresql_logo from 'assets/img/portfolio/skills/azuresql_logo.png'
import docker_logo from 'assets/img/portfolio/skills/docker_logo.png'
import firebase_logo from 'assets/img/portfolio/skills/firebase_logo.png'

type RowObj = {
	name: object | string;
	progress: number;
};

export const Language: RowObj[] = [
	{
		name: [html_logo, 'HTML/CSS'],
		progress: 90,
	},
	{
		name: [js_logo, 'JavaScript'],
		progress: 90,
	},
	{
		name: [typescript_logo, 'TypeScript'],
		progress: 90,
	},
	{
		name: [python_logo, 'Python'],
		progress: 80,
	},
	{
		name: [sql_logo, 'SQL'],
		progress: 80,
	},	
	{
		name: [bash_logo, 'Bash/Zsh'],
		progress: 80,
	},	
];

export const Library: RowObj[] = [
	{
		name: [react_logo, 'ReactJS'],
		progress: 90,
	},
	{
		name: [nodejs_logo, 'NodeJS'],
		progress: 90,
	},
	{
		name: [flask_logo, 'Flask'],
		progress: 70,
	}
];

export const Tools: RowObj[] = [
	{
		name: [aws_logo, 'AWS S3'],
		progress: 80,
	},
	{
		name: [azuresql_logo, 'Azure SQL'],
		progress: 80,
	},
	{
		name: [firebase_logo, 'Firebase'],
		progress: 80,
	},
	{
		name: [docker_logo, 'Docker'],
		progress: 70,
	}
];
