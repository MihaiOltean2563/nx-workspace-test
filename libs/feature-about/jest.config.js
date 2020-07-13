module.exports = {
  name: 'feature-about',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/feature-about',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
