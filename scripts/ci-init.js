#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const createReportDirectory = root =>
	fs.readdirSync(root).forEach(projectDirectory => {
		mkdirp(path.resolve(root, projectDirectory, 'reports', 'eslint'));
		mkdirp(path.resolve(root, projectDirectory, 'reports', 'ava'));
	});

createReportDirectory('..');
createReportDirectory('packages/client');
// CreateReportDir('packages/server')
// createReportDir('packages/libs')
