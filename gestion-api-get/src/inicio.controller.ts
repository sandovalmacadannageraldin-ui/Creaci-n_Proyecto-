import { Controller, Get } from '@nestjs/common';

@Controller('inicio')
export class InicioController {

  @Get('bienvenida')
  obtenerBienvenida() {
    return {
      mensaje: 'Bienvenido al sistema',
      sistema: 'Gestion API',
      version: '1.0.0'
    };
  }

}