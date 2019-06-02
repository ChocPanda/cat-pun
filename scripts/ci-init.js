#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const createReportDir = root =>
	fs.readdirSync(root).forEach(projectDir => {
		mkdirp(path.resolve(root, projectDir, 'reports', 'xo'));
		mkdirp(path.resolve(root, projectDir, 'reports', 'ava'));
	});

createReportDir('..');
createReportDir('packages/client');
// CreateReportDir('packages/server')
// createReportDir('packages/libs')
