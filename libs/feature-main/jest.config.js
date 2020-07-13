module.exports = {
  name: 'feature-main',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/feature-main',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
