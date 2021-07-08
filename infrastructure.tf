terraform {
  backend "s3" {
    bucket         = "chocpanda.cat-pun.terraform-state"
    dynamodb_table = "chocpanda.cat-pun.terraform-locks"
    key            = "cat-pun/terraform.tfstate"
    region         = "eu-west-1"
  }
}

provider "archive" {
  version = "~> 1.2.0"
}

provider "aws" {
  region  = "${var.aws_region}"
  version = ">= 2.18.0"
}

provider "local" {
  version = ">= 1.3.0"
}

provider "template" {
  version = ">= 2.1.2"
}

variable "aws_region" {
  default = "eu-west-1"
}

variable "app_name" {
  default = "cat-pun"
}