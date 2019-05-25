/**
 * Jest会自动找到项目中所有使用.spec.js或.test.js文件命名的测试文件并执行，
 * 通常我们在编写测试文件时遵循的命名规范：测试文件的文件名 = 被测试模块名 + .test.js，
 * 例如被测试模块为functions.js，那么对应的测试文件命名为functions.test.js。
 */

import functions from '../src/functions';

test('sum(2 + 2) equals 4',  () => {
    expect(functions.sum(2, 2)).toBe(4);
})