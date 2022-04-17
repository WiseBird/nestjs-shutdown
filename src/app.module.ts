import { BeforeApplicationShutdown, Module } from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements BeforeApplicationShutdown {
  async beforeApplicationShutdown(): Promise<void> {
    console.log('Shutting down...');
    await new Promise<void>((resolve) => {
      setTimeout(resolve, 5000);
    });
    console.log('Shutdown complete');
  }
}
