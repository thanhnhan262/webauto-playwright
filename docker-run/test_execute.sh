#! /bin/bash

#clone test script from Github
GITHUB_PAT="$1"
TEST_PROJECT="$2"
TEST_ENV="$3"
TEST_TAGS="$4"
TEST_DEVICES="$5"
CLONE_TO="./script"

if [[ -n "$TEST_TAGS" ]]; then
  spaceRemovedTag=${TEST_TAGS//\ /}
  tags='--grep "@'${spaceRemovedTag//,/|\@}'"'
else
  tags=""
fi

if [[ -n "$TEST_DEVICES" ]]; then
  spaceRemovedDevices=${devicesString//\ /}
  devices='--project='${spaceRemovedDevices//\,/ --project=}
else
  devices=""
fi

devicesString="$TEST_DEVICES"
spaceRemovedDevices=${devicesString//\ /}
devices='--project='${spaceRemovedDevices//\,/ --project=}

if [ -d "$CLONE_TO" ]; then
  echo "Directory '$CLONE_TO' already exists. Deleting it..."
  rm -rf "$CLONE_TO"
fi

echo "Cloning repository..."
git clone "https://$GITHUB_PAT@github.com/thanhnhan262/webauto-playwright.git" $CLONE_TO
if [ $? -eq 0 ]; then
  echo "Repository cloned successfully"
else
  echo "Failed to clone repository."
  exit 1
fi

cd "$CLONE_TO"
npm ci
npx playwright install --with-deps
cmd="ENV=$TEST_ENV npx playwright test ./projects/$TEST_PROJECT "$tags" "$devices""
echo $cmd
eval $cmd
