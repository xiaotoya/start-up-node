import { ApiProperty } from '@nestjs/swagger';
import { RESP_CODE, RESP_STATUS } from 'src/global/enums/response';

export class ResponseDto<T> {
  @ApiProperty({
    type: Number,
    description: '业务状态码',
    default: RESP_CODE.OK,
  })
  code: number;

  @ApiProperty({
    type: String,
    description: '业务信息',
    default: RESP_STATUS.SUCCESS,
  })
  msg: string;

  @ApiProperty({ description: '业务数据' })
  data?: any;

  @ApiProperty({ type: Number, description: '时间戳'})
  timestamp: number;
  constructor(code: number, message: string, data: T, timestamp: number) {
    this.code = code;
    this.msg = message;
    this.data = data;
    this.timestamp = timestamp;
  }
}