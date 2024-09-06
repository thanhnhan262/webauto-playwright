#!/bin/bash
tagString=" search,  about , contact"
echo $tagString
spaceRemovedTag=${tagString//\ /}
tags='"''@'${spaceRemovedTag//\,/\|\@}'"'
echo ${tags}

projectsString=" chromium, firefox "
spaceRemoveProjects=${projectsString//\ /}
project='--project='${spaceRemoveProjects//\,/ --project=}
cmd="ENV=stage npx playwright test ./projects/library --grep "$tags" "$project""
echo $cmd
eval $cmd

