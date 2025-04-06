import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import { join } from 'path'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors:false});
  
  app.enableCors({creditionals:true, origin:true })

  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  const config = new DocumentBuilder()
  .setTitle('Cats example')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
const documentFactory = () => SwaggerModule.createDocument(app, config);
SwaggerModule.setup('swagger', app, documentFactory, {
  swaggerOptions:{
    persistAuthorization:true
  }
});

  await app.listen( 7777);
}
bootstrap();
