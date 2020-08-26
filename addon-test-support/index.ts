// Resolve from the root of a project reference
export { value as addonReexport } from 'ts-composite-addon';

// Resolve from a nested dir in a project reference
export { nestedAddonModuleB as nestedAddonReexport } from 'ts-composite-addon/dir/nested-module';

// Resolve an absolute import within this subproject
export { nestedTestSupportB as testSupportReexport } from 'ts-composite-addon/test-support/dir/nested-module';

// Export a local value
export const testValue = 'hi';
