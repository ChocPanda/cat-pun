const test = require('ava');
const sinon = require('sinon');

const S3 = require('aws-sdk/clients/s3');
const uuid = require('node-uuid');

const { post } = require('../upload-docs');

const createRequest = body => ({
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify(body)
});

test.before(t => {
	const sandbox = sinon.createSandbox()

	sandbox.stub(uuid, 'v4').callsFake(() => testId);
	sandbox.stub(S3.prototype, 'getSignedUrl').callsFake((_unused, { Key }) => `http://upload-test/${Key}`);

	t.context.sandbox = sandbox
})

test.after(t => {
	t.context.sandbox.restore();
});

const testId = 'application-id';

test('Upload docs - create Application ID and upload url', async t => {
	const request = createRequest(['my-cv.pdf']);
	const { statusCode, body } = await post(request);

	t.deepEqual(statusCode, 200);
	t.deepEqual(
		body,
		JSON.stringify({ applicationId: testId, urls: { 'my-cv.pdf': `http://upload-test/application-id/my-cv.pdf` } })
	);
});

test('Upload docs - create Application ID and upload url supporting multiple file upload', async t => {
	const request = createRequest(['my-cv.pdf', 'my-cover-letter.pdf', 'something-else.pdf']);
	const { statusCode, body } = await post(request);

	t.deepEqual(statusCode, 200);
	t.deepEqual(
		body,
		JSON.stringify({
			applicationId: testId,
			urls: {
				'my-cv.pdf': 'http://upload-test/application-id/my-cv.pdf',
				'my-cover-letter.pdf': 'http://upload-test/application-id/my-cover-letter.pdf',
				'something-else.pdf': 'http://upload-test/application-id/something-else.pdf'
			}
		})
	);
});
