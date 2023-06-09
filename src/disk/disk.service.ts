import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    console.log('Drawaing 20 Watts of power from Power Service');
    this.powerService.supplyPower(20);
    return 'data!';
  }
}
