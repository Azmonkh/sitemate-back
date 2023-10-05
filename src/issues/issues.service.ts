import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Issue } from './entities/issue.entity';
import { Repository } from 'typeorm';
import { ResponseStruct } from 'src/util/response.schema';

@Injectable()
export class IssuesService {
  
  constructor(
    @InjectRepository(Issue) private issueRepo: Repository<Issue>
  ) {}

  async findAll() : Promise<ResponseStruct> {
    const issues = await this.issueRepo.find()

    return {
        statusCode: HttpStatus.OK,
        data: issues
    }
  }

  async findOne(id: string): Promise<ResponseStruct> {
      const result = await this.issueRepo.findOne({ where: { id } })

      return {
          statusCode: HttpStatus.OK,
          data: result
      }
  }

  async update(id: string, data: CreateIssueDto): Promise<ResponseStruct> {
      const argz = await this.issueRepo.update(id, data)

      return {
          statusCode: HttpStatus.OK,
          data: argz
      }
  }

  async remove(id: string): Promise<ResponseStruct> {
      const argz = await this.issueRepo.delete(id)

      return {
          statusCode: HttpStatus.OK,
          data: argz
      }
  }
  async create(createIssueDto: CreateIssueDto) : Promise<ResponseStruct> {
    const data = await this.issueRepo.save(createIssueDto);

    return {
      statusCode: HttpStatus.CREATED,
      data: data
    }
  }
}
