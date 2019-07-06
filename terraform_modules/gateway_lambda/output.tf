# element(concat(...,list()),0) is used as the http method might not be
# be created depending on the module input (methods[]) which will not
# create the corresponding lambda; this ensures when the aws_lambda is not
# defined for the http method empty string is returned
output "get_invoke_arn" {
  value = "${element(concat(aws_lambda_function.get.*.invoke_arn,list("")),0)}"
}

output "post_invoke_arn" {
  value = "${element(concat(aws_lambda_function.post.*.invoke_arn,list("")),0)}"
}

output "delete_invoke_arn" {
  value = "${element(concat(aws_lambda_function.delete.*.invoke_arn,list("")),0)}"
}

output "put_invoke_arn" {
  value = "${element(concat(aws_lambda_function.put.*.invoke_arn,list("")),0)}"
}
