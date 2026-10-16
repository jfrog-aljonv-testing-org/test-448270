provider "aws" {
  region = "us-east-1"
}

resource "aws_db_instance" "example" {
  allocated_storage    = 45
  engine             = "mysql"
  engine_version     = "8.0"
  instance_class     = "db.t2.micro"
  name               = "exampledb"
  username           = "admin"
  password           = "SuperSecretPassword123!"  # WARNING: Exposed Password
  parameter_group_name = "default.mysql8.0"
  skip_final_snapshot = true
}

output "db_instance_endpoint" {
  value = aws_db_instance.example.endpoint
}
