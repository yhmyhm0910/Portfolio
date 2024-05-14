import js_logo from 'assets/img/portfolio/skills/js_logo.png'
import html_logo from 'assets/img/portfolio/skills/html_logo.png'
import typescript_logo from 'assets/img/portfolio/skills/typescript_logo.png'
import react_logo from 'assets/img/portfolio/skills/react_logo.png'
import nodejs_logo from 'assets/img/portfolio/skills/nodejs_logo.png'
import bash_logo from 'assets/img/portfolio/skills/bash_logo.png'
import sql_logo from 'assets/img/portfolio/skills/sql_logo.png'
import python_logo from 'assets/img/portfolio/skills/python_logo.png'
import java_logo from 'assets/img/portfolio/skills/java_logo.png'
import aws_logo from 'assets/img/portfolio/skills/aws_logo.png'
import azuresql_logo from 'assets/img/portfolio/skills/azuresql_logo.png'
import docker_logo from 'assets/img/portfolio/skills/docker_logo.png'
import firebase_logo from 'assets/img/portfolio/skills/firebase_logo.png'
import numpy_logo from 'assets/img/portfolio/skills/numpy_logo.png'
import tensorflow_logo from 'assets/img/portfolio/skills/tensorflow_logo.png'
import sklearn_logo from 'assets/img/portfolio/skills/sklearn_logo.png'
import opencv_logo from 'assets/img/portfolio/skills/opencv_logo.png'
import ubuntu_logo from 'assets/img/portfolio/skills/ubuntu_logo.png'
import git_logo from 'assets/img/portfolio/skills/git_logo.png'
import expo_logo from 'assets/img/portfolio/skills/expo_icon.png'

type RowObj = {
	name: object | string;
	progress: number;
};

export const Language: RowObj[] = [
	{
		name: [python_logo, 'Python'],
		progress: 95,
	},
	{
		name: [js_logo, 'JavaScript'],
		progress: 95,
	},
	{
		name: [typescript_logo, 'TypeScript'],
		progress: 95,
	},
	{
		name: [html_logo, 'HTML/CSS'],
		progress: 95,
	},
	{
		name: [java_logo, 'Java'],
		progress: 90,
	},
	{
		name: [sql_logo, 'SQL'],
		progress: 90,
	},	
	{
		name: [bash_logo, 'Bash/Zsh'],
		progress: 90,
	},	
];

export const Library: RowObj[] = [
	{
		name: [react_logo, 'ReactJS'],
		progress: 95,
	},
	{
		name: [react_logo, 'React-Native'],
		progress: 95,
	},
	{
		name: [nodejs_logo, 'NodeJS'],
		progress: 95,
	},
	{
		name: [numpy_logo, 'Numpy'],
		progress: 80,
	},
	{
		name: [tensorflow_logo, 'Tensorflow'],
		progress: 80,
	},
	{
		name: [sklearn_logo, 'Scikit-Learn'],
		progress: 80,
	},
	{
		name: [opencv_logo, 'OpenCV'],
		progress: 80,
	},
];

export const Tools: RowObj[] = [
	{
		name: [ubuntu_logo, 'Ubuntu'],
		progress: 95,
	},
	{
		name: [git_logo, 'Git'],
		progress: 95,
	},
	{
		name: [aws_logo, 'AWS S3'],
		progress: 90,
	},
	{
		name: [firebase_logo, 'Firebase'],
		progress: 90,
	},
	{
		name: [azuresql_logo, 'Azure SQL'],
		progress: 85,
	},
	{
		name: [expo_logo, 'Expo'],
		progress: 85,
	},
	{
		name: [docker_logo, 'Docker'],
		progress: 70,
	}
];
