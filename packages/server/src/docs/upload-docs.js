const S3 = require('aws-sdk/clients/s3');
const uuid = require('uuid/v4');

const generateUrls = ({s3Instance}) => async ({body}) => {
	const documentsReferenceId = uuid();
	const urls = body.reduce(
		(accumulated, fileName) => ({
			...accumulated,
			[fileName]: s3Instance.getSignedUrl('putObject', {
				Bucket: process.env.S3_BUCKET,
				Key: `${documentsReferenceId}/${fileName}`,
				Expires: 120
			})
		}),
		{}
	);

	return {statusCode: 200, body: {documentsRefId: documentsReferenceId, urls}};
};

/**
 * @swagger
 * definitions:
 *   documentList:
 *     type: array
 *     items: { type: string }
 *   uploadUrls:
 *     type: object
 *     properties:
 *       documentsRefId: { type: string }
 *       urls:
 *         type: object
 *         additionalProperties: { type: string, format: url }
 */

/**
 * @swagger
 * /upload_urls:
 *   options:
 *     responses:
 *       200:
 *         description: 200 CORS response
 *     x-amazon-apigateway-integration:
 *       uri:  ${upload_urls_lambda_arn}
 *       passthroughBehavior: when_no_match
 *       httpMethod: POST
 *       contentHandling: CONVERT_TO_TEXT
 *       type: AWS_PROXY
 *   post:
 *     description: Generates a list of signed urls to use uploading candidate documents
 *     consumes: [ application/json ]
 *     parameters:
 *     - in: body
 *       description: The list of filenames that are to be uploaded
 *       required: true
 *       schema: { $ref: "#/definitions/documentList" }
 *     produces: [ application/json ]
 *     responses:
 *       200:
 *         description: Collection of file to url mappings and a document id
 *         schema: { $ref: "#/definitions/uploadUrls" }
 *       415:
 *         $ref: "#/responses/Standard415ErrorResponse"
 *       500:
 *         $ref: "#/responses/Standard500ErrorResponse"
 *     x-amazon-apigateway-integration:
 *       uri: ${upload_urls_lambda_arn}
 *       passthroughBehavior: when_no_match
 *       httpMethod: POST
 *       contentHandling: CONVERT_TO_TEXT
 *       type: AWS_PROXY
 */
exports.post = lambdaGlue({
	init: () => ({
		s3Instance: new S3({
			signatureVersion: 'v4'
		})
	}),
	handler: generateUrls
});
