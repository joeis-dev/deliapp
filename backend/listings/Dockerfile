# Stage 1: Build the Gradle project
FROM gradle:jdk21-corretto-al2023 AS builder

WORKDIR /app

COPY build.gradle settings.gradle ./
COPY gradle ./gradle

RUN gradle dependencies --write-locks

COPY . . 

RUN gradle bootJar

# Stage 2: Run the built JAR
FROM amazoncorretto:21

WORKDIR /app

COPY --from=builder /app/build/libs/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
