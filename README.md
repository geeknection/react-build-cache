# react-build-cache
Clean reactjs cache in build version
## Getting started

`npm install react-build-cache -g`

## Usage

After your generate build files just execute npm react-build-cache

## How its works
When a new build is generated, reactjs to improve the process of generating a new build checks the project files and generates only those files that have been modified based on the previous build.
When publishing the project on a server, whether due to the browser or some CDN, even clearing the cache, it may happen that the user continues with an old version of the project on the device.
To solve this problem, I developed a very simple lib.
At the end of the build, using the fs library, I check the linkeds files in the index.html that is located inside the build folder, and add a version code to the links. This will cause both the browser and the CDN to update the website cache.