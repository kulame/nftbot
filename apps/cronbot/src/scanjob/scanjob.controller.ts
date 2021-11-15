import { Controller } from '@nestjs/common';
import { ScanjobService } from './scanjob.service';

@Controller()
export class ScanjobController {
  constructor(private readonly scanjobService: ScanjobService) {}
}
