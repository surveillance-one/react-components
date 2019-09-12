#!/bin/bash
rsync -r --no-whole-file --exclude='/node_modules' --exclude='/.git' ./ ../react-components-mirror