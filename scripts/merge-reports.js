#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const merger = require('junit-report-merger');

const { argv } = require('yargs').option('reporter', {
	alias: 'r',
	describe: 'The reports to aggregate, in this project valid options are [ava, eslint]'
});

const getReportDirectory = root =>
	fs
		.readdirSync(root)
		.map(projectDirectory =>
			path.resolve(root, projectDirectory, 'reports', argv.reporter, 'test-results.xml')
		)
		.filter(reportDirectory => fs.existsSync(reportDirectory));

const clientReportFolders = getReportDirectory(path.resolve('packages/client'));
// Const serverReportFolders = getReportDir(path.resolve('packages/server'));
// const libReportFolders = getReportDir(path.resolve('packages/lib'));

const reportDirectories = [
	...clientReportFolders
	// ...serverReportFolders,
	// libReportFolders
];

console.log('Merging', reportDirectories);
merger.mergeFiles(path.resolve('reports', argv.reporter, 'test-reports.xml'), reportDirectories);
