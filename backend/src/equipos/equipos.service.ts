import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipo } from './entities/equipo.entity';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
 
@Injectable()
export class EquiposService {
  constructor(
    @InjectRepository(Equipo)
    private readonly equiposRepo: Repository<Equipo>,
  ) {}
 
  findAll() {
    return this.equiposRepo.find({ order: { id: 'DESC' } });
  }
 
  async findOne(id: number) {
    const equipo = await this.equiposRepo.findOneBy({ id });
    if (!equipo) {
      throw new NotFoundException('Equipo no encontrado');
    }
    return equipo;
  }
 
  create(dto: CreateEquipoDto) {
    const equipo = this.equiposRepo.create(dto);
    return this.equiposRepo.save(equipo);
  }
 
  async update(id: number, dto: UpdateEquipoDto) {
    const equipo = await this.findOne(id);
    Object.assign(equipo, dto);
    return this.equiposRepo.save(equipo);
  }
 
  async remove(id: number) {
    const equipo = await this.findOne(id);
    await this.equiposRepo.remove(equipo);
    return { mensaje: 'Equipo eliminado correctamente', id };
  }
}

