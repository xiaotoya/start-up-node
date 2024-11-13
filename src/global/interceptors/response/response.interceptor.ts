import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { RESP_STATUS } from 'src/global/enums/response';
import { ResponseDto } from 'src/global/response.dto';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const code = context.switchToHttp().getResponse().statusCode;
        return new ResponseDto(code, RESP_STATUS.SUCCESS, data, Date.now());
      })
    );
  }
}
