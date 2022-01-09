import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

// Behind the scenes, whenever nest creates an instance of the cpu service,
// it is first going to make sure it creates an instance of the power service,
// and provides it to the cpu construcor. So now in the constructor, we can make use of
// methods that make use of the powerService in someway.
@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) {
    console.log(`Drawing 10 watts of power from Power Service`);
    this.powerService.supplyPower(10);
    return a + b;
  }
}
