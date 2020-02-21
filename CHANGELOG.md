# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).
This change log adheres to standards from [Keep a CHANGELOG](http://keepachangelog.com).

## [Unreleased]
### Added
- Readme and change log

### Changed
- Turned on rule for JSX quotes preferring double quotes
- Turned on rule disabling usage of await inside a loop
- Simplified import ordering rules to require 2 groups instead of alphabetized sorting
- Overridden camelcase rule by TypeScript specific rule to support generic type naming convention

### Removed
- Support for plain JS (including Babel parser) and Flow
- Support for Node.js older than 10.13.0

### Fixed
- Invalid definition of optional peer dependencies
