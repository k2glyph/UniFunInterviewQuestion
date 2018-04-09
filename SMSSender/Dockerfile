FROM alpine:latest

RUN apk --update add openjdk8-jre

# RUN apk add mysql mysql-client && \
# 	addgroup mysql mysql && \
# 	mkdir /scripts && \
# 	rm -rf /var/cache/apk/*
 
ENV JAVA_VERSION 8

VOLUME /tmp

# VOLUME ["/var/lib/mysql"]

# COPY ./startup.sh /scripts/startup.sh

# RUN chmod +x /scripts/startup.sh

LABEL "com.unifun"="BackendSMSApi"

ADD /target/BackendSMSApi.jar BackendSMSApi.jar

RUN sh -c 'touch /BackendSMSApi.jar'

# ENTRYPOINT ["/scripts/startup.sh"]

ENTRYPOINT ["java","-jar","/BackendSMSApi.jar"]

