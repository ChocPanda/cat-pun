variable "lambda_env_vars" {
  type = "map"
}

variable "app_name" {
  type = "string"
}

variable "front_end_url" {
  type = "string"
}

variable "lambda_source_file" {
  type = "string"
}

variable "lambda_source_dir" {
  type = "string"
}

variable "lambda_role_arn" {
  type = "string"
}

variable "methods" {
  type = "list"
}

variable "api_gateway_execution_arn" {
  type = "string"
}

variable "lambda_memory_size" {
  default = 256
}

variable "lambda_timeout" {
  default = 300
}
