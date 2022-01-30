import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { map, Observable } from 'rxjs';

interface ClassConstructor {
  new (...args: any[]): {};
}

function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}

  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    // Run something before a request is handled
    // by the request handler
    // console.log('***1***: \nIm running before the handler', context);

    return handler.handle().pipe(
      map((data: any) => {
        // Run something before the response is sent out
        // console.log('***3***: \nIm running before the response is sent out', data);
        return plainToInstance(this.dto, data, { excludeExtraneousValues: true });
      }),
    );
  }
}

export { Serialize, SerializeInterceptor };
