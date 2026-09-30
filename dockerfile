# Stage 1: Build WAR using Maven
FROM maven:3.9.9-eclipse-temurin-8 AS build

WORKDIR /app

# Copy Maven configuration
COPY pom.xml .

# Download dependencies
RUN mvn dependency:go-offline

# Copy application source
COPY src ./src

# Build WAR
RUN mvn clean package -DskipTests


# Stage 2: Run WAR using Tomcat
FROM tomcat:9.0-jdk8

# Remove default Tomcat applications
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy generated WAR from Maven stage
COPY --from=build /app/target/primevideo.war \
    /usr/local/tomcat/webapps/primevideo.war

EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]
