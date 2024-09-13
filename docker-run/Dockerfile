FROM node:20-bookworm

ENV GITHUB_PAT=""
ENV TEST_PROJECT=""
ENV TEST_ENV="stage"
ENV TEST_TAGS=""
ENV TEST_DEVICES="chromium"

RUN mkdir /app
COPY test_execute.sh /app
RUN chmod +x /app/test_execute.sh
WORKDIR /app
ENTRYPOINT /app/test_execute.sh "$GITHUB_PAT" "$TEST_PROJECT" "$TEST_ENV" "$TEST_TAGS" "$TEST_DEVICES"


