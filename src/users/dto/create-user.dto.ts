import { IsBoolean, IsEmail, IsOptional, IsString, MinLength } from "class-validator"


export class CreateUserDto {
  @IsString()
  @MinLength(3)
  firstName: string;
  
  @IsString()
  @MinLength(3)
  lastName: string;
  
  @IsBoolean()
  @IsOptional()
  isDeleted?: boolean;
  
  @IsString()
  @IsOptional()
  @MinLength(10)
  phone?: string;
  
  @IsString()
  @IsOptional()
  address?: string;
  
  @IsString()
  @IsEmail()
  @IsOptional()
  email?: string;
}
