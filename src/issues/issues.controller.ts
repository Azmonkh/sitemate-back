import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { IssuesService } from './issues.service';
import { CreateIssueDto } from './dto/create-issue.dto';
import { validate } from 'class-validator';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('issues')
export class IssuesController {
  constructor(private readonly issuesService: IssuesService) {}

  @ApiOperation({
    summary: 'Issue create API'
  })
  @ApiResponse({
      status: HttpStatus.CREATED,
  })
  @Post()
  create(@Body() createIssueDto: CreateIssueDto) {
    validate(createIssueDto).then(registerError => {
      return registerError;
  })
    return this.issuesService.create(createIssueDto);
  }

  @ApiOperation({
    summary: 'List issues'
  })
  @ApiResponse({
      status: HttpStatus.OK
  })
  @Get()
  findAll() {
    return this.issuesService.findAll();
  }

  @ApiOperation({
    summary: 'Get issue by id'
  })
  @ApiResponse({
      status: HttpStatus.OK
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.issuesService.findOne(id);
  }

  @ApiOperation({
    summary: 'Update issue'
  })
  @ApiResponse({
      status: HttpStatus.OK
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIssueDto: CreateIssueDto) {
    return this.issuesService.update(id, updateIssueDto);
  }

  @ApiOperation({
    summary: 'Delete issue'
  })
  @ApiResponse({
      status: HttpStatus.OK
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.issuesService.remove(id);
  }
}
