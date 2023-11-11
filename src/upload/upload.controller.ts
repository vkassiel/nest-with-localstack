import {
  Controller,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        /** 3MB */
        validators: [new MaxFileSizeValidator({ maxSize: 3 * 1024 * 1024 })],
      }),
    )
    file: Express.Multer.File,
  ) {
    await this.uploadService.upload(file.originalname, file.buffer);
  }
}
