export class CreateUserDto {
  readonly userName: string;
  readonly password: string;
  readonly twitter?: string;
  readonly gitHub?: string;
  readonly linkedin?: string;
  readonly facebook?: string;
  readonly instagram?: string;
  readonly photo?: string;
}
