import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Body, Controller, HttpException, HttpStatus, Inject, Param, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IProductService } from "src/infra/database/product/i.product.service";
import { ProductEntity } from "src/infra/database/product/product.entity";
import { UpdateProductRequest } from "./update-product-request";

@ApiTags('products')
@Controller('products')
export class UpdateProductController {
    constructor(
        @Inject('IProductService') private readonly productService: IProductService,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Put(':id')
    async execute(@Param('id') id: string, @Body() request: UpdateProductRequest): Promise<void> {
        const isExists = await this.productService.isExistsById(id);
        if(!isExists)
            throw new HttpException('Product Not Found',HttpStatus.BAD_REQUEST);
            
        const product = this.mapper.map(request, ProductEntity, UpdateProductRequest);
        product.setId(id);
        await this.productService.updateById(id, product);
    }
}