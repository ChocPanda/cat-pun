#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const merger = require('junit-report-merger');

const { argv } = require('yargs').option('reporter', {
	alias: 'r',
	describe:
		'The reports to aggregate, in this project valid options are [ava, xo]'
});

const getReportDir = root =>
	fs
		.readdirSync(root)
		.map(projectDir =>
			path.resolve(
				root,
				projectDir,
				'reports',
				argv.reporter,
				'test-results.xml'
			)
		)
		.filter(reportDir => fs.existsSync(reportDir));

const clientReportFolders = getReportDir(path.resolve('packages/client'));
// Const serverReportFolders = getReportDir(path.resolve('packages/server'));
// const libReportFolders = getReportDir(path.resolve('packages/lib'));

const reportDirs = [
	...clientReportFolders
	// ...serverReportFolders,
	// libReportFolders
];

console.log('Merging', reportDirs);
merger.mergeFiles(
	path.resolve('reports', argv.reporter, 'test-reports.xml'),
	reportDirs
);
