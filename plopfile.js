module.exports = function (plop) {

  plop.setGenerator('CRUD', {
    description: 'Generate CRUD Operation!',
    prompts: [{
      type: 'input',
      name: 'singularName',
      message: 'Enter Usecase Singular name'
    },
    {
      type: 'input',
      name: 'pluralName',
      message: 'Enter Usecase Plural name'
    }],
    actions: [
      {
        type: 'addMany',
        base: '.templates/crud/',
        destination: process.cwd(),
        templateFiles: '.templates/crud/'
      },
      {
        type: 'append',
        path: 'src/use-cases/use-cases.module.ts',
        pattern: `/* PLOP_INJECT_MODULE */`,
        template: `\t\t{{pascalCase singularName}}UseCasesModule,`,
      },
      {
        type: 'append',
        path: 'src/use-cases/use-cases.module.ts',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import { {{pascalCase singularName}}UseCasesModule } from './{{dashCase singularName}}-use-cases/{{dashCase singularName}}-use-cases.module';`,
      },
    ]
  });

  plop.setGenerator('Entity', {
    description: 'Generate Entity Code!',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Enter Entity Name'
    }],
    actions: [
      {
        type: 'addMany',
        base: '.templates/entity/',
        destination: process.cwd(),
        templateFiles: '.templates/entity/'
      },
      {
        type: 'append',
        path: 'src/infrastructure/database/database.module.ts',
        pattern: `/* PLOP_INJECT_MODULE */`,
        template: `\t\t{
              provide:'I{{pascalCase name}}Service',
              useClass:{{pascalCase name}}Service
              },`,
      },
      {
        type: 'append',
        path: 'src/infrastructure/database/database.module.ts',
        pattern: `/* PLOP_EXPORT_MODULE */`,
        template: `\t\t{
              provide:'I{{pascalCase name}}Service',
              useClass:{{pascalCase name}}Service
              },`,
      },
      {
        type: 'append',
        path: 'src/infrastructure/database/database.module.ts',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import { {{pascalCase name}}Service } from './{{dashCase name}}/{{dashCase name}}.service';`,
      },
      {
        type: 'append',
        path: 'src/infrastructure/database/database.module.ts',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import { {{pascalCase name}} } from './{{dashCase name}}/{{dashCase name}}.entity';`,
      },
      {
        type: 'append',
        path: 'src/infrastructure/database/database.module.ts',
        pattern: `/* PLOP_INJECT_ENTITY */`,
        template: `{{pascalCase name}},`,
      },
    ]
  });
};
