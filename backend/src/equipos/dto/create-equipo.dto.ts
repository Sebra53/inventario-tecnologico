import {
    IsDateString,
    IsIn,
    IsNotEmpty, 
    IsOptional,
    IsString, 
    Matches, 
    MaxLength, 
    MinLength,
} from 'class-validator';
 
export class CreateEquipoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3, {message: 'codigo Inventario debe tener 3 caracteres como minimo'})
  @MaxLength(50)
  @Matches(/\S/)
  codigoInventario!: string;
 
  @IsString()
  @IsNotEmpty()
  @MinLength(3, {message: 'nombre debe tener 3 caracteres como minimo'})
  @MaxLength(100)
  @Matches(/\S/)
  nombre!: string;
 
  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  @Matches(/\S/)
  tipo!: string;
 
  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  @Matches(/\S/)
  marca!: string;
 
  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  @Matches(/\S/)
  modelo!: string;
 
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @Matches(/\S/)
  ubicacion!: string;
 
  @IsIn(['Disponible', 'En uso', 'Mantención', 'Baja'])
  estado!: string;
 
  @IsDateString({ strict: true })
  @Matches(/^\d{4}-\d{2}-\d{2}$/)
  fechaAdquisicion!: string;
 
  @IsOptional()
  @IsString()
  observaciones?: string;
}
