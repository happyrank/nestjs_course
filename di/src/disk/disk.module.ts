import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  // Now anything inside our DiskModule can import anything that gets
  // exported from PowerModule
  imports: [PowerModule],
  providers: [DiskService],
  exports: [DiskService],
})
export class DiskModule {}
