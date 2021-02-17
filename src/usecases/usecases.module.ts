import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { DatabaseModule } from 'src/infra/database/database.module';
import { CreateProductMapper } from './product-use-case/create-product/create-product-mapper';
import { CreateProductController } from './product-use-case/create-product/create-product.controller';
import { DeleteProductController } from './product-use-case/delete-product/delete-product.controller';
import { GetProductListMapper } from './product-use-case/get-product-list/get-product-list-mapper';
import { GetProductListController } from './product-use-case/get-product-list/get-product-list.controller';
import { GetProductMapper } from './product-use-case/get-product/get-product-mapper';
import { GetProductController } from './product-use-case/get-product/get-product.controller';
import { UpdateProductMapper } from './product-use-case/update-product/update-product-mapper';
import { UpdateProductController } from './product-use-case/update-product/update-product.controller';
/* PLOP_INJECT_IMPORT */
import { CustomerUseCaseModule } from './customer-use-case/customer-use-case.module';
@Module({
    imports: [
        CommonModule,
        DatabaseModule,
        /* PLOP_INJECT_MODULE */
		CustomerUseCaseModule,
     ],
    controllers: [
        CreateProductController,
        GetProductListController,
        DeleteProductController,
        UpdateProductController,
        GetProductController,
    ],
    providers: [
        CreateProductMapper, 
        GetProductListMapper,
        GetProductMapper,
        UpdateProductMapper,

        
    ],
})
export class UsecasesModule {}