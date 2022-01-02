import { Module } from "@nestjs/common";
import { AppController } from "./app.controler";

@Module({
  controllers: [AppController],
})
export class AppModule {}
