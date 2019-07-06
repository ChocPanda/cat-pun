# This module will create aws lambda functions and bind them to endpoints in api gateway.
# The created lambda uses the function specified in the lambda_source_file with
# the matching http method name.

data "archive_file" "zip" {
  type        = "zip"
  source_file = "${var.lambda_source_dir}/${var.lambda_source_file}"
  output_path = "${var.lambda_source_dir}/${replace(var.lambda_source_file, ".js", ".zip")}"
}

resource "aws_lambda_function" "get" {
  # count controls if lambda gets created, only methods specified in the input methods[] should be created
  count            = "${contains(var.methods,"GET")? 1 : 0}"
  filename         = "${data.archive_file.zip.output_path}"
  function_name    = "${var.app_name}-${replace(var.lambda_source_file, ".js", "")}-get-${terraform.workspace}"
  role             = "${var.lambda_role_arn}"
  handler          = "${replace(var.lambda_source_file, ".js", "")}.get"
  source_code_hash = "${data.archive_file.zip.output_base64sha256}"
  memory_size      = "${var.lambda_memory_size}"
  memory_size      = "${var.lambda_timeout}"
  runtime          = "nodejs8.10"

  environment {
    variables = "${var.lambda_env_vars}"
  }

  tags = {
    workspace = "${terraform.workspace}"
    app_name  = "${var.app_name}"
  }
}

resource "aws_lambda_function" "post" {
  # count controls if lambda gets created, only methods specified in the input methods[] should be created
  count            = "${contains(var.methods,"POST")? 1 : 0}"
  filename         = "${data.archive_file.zip.output_path}"
  function_name    = "${var.app_name}-${replace(var.lambda_source_file, ".js", "")}-post-${terraform.workspace}"
  role             = "${var.lambda_role_arn}"
  handler          = "${replace(var.lambda_source_file, ".js", "")}.post"
  source_code_hash = "${data.archive_file.zip.output_base64sha256}"
  memory_size      = "${var.lambda_memory_size}"
  memory_size      = "${var.lambda_timeout}"
  runtime          = "nodejs8.10"

  environment {
    variables = "${var.lambda_env_vars}"
  }

  tags = {
    workspace = "${terraform.workspace}"
    app_name  = "${var.app_name}"
  }
}

resource "aws_lambda_function" "put" {
  # count controls if lambda gets created, only methods specified in the input methods[] should be created
  count            = "${contains(var.methods,"PUT")? 1 : 0}"
  filename         = "${data.archive_file.zip.output_path}"
  function_name    = "${var.app_name}-${replace(var.lambda_source_file, ".js", "")}-put-${terraform.workspace}"
  role             = "${var.lambda_role_arn}"
  handler          = "${replace(var.lambda_source_file, ".js", "")}.put"
  source_code_hash = "${data.archive_file.zip.output_base64sha256}"
  memory_size      = "${var.lambda_memory_size}"
  memory_size      = "${var.lambda_timeout}"
  runtime          = "nodejs8.10"

  environment {
    variables = "${var.lambda_env_vars}"
  }

  tags = {
    workspace = "${terraform.workspace}"
    app_name  = "${var.app_name}"
  }
}

resource "aws_lambda_function" "delete" {
  # count controls if lambda gets created, only methods specified in the input methods[] should be created
  count            = "${contains(var.methods,"DELETE")? 1 : 0}"
  filename         = "${data.archive_file.zip.output_path}"
  function_name    = "${var.app_name}-${replace(var.lambda_source_file, ".js", "")}-delete-${terraform.workspace}"
  role             = "${var.lambda_role_arn}"
  handler          = "${replace(var.lambda_source_file, ".js", "")}.delete"
  source_code_hash = "${data.archive_file.zip.output_base64sha256}"
  memory_size      = "${var.lambda_memory_size}"
  memory_size      = "${var.lambda_timeout}"
  runtime          = "nodejs8.10"

  environment {
    variables = "${var.lambda_env_vars}"
  }

  tags = {
    workspace = "${terraform.workspace}"
    app_name  = "${var.app_name}"
  }
}

resource "aws_lambda_permission" "delete_permission" {
  count         = "${contains(var.methods,"DELETE")? 1 : 0}"
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = "${aws_lambda_function.delete.arn}"
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${var.api_gateway_execution_arn}/*/*/*"
}

resource "aws_lambda_permission" "put_permission" {
  count         = "${contains(var.methods,"PUT")? 1 : 0}"
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = "${aws_lambda_function.put.arn}"
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${var.api_gateway_execution_arn}/*/*/*"
}

resource "aws_lambda_permission" "get_permission" {
  count         = "${contains(var.methods,"GET")? 1 : 0}"
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = "${aws_lambda_function.get.arn}"
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${var.api_gateway_execution_arn}/*/*/*"
}

resource "aws_lambda_permission" "post_permission" {
  count         = "${contains(var.methods,"POST")? 1 : 0}"
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = "${aws_lambda_function.post.arn}"
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${var.api_gateway_execution_arn}/*/*/*"
}
